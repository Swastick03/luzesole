import React from "react";
import { useProductContext } from "../context/productcontext";
import Card from "./Card";
import Loader from "./Loader";


function createcard(products) {
  return (
    <Card
      key={products._id}
      id={products._id}
      name={products.name}
      price={products.price}
      img_ref={products.img_ref}
      brand={products.brand}
    />
  );
}
function Puma() {
  const {isLoading, products} = useProductContext();
  const pumaProducts = products.filter((cur)=>{
    return cur.brand === "puma";
});
  if(isLoading){
    return <Loader/>;
  }
  return (
    <section id="product1" className="section-p1">
      <h2>Elevate Performance</h2>
      <h6>Elevate your game with Puma shoes</h6>
      <div className="container">
        <div className="row ">{pumaProducts.map(createcard)}</div>
      </div>
    </section>
  );
}

export default Puma;
