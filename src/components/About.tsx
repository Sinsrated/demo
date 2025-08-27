import React from 'react';
import { Heart, Target, Award, Users, MapPin, Handshake, ShieldCheck, Star, Smile, Compass, Lightbulb, Group, Globe, Circle } from 'lucide-react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

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

  const coreValues = [
    { icon: Handshake, title: 'Respect', description: 'Valuing diversity and treating others with kindness and consideration.' },
    { icon: ShieldCheck, title: 'Responsibility', description: 'Embracing accountability for one’s actions and their impact.' },
    { icon: Star, title: 'Integrity', description: 'Demonstrating honesty, ethics, and adherence to moral principles.' },
    { icon: Target, title: 'Excellence', description: 'Striving for high standards and continuous improvement in all endeavors.' },
    { icon: Smile, title: 'Empathy', description: 'Showing compassion and understanding towards others.' },
    { icon: Compass, title: 'Perseverance', description: 'Embracing challenges and persisting through difficulties.' },
    { icon: Lightbulb, title: 'Creativity', description: 'Encouraging innovation, imagination, and self-expression.' },
    { icon: Group, title: 'Teamwork', description: 'Fostering collaboration, communication, and mutual support among peers.' },
    { icon: Globe, title: 'Inclusivity', description: 'Promoting equity, diversity, and a sense of belonging for all individuals.' },
    { icon: Circle, title: 'Self-Control', description: 'Developing the ability to regulate emotions and impulses, and delay gratification.' },
  ];

  return (
    <section id="about" className="py-20 bg-[#D6C7B2]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About  Ventures</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 15 years, we've been dedicated to providing exceptional early childhood and primary education, 
            fostering creativity, critical thinking, and character development in every student.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
               Ventures Early Learning Centre was established with a simple yet powerful vision: 
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
              src="/gallery/photo3.jpg?auto=compress&cs=tinysrgb&w=800"
              alt=" Ventures students engaged in classroom learning"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="p-6 text-center rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-red-100 to-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-red-500" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
<div className="mb-20 text-center">
  <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Location</h3>

  <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.74870905709!2d32.5825204749656!3d0.3475967996516393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb6f8e1a40c5%3A0x3f4d70c9c65f7e4f!2sKampala-Entebbe%2C%20Kigo-Rd!5e0!3m2!1sen!2sug!4v1693208898423!5m2!1sen!2sug"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <a
    href="https://maps.app.goo.gl/xmGkpV9qbFPCkTw46"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-block bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-200 transition-colors duration-200"
  >
    Open in Google Maps
  </a>
  

                   
  
</div>


        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
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
