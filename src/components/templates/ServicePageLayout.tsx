'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Check, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

interface ServicePageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
  serviceType: string;
}

export default function ServicePageLayout({
  children,
  title,
  description,
  icon,
  image,
  features,
  serviceType
}: ServicePageLayoutProps) {
  const { toast } = useToast();
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
    service: typeof serviceType === 'string' 
      ? serviceType.toLowerCase().replace(/_/g, '-') 
      : String(serviceType).toLowerCase().replace(/_/g, '-')
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Split children into main content and full-width sections
  const childrenArray = React.Children.toArray(children);
  // Main content is the first child (if it's a div)
  const mainContent = childrenArray[0];
  // Full-width sections are any remaining children
  const fullWidthSections = childrenArray.slice(1);
  // Format service type for URL
  const serviceSlug = typeof serviceType === 'string' 
    ? serviceType.toLowerCase().replace(/_/g, '-') 
    : String(serviceType).toLowerCase().replace(/_/g, '-');
    
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Reset form status
      setFormStatus('idle');
      
      // Validate required fields
      if (!formData.name || !formData.email || !formData.message) {
        toast({
          title: "Missing Information",
          description: "Please fill out all required fields.",
          variant: "destructive"
        });
        return;
      }
      
      // Show loading state
      setIsSubmitting(true);
      
      // Make sure service field is set correctly
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone ? formData.phone.trim() : null,
        location: formData.location ? formData.location.trim() : null,
        message: formData.message.trim(),
        service: serviceSlug // Use the service slug from the page
      };
      
      console.log('Submitting form data:', submissionData);
      
      // Send data to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        console.error('Form submission error:', data);
        throw new Error(data.message || 'Something went wrong');
      }
      
      // Set success status
      setFormStatus('success');
      
      // Success toast
      toast({
        title: "Estimate Request Sent!",
        description: "Thank you for your inquiry. We'll get back to you shortly.",
        variant: "default"
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        message: '',
        service: serviceSlug
      });
      
      // Keep success status for 5 seconds, then reset to idle
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
      
    } catch (error) {
      // Set error status
      setFormStatus('error');
      
      console.error('Form submission error:', error);
      
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero/Header */}
      <div
        className="relative h-[75vh] min-h-[500px]"
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          marginTop: 'calc(env(safe-area-inset-top) * -1)'
        }}
      >
        <Image 
          src={image} 
          alt={title} 
          fill
          sizes="100vw"
          priority
          className="object-cover brightness-50"
        />
        {/* Additional dark overlay for more contrast */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center text-white">
            <div className="mb-8 mx-auto h-24 w-24 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
              {icon}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">{title}</h1>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8" />
            <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
              {description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Sidebar */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-irrigation-darkGreen">Request a Free Quote</h3>
                
                {/* Form notification based on status */}
                {formStatus === 'success' && (
                  <div className="mb-4 p-3 border border-green-200 bg-green-50 rounded-md flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <p className="text-sm text-green-700">Your request has been sent successfully!</p>
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="mb-4 p-3 border border-red-200 bg-red-50 rounded-md flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                    <p className="text-sm text-red-700">There was an error sending your request. Please try again.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name*</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irrigation-green"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irrigation-green"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irrigation-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Your Location</label>
                    <select 
                      id="location" 
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irrigation-green"
                    >
                      <option value="">Select your city</option>
                      <option value="fort-worth">Fort Worth</option>
                      <option value="arlington">Arlington</option>
                      <option value="keller">Keller</option>
                      <option value="southlake">Southlake</option>
                      <option value="colleyville">Colleyville</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irrigation-green"
                      placeholder="Please provide details about your service needs..."
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-irrigation-darkGreen hover:bg-irrigation-green text-white font-medium py-2 px-4 rounded-md transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="inline mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Request Free Estimate'
                    )}
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-irrigation-darkGreen">Contact Us</h3>
                <p className="text-gray-700 mb-4">For immediate service or questions:</p>
                <div className="mb-4">
                  <p className="font-bold text-irrigation-darkGreen text-xl">(817) 304-7896</p>
                  <p className="text-gray-700">Monday-Friday: 7am-6pm</p>
                  <p className="text-gray-700">Saturday: 8am-2pm</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email:</p>
                  <a href="mailto:sprinkleranddrains@gmail.com" className="text-irrigation-blue hover:text-irrigation-darkBlue">
                    sprinkleranddrains@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Why Choose Us */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-irrigation-darkGreen">Why Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Licensed & insured professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Quick response times</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Quality parts & workmanship</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Satisfaction guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-irrigation-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Transparent pricing</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right Main Content */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              {/* Features List */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-irrigation-blue">
                  Our {title} Services
                </h2>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-irrigation-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Main content - just the first child */}
              {mainContent}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width sections - any additional children */}
      {fullWidthSections}
    </>
  );
}
