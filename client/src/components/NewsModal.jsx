import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../components/context/AuthContext";
import { Navigate } from "react-router-dom";
import MainSignIn from "./auth/MainSignIn";
import api from "./Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsModal = ({ isOpen, isClose, news }) => {
  const auth = useContext(AuthContext);

  const sendData = async (book) => {
    const { title, description, image } = book;
    const articleData = { title, description, image: image };
    await axios
      .post(api + "/articles/bookmark", articleData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          toast.success("🦄 Article Bookmark", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        toast.success("🦄 Already Bookmark", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
  return auth.isSignIn ? (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image">
          <img src={news.image} alt="News" />
        </div>
        <div className="modal-news">
          <h2>{news.title}</h2>
          <p>
            {news.description.length <= 59
              ? news.description
              : `${news.description.slice(0, 90)}...read more`}
          </p>
          <button onClick={() => sendData(news)}>Add to Bookmark</button>
          <ToastContainer />
        </div>
      </div>
      <button className="closebtn" onClick={() => isClose()}>
        X
      </button>
    </div>
  ) : (
    <div className="modal-overlay">
      <MainSignIn />
    </div>
  );
};

export default NewsModal;
