import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ patients: 0, experience: 0, satisfaction: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const credentials = [
    'Doctor of Dental Surgery (DDS)',
    'Member of American Dental Association',
    '15+ Years of Experience',
    'Advanced Technology Certified',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const timer = setTimeout(() => {
            animateCounters();
          }, 800);
          return () => clearTimeout(timer);
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

  const animateCounters = () => {
    const targets = { patients: 10000, experience: 15, satisfaction: 99 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        patients: Math.floor(targets.patients * progress),
        experience: Math.floor(targets.experience * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepTime);
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-white px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 
                className={`text-section-heading text-navy mb-4 transition-all duration-600 ${
                  isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Meet Dr. Sarah Johnson
              </h2>
              <p 
                className={`text-xl text-cool-gray mb-6 font-inter transition-all duration-600 ${
                  isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: '0.2s' }}
              >
                Your Trusted Dental Care Partner
              </p>
              <p 
                className={`text-body text-cool-gray leading-relaxed transition-all duration-600 ${
                  isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: '0.4s' }}
              >
                Dr. Johnson has been providing excellent dental care for over 15 years. 
                Our practice focuses on making every patient comfortable while delivering 
                the highest quality dental treatments using modern technology.
              </p>
            </div>

            {/* Credentials */}
            <div 
              className={`transition-all duration-600 ${
                isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: '0.6s' }}
            >
              <ul className="space-y-3">
                {credentials.map((credential, index) => (
                  <li 
                    key={credential}
                    className="flex items-center text-navy font-inter"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-teal rounded-full mr-4"></div>
                    {credential}
                  </li>
                ))}
              </ul>
            </div>

            {/* Statistics */}
            <div 
              className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-600 ${
                isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: '1.0s' }}
            >
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-teal animate-counter">
                  {counters.patients.toLocaleString()}+
                </div>
                <div className="text-small text-cool-gray">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-teal animate-counter">
                  {counters.experience}+
                </div>
                <div className="text-small text-cool-gray">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-teal animate-counter">
                  {counters.satisfaction}%
                </div>
                <div className="text-small text-cool-gray">Patient Satisfaction</div>
              </div>
            </div>
          </div>

          {/* About Image */}
          <div 
            className={`lg:col-span-3 relative transition-all duration-1000 ${
              isVisible ? 'animate-fade-in-right opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-section p-8">
              <div className="bg-primary/10 rounded-xl p-8 text-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary/30 rounded-full flex items-center justify-center">
                    <span className="text-4xl">👩‍⚕️</span>
                  </div>
                </div>
                <h3 className="text-2xl font-poppins font-semibold text-navy mb-4">
                  Dr. Sarah Johnson, DDS
                </h3>
                <p className="text-cool-gray mb-6">
                  Committed to providing exceptional dental care with a gentle, patient-centered approach.
                </p>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-cool-gray italic">
                    "My goal is to help every patient achieve optimal oral health 
                    while feeling comfortable and informed throughout their treatment."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;