import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Logout from './Logout';
import Login from './auth/Login';
import { useContext } from "react";
import AuthContext from "../components/context/AuthContext";
import MainSignIn from './auth/MainSignIn';



const NavBar = () => {
  const auth = useContext(AuthContext)
  const[modal,setModal] = useState(false)
 const isOpen = (e) => {
  setModal(true)
 }
 const isCLose = (e) => {
  setModal(false)
 }
  console.log(auth.isSignIn)
  return (
    <div>
      {/* header */}
      <header>
        <nav>
          <div className="logo">
            <h1>DailyInsight</h1>
          </div>
          <div className="right">
         
            <Link to="/">Home</Link>
            <Link to="/Health">Health</Link>
            <Link to="/Technology">Technology</Link>
            <Link to="/Business">Business</Link>
            <Link to="/Sports">Sports</Link>
            <Link to="/readingList">Bookmark</Link>
           
          
            {auth.isSignIn ? <Logout/> :<button onClick={isOpen}>Login</button> }
            {modal && <MainSignIn/>}
            {auth.isSignIn == true && modal && <MainSignIn/>  }
          </div>
        </nav>
      </header>
    </div>
  )
}

export default NavBar