import React, {useEffect, useState} from "react";
import "./App.css";
import SignUp from "./components/Auth/SignUp";
import LogIn from "./components/Auth/LogIn";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/Card/Cards";
import axios from 'axios';


function App() {
  const [cardInfo, setCardInfo] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    (async() => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${apiKey}`)
        console.log("hey my cardInfo", response);
        setCardInfo(response.data.articles);
      } catch (error) {
        console.error("Error fetching news", error);
      }
    })();
  }, [])
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Cards cardInfo={cardInfo} />} />
      </Routes>
    </div>
  );
}

export default App;
