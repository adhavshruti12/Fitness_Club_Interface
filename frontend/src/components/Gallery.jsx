import React from 'react';

function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    'https://images.unsplash.com/photo-1576678927484-cc907957088c',
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gallery</h2>
        <button className="text-primary hover:text-secondary">View More</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-48">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;