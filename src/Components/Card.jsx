import React from "react";
import FormatPrice from "../Helper/FormatPrice";
import { NavLink } from "react-router-dom";

function Card({ id,name, brand, price, img_ref }) {



  return (
    <NavLink style={{ textDecoration: 'none' }} to={`/singleproduct/${id}` }>
    <div className="pro-container  col col-lg-3 col-md-4 col-sm-6 ">
      <div className="pro  ">
        <img src={img_ref} alt={name} />
        <div className="description">
          <span style={{ textTransform: "capitalize" }}>{brand}</span>
          <h5 style={{ textTransform: "capitalize" }}>{name}</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4>{<FormatPrice price={price}/>}</h4>
        </div>
        <NavLink to="/cart">
          <div id="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </NavLink>
      </div>
    </div></NavLink>
  );
}

export default Card;
