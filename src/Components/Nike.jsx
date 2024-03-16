import React from "react";

import Card from "./Card";
import products from "../product/nike_products";

function createcard(products) {
  return (
    <Card
      key={products.id}
      name={products.name}
      price={products.price}
      img_ref={products.img_ref}
      brand="Nike"
    />
  );
}
function Nike() {
  return (
    <section id="product1" className="section-p1">
      <h2>Unleash Greatness</h2>
      <h6>Dominate Every Mile in Nike Shoes</h6>
      <div className="container">
        <div className="row ">{products.map(createcard)}</div>
      </div>
    </section>
  );
}

export default Nike;
