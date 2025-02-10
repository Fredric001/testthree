import React from "react";
import picha from "../assets/truck.png";
import { useState } from "react";

function Profile() {
  // const[imageSrc,setImageSrc]=useState();
  const[firstName,setFirstName]=useState("Guest");
  const[secondName,setSecondName]=useState("Guest");
  const[county,setCounty]=useState();
  const[phoneNumber,setPhoneNumber]=useState();
  const[password,setPassword]=useState();
  const[confirmPassword,setConfirmPassword]=useState();

  const[submitForm,setSubmitForm]= useState()
  



 
// function for updating profile picture
const handleFileChange=(event )=>{
  const file = event.target.files[0];
    if(file){
  const reader=new FileReader();
  reader.onloadend=()=>{
    setImageSrc(reader.result);
  }
  reader.readAsDataURL(file)
}
}
 
  // function for updating profile names
  function handleSetFirstName(event){
    setFirstName(event.target.value)
  }
  function handleSetSecondName(event){
   setSecondName(event.target.value)
  }
// 


// function for updating county and phone number
function handleSetCounty(event){
  setCounty(event.target.value)
}
function handleSetPhoneNumber(event){
 setPhoneNumber(event.target.value)
}
// 

// function for updating password and confirm password
function handleSetPassword(event){
  setPassword(event.target.value)
}
function handleSetConfirmPassword(event){
  setConfirmPassword(event.target.value)

}

// 

//  function for submitting account profile
function handleSubmitProfile(){
 
  if(password.value===confirmPassword.value){
    alert("same")
  }



}


  return (
    <>
      <div class="card">
        <div class="lines"></div>
        <div class="imgBx">
          <img src={picha} alt="profile" />
          <input type="file" onChange={handleFileChange} accept="image/*"/>
         
        </div>
        
        <div class="content">
          <div class="details">
            <h2>
              {firstName}
              <span style={{margin:"0.5rem"}}></span>
              {secondName}

              <br />
              <span>Code F2955</span>
            </h2>
            <div class="data">
              <h3>
                Country
                <br />
                <span>{county}</span>
              </h3>
              <h3>
                Password
                
                <br />
                <span>{password}</span>
                <span style={{marginLeft:"1rem"}}>#</span>
              </h3>
              <h3>
               Phone Number
                <br />
               <span> {phoneNumber}</span>
              </h3>
            </div>
            <div class="actionBtn">  
              <button>Connect Booking</button>
              <button>Invite Friends</button>
              {/* <button>Me</button> */}
            </div>
          </div> 
          <form action="">
          <div
            style={{
              marginTop: "2rem",
              display: "grid",
              justifyContent: "center",
            }}
          >
            <h5>Name</h5>
            <ol>
              <input
                type="text"
                placeholder="first Name"
                required
                style={{
                  width: "200px",
                  height: "30px",
                  outline: "none",
                  padding: "1rem",
                  border: "solid  #2ecc71 2px",
                  borderRadius: "5px",
                }}
                onChange={handleSetFirstName}
              />
              <input
                type="text"
                placeholder="second name"
                required
                style={{
                  width: "200px",
                  height: "35px",
                  outline: "none",
                  padding: "1rem",
                  border: "solid  #2ecc71 2px",
                  borderRadius: "5px",
                  marginLeft: "4rem",
                }}
                onChange={handleSetSecondName}
              />
            </ol>
          </div>

          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              marginLeft:"-2rem"
            }}
          >
            <ol>
              <h5>County</h5>
              <select
                name=""
                id=""
                onChange={handleSetCounty}
                required
                style={{
                  width: "200px",
                  height: "30px",
                  outline: "none",
                  padding: "1rem",
                  border: "solid  #2ecc71 2px",
                  borderRadius: "5px",
                  color:"green"
                }}

              >
                <option value="Select County"></option>
                <option value="Nairobi">Nairobi</option>
                <option value="">Kisumu</option>
                <option value="Kisumu">Narok</option>
                <option value="Mombasa">Mombasa</option>
                <option value="Kiambu">Kiambu</option>
                <option value="Kajiado">Kajiado</option>
                <option value="Meru">Meru</option>
                <option value="Nyeri">Nyeri</option>
              </select>
            </ol>
            <ol>
              <h5>Number</h5>
              <input
                type="number"
                placeholder="Enter your number"
                required
                style={{
                  width: "200px",
                  height: "30px",
                  outline: "none",
                  padding: "1rem",
                  border: "solid  #2ecc71 2px",
                  borderRadius: "5px",
                }}
                onChange={handleSetPhoneNumber}
              />
            </ol>
          </div>

          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center",
              marginLeft:"-2rem"
            }}
          >
            <ol>
              <h5>Password</h5>
              <input
                type="password"
                placeholder="password"
                required
                maxLength={10}
                minLength={4}
                style={{
                  width: "200px",
                  height: "30px",
                  outline: "none",
                  padding: "1rem",
                  border: "solid  #2ecc71 2px",
                  borderRadius: "5px",
                }}
                onChange={handleSetPassword}
              />
            </ol>
            <ol>
              <h5 style={{ marginLeft: "2rem" }}>Confirm Password</h5>
              <input
                type="password"
                placeholder=" confirm password"
                required
                maxLength={10}
                minLength={4}
                style={{
                  width: "200px",
                  height: "30px",
                  outline: "none",
                  padding: "1rem",
                  border: "solid  #2ecc71 2px",
                  borderRadius: "5px",
                  marginLeft: "2rem",
                }}
                onChange={handleSetConfirmPassword}
              />
            </ol>
          </div>

          <button type="submit" onClick={handleSubmitProfile} style={{width:'200px', display:'flex', justifyContent:'center',paddingTop:'1rem', marginLeft:'10rem',marginTop:'2rem'}}> Update</button>
          </form>
                 

          <div class="social-icons">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
