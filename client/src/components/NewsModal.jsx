import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../components/context/AuthContext";
import { Navigate } from "react-router-dom";
import MainSignIn from "./auth/MainSignIn";
import api from "./Api";



const NewsModal = ({ isOpen, isClose, news }) => {
  const auth = useContext(AuthContext)
  const sendData = async (book) => {
    const { title, description, urlToImage } = book;
    const articleData = { title, description, image: urlToImage };
    await axios
      .post(api+"/articles/bookmark", articleData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("Stored in Bookmark")
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    (auth.isSignIn) ?   
    <div className="modal-overlay">
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal-image">
        <img src={news.urlToImage} alt="News" />
      </div>
      <div className="modal-news">
        <h2>{news.title}</h2>
        <p>{news.description}</p>
        <button onClick={() => sendData(news)}>Add to Bookmark</button>

      </div>
    </div>
    <button className="closebtn" onClick={() => isClose()}>
      Close
    </button>
  </div> : <div className="modal-overlay">
    < MainSignIn/>
  </div> );
};

export default NewsModal;
