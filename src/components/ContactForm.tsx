
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  service: z.enum(['residential', 'commercial', 'maintenance', 'repair', 'other']),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'residential',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Reset form status
      setFormStatus('idle');
      
      // Validate form data
      contactSchema.parse(formData);
      
      // Clear all errors
      setErrors({});
      
      // Show loading state
      setIsSubmitting(true);
      
      // Send data to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      // Set success status
      setFormStatus('success');
      
      // Success toast
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you shortly.",
        variant: "default"
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'residential',
      });
      
      // Keep success status for 5 seconds, then reset to idle
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
      
    } catch (error) {
      // Set error status
      setFormStatus('error');
      
      if (error instanceof z.ZodError) {
        // Convert Zod errors to form errors
        const formErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            formErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(formErrors);
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Notification component based on form status
  const FormNotification = () => {
    if (formStatus === 'success') {
      return (
        <div className="mb-6 p-4 border border-green-200 bg-green-50 rounded-md flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
          <div>
            <h4 className="font-medium text-green-800">Message Sent Successfully!</h4>
            <p className="text-sm text-green-600">Thank you for your inquiry. We'll get back to you shortly.</p>
          </div>
        </div>
      );
    }
    
    if (formStatus === 'error') {
      return (
        <div className="mb-6 p-4 border border-red-200 bg-red-50 rounded-md flex items-center">
          <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
          <div>
            <h4 className="font-medium text-red-800">Error Sending Message</h4>
            <p className="text-sm text-red-600">Please check your information and try again.</p>
          </div>
        </div>
      );
    }
    
    return null;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormNotification />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-irrigation-green ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-irrigation-green ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irrigation-green"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irrigation-green"
            required
          >
            <option value="residential">Residential Irrigation</option>
            <option value="commercial">Commercial Irrigation</option>
            <option value="maintenance">System Maintenance</option>
            <option value="repair">Irrigation Repair</option>
            <option value="other">Other Services</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-irrigation-green ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="consent"
          className="h-4 w-4 text-irrigation-green border-gray-300 rounded"
          required
        />
        <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
          I consent to having this website store my information for contact purposes *
        </label>
      </div>

      <Button 
        type="submit"
        className="btn-primary w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
