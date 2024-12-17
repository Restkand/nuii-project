import React from 'react';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;