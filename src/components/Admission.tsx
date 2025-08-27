import React, { useState } from 'react';
import { FileText, Calendar, CheckCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Admission = () => {
  const [formData, setFormData] = useState({
    childName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  const admissionSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Fill out our online application form with required documents.',
      icon: FileText
    },
    {
      step: 2,
      title: 'Schedule Visit',
      description: 'Book a campus tour and meet with our admission team.',
      icon: Calendar
    },
    {
      step: 3,
      title: 'Assessment',
      description: 'Child assessment and parent interview (age-appropriate).',
      icon: CheckCircle
    },
    {
      step: 4,
      title: 'Enrollment',
      description: 'Complete enrollment process and welcome to  Ventures Early Learning Centre!',
      icon: CheckCircle
    }
  ];

  const requirements = [
    'Birth certificate (copy)',
    'Previous school reports (if applicable)',
    'Immunization records',
    'Recent passport-size photographs (4 copies)',
    'Parent/Guardian ID copies',
    'Proof of residence'
  ];

  const grades = [
    'Baby Class (Age 2-3)',
    'Middle Class (Age 3-4)',
    'Top Class (Age 4-5)',
    'Primary (Age 5-6)'
  ];

  return (
    <section id="admission" className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Information</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the  Ventures Early Learning Centre family! We welcome students who are eager to learn and grow in our nurturing environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Admission Process */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Admission Process</h3>
            <div className="space-y-6">
              {admissionSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Requirements */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Required Documents</h4>
              <ul className="space-y-2">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply Now</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-2">
                  Child's Full Name *
                </label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  required
                  value={formData.childName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                  Parent/Guardian Name *
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  required
                  value={formData.parentName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
                  Grade Applying For *
                </label>
                <select
                  id="grade"
                  name="grade"
                  required
                  value={formData.grade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select Grade</option>
                  {grades.map((grade, index) => (
                    <option key={index} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Tell us about your child's interests, special needs, or any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D6C7B2] text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact Admissions Office</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                 <a href="tel:0200 907934" className="hover:text-black/70">
                <Phone className="w-8 h-8 text-red-600" /></a>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
              <p className="text-gray-600">0200 907934</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <a href="mailto:info@brightstars.ac.ug" className="hover:text-black/70">
                <Mail className="w-8 h-8 text-orange-600" /></a>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <p className="text-gray-600">info@brightstars.ac.ug</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                 <a
    href="https://maps.app.goo.gl/xmGkpV9qbFPCkTw46">
                <MapPin className="w-8 h-8 text-green-600" /></a>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
              <p className="text-gray-600">Kigo-Rd, Lweeza</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <a 
  href="https://time.is/clock">
                <Clock className="w-8 h-8 text-purple-600" />
                </a>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
              <p className="text-gray-600">Mon-Fri: 8AM-4PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;