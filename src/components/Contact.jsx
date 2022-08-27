import {useRef} from "react";
import { Typography, Box, Container } from "@mui/material";
import styles from "./styles/portfolio.module.css";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField"
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const navigate = useNavigate()
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7sy2z93', 'template_ywya11s', form.current, 'NlQoh6jawTPVi3jou')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          navigate("/esa/"+ form.current.name)
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <>
      <Container
      id={"contact"}
        maxWidth
        sx={{
          display: "flex",
          backgroundColor: "black",
  
          flexDirection: "column",
          height: "610px",
          justifyContent: "center",
        }}
      >
    
        <Typography variant="h2" align={"center"} color={"white"}>
          Contact
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
        
        <form ref={form} onSubmit={sendEmail} style={{display:"flex", flexDirection:"column",  alignContent: "space-around",}}>
            <TextField
            sx={{color:"white",mt:2}}
              color="secondary"
              id="standard-basic"
              label="Name"
              name="user_name"
              variant="standard"
              focused 
              required
              className="changeletter"
            />
             <TextField
            sx={{color:"white",mt:2}}
              color="secondary"
              id="standard-basic"
              label="Name of company"
              name="user_company"
              variant="standard"
              focused
            />
            <TextField
            sx={{color:"white",mt:2}}
              color="secondary"
              id="standard-basic"
              label="Email Address"
              variant="standard"
              name="user_email"
              required
              focused
            />
           
            <TextField 
              
              sx={{color:"white",mt:2}}
              id="outlined-multiline-static"
              label="Message"
              color="secondary"
              name="message"
              multiline
              rows={4}
              focused
            /> <Button sx={{color:"white",mt:2}} type="submit" value="Send" variant="contained"    color="secondary" endIcon={<SendIcon />}>Send</Button>
            </form>
          </Box>
       
       
   

      </Container>
    </>
  );
};

export default Contact;
