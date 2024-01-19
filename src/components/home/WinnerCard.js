
import React from 'react';
import './WinnerCard.css'

const WinnerCard = ({ firstName, image, height, address }) => {

  return (
    <div className="winner-card">
      <img src={image} alt={firstName} />
      <div>
        <h3>{firstName}</h3>
        <h4>Won ₹{height}K</h4>
        <p> {address.city} </p>
      </div>
    </div>
  );
};

export default WinnerCard;
