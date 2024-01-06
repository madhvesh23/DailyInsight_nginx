import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "./Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./context/LoadingSpinner";
function Logout() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const Logout = async () => {
    toast("Logged out!..Login again!");
    await axios.post(api + "/auth/logout");
    setLoading(true);
    // auth check
    auth.onFetch();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    navigate("/home");
  };

  return (
    <div>
      {loading && <Spinner />}
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
