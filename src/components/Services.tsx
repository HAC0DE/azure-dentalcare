import React, { useEffect, useRef, useState } from 'react';
import { 
  Shield, 
  Sparkles, 
  Star, 
  Activity, 
  Smile, 
  Phone 
} from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Shield,
      title: 'General Dentistry',
      description: 'Comprehensive dental care including routine checkups, preventive treatments, and oral health maintenance for the whole family.',
    },
    {
      icon: Sparkles,
      title: 'Teeth Cleaning',
      description: 'Professional dental cleanings to remove plaque, tartar, and stains while maintaining optimal oral hygiene.',
    },
    {
      icon: Star,
      title: 'Teeth Whitening',
      description: 'Safe and effective whitening treatments to brighten your smile and boost your confidence.',
    },
    {
      icon: Activity,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions using state-of-the-art implant technology for natural-looking results.',
    },
    {
      icon: Smile,
      title: 'Orthodontics',
      description: 'Comprehensive orthodontic treatment including braces and clear aligners to straighten teeth and improve bite.',
    },
    {
      icon: Phone,
      title: 'Emergency Care',
      description: 'Immediate dental care for urgent situations including pain relief, trauma treatment, and emergency procedures.',
    },
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

  return (
    <section 
      id="services" 
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
            Our Dental Services
          </h2>
          <p 
            className={`text-body text-cool-gray transition-all duration-600 ${
              isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Complete dental care for you and your family
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card bg-white rounded-2xl p-8 shadow-lg card-hover transition-all duration-600 ${
                isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${0.4 + index * 0.15}s` }}
            >
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <service.icon className="service-icon h-16 w-16 text-primary" />
                </div>
                <h3 className="text-card-title text-navy mb-4 font-poppins">
                  {service.title}
                </h3>
                <p className="text-body text-cool-gray mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="story-link text-teal font-inter font-semibold text-sm"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;