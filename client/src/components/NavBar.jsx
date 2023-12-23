import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Logout from './Logout';
import Login from './auth/Login';
import { useContext } from "react";
import AuthContext from "../components/context/AuthContext";
import MainSignIn from './auth/MainSignIn';
import logo from '../static/logo.png'
import { FiAlignJustify } from "react-icons/fi";



const NavBar = () => {
  const auth = useContext(AuthContext)
  const[modal,setModal] = useState(false)
 const isOpen = (e) => {
  setModal(true)
 }
 const isClose = (e) => {
<<<<<<< HEAD
=======
  console.log("closedd")
>>>>>>> 4702f325f7e13f10e0bbd9f640322ae0693cf2a1
  setModal(false)
 }
  console.log(auth.isSignIn)
  return (
    <div>
      {/* header */}
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="right">
            <Link to="/">Home</Link>
            <Link to="/Health">Health</Link>
            <Link to="/Technology">Technology</Link>
            <Link to="/Business">Business</Link>
            <Link to="/Sports">Sports</Link>
            <Link to="/readingList">Bookmark</Link>
            {auth.isSignIn ? <Logout/> :<button onClick={isOpen}>Login</button> }
<<<<<<< HEAD
             {modal && <MainSignIn close={isClose}/>}
            {auth.isSignIn == true && modal && <MainSignIn/>  }
=======
            {modal && <MainSignIn close={isClose}/>}
            {auth.isSignIn == true && modal && <MainSignIn />  }
>>>>>>> 4702f325f7e13f10e0bbd9f640322ae0693cf2a1
          </div>
          <div><button className='coll'><FiAlignJustify /></button></div>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
