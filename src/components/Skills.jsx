import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "./styles/skills.module.css";
import { motion, useScroll } from "framer-motion";
import nodejs from ".././assets/icons/node-js.svg"
import js from ".././assets/icons/javascript.svg"
import material from ".././assets/icons/material-ui.svg"
import react from ".././assets/icons/reaccionar.svg"
import bootstrap from ".././assets/icons/bootstrap.svg"
import postgresql from ".././assets/icons/postgresql.svg"
import sequelize from ".././assets/icons/sequelize.svg"

const img = [js,react, material,bootstrap, nodejs,postgresql,sequelize]
const Skills = () => {





  return (
    <>
      <Container
        //hacer query900 incHeigh = 800px  finHeigh=1000px
        sx={{
          display: "flex",
         
          flexDirection: "column",
          height: "700px",
          justifyContent: "center",
        }}
      >
        {" "}
        <Typography
          variant="h2"
          className="Skilles"
          align={"center"}
          color={"secondary"}
        >
          Skills
        </Typography>
      <Box display={"flex"} >
          <Grid 
 container
justifyContent={"center"}
 spacing={20}>
      { img.map((imagen,i) => 

   
            <Grid item key={i} xs={5} md={1} sm={4} >
              <motion.img
              src={imagen}
                initial={{  rotate: 0 ,scale: 1}}
        
                transition={{ duration: 1}}
                whileInView={{ rotate: 720,scale: 2, y:100}}
                className="movimiento"
               
              />  
            </Grid>   )}
            
         
          </Grid>
          </Box>
      </Container>
    </>
  );
};

export default Skills;
