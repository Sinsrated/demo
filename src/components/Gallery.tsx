import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: '/gallery/chrome4.jpg',
      alt: 'Students in classroom learning',
      category: 'Classroom'
    },
    {
      src: '/gallery/chrome1.jpg',
      alt: 'Interactive learning session',
      category: 'Learning'
    },
    {
      src: '/gallery/chrome5.jpg',
      alt: 'Children playing outdoors',
      category: 'Playground'
    },
    {
      src: '/gallery/chrome13.jpg',
      alt: 'Art and craft activities',
      category: 'Activities'
    },
    {
      src: '/gallery/chrome6.jpg',
      alt: 'Science experiment',
      category: 'Science'
    },
    {
      src: '/gallery/chrome12.jpg',
      alt: 'Music class',
      category: 'Music'
    },
    {
      src: '/gallery/chrome8.jpg',
      alt: 'Library reading time',
      category: 'Library'
    },
    {
      src: '/gallery/chrome15.jpg',
      alt: 'Sports activities',
      category: 'Sports'
    },
    {
      src: '/gallery/chrome7.jpg',
      alt: 'Group activities',
      category: 'Activities'
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#D6C7B2]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">School Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a glimpse into our vibrant school life, from classroom learning to outdoor activities and special events.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-red-500 px-3 py-1 rounded-full text-sm font-medium">
                    {image.category}
                  </span>
                  <p className="mt-2 text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
                <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  {images[selectedImage].category}
                </span>
                <p className="mt-2 text-sm">{images[selectedImage].alt}</p>
                <p className="text-xs text-gray-300 mt-1">
                  {selectedImage + 1} of {images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;