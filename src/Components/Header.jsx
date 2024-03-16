import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section id="title">
      <nav
        className="navbar navbar-expand-md navbar-dark fixed-top "
        style={{ backgroundColor: "black" }}
      >
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://i.postimg.cc/NfxHT9Wv/image-removebg-preview-4.png"
            alt=""
          />
          LUXESOLE
        </NavLink>
        <button
          className="navbar-toggler"
          style={{ border: "0px" }}
          onClick={toggleMenu}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={` collapse navbar-collapse  
        ${isMenuOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">
                {" "}
                Shop{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                {" "}
                Contact{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                <img
                  src="https://i.postimg.cc/0NdMWLPT/cart-8-256.png"
                  alt=""
                />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                <img
                  src="https://i.postimg.cc/XN9h2LCw/user-6-256.png"
                  alt=""
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
export default Header;
