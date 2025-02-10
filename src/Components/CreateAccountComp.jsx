import React, { useState } from "react";
import AppBarComp from "./AppBarComp";
import FooterComp from "./FooterComp";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {useEffect } from "react";
import axios    from 'axios'
function CreateAccountComp() {
    const navigate = useNavigate();
    
      // Navigate to the order page after login
      const goOrderPage = () => {
        navigate("/orderpage");
      };

      const goLogInPage = () => {
        navigate("/login");
      };



      const [name,setName]=useState()
      const [email,setEmail]=useState()
      const [password,setPassword]=useState()

      const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/mobileBin',{name,email,password})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
      }
    
  return (
    <>
      <AppBarComp />
      <section className="container forms">
          <div className="form login">
            <div className="form-content">
              <header>Create Account</header>
              <form onSubmit={handleSubmit} >
              <div className="field input-field">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input"
                    required
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>

                <div className="field input-field">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input"
                    required
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>

                <div className="field input-field">
                  <input
                    type="password"
                    placeholder="Password"
                    className="password"
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                  <i className="bx bx-hide eye-icon"></i>
                </div>
                <div className="field button-field">
                  <button type="button" onClick={goLogInPage}>
                    SignUp
                  </button>
                </div>
              </form>

              <div className="form-link">
                <span>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="link signup-link"
                  
                  >
                    LogIn
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
                <span>SignUp with Google</span>
              </a>
            </div>
          </div>
       
      </section>
      <FooterComp />
    </>
  )
}

export default CreateAccountComp
