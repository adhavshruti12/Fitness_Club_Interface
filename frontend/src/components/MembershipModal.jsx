import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

function MembershipModal({ isOpen, onClose }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
  });

  if (!isOpen) return null;

  const plans = [
    {
      name: 'Monthly',
      price: '₹1,999',
      features: ['Full gym access', 'Basic trainer support', 'Locker access']
    },
    {
      name: 'Quarterly',
      price: '₹4,999',
      features: ['Full gym access', 'Personal trainer', 'Locker access', '1 Free PT session']
    },
    {
      name: 'Yearly',
      price: '₹13,999',
      features: ['Full gym access', 'Dedicated trainer', 'Locker access', '4 Free PT sessions', 'Free supplements']
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the membership request to your backend
    console.log({ ...formData, plan: selectedPlan });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay overflow-y-auto">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 my-8 review-modal relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Choose Your Membership Plan</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <FaTimes size={24} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-6 rounded-lg border-2 cursor-pointer membership-card ${
                selectedPlan === plan.name
                  ? 'border-primary bg-primary bg-opacity-5'
                  : 'border-gray-200'
              }`}
              onClick={() => setSelectedPlan(plan.name)}
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold text-primary mb-4">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaCheck className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {selectedPlan && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary"
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default MembershipModal;