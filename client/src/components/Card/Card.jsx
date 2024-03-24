import React from "react";
import "./Card.css";
const Card = ({ cardInfo }) => {
  return (
    <div className="cards-container">
      {cardInfo.map((info, index) => {
        return (
          <div key={index} className="card">
            <div className="card-img">
              <img src={info.urlToImage} alt="CardImage" />
            </div>
            <div>
              <h2 className="m-0 p-0">{info.title}</h2>
              <p className="date">{info.publishedAt}</p>
              <p>{info.description}</p>
              <a className="read-more">Read more</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
