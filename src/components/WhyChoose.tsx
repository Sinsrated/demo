import React from 'react';
import { CheckCircle, Star, Users, BookOpen, Heart, Trophy, Clock, Shield, MapPin, Phone, Mail } from 'lucide-react';
import { DiEnvato } from 'react-icons/di';
import { FaMapMarkerAlt } from 'react-icons/fa';

const WhyChoose = () => {
  const reasons = [
    {
      icon: Star,
      title: 'Experienced Faculty',
      description: 'Our qualified teachers bring years of experience and passion for early childhood education.',
      color: 'text-yellow-500 bg-yellow-100'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Well-structured programs covering academics, arts, sports, and character development.',
      color: 'text-red-600 bg-red-100'
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Low student-teacher ratios ensure personalized attention for every child.',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Heart,
      title: 'Nurturing Environment',
      description: 'Safe, caring atmosphere where children feel secure and motivated to learn.',
      color: 'text-pink-600 bg-pink-100'
    },
    {
      icon: Trophy,
      title: 'Proven Results',
      description: 'Consistent academic excellence and successful transitions to top secondary schools.',
      color: 'text-orange-600 bg-orange-100'
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Convenient school hours and after-school programs to support working parents.',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Modern security systems and safety protocols ensure child protection.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: CheckCircle,
      title: 'Modern Facilities',
      description: 'State-of-the-art classrooms, library, playground, and learning resources.',
      color: 'text-indigo-600 bg-indigo-100'
    }
  ];

  return (
    <section id="why-choose" className="py-20 
    bg-[#D6C7B2]/90 
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Ventures Early Learning Centre?</h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for parents seeking quality education for their children.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${reason.color} group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
           <div className="space-y-3 text-center">
  {/* Circle with clickable MapPin */}
  <a
    href="https://maps.app.goo.gl/xmGkpV9qbFPCkTw46"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto hover:bg-yellow-200 transition"
  >
    <MapPin className="w-8 h-8 text-orange-600" />
  </a>

  {/* Text below */}
  <h4 className="font-semibold text-gray-900">Location</h4>
  <p className="text-gray-600">Kigo-Rd, Lweeza</p>
</div>

            <div className="space-y-3">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                 <a href="tel:0200 907934" className="hover:text-black/70">
                  
               
                <Phone className="w-8 h-8 text-orange-600" />
                </a>
              </div>
              <h4 className="font-semibold text-gray-900">Phone</h4>
              <p className="text-gray-600">0756 016850</p>
            </div>
            <div className="space-y-3">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <a href="mailto:info@brightstars.ac.ug" className="hover:text-black/70">
                     
                <Mail className="w-8 h-8 text-green-600" />
                </a>
              </div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p className="text-gray-600">info@venturesearlylearningcentre.ac.ug</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;