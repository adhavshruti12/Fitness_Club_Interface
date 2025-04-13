import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

function ContactCTA() {
  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  return (
    <div className="bg-primary text-white rounded-lg shadow-md p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Start Your Fitness Journey Today</h2>
      <p className="mb-6">Book a free trial session and experience our world-class facilities</p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button 
          onClick={handleCall}
          className="flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <FaPhone />
          Call Now
        </button>
        <button 
          onClick={handleWhatsApp}
          className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          <FaWhatsapp />
          WhatsApp
        </button>
      </div>
    </div>
  );
}

export default ContactCTA;