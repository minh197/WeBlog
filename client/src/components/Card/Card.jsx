import React from "react";
import "./Card.css";
import Button from "react-bootstrap/Button";
import {formatDate} from '../../helpers/dateConvert'

const Card = ({ info }) => {
  console.log(info)
  return (
    <div className="card">
      <div className="card-img">
        <img src={info.urlToImage} alt="CardImage" />
      </div>
      <div className="card-content">
        <h2 className="m-0 p-0">{info.title}</h2>
        <p className="date">{formatDate(info.publishedAt)}</p>
        <p>{info.description}</p>
        <Button className="read-more" variant="primary" size="sm" active>
          Read More
        </Button>
      </div>
    </div>
  );
};

export default Card;
