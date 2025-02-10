import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import ListItemButton from "@mui/material/ListItemButton";
import Button from "@mui/material/Button";

function Form() {
  return (
    <>
    <br />
    <br />
    <div class="container">
      <div class="content">
        <div class="left-side">
          <div class="address details">
            <i class="fas fa-map-marker-alt"></i>
            <div class="topic">Address</div>
            <div class="text-one">Nairobi,Kenya</div>
            <div class="text-two">Kasarani</div>
          </div>
          <div class="phone details">
            <i class="fas fa-phone-alt"></i>
            <div class="topic">Phone</div>
            <div class="text-one">+254718671256</div>
            {/* <div class="text-two">+0096 3434 5678</div> */}
          </div>
          <div class="email details">
            <i class="fas fa-envelope"></i>
            <div class="topic">Email</div>
            <div class="text-one">support.mobibin@gmail.com</div>
            {/* <div class="text-two">info.codinglab@gmail.com</div> */}
          </div>
        </div>
        <div class="right-side">
          <div class="topic-text">Send us a message</div>
          <p>
            If you have any inquiry please feel free to reach or send your massage in the form below.
            
          </p>
          <form action="#">
            <div class="input-box">
              <input type="text" placeholder="Enter your name"></input>
            </div>
            <div class="input-box">
              <input type="text" placeholder="Enter your email"></input>
            </div>
            <div class="input-box message-box">
              <textarea
                name=""
                id=""
                placeholder="Type your massage here"
              ></textarea>
            </div>
            <div class="button">
              <input type="button" value="Send Now"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Form;
