import React from "react";
import Nike from "./Components/Nike";
import Puma from "./Components/Puma";
import Header from "./Components/Header";
import { NavLink } from "react-router-dom";
import Footer from "./Components/Footer";
import Adidas from "./Components/Adidas";

function Home() {
  return (
    <div>
      <Header />
      <img
        src="https://i.pinimg.com/originals/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg"
        alt=" "
        style={{ width: "100%", height: "auto", paddingTop: "30px" }}
      />
      <NavLink to="/shop">
        <img
          src="https://i.postimg.cc/BbHB6t6w/image.png"
          alt=" "
          style={{ width: "100%", padding: "1rem 0rem" }}
        />
      </NavLink>
      <Nike />
      <NavLink to="/shop">
        <img
          src="https://www.clubhousegolf.co.uk/acatalog/puma2023igniteelevateshoebanner.jpg"
          alt=" "
          style={{ width: "100%", padding: "3rem 0rem" }}
        />
      </NavLink>
      <Puma />
      <NavLink to="/shop">
        <img
          src="https://i.pinimg.com/originals/02/3a/87/023a877e31bece11178bc786e058d49f.jpg"
          alt=" "
          style={{ width: "100%", padding: "3rem 0rem" }}
        />
      </NavLink>
      <Adidas />
      <Footer />
    </div>
  );
}

export default Home;
