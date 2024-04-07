import React from "react";
import Card from "./Card";
const Cards = ({ cardInfo }) => {
    console.log("this is cardInfo",cardInfo)
  return (
    <div className="cards-container">
      {cardInfo.map((info, index) => (
        <Card key={index} info={info} />
      ))}
    </div>
  );
};
export default Cards;
