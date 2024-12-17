import React from 'react';
import './halfCard.css';

function HalfCard({ title, description }) {
  return (
    <div className="halfCards py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 border-4 border-black rounded-lg shadow-md">
      <h2 className="title text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className='description text-sm sm:text-base md:text-lg'>{description}</p>
    </div>
  );
}

export default HalfCard;
