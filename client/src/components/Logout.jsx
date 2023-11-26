import React, { useContext }  from "react";
import axios from "axios";
import AuthContext from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "./Api";
function Logout() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const Logout = async () => {
    await axios.post(api+"/auth/logout");

    // auth check
    auth.onFetch()
    navigate("/home")
  };

  return (
    <div>
      <button onClick={() => Logout()}>Logout</button>
    </div>
  );
}

export default Logout;
