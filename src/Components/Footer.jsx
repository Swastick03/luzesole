import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer class="footer-section">
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find us</h4>
                    <span>164, Bhubaneswar, Odisha-751002</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Call us</h4>
                    <span>9692240804</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span>swastickkumardey@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <NavLink to="index.html">
                      <img
                        src="https://i.postimg.cc/kG9btYFS/Black-and-White-Simple-Modern-Sportswear-Logo-1-removebg-preview.png"
                        class="img-fluid"
                        alt="logo"
                      />
                    </NavLink>
                  </div>
                  <div class="footer-text">
                    <p>
                      Welcome to LUXESOLE, where style meets performance. Our
                      premium sportswear combines innovation, quality materials,
                      and ethical practices for athletes who demand the best.
                    </p>
                  </div>
                  <div class="footer-social-icon">
                    <span>Follow us</span>
                    <NavLink to="#">
                      <i class="fab fa-facebook-f facebook-bg"></i>
                    </NavLink>
                    <NavLink to="#">
                      <i class="fab fa-twitter twitter-bg"></i>
                    </NavLink>
                    <NavLink to="#">
                      <i class="fab fa-google-plus-g google-bg"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Category</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">About us</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Our Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Expert Team</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact us</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Latest News</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div class="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div class="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i class="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>
                    Copyright &copy; 2024, All Right Reserved{" "}
                    <NavLink to="/">LUXESOLE</NavLink>
                  </p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Terms</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Privacy</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Policy</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
