import React from "react";
import { Typography, Box, Container } from "@mui/material";
import styles from "./styles/portfolio.module.css";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Button from '@mui/material/Button';



const Contact = () => {
  return (
    <>
      <Container
        maxWidth
        sx={{
          display: "flex",
          backgroundColor: "black",
          alignContent: "space-around",
          flexDirection: "column",
          height: "800px",
          justifyContent: "center",
        }}
      >
        {" "}
        <Typography variant="h2" align={"center"} color={"white"}>
          Contact
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                mt: 3,
                ml: 2,
                width: "25ch",
                display: "flex",
                justifyContent: "center",
              
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              color="secondary"
              id="standard-basic"
              label="Name"
              variant="standard"
              focused 
           
              className="changeletter"
            />
            <TextField
              color="secondary"
              id="standard-basic"
              label="Email Address"
              variant="standard"
              focused
            />
            <TextField
              color="secondary"
              id="standard-basic"
              label="Phone"
              variant="standard"
              focused
            />
            <TextField 
              sx={{color:"white"}}
          
              id="outlined-multiline-static"
              label="Message"
              color="secondary"
              multiline
              rows={4}
              focused
            /> <Button variant="contained"    color="secondary">Send</Button>
          </Box>
       
       
        </Box>  
      </Container>
    </>
  );
};

export default Contact;
