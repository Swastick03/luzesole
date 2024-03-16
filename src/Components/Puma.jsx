import React from "react";

import Card from "./Card";
import products from "../product/puma_products";

function createcard(products) {
  return (
    <Card
      key={products.id}
      name={products.name}
      price={products.price}
      img_ref={products.img_ref}
      brand="Puma"
    />
  );
}
function Puma() {
  return (
    <section id="product1" className="section-p1">
      <h2>Elevate Performance</h2>
      <h6>Elevate your game with Puma shoes</h6>
      <div className="container">
        <div className="row ">{products.map(createcard)}</div>
      </div>
    </section>
  );
}

export default Puma;
