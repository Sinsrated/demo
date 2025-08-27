import React from 'react';
import { ArrowRight, Star, BookOpen, Users } from 'lucide-react';
import { Link } from 'lucide-react';



const Hero = () => {

  const navItems =[
   { name: 'Admission', href: '#admission' } 
  ];
  
  return (
    <section id="home" className="relative bg-gradient-to-br from-red-200 via-white to-[#D6C7B2] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
                <span className="text-orange-600 font-semibold text-lg">Welcome to Excellence</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
               Ventures Early Learning Centre
                {/* <span className="block text-red-500">Nur & Pri School</span> */}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your journey to excellence in education starts here
              </p>
              <p className="text-lg text-gray-500">
                Nurturing young minds with quality education, creativity, and values that shape tomorrow's leaders.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
             
              <a
                href="#admission"
                className="bg-red-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-500 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-5 h-5" />
              </a>
           
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-indigo-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="w-8 h-8 text-yellow-300" />
                </div>
                <div className="text-2xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Expert Teachers</div>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-8 h-8 text-yellow-500 fill-current" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Years Excellence</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-200 to-[#D6C7B2] rounded-3xl p-8 transform rotate-3 shadow-2xl">
              <div className="bg-gray-300 rounded-2xl p-6 transform -rotate-3">
                <img
                  src="/gallery/photo4.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="Happy children learning"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
              <Star className="w-10 h-10 text-white fill-current" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-red-400 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;