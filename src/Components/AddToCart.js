import { useState } from "react";

import { FaCheck } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import CartAmountToggle from "./CartAmountToggle";


const AddToCart = ({ product }) => {
  const {  Available_colour,stock } = product || {Available_colour:[]};
  console.log(product);

  const [color, setColor] = useState(Available_colour[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
    //can add stock
  };

  return (
    <>
      <div className="Available_colour">
        <p>
          Colors:
          {Available_colour.map((curColor, index) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </div>
            );
          })}
        </p>
      </div>

      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

        <div className="tocart">
      <NavLink to="/cart">
        <button className="btn">Add To Cart</button>
      </NavLink></div>
      </>
    
  );
};



export default AddToCart;