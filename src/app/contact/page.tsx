'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Check, Lightbulb, Layers } from 'lucide-react';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';

// Form schema - matching the API endpoint schema
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  location: z.string().optional().default(''),
  message: z.string().min(1, { message: "Message is required" }),
  service: z.string().default('General Inquiry')
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();
  
  // Form setup
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    console.log('Submitting contact form data:', data);
    
    try {
      // Send data to the API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      console.log('API response:', result);
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }
      
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll be in touch soon!",
        variant: "default",
      });
      
      setFormSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-irrigation-blue py-16 md:py-24">
        <div className="container-custom text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Have questions about sprinklers, irrigation, drainage, outdoor lighting, or hardscaping?
            We handle the full outdoor scope—so you can keep one team instead of juggling multiple contractors.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-gray-700 mb-8">
              Complete the form below and our team will respond as soon as possible—whether you need irrigation,
              drainage, lighting, hardscaping, or several of the above on one property.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-irrigation-blue/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-irrigation-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-700">(817) 304-7896</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-irrigation-blue/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-irrigation-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-700">sprinkleranddrains@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-irrigation-blue/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-irrigation-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Service Area</h3>
                  <p className="text-gray-700">Fort Worth, TX | Weatherford, TX<br />And surrounding areas</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-irrigation-blue/10 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-irrigation-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Business Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 8am - 6pm<br />Saturday: 9am - 2pm<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-700 mb-6">
                  Your message has been sent successfully. We'll get back to you as soon as possible.
                </p>
                <Button onClick={() => setFormSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Request a Free Quote</h2>

                  <div
                    className="rounded-xl border-2 border-irrigation-blue/25 bg-irrigation-blue/5 p-4 md:p-5"
                    role="region"
                    aria-label="Additional services we offer"
                  >
                    <p className="text-sm font-bold uppercase tracking-wide text-irrigation-darkBlue">
                      More than sprinklers—we do it in-house
                    </p>
                    <p className="mt-2 text-sm text-gray-800 leading-relaxed">
                      Planning irrigation or repairs? Ask us about{' '}
                      <strong className="font-semibold text-gray-900">outdoor lighting</strong> and{' '}
                      <strong className="font-semibold text-gray-900">hardscaping</strong> too. One call covers
                      patios, paths, lighting design, and your sprinkler system—no need to hire separate companies.
                    </p>
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                      <Link
                        href="/services/outdoor-lighting"
                        className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-irrigation-darkBlue shadow-sm ring-1 ring-gray-200 transition hover:bg-irrigation-blue/10 hover:ring-irrigation-blue/30"
                      >
                        <Lightbulb className="h-4 w-4 shrink-0 text-amber-600" aria-hidden />
                        Outdoor lighting services
                      </Link>
                      <span className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-irrigation-darkBlue shadow-sm ring-1 ring-gray-200">
                        <Layers className="h-4 w-4 shrink-0 text-stone-600" aria-hidden />
                        Hardscaping — note it in your message or choose below
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(123) 456-7890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interested Service</FormLabel>
                        <FormControl>
                          <select 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            {...field}
                          >
                            <option value="">Select a service</option>
                            <option value="sprinkler-installation">Sprinkler System Installation</option>
                            <option value="sprinkler-repair">Sprinkler Repair & Maintenance</option>
                            <option value="drainage">Drainage Solutions</option>
                            <option value="lighting">Outdoor Lighting</option>
                            <option value="hardscaping">Hardscaping (patios, paths, walls, etc.)</option>
                            <option value="multiple">Multiple services (irrigation + lighting / hardscape)</option>
                            <option value="other">Other</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide any details about your project..." 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-irrigation-blue hover:bg-irrigation-darkBlue text-white" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
