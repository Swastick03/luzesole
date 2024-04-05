import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <div  className="amount-button" onClick={() => setDecrease()}>
          <FaMinus className="fa-toggle" />
        </div>
        <div className="amount-style">{amount}</div>
        <div  className="amount-button" onClick={() => setIncrease()}>
          <FaPlus className="fa-toggle" />
        </div>
      </div>
    </div>
  );
};

export default CartAmountToggle;