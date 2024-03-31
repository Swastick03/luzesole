import React from "react";
import { useProductContext } from "./context/productcontext";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

function createcard1(products) {
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

function Shop() {
  const {isLoading, products} = useProductContext();
  
  if(isLoading){
    return <Loader/>;
  }
  return (
    <>
      <Header />
      <img
        style={{ width: "100%", padding: "3rem 0rem" }}
        src="https://i.postimg.cc/ZKhWHyYY/Pink-Photo-Banner-Facebook-Cover-Photo-1.png"
        alt=""
      />
      <section id="product1" className="section-p1">
        <div className="container">
          <div className="row ">{products.map(createcard1)}</div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Shop;
