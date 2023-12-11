import React, { useContext }  from "react";
import axios from "axios";
import AuthContext from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "./Api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Logout() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const Logout = async () => {
    toast("Logged out!..Login again!");
    await axios.post(api+"/auth/logout");
    // auth check
    auth.onFetch()
    navigate("/home")
    

  };

  return (
    <div>
      <button onClick={() => Logout()}>Logout</button>
      <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
    </div>
  );
}

export default Logout;
