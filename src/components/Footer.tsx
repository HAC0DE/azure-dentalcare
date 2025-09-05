import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'New Patients', href: '#booking' },
  ];

  const services = [
    { name: 'General Dentistry', href: '#services' },
    { name: 'Cleanings', href: '#services' },
    { name: 'Whitening', href: '#services' },
    { name: 'Implants', href: '#services' },
    { name: 'Orthodontics', href: '#services' },
    { name: 'Emergency', href: '#contact' },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Practice Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-poppins font-bold mb-4 animate-pulse-gentle">
                  SmileCare Dental
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Quality dental care for the whole family. We're committed to making 
                  your dental experience comfortable and stress-free.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-teal mr-3" />
                  <span className="text-gray-300">123 Dental Care Lane, Suite 200</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-teal mr-3" />
                  <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors">
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-poppins font-semibold mb-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 font-inter"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-poppins font-semibold mb-6 text-white">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 font-inter"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-lg font-poppins font-semibold mb-6 text-white">
                Stay Connected
              </h4>
              
              {/* Social Media */}
              <div className="flex space-x-4 mb-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal transition-colors duration-300"
                  aria-label="Google Reviews"
                >
                  <Star className="h-5 w-5" />
                </a>
              </div>

              {/* Newsletter */}
              <div className="space-y-4">
                <p className="text-gray-300 text-sm">
                  Subscribe for dental tips and updates
                </p>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-teal"
                  />
                  <Button className="bg-teal hover:bg-teal/90 text-white px-4">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Emergency Phone */}
              <div className="mt-8 p-4 bg-red-600/20 rounded-lg border border-red-600/30">
                <p className="text-red-400 text-sm font-semibold mb-2">24/7 Emergency</p>
                <a 
                  href="tel:+15551234435" 
                  className="text-white font-semibold hover:text-red-400 transition-colors"
                >
                  (555) 123-HELP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 px-6 md:px-20 py-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm font-inter">
            © 2024 SmileCare Dental. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;