import React from 'react'
import './Card.css'
import SampleImage from './images/img-1.avif'
const Card = () => {
  return (
    <div className='card-list'>
      <div className="card">
        <h2 className="m-0 p-0">Sample Card Name</h2>
        <p className="date">March 16, 2024</p>
        <img className='card-img' src={SampleImage} alt="CardImage"/>
        <p>This is card description</p>
        <a className="read-more">Read more</a>
      </div>
    </div>
  );
};

export default Card;