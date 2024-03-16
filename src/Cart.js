import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function Cart() {
  return (
    <>
      <Header />
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div
            className="row d-flex justify-content-center my-4"
            style={{ paddingTop: "3rem" }}
          >
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - 2 items</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/391174/04/sv01/fnd/IND/fmt/png/RS-X-Geek-Unisex-Sneakers"
                          className="w-100"
                          alt="RS-X Geek Unisex Sneakers"
                        />
                        <a href="#!">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)"
                            }}
                          ></div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p>
                        <strong>RS-X Geek Unisex Sneakers</strong>
                      </p>

                      <p>Size: US9</p>
                      <button
                        style={{ margin: "0rem 0.5rem" }}
                        type="button"
                        className="btn btn-primary btn-sm me-1 mb-2"
                        data-mdb-toggle="tooltip"
                        title="Remove item"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm mb-2"
                        data-mdb-toggle="tooltip"
                        title="Move to the wish list"
                      >
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <div
                        className="d-flex mb-4"
                        style={{ maxWidth: "10rem" }}
                      >
                        <button
                          style={{ height: "2.5rem" }}
                          className="btn btn-primary px-3 me-2"
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        >
                          <i className="fas fa-minus"></i>
                        </button>

                        <div className="form-outline">
                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                            className="form-control"
                          />
                          <label className="form-label" for="form1">
                            Quantity
                          </label>
                        </div>

                        <button
                          style={{ height: "2.5rem" }}
                          className="btn btn-primary px-3 ms-2"
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>

                      <p className="text-start text-md-center">
                        <strong>&#8377; 5 499.00 </strong>
                      </p>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/79ecdc1b-bca8-4a57-912c-2a128ef2277a/air-jordan-1-mid-shoes-SQf7DM.png"
                          className="w-100"
                          alt=""
                        />
                        <a href="#!">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)"
                            }}
                          ></div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p>
                        <strong>Air Jordan 1 Mid</strong>
                      </p>

                      <p>Size: US10</p>

                      <button
                        type="button"
                        style={{ margin: "0rem 0.5rem" }}
                        className="btn btn-primary btn-sm me-1 mb-2"
                        data-mdb-toggle="tooltip"
                        title="Remove item"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm mb-2"
                        data-mdb-toggle="tooltip"
                        title="Move to the wish list"
                      >
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <div className="d-flex mb-4" style={{ maxWidth: "3rem" }}>
                        <button
                          style={{ height: "2.5rem" }}
                          className="btn btn-primary px-3 me-2"
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        >
                          <i className="fas fa-minus"></i>
                        </button>

                        <div className="form-outline">
                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                            className="form-control"
                          />
                          <label className="form-label" for="form1">
                            Quantity
                          </label>
                        </div>

                        <button
                          style={{ height: "2.5rem" }}
                          className="btn btn-primary px-3 ms-2"
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>

                      <p className="text-start text-md-center">
                        <strong>&#8377; 11 495.00</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">12.10.2023 - 14.10.2023</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://logos-world.net/wp-content/uploads/2020/04/PayPal-Emblem.png"
                    alt="PayPal acceptance mark"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>&#8377; 16 994.00</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>&#8377; 150.00</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>&#8377; 17 144.00</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cart;
