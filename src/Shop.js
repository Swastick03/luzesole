import React from "react";
import nike_products from "./product/nike_products";
import puma_products from "./product/puma_products";
import adidas_products from "./product/adidas_products";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function createcard1(products) {
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
function createcard2(products) {
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
function createcard3(products) {
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
function Shop() {
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
          <div className="row ">{nike_products.map(createcard1)}</div>
        </div>
        <div className="container">
          <div className="row ">{puma_products.map(createcard2)}</div>
        </div>
        <div className="container">
          <div className="row ">{adidas_products.map(createcard3)}</div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Shop;
