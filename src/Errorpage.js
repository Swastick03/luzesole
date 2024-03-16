import React from "react";
import "./Styles/Errorpage.css";
import { Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function Errorpage() {
    return(
        <>
            <Header/>
            <div className="not-found-container">
            <h1 className="not-found-title">404 - Not Found</h1>
            <p className="not-found-message">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="home-button">Home</Link>
            </div>
            <Footer/>
        </>
    );
}
export default Errorpage;