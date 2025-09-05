import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'Dr. Johnson made me feel so comfortable during my visit. The staff is friendly and the office is very clean and modern.',
      rating: 5,
    },
    {
      name: 'Mike R.',
      text: 'I was nervous about getting dental work done, but the team here was amazing. They explained everything and made sure I was comfortable.',
      rating: 5,
    },
    {
      name: 'Jennifer L.',
      text: 'Best dental experience I\'ve ever had! The technology they use is impressive and the results are perfect.',
      rating: 5,
    },
    {
      name: 'Robert K.',
      text: 'My whole family comes here now. Dr. Johnson is great with kids and adults alike. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Lisa T.',
      text: 'Emergency dental care was needed and they saw me right away. Professional and caring service.',
      rating: 5,
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-24 bg-light-gray px-6 md:px-20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-section-heading text-navy mb-4 transition-all duration-600 ${
              isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            What Our Patients Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div 
                    className={`bg-white rounded-2xl p-8 shadow-lg mx-4 text-center transition-all duration-600 ${
                      isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {/* Patient Avatar */}
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-2xl text-white font-poppins font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>

                    {/* Patient Name */}
                    <h4 className="text-xl font-poppins font-semibold text-navy mb-3">
                      {testimonial.name}
                    </h4>

                    {/* Star Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-body text-cool-gray italic leading-relaxed max-w-2xl mx-auto">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentTestimonial 
                  ? 'bg-teal transform scale-125' 
                  : 'bg-cool-gray/30 hover:bg-cool-gray/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;