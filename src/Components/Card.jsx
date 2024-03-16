import React from "react";

function Card({ name, brand, price, img_ref }) {
  return (
    <div className="pro-container  col col-lg-3 col-md-4 col-sm-6 ">
      <div className="pro  ">
        <img src={img_ref} alt={name} />
        <div className="description">
          <span>{brand}</span>
          <h5 style={{ textTransform: "capitalize" }}>{name}</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4>&#8377; {price}.00</h4>
        </div>
        <a href="#" id="cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </a>
      </div>
    </div>
  );
}

export default Card;
