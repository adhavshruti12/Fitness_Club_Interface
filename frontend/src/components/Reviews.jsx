import React from 'react';
import { FaStar } from 'react-icons/fa';

function Reviews({ onReviewClick }) {
  const reviews = [
    {
      name: 'Shruti Patel',
      rating: 5,
      comment: 'Excellent trainers and great equipment! The 24/7 access is super convenient.',
      date: '2 days ago',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    },
    {
      name: 'Arjun Singh',
      rating: 4,
      comment: 'Affordable and spacious. The trainers are very knowledgeable and helpful.',
      date: '1 week ago',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    },
    {
      name: 'Priya Sharma',
      rating: 5,
      comment: 'Best gym in Punawale! The facilities are top-notch and the atmosphere is very motivating.',
      date: '2 weeks ago',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">User Reviews</h2>
          <p className="text-gray-600">See what our members say about us</p>
        </div>
        <button
          onClick={onReviewClick}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
        >
          Write a Review
        </button>
      </div>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b last:border-0 pb-6 last:pb-0">
            <div className="flex items-start gap-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{review.name}</h3>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="text-primary hover:text-secondary font-semibold">
          View All Reviews (120+)
        </button>
      </div>
    </div>
  );
}

export default Reviews;