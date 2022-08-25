import React from "react";
import { Typography, Box, Container, } from "@mui/material";
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
import useMediaQuery from "@mui/material/useMediaQuery";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const img = [{
  tittle:"Javascript",
  icon : js 
},
{
  tittle:"React",
  icon : react
},
{
  tittle:"Material ui",
  icon : material
},
{
  tittle:"Boostrap",
  icon : bootstrap
},
{
  tittle:"Node js",
  icon :  nodejs
},
{
  tittle:"Postgresql",
  icon :  postgresql
},
{
  tittle:"Sequelize",
  icon :  sequelize
},
  
]
const Skills = () => {
  const matches = useMediaQuery("(min-width:900px)");




  return (
    <>
      <Container id={"skills"}
       className={matches?"incHeigth":"finHeight"}
        //hacer query900 incHeigh = 800px  finHeigh=1000px
        sx={{
          display: "flex",
         
          flexDirection: "column",
      
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
              <Tooltip title={imagen.tittle}  followCursor  >

      <Box >
      <motion.img
              src={imagen.icon}
                initial={{  rotate: 0 ,scale: 1}}
        
                transition={{ duration: 1}}
                whileInView={{ rotate: 720,scale: 2, y:100}}
                className="movimiento"
               
              /> 
  </Box>
  
      
    </Tooltip>
              
            </Grid>   )}
            
         
          </Grid>
          </Box>
      </Container>
    </>
  );
};

export default Skills;
