import React, { useState } from "react";
import AppBarComp from "./AppBarComp";
import FooterComp from "./FooterComp";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LogInComp() {
  const navigate = useNavigate();

  // Navigate to the order page after login
  const goOrderPage = () => {
    navigate("/orderpage");
  };

  const goCreatePage = () => {
    navigate("/createaccountcomp");
  };

  

  return (
    <>
      <AppBarComp />
      <section className="container forms">
          <div className="form login">
            <div className="form-content">
              <header>Login </header>
              <form >
                <div className="field input-field">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input"
                    required
                  />
                </div>

                <div className="field input-field">
                  <input
                    type="password"
                    placeholder="Password"
                    className="password"
                    required
                  />
                  <i className="bx bx-hide eye-icon"></i>
                </div>

                <div className="form-link">
                  <a href="#" className="forgot-pass">
                    Forgot password?
                  </a>
                </div>

                <div className="field button-field">
                  <button type="button" onClick={goOrderPage}>
                    Login
                  </button>
                </div>
              </form>

              <div className="form-link">
                <span>
                  Don't have an account?{" "}
                  <Link
                    to="/createaccount"
                    className="link signup-link"
                  
                  >
                    Signup
                  </Link>
                </span>
              </div>
            </div>

            <div className="line"></div>

            <div className="media-options">
              <a href="#" className="field google">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt=""
                  className="google-img"
                />
                <span>Login with Google</span>
              </a>
            </div>
          </div>
       
      </section>
      <FooterComp />
    </>
  );
}

export default LogInComp;