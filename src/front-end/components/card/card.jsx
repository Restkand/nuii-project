import React from 'react';
import './Card.css';

function Card({ title, content, icon, image, customStyle }) {
  return (
    <div className="card" style={customStyle}>
      {icon && <div className="card-icon">{icon}</div>}
      {image && <img src={image} alt="Card visual" className="card-image" />}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {content && <p className="card-text">{content}</p>}
      </div>
    </div>
  );
}

export default Card;
