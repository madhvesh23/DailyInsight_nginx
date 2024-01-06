import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { useContext } from "react";
import AuthContext from "../components/context/AuthContext";
import MainSignIn from "./auth/MainSignIn";
import logo from "../static/logo.png";
import { FiAlignJustify } from "react-icons/fi";
import Spinner from "./context/LoadingSpinner";

const NavBar = () => {
  const auth = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const isOpen = (e) => {
    setModal(true);
  };
  const isClose = (e) => {
    console.log("closedd");
    setModal(false);
  };

  console.log(auth.isSignIn);

  const handleSpinner = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 650);
  };
  useEffect(() => {
    handleSpinner();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <div>
        <header>
          <nav>
            <div className="logo">
              <img src={logo} alt="" onClick={() => handleSpinner()} />
            </div>
            <div className="right">
              <button className="nav-btn" onClick={() => handleSpinner()}>
                <Link to="/">Home</Link>
              </button>
              <button className="nav-btn" onClick={() => handleSpinner()}>
                <Link to="/Health">Health</Link>
              </button>
              <button className="nav-btn" onClick={() => handleSpinner()}>
                <Link to="/Technology">Technology</Link>
              </button>
              <button className="nav-btn" onClick={() => handleSpinner()}>
                <Link to="/Business">Business</Link>
              </button>
              <button className="nav-btn" onClick={() => handleSpinner()}>
                <Link to="/Sports">Sports</Link>
              </button>
              <button className="nav-btn" onClick={() => handleSpinner()}>
                <Link to="/readingList">Bookmark</Link>
              </button>
              {auth.isSignIn ? (
                <Logout />
              ) : (
                <button onClick={isOpen}>Login</button>
              )}
              {modal && <MainSignIn close={isClose} />}
              {auth.isSignIn == true && modal && <MainSignIn />}
            </div>
            <div>
              <button className="coll">
                <FiAlignJustify />
              </button>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default NavBar;
