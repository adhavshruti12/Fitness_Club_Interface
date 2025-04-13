import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function ReviewModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the review to your backend
    console.log({ name, rating, review });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 review-modal">
        <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Rating</label>
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <FaStar
                    key={index}
                    className="cursor-pointer"
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    size={24}
                    onClick={() => setRating(ratingValue)}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(rating)}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Your Review</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full p-2 border rounded-lg h-32"
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewModal;