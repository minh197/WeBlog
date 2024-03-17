import React from 'react'
import './Card.css'
import SampleImage from '../images/img-1.avif'
const Card = () => {
  return (
    <div className="card-list">
      <div className="card">
        <div className="card-img">
          <img src={SampleImage} alt="CardImage" />
        </div>
        <div className='card-content'>
          <h2 className="m-0 p-0">Sample Card Name</h2>
          <p className="date">March 16, 2024</p>
          <p>This is card description</p>
          <a className="read-more">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default Card;