import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

function Header({ onReviewClick }) {
  return (
    <header className="bg-white shadow-md py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-3xl font-bold text-gray-800">Empire Fitness Club</h1>
            <p className="text-gray-600">Punawale</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStarHalf className="text-yellow-400" />
              <span className="ml-2 text-gray-600">(4.5)</span>
            </div>
            <div className="text-gray-600">120+ Reviews</div>
            <button 
              onClick={onReviewClick}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
            >
              Write a Review
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;