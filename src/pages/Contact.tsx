import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react';
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

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();
  
  // Add SEO metadata
  useEffect(() => {
    document.title = "Contact Us | Texas Best Sprinklers, Drainage and Lighting LLC";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Contact Texas Best Sprinklers, Drainage and Lighting in Fort Worth, TX at (817) 304-7896. Request a free quote for sprinkler installation, drainage solutions, and outdoor lighting services.");
    }
  }, []);

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
  
  // Form submission handler
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      console.log("Form submitted:", data);
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you shortly.",
        variant: "default"
      });
      
      form.reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <HeroSection 
          title="Contact Us" 
          subtitle="Get in touch with our team for a free consultation and quote on your irrigation, drainage, or lighting project"
        />

        {/* Contact Information */}
        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <Phone className="h-10 w-10 mx-auto mb-4 text-irrigation-green" />
                <h3 className="text-xl font-bold mb-2 text-irrigation-blue">Call Us</h3>
                <p className="text-gray-600 mb-4">Our team is available to take your call</p>
                <a href="tel:+18173047896" className="text-xl font-medium text-irrigation-green hover:underline">
                  (817) 304-7896
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <Mail className="h-10 w-10 mx-auto mb-4 text-irrigation-green" />
                <h3 className="text-xl font-bold mb-2 text-irrigation-blue">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us an email and we'll respond promptly</p>
                <a href="mailto:info@texasbestsprinklers.com" className="text-xl font-medium text-irrigation-green hover:underline">
                  info@texasbestsprinklers.com
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <Clock className="h-10 w-10 mx-auto mb-4 text-irrigation-green" />
                <h3 className="text-xl font-bold mb-2 text-irrigation-blue">Business Hours</h3>
                <p className="text-gray-600 mb-4">We're available when you need us</p>
                <p className="text-lg">Monday - Friday: 7AM - 7PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-irrigation-blue">Send Us a Message</h2>
                
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-green-800">Message Sent!</h3>
                    <p className="text-green-700 mb-4">
                      Thank you for contacting Texas Best Sprinklers. Our team will get back to you as soon as possible.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setFormSubmitted(false)}
                      className="mt-2"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="Your email" type="email" {...field} />
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
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Needed</FormLabel>
                            <FormControl>
                              <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                {...field}
                              >
                                <option value="">Select a service</option>
                                <option value="sprinkler-installation">Sprinkler Installation</option>
                                <option value="drainage-solutions">Drainage Solutions</option>
                                <option value="outdoor-lighting">Outdoor Lighting</option>
                                <option value="sprinkler-repair">Sprinkler Repair</option>
                                <option value="lawn-care">Lawn Care</option>
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
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your project or questions" 
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
                        className="bg-irrigation-green hover:bg-irrigation-darkGreen w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                      
                      <FormDescription className="text-center">
                        We respect your privacy and will never share your information.
                      </FormDescription>
                    </form>
                  </Form>
                )}
              </div>
              
              {/* Map and Address */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Embed Google Map */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.5879698749394!2d-97.3141532!3d32.82085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7bb96e1c143f%3A0x3f8fd8a36d28e393!2s10011%20Harmon%20Rd%2C%20Fort%20Worth%2C%20TX%2076177!5e0!3m2!1sen!2sus!4v1682681234560!5m2!1sen!2sus"
                    width="100%" 
                    height="400" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Texas Best Sprinklers map location"
                  ></iframe>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-6 text-irrigation-blue">Our Location</h3>
                  <div className="flex items-start mb-6">
                    <MapPin className="h-6 w-6 text-irrigation-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Texas Best Sprinklers, Drainage and Lighting LLC</p>
                      <p className="text-gray-600">10011 Harmon Rd suite 133, Fort Worth, TX 76177</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-6">
                    <Phone className="h-6 w-6 text-irrigation-green mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Phone</p>
                      <a href="tel:+18173047896" className="text-gray-600 hover:text-irrigation-green">
                        (817) 304-7896
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-irrigation-green mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Email</p>
                      <a href="mailto:info@texasbestsprinklers.com" className="text-gray-600 hover:text-irrigation-green">
                        info@texasbestsprinklers.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
