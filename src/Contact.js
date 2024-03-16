import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function Contact() {
  return (
    <>
      <Header />

      <section style={{ padding: "6rem 7rem" }} className="ftco-section">
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "5px",
            boxShadow: "3px 6px 6px 6px rgba(0, 0, 0, 0.4)"
          }}
          className="row no-gutters"
        >
          <div className="col-md-7">
            <div className="contact-wrap w-100 p-md-5 p-4">
              <h3 style={{ fontWeight: "600" }} className="mb-4">
                Contact Us
              </h3>
              <div id="form-message-warning" className="mb-4"></div>
              <div id="form-message-success" className="mb-4">
                Your message was sent, thank you!
              </div>
              <form
                method=""
                id="contactForm"
                name="contactForm"
                className="contactForm"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="label" for="name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="label" for="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label" for="subject">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label" for="#">
                        Message
                      </label>
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="4"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <button type="" className="btn btn-primary">
                        Send Message
                      </button>
                      <div className="submitting"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-5 d-flex align-items-stretch">
            <img
              style={{ width: "100%" }}
              src="https://i.postimg.cc/44SjzYhL/Horizon.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
