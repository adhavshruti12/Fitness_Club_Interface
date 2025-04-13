import React from 'react';

function Hero({ onJoinClick }) {
  return (
    <div className="hero-section">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Transform Your Life
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Join Empire Fitness Club and experience world-class fitness facilities with expert guidance
        </p>
        <button 
          onClick={onJoinClick}
          className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary transition-colors"
        >
          Start Your Journey Today
        </button>
      </div>
    </div>
  );
}

export default Hero;