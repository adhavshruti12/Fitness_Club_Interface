import React from 'react';
import { FaClock, FaRupeeSign } from 'react-icons/fa';

function TimingsAndPlans({ onJoinClick }) {
  const plans = [
    { duration: 'Monthly', price: '1,999', features: ['Full gym access', 'Basic trainer support'] },
    { duration: 'Quarterly', price: '4,999', features: ['Full gym access', 'Personal trainer', '1 Free PT session'] },
    { duration: 'Yearly', price: '13,999', features: ['Full gym access', 'Dedicated trainer', '4 Free PT sessions'] },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <FaClock className="text-primary text-2xl mr-2" />
          <h2 className="text-2xl font-bold">Timings</h2>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Monday - Sunday</span>
            <span className="font-semibold">5:00 AM - 11:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Public Holidays</span>
            <span className="font-semibold">Open</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <FaRupeeSign className="text-primary text-2xl mr-2" />
          <h2 className="text-2xl font-bold">Membership Plans</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="p-6 border-2 border-gray-200 rounded-lg membership-card">
              <h3 className="text-xl font-semibold mb-2">{plan.duration}</h3>
              <p className="text-3xl font-bold text-primary mb-4">₹{plan.price}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={onJoinClick}
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors"
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TimingsAndPlans;