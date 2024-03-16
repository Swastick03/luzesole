import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function Login() {
  return (
    <>
      <Header />
      <section class="vh-100" style={{ padding: "3rem 4rem" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid"
                alt="Phone"
              />
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                boxShadow: "3px 6px 6px 6px rgba(0, 0, 0, 0.4)"
              }}
              class="col-md-7 col-lg-5 col-xl-5 offset-xl-1"
            >
              <form style={{ padding: "3rem" }}>
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    class="form-control form-control-lg"
                    placeholder="Email Address"
                  />
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    class="form-control form-control-lg"
                    placeholder="Password"
                  />
                </div>

                <div class="d-flex justify-content-around align-items-center mb-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label class="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <a style={{ color: "#0bbeb3" }} href="#!">
                    Forgot password?
                  </a>
                </div>

                <button
                  style={{ fontWeight: "600", backgroundColor: "#0bbeb3" }}
                  type="submit"
                  class="btn btn-primary btn-lg btn-block"
                >
                  SIGN IN
                </button>

                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a
                  class="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  role="button"
                >
                  <i
                    style={{ padding: " 0rem 1rem" }}
                    class="fab fa-facebook-f me-2"
                  ></i>
                  Continue with Facebook
                </a>
                <a
                  class="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#55acee" }}
                  href="#!"
                  role="button"
                >
                  <i
                    style={{ padding: " 0rem 1rem" }}
                    class="fab fa-twitter me-2"
                  ></i>
                  Continue with Twitter
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
