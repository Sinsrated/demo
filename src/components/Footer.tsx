import React from 'react';
import { Star, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"


const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Admission', href: '#admission' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' }
  ];

  const programs = [
    'Primary program',
    'Nursery Program',
    'Pre-Kindergarten',
    'Day & Boarding',
    'After School Care',
  
  ];

  return (
    <footer className="bg-gray-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* School Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
               <img 
              src="/logo.png" 
              alt=" Ventures Early Learning Centre" 
              className="w-12 h-12 object-contain "
            />
              <div>
                <h3 className="text-2xl font-bold"> Ventures</h3>
                 <p className="text-orange-400 font-medium">Early Learning centre</p> 
              </div>
              <div className="relative">
                <Star className="w-10 h-10 text-yellow-500 fill-current" />
                <Star className="w-6 h-6 text-red-400 fill-current absolute -top-1 -right-1" />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your journey to excellence in education starts here. We nurture young minds with quality education, 
              creativity, and values that shape tomorrow's leaders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index} className="text-gray-300">
                  {program}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-300 ">Contact Us</h3>
          <p className="flex items-center gap-2 text-gray-300">
           <FaMapMarkerAlt size={22} />
          <a 
          href="https://maps.app.goo.gl/xmGkpV9qbFPCkTw46" 
          target="_blank" 
          rel="noopener noreferrer"
           className="hover:text-white text-gray-300"
          >
           Kigo-Rd, Lweeza
         </a>
          </p>
            <p className="flex items-center gap-2 text-gray-300">
              <FaPhoneAlt size={22} />
               <a href="tel:0200 907934" className="hover:text-white text-gray-300">
                   0756 016850
               </a>
           </p>

                  {/* Email */}
               <p className="flex items-center gap-2 text-gray-300">
                 <FaEnvelope size={22} />
                   <a href="mailto:info@brightstars.ac.ug" className="hover:text-white text-gray-300">
                     info@venturesearlylearningcentre.ac.ug
                    </a>
                 </p>

            {/* School Hours */}
            <div className="mt-6">
              <h5 className="font-semibold text-white mb-2">School Hours</h5>
              <p className="text-gray-300 text-sm">Monday - Friday: 7:00 AM - 5:00 PM</p>
              <p className="text-gray-300 text-sm">Office Hours: 7:30 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025  Ventures Early Learning Centre. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;