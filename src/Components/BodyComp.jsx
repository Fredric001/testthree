import React from 'react'
import {Box, Typography } from '@mui/material'
import truck from '../assets/truck.png'
import BookClientComp from './BookClientComp'
import { Link } from "react-router-dom"; 


function BodyComp() {
  return (
    <>
   
    <section class="body-section">
      <div class="hero">
        <h2> MobiBin <br />- Smart Waste Collection, Anytime,  Anywhere</h2>
        <p>
        Welcome to MobiBin, your trusted solution for convenient garbage collection services. 
         Book a truck with just a few clicks and let us handle your waste responsibly and efficiently. Whether it’s home, 
          office, or community cleanup, MobiBin is here to make waste management simple, eco-friendly, and reliable. 
           Say goodbye to the hassle—book your bin today!
        </p>
        <div class="buttons">
          <Link to="/clientorderpage" class="join">Account</Link>
        
        </div>
      </div>
      <div class="img">
        <img id='truck' src={truck} alt="hero image" />
      </div>
    </section>
 

    </>
  )
}

export default BodyComp
