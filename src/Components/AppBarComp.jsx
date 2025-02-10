import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, colors } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom"; 

function AppBarComp() {


  return (
    <Box >
      <AppBar >
        <Box id="nav-bar"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#483019",
            paddingLeft: "15px",
          }}
        >
          <Link to="/"><img src={logo} alt="Logo" width={150} /></Link>
          <Box id="nav-links"
            sx={{
              display: "flex",
              justifySelf: "right",
              gap: "2rem",
              marginRight: "15px",
              
            }}
          >
          
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1rem",
                marginTop:"0.7rem"
              }}
            >
              Home
            </Link>
            <Link
              to="/service"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1rem",
                marginTop:"0.7rem"
              }}
            >
              Service
            </Link>
            <Link
              to="/contact"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1rem",
                marginTop:"0.7rem"
              }}
            >
              Contact
            </Link>

            <Stack spacing={2} direction="row">
              <Link to="/login"
                variant="contained"
                style={{
                  background: "#59b844",
                  color:'white',
                  paddingTop:'0.5rem',
                  textDecoration:'none',
                  borderRadius:'1rem',
                  width:'140px',
                  height:'50px',
                  display:'flex',
                  justifyContent:'center',
                  fontSize:'1.5rem'
                }}
              >
                Driver
              </Link>
            </Stack>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}

export default AppBarComp;
