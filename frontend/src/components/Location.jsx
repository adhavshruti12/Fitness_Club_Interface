import React from 'react';

function Location() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Location & Directions</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1744213550248!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0hrTEM2dmdF!2m2!1d11.62177782246196!2d78.11513889861043!3f269.08685179778115!4f-10.890516853580692!5f0.4000000000000002"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>
      <p className="mt-4 text-gray-600">
        📍 Empire Fitness Club, Punawale, Pune
      </p>
    </div>
  );
}

export default Location;