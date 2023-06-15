import React from "react";
import "./component.css";
import "./SignInWithGoogle";
import SignInWithGoogle from "./SignInWithGoogle";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    const clickRegisterHandler = () => {
        navigate('/register');
    };
    return (
        <>
        <h2>Login Home</h2>
        <SignInWithGoogle />
        <div className="authButton">
            <button onClick={clickRegisterHandler}>Register</button>
        </div>
        </>
    );
};

export default Home;