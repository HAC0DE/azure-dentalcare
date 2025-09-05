import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const subjects = [
    'General Question',
    'Appointment Request',
    'Insurance Question',
    'Emergency'
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 3:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        className: "bg-success text-white",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Question',
        message: ''
      });
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-light-gray px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-section-heading text-navy mb-4 transition-all duration-600 ${
              isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div 
            className={`space-y-8 transition-all duration-600 ${
              isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            {/* Office Address */}
            <div>
              <h3 className="text-xl font-poppins font-semibold text-navy mb-4 flex items-center">
                <MapPin className="mr-3 h-6 w-6 text-teal" />
                Visit Our Office
              </h3>
              <p className="text-body text-cool-gray">
                123 Dental Care Lane<br />
                Suite 200<br />
                Healthtown, ST 12345
              </p>
            </div>

            {/* Phone Numbers */}
            <div>
              <h3 className="text-xl font-poppins font-semibold text-navy mb-4 flex items-center">
                <Phone className="mr-3 h-6 w-6 text-teal" />
                Call Us
              </h3>
              <div className="space-y-2">
                <p className="text-lg text-teal font-semibold">
                  <a href="tel:+15551234567" className="hover:underline">
                    (555) 123-4567
                  </a>
                </p>
                <p className="text-body text-cool-gray">Main Office</p>
                <p className="text-lg text-teal font-semibold">
                  <a href="tel:+15551234435" className="hover:underline">
                    (555) 123-HELP
                  </a>
                </p>
                <p className="text-body text-cool-gray">Emergency Line</p>
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-xl font-poppins font-semibold text-navy mb-4 flex items-center">
                <Mail className="mr-3 h-6 w-6 text-teal" />
                Email Us
              </h3>
              <p className="text-lg text-teal font-semibold">
                <a href="mailto:info@smilecare.com" className="hover:underline">
                  info@smilecare.com
                </a>
              </p>
            </div>

            {/* Office Hours */}
            <div>
              <h3 className="text-xl font-poppins font-semibold text-navy mb-4 flex items-center">
                <Clock className="mr-3 h-6 w-6 text-teal" />
                Office Hours
              </h3>
              <div className="space-y-2">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-navy font-inter">{schedule.day}:</span>
                    <span className="text-cool-gray">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`bg-white rounded-2xl p-8 shadow-xl transition-all duration-600 ${
              isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Name *
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className="w-full"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Phone
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal"
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Message *
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                  className="w-full h-32"
                  placeholder="How can we help you?"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="btn-hero w-full"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Map */}
          <div 
            className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-600 ${
              isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.6s' }}
          >
            <div className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-teal mx-auto mb-4" />
                <h4 className="text-xl font-poppins font-semibold text-navy mb-2">
                  Find Us Here
                </h4>
                <p className="text-cool-gray">
                  Interactive map would be embedded here<br />
                  showing our exact location
                </p>
                <Button className="btn-gradient mt-4">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;