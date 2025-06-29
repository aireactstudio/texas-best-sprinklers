import { NextResponse } from 'next/server';
import { z } from 'zod';
import twilio from 'twilio';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Twilio
const twilioClient = process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN
  ? twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
  : null;

// Email configuration
const EMAIL_CONFIG = {
  // Use Resend's default domain which works without verification
  from: 'chris@aireactstudio.com',
  // Deliver form submissions to the business email
  primaryRecipient: 'sprinkleranddrains@gmail.com',
  // SMS notifications are now handled separately
  smsRecipients: [
    '8179647580@txt.att.net',
    '8173047896@txt.att.net',
  ],
};

// Define the contact form schema for validation
const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }),
  phone: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  message: z.string().min(1, { message: "Message is required" }),
  service: z.string().optional().default('other'), // Accept any string for service type with default
});

// Define type for the validated data
type ContactFormData = z.infer<typeof contactSchema>;

/**
 * Send an SMS notification using Twilio
 */
async function sendSms(to: string, body: string) {
  if (!twilioClient || !process.env.TWILIO_PHONE_NUMBER) {
    console.error('Twilio not configured. Missing credentials or phone number.');
    return { success: false, error: 'Twilio not configured' };
  }

  try {
    const message = await twilioClient.messages.create({
      body,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    });
    
    console.log('SMS sent successfully', { messageId: message.sid });
    return { success: true, messageId: message.sid };
  } catch (error) {
    console.error('Failed to send SMS:', error);
    return { success: false, error };
  }
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    let body;
    try {
      body = await request.json();
      console.log('Incoming form data:', body);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      return NextResponse.json(
        { success: false, message: 'Invalid JSON data' },
        { status: 400 }
      );
    }
    
    // Ensure body is an object with expected properties
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, message: 'Invalid form data format' },
        { status: 400 }
      );
    }
    
    // Validate the form data
    let validatedData;
    try {
      validatedData = contactSchema.parse(body);
    } catch (validationError) {
      console.error('Validation error:', validationError);
      if (validationError instanceof z.ZodError) {
        return NextResponse.json(
          { success: false, message: 'Validation error', errors: validationError.errors },
          { status: 400 }
        );
      }
      throw validationError; // Re-throw if it's not a ZodError
    }
    
    // Format the service type for better readability
    const serviceTypes: Record<string, string> = {
      residential: 'Residential Irrigation',
      commercial: 'Commercial Irrigation',
      maintenance: 'System Maintenance',
      repair: 'Irrigation Repair',
      'irrigation-repair': 'Irrigation Repair',
      'sprinkler-installation': 'Sprinkler Installation',
      'drainage-solutions': 'Drainage Solutions',
      'lighting': 'Outdoor Lighting',
      other: 'Other Services',
    };
    
    const serviceType = serviceTypes[validatedData.service] || validatedData.service;
    
    // Store form data in server logs for backup
    console.log('CONTACT FORM SUBMISSION:', {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      location: validatedData.location,
      service: serviceType,
      message: validatedData.message,
      timestamp: new Date().toISOString()
    });
    
    // Define email content
    const emailText = `
Name: ${validatedData.name}
Email: ${validatedData.email}
Phone: ${validatedData.phone || 'Not provided'}
${validatedData.location ? `Location: ${validatedData.location}\n` : ''}Service Needed: ${serviceType}
Message:
${validatedData.message}
`;

    const emailHtml = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #0c4b33;">New Contact Form Submission</h2>
  <p><strong>Service Requested:</strong> ${serviceType}</p>
  <hr style="border: 1px solid #eee; margin: 20px 0;" />
  
  <h3 style="color: #0c4b33;">Contact Information</h3>
  <p><strong>Name:</strong> ${validatedData.name}</p>
  <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
  <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
  ${validatedData.location ? `<p><strong>Location:</strong> ${validatedData.location}</p>` : ''}
  
  <h3 style="color: #0c4b33;">Message</h3>
  <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0c4b33;">
    ${validatedData.message.replace(/\n/g, '<br />')}
  </p>
  
  <hr style="border: 1px solid #eee; margin: 20px 0;" />
  <p style="color: #666; font-size: 12px;">
    This message was sent from the contact form on the Texas Best Sprinklers website on ${new Date().toLocaleDateString()}.
  </p>
</div>
`;

    // --- Step 1: Send the primary email ---
    console.log(`Sending primary email to ${EMAIL_CONFIG.primaryRecipient}`);
    const emailResult = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: [EMAIL_CONFIG.primaryRecipient], // Send only to the main email address
      replyTo: validatedData.email,
      subject: `New Contact Form Submission: ${serviceType}`,
      text: emailText,
      html: emailHtml,
    });

    // Check for primary email sending errors
    if (emailResult.error) {
      console.error('Error sending primary email with Resend:', emailResult.error);
      return NextResponse.json(
        { success: false, message: 'Failed to send primary email notification.', error: emailResult.error.message },
        { status: 500 }
      );
    }
    console.log('Primary email sent successfully.');

    // --- Step 2: Send SMS notifications via Twilio (non-blocking) ---
    // Construct SMS message body
    const smsBody = `New Lead: ${validatedData.name} (${validatedData.phone || 'No phone'}). Service: ${serviceType}. Email: ${validatedData.email}`;
    
    // Send to first recipient
    if (process.env.SMS_RECIPIENT_1) {
      console.log(`Sending SMS to first recipient: ${process.env.SMS_RECIPIENT_1}`);
      // Fire-and-forget: we don't await this promise
      sendSms(process.env.SMS_RECIPIENT_1, smsBody)
        .then(result => {
          if (!result.success) {
            console.error('Failed to send SMS to first recipient:', result.error);
          } else {
            console.log('SMS sent successfully to first recipient');
          }
        })
        .catch(error => {
          console.error('Exception sending SMS to first recipient:', error);
        });
    }
    
    // Send to second recipient
    if (process.env.SMS_RECIPIENT_2) {
      console.log(`Sending SMS to second recipient: ${process.env.SMS_RECIPIENT_2}`);
      // Fire-and-forget: we don't await this promise
      sendSms(process.env.SMS_RECIPIENT_2, smsBody)
        .then(result => {
          if (!result.success) {
            console.error('Failed to send SMS to second recipient:', result.error);
          } else {
            console.log('SMS sent successfully to second recipient');
          }
        })
        .catch(error => {
          console.error('Exception sending SMS to second recipient:', error);
        });
    }
    
    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    if (error instanceof z.ZodError) {
      // Return validation errors
      return NextResponse.json(
        { success: false, message: 'Validation error', errors: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred', error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
