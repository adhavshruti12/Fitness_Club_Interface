import React from 'react';

function Trainers() {
  const trainers = [
    {
      name: 'Rahul Kumar',
      role: 'Strength Coach',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      specialization: 'Strength Training, Powerlifting',
    },
    {
      name: 'Priya Singh',
      role: 'Zumba Trainer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      specialization: 'Zumba, Aerobics',
    },
    {
      name: 'Aman Verma',
      role: 'Crossfit Expert',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
      specialization: 'Crossfit, HIIT',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Meet Our Expert Trainers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trainers.map((trainer, index) => (
          <div key={index} className="text-center">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold text-lg">{trainer.name}</h3>
            <p className="text-primary">{trainer.role}</p>
            <p className="text-gray-600 text-sm mt-2">{trainer.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trainers;