import React from 'react'
import './Card.css'
const Card = () => {
  return (
      <div className='card'>
        <h2>Card Name</h2>
        <p className="date">Date</p>
        <p>Description</p>
        <a className="read-more">Read more</a>
      </div>
  );
};

export default Card;