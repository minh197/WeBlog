import React from 'react'
import './Card.css'
const Card = () => {
  return (
      <div className='card'>
        <h2 className='m-0 p-0'>Sameple Card Name</h2>
        <p className="date">March 16, 2024</p>
        <p>This is card description</p>
        <a className="read-more">Read more</a>
      </div>
  );
};

export default Card;