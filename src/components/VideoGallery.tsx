import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      thumbnail: '/gallery/chrome2.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Welcome to Ventures Early Learning Centre',
      description: 'Take a virtual tour of our beautiful campus and facilities'
    },
    {
      id: 'dQw4w9WgXcQ',
      thumbnail: '/gallery/chrome3.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Classroom Learning Experience',
      description: 'See our innovative teaching methods in action'
    },
    {
      id: 'dQw4w9WgXcQ',
      thumbnail: '/gallery/chrome4.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sports and Recreation',
      description: 'Students enjoying physical activities and sports'
    },
    {
      id: 'dQw4w9WgXcQ',
      thumbnail: '/gallery/chrome5.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Arts and Creativity',
      description: 'Exploring creativity through arts and crafts'
    },
    {
      id: 'dQw4w9WgXcQ',
      thumbnail: '/gallery/chrome6.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Science Laboratory',
      description: 'Hands-on science experiments and discoveries'
    },
    {
      id: 'dQw4w9WgXcQ',
      thumbnail: '/gallery/chrome1.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Annual Day Celebration',
      description: 'Highlights from our annual day performances'
    }
  ];

  return (
    <section id="video-gallery" className="py-20 bg-[#D6C7B2]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our school life through these engaging videos showcasing our students, activities, and achievements.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors duration-300">
                  <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-red-500 fill-current" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <div className="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="Video player"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Featured Video Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Featured: School Introduction</h3>
            <p className="text-gray-600">Get to know  Ventures Early Learning Centre through this comprehensive introduction video</p>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="relative w-full h-0 pb-[56.25%] bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-400 to-yellow-400">
                <div 
                  className="bg-white rounded-full p-6 shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300"
                  onClick={() => setSelectedVideo('dQw4w9WgXcQ')}
                >
                  <Play className="w-12 h-12 text-red-500 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;