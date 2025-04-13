import React from 'react';
import { FaAirFreshener, FaShower, FaLock, FaParking, FaUserFriends } from 'react-icons/fa';

function Amenities() {
  const amenities = [
    { icon: <FaAirFreshener />, name: 'AC' },
    { icon: <FaShower />, name: 'Showers' },
    { icon: <FaLock />, name: 'Lockers' },
    { icon: <FaParking />, name: 'Parking' },
    { icon: <FaUserFriends />, name: 'Personal Training' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl text-primary mb-2">{amenity.icon}</div>
            <span className="text-gray-700">{amenity.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Amenities;