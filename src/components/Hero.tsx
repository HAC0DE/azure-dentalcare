import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-dental.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center px-6 md:px-20 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 
              className={`text-hero text-navy leading-tight transition-all duration-800 ${
                isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: '0.8s' }}
            >
              Your Beautiful Smile Journey Starts Here
            </h1>
            
            <p 
              className={`text-body text-cool-gray max-w-md transition-all duration-800 ${
                isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: '1.2s' }}
            >
              Modern dental care with a gentle touch. We make visiting the dentist 
              comfortable and stress-free for the whole family.
            </p>

            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-800 ${
                isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: '1.6s' }}
            >
              <Button className="btn-hero text-button">
                Schedule Your Visit
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary text-button"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'animate-fade-in-right opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ animationDelay: '1.0s' }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Modern dental office with friendly dentist and patient"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;