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
function Nike() {
  const {isLoading, products} = useProductContext();
  const nikeData = products.filter((cur)=>{
    return cur.brand === "nike";
});
  if(isLoading){
    return <Loader/>;
  }
  return (
    <section id="product1" className="section-p1">
      <h2>Unleash Greatness</h2>
      <h6>Dominate Every Mile in Nike Shoes</h6>
      <div className="container">
        <div className="row ">{nikeData.map(createcard)}</div>
      </div>
    </section>
  );
}

export default Nike;
