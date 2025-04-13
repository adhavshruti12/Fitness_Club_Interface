import React from 'react';
import { FaClock, FaUserGraduate, FaUsers, FaCheckCircle } from 'react-icons/fa';

function Highlights() {
  const highlights = [
    { icon: <FaClock />, text: '24x7 Open' },
    { icon: <FaUserGraduate />, text: 'Certified Trainers' },
    { icon: <FaUsers />, text: 'Group Classes' },
    { icon: <FaCheckCircle />, text: 'Free Trial' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {highlights.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-3xl text-primary mb-3">{item.icon}</div>
          <div className="font-semibold">{item.text}</div>
        </div>
      ))}
    </div>
  );
}

export default Highlights;