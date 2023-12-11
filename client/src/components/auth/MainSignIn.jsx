import React, { useContext, useState } from "react";
import axios from "axios"
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../Api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function MainSignIn({close}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [switchLogin, setSwitchLogin] = useState(false);

    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    // signup
    const handleSignup = async (e) => {
        e.preventDefault();
        toast("Registered Successfully!");
        if (username.trim() !== "" && password.trim() !== "") {
            const UserData = {
                username: username,
                password: password,
            }
            // post request for user signup
            await axios.post(api + "/auth/signup", UserData, {
                withCredentials: 'include',
            })
        } else {
            alert("Please enter a valid username and password.");
        }
    };

    //   singin
    const handleLogin = async (e) => {
        e.preventDefault();
        if (username.trim() !== "" && password.trim() !== "") {
            const UserData = { username: username, password: password }
            // post request of user using axios
            await axios.post(api + "/auth/login", UserData, {
                withCredentials: 'include'
            })
            // check token is valid or not
            auth.onFetch()
            console.log(auth.isSignIn)
            navigate('/home')
            window.location.reload()
            toast("Welcome to DailyInsight!");

        } else {
            alert("Please enter a valid username and password.");
        }
    };

    return (
        <div className="modal-overlay">
            <div className="login-container">
                <div onClick={()=>close()} className="close_login">X</div>
                <h2>Welcome to DailyInsight</h2>
                <div className="switch">
                    <button className="switchbtn" onClick={() => setSwitchLogin(true)} >SignIn</button>
                    <div className="line" ></div>
                    <button className="switchbtn" onClick={() => setSwitchLogin(false)} >SiginUp</button>
                </div>
                <div className="banner">
                    {switchLogin ? <i >Please Login</i> : <i >SignUp to first</i>}
                </div>
                <form className="login-form">
                    {/* <label htmlFor="username">Username:</label> */}
                    <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    {/* <label htmlFor="password">Password:</label> */}
                    <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    {switchLogin ? <button type="submit" className="submitbtn" onClick={handleLogin}>Login</button> : <button className="submitbtn" type="submit" onClick={handleSignup}>Register</button>}


                    {/* <div>
                        or create an new account!...
                        <Link to="/signup">signup page</Link>
                    </div> */}
                </form>
            </div>
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
    )
}
