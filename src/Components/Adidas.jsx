import React from "react";
import { useProductContext } from "../context/productcontext";
import Card from "./Card";
import Loader from "./Loader";

function createcard(products) {
  return (
    <Card
      key={products._id}
      id={products._id}
      rating={products.rating}
      name={products.name}
      price={products.price}
      img_ref={products.img_ref}
      brand={products.brand}
    />
  );
}
function Adidas() {
  const {isLoading, products} = useProductContext();
  const adidasData = products.filter((cur)=>{
    return cur.brand === "adidas";
});
  if(isLoading){
    return <Loader/>;
  }
  return (
    <section id="product1" className="section-p1">
      <h2>Impossible Is Nothing.</h2>
      <h6>Find Your Strength, Conquer Your Dreams</h6>
      <div className="container">
        <div className="row ">{adidasData.map(createcard)}</div>
      </div>
    </section>
  );
}

export default Adidas;