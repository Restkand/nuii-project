import React from 'react';
import './blackCard.css';

function blackCard({ title, description, imageSrc }) {
  return (
    <div className="max-w-full rounded-lg pt-12 pb-16 overflow-hidden shadow-lg bg-black text-white flex">
    {/* Bagian teks */}
    <div className="flex-1 px-6 md:px-12 text-left" style={{ width: '50%' }}>
      <a href="/works" className="linkWorks">
        <h4 className="text-lg md:text-xl mb-2 title-card">{title}</h4>
      </a>
      <a href="/works" className="linkWorks">
        <p className="text-2xl md:text-4xl lg:text-7xl card-desc">{description}</p>
      </a>
    </div>

    {/* Bagian gambar */}
    <div
      className="flex-shrink-0 px-6 md:px-12 md:pl-28 flex items-center justify-end"
      style={{
        width: '40%', // Gambar mengambil 40% lebar card
        marginLeft: 'auto', // Mendorong gambar lebih jauh ke kanan
      }}
    >
      <a href="/works" className="linkWorks">
        <img
          className="imageCard w-auto h-48 md:h-72 lg:h-96 object-contain"
          src={imageSrc}
          alt="Card"
        />
      </a>
    </div>
  </div>
  );
}

export default blackCard;
