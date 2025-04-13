import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-[400px]">
            <img
              src={image}
              alt={`Gym Interior ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageCarousel;