import React from 'react';

function Description() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">About Empire Fitness Club</h2>
      <p className="text-gray-600 leading-relaxed">
        Empire Fitness Club is one of the top-rated gyms in Punawale, offering a comprehensive fitness experience with state-of-the-art equipment and expert guidance. Our facility features modern workout spaces, dedicated areas for cardio and strength training, and specialized zones for group fitness classes.
      </p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To provide a motivating environment where members can achieve their fitness goals through expert guidance and top-quality equipment.
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Why Choose Us</h3>
          <p className="text-gray-600">
            Professional trainers, flexible timings, modern equipment, and a supportive community make us the preferred choice in Punawale.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description;