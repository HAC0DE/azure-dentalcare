import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const AppointmentBooking = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const services = [
    'General Checkup',
    'Teeth Cleaning',
    'Cosmetic Consultation',
    'Emergency Appointment',
    'Other (please specify)'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
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

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate booking process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Appointment Booked!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
        className: "bg-success text-white",
      });
      
      // Reset form
      setFormData({
        service: '',
        date: '',
        time: '',
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      setCurrentStep(1);
    }, 2000);
  };

  const isStepComplete = (step: number) => {
    switch (step) {
      case 1: return formData.service !== '';
      case 2: return formData.date !== '';
      case 3: return formData.time !== '';
      case 4: return formData.name !== '' && formData.phone !== '' && formData.email !== '';
      default: return false;
    }
  };

  return (
    <section 
      id="booking" 
      ref={sectionRef}
      className="py-24 bg-white px-6 md:px-20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-section-heading text-navy mb-4 transition-all duration-600 ${
              isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Book Your Appointment
          </h2>
          <p 
            className={`text-body text-cool-gray transition-all duration-600 ${
              isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Schedule your visit online - it only takes 2 minutes
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    step <= currentStep 
                      ? 'bg-teal text-white' 
                      : isStepComplete(step)
                        ? 'bg-success text-white'
                        : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div 
                    className={`w-12 h-1 mx-2 transition-all duration-300 ${
                      step < currentStep ? 'bg-teal' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div 
          className={`bg-light-gray rounded-2xl p-8 shadow-xl transition-all duration-600 ${
            isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <form onSubmit={handleSubmit}>
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-poppins font-semibold text-navy mb-6">
                  What service do you need?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <label
                      key={service}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                        formData.service === service
                          ? 'border-teal bg-teal/10'
                          : 'border-gray-200 hover:border-teal/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service}
                        checked={formData.service === service}
                        onChange={(e) => handleInputChange('service', e.target.value)}
                        className="mr-3 text-teal"
                      />
                      <span className="font-inter">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date Selection */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-poppins font-semibold text-navy mb-6 flex items-center">
                  <Calendar className="mr-3 h-6 w-6 text-teal" />
                  When would you like to visit?
                </h3>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-4 text-lg"
                />
              </div>
            )}

            {/* Step 3: Time Selection */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-poppins font-semibold text-navy mb-6 flex items-center">
                  <Clock className="mr-3 h-6 w-6 text-teal" />
                  Choose your preferred time
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => handleInputChange('time', time)}
                      className={`p-4 border-2 rounded-lg transition-all duration-300 ${
                        formData.time === time
                          ? 'border-teal bg-teal text-white'
                          : 'border-gray-200 hover:border-teal text-navy'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-poppins font-semibold text-navy mb-6 flex items-center">
                  <User className="mr-3 h-6 w-6 text-teal" />
                  Your contact information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="w-full"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="w-full"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Email Address *
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
                    Special requests (optional)
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full h-24"
                    placeholder="Any special requests or concerns..."
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                type="button"
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                variant="outline"
                className="px-8"
              >
                Previous
              </Button>
              
              {currentStep < 4 ? (
                <Button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!isStepComplete(currentStep)}
                  className="btn-gradient px-8"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={!isStepComplete(4) || isLoading}
                  className="btn-hero px-8"
                >
                  {isLoading ? 'Booking...' : 'Book My Appointment'}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBooking;