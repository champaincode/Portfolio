import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button,Container, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const PostEmail = () => {
    const matches = useMediaQuery('(min-width:600px)');
    const query = useMediaQuery('(min-width:600px)');
    const navigate = useNavigate()
    const backhome = () => {
        navigate("/")
    }
  return (
    <Container
      maxWidth
      id="portfolio"
      sx={{
        display: "flex",
        background: "black",
        flexDirection: "column",
        height: "700px",
        justifyContent: "center",
      }}
    >
      {" "}
      
      <Typography variant={matches ?"h2":"h5"} align={"center"} color={"white"}>
        Thanks for contact me.
        <br />I will reply shortly{" "}
      </Typography>

      <Box >
      
      <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent:"center",
            
            paddingBottom: "35%",
            position: "relative",
          }}
        >  
          <img
            src="https://c.tenor.com/rdGtzT3tcOAAAAAd/homer-simpson-dialing.gif"
            width="50%"
            height="80%"
            style={{position:"absolute", marginTop:"50px"}}
            
    
    
          ></img>
           <Button sx={{color:"white",
            height:"80%",   }} className={query ? "butoncel" : "buttonpc"}onClick={backhome} variant="contained"    color="secondary" startIcon={<ArrowBackIcon/>}>Back to home</Button>  
        </div>
       
      </Box>
    </Container>
  );
};

export default PostEmail;
