import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      date: '2025-08-15',
      time: '9:00 AM',
      title: 'Open House & School Tour',
      description: 'Visit our campus, meet teachers, and learn about our programs. Perfect for prospective parents.',
      location: 'Main Campus',
      attendees: '50+ families expected',
      category: 'Admission',
      color: 'bg-blue-500'
    },
    {
      date: '2025-08-22',
      time: '10:00 AM',
      title: 'Science Fair 2025',
      description: 'Students showcase their innovative science projects and experiments.',
      location: 'School Auditorium',
      attendees: 'All students & parents',
      category: 'Academic',
      color: 'bg-green-500'
    },
    {
      date: '2025-09-01',
      time: '2:00 PM',
      title: 'Parent-Teacher Conference',
      description: 'Individual meetings to discuss student progress and development.',
      location: 'Classrooms',
      attendees: 'Parents & Teachers',
      category: 'Meeting',
      color: 'bg-orange-500'
    },
    {
      date: '2024-09-08',
      time: '11:00 AM',
      title: 'International Women\'s Day Celebration',
      description: 'Special assembly celebrating achievements of women in various fields.',
      location: 'School Grounds',
      attendees: 'All students',
      category: 'Celebration',
      color: 'bg-pink-500'
    },
    {
      date: '2024-09-15',
      time: '9:30 AM',
      title: 'Sports Day 2025',
      description: 'Annual sports competition with various athletic events and fun activities.',
      location: 'Sports Ground',
      attendees: 'Students & Families',
      category: 'Sports',
      color: 'bg-red-500'
    },
    {
      date: '202-09-22',
      time: '6:00 PM',
      title: 'Spring Concert',
      description: 'Musical performances by our talented students showcasing their artistic skills.',
      location: 'School Auditorium',
      attendees: 'Community Welcome',
      category: 'Arts',
      color: 'bg-purple-500'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="events" className="py-20 bg-[#D6C7B2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with our school community through these exciting upcoming events and activities.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className={`${event.color} text-white p-3 rounded-lg flex-shrink-0`}>
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${event.color} text-white`}>
                      {event.category}
                    </span>
                    <span className="text-sm text-gray-500">{formatDate(event.date)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  
                  <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Calendar CTA */}
        <div className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Never Miss an Event!</h3>
          <p className="text-lg mb-6 opacity-90">
            Subscribe to our school calendar and get notifications about all upcoming events and activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe to Calendar
            </button>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;