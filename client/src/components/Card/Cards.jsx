import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Cards = () => {
  const [cardInfo, setCardInfo] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${apiKey}`
        );
        setCardInfo(response.data.articles);
      } catch (error) {
        console.error("Error fetching news", error);
      }
    })();
  }, []);
  return (
    <div className="cards-container">
      {cardInfo.map((info, index) => (
        <Card key={index} info={info} />
      ))}
    </div>
  );
};
export default Cards;
