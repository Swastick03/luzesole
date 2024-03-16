import React from "react";

import Card from "./Card";
import products from "../product/adidas_products";

function createcard(products) {
  return (
    <Card
      key={products.id}
      name={products.name}
      price={products.price}
      img_ref={products.img_ref}
      brand="Adidas"
    />
  );
}
function Adidas() {
  return (
    <section id="product1" className="section-p1">
      <h2>Impossible Is Nothing.</h2>
      <h6>Find Your Strength, Conquer Your Dreams</h6>
      <div className="container">
        <div className="row ">{products.map(createcard)}</div>
      </div>
    </section>
  );
}

export default Adidas;
