import React from "react";
import SocialMediaComp from'./SocialMediaComp'

function FooterComp() {
  return (
    
      <>
    <footer>
      <div class="main-content">
        <div class="left box">
          <h2>Follow Us</h2>
          <div class="content">
            <p>Follow Us on our social media platforms</p>
           <SocialMediaComp/>
          </div>
        </div>
        
        <div class="right box">
          <h2>Join Our News Letter</h2>
          <div class="content">
            <form action="#">
              <div class="email">
                <div class="text">Email *</div>
                <input type="email" required></input>
              </div>
              
              <div class="btn">
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="bottom">
        <center>
          <span class="credit">Created By <a href="">Fusion Opps</a> | </span>
          <span class="far fa-copyright"></span><span> 2024 All rights reserved.</span>
        </center>
      </div>
    </footer>
 
      </>
   
  );
}

export default FooterComp;
