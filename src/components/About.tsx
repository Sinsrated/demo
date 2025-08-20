import React from 'react';
import { Heart, Target, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Nurturing Care',
      description: 'We provide a loving and supportive environment where every child feels valued and encouraged to grow.'
    },
    {
      icon: Target,
      title: 'Excellence Focus',
      description: 'Our commitment to academic excellence ensures students reach their full potential in all areas of learning.'
    },
    {
      icon: Award,
      title: 'Quality Education',
      description: 'We deliver high-quality education through innovative teaching methods and modern learning resources.'
    },
    {
      icon: Users,
      title: 'Community Spirit',
      description: 'Building strong relationships between students, parents, and teachers creates a thriving learning community.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Bright Stars</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 15 years, we've been dedicated to providing exceptional early childhood and primary education, 
            fostering creativity, critical thinking, and character development in every student.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Bright Stars Nur & Pri School was established with a simple yet powerful vision: 
              to create an educational environment where children could flourish academically, socially, 
              and emotionally. We started with a small group of students and have grown to become one of 
              the most trusted educational institutions in the community.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that every child is unique and deserves personalized attention to unlock their 
              potential. Our experienced educators use innovative teaching methods combined with traditional 
              values to prepare students for future success.
            </p>
            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
              <p className="text-lg font-semibold text-red-800 italic">
                "Your journey to excellence in education starts here"
              </p>
              <p className="text-red-600 mt-2">- Our School Motto</p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/gallery/2024/baby/photo1.jpg?auto=compress&cs=tinysrgb&w=800"
              alt="Students in classroom"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-red-100 to-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                <value.icon className="w-10 h-10 text-red-500" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;