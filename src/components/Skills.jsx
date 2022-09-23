import React from "react";
import { Typography, Box, Container, Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion, useScroll } from "framer-motion";
import nodejs from ".././assets/icons/node-js.svg";
import js from ".././assets/icons/javascript.svg";
import material from ".././assets/icons/material-ui.svg";
import react from ".././assets/icons/reaccionar.svg";
import bootstrap from ".././assets/icons/bootstrap.svg";
import postgresql from ".././assets/icons/postgresql.svg";
import sequelize from ".././assets/icons/sequelize.svg";
import github from ".././assets/icons/github.svg"
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  useTranslation
} from "react-i18next"
import Tooltip from "@mui/material/Tooltip";

const img = [
  {
    tittle: "Javascript",
    icon: js,
    ref: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  {
    tittle: "React",
    icon: react,
    ref: "https://es.reactjs.org/",
  },
  {
    tittle: "Material ui",
    icon: material,
    ref: "https://mui.com/material-ui/getting-started/overview/",
  },
  {
    tittle: "Boostrap",
    icon: bootstrap,
    ref: "https://getbootstrap.com/docs/5.2/getting-started/introduction/",
  },
  {
    tittle: "Node js",
    icon: nodejs,
    ref: "https://nodejs.org/es/",
  },
  {
    tittle: "Postgresql",
    icon: postgresql,
    ref: "https://www.postgresql.org/",
  },
  {
    tittle: "Sequelize",
    icon: sequelize,
    ref: "https://sequelize.org/",
  },
  {
    tittle: "Git hub",
    icon: github,
    ref: "https://github.com/",
  },
  
];
const Skills = () => {
  const matches = useMediaQuery("(min-width:900px)");
  const[t, i18n] = useTranslation("global")
  return (
    <>
 
      <Container
        id={"skills"}
        className={matches ? "incHeigth" : "finHeight"}

      >
           <Typography
          variant="h2"
          className="Skilles"
          align={"center"}
         
          color={"secondary"}
        >
          {t("skills.text")}
        </Typography>
        
       
          <Grid container justifyContent={"center"} spacing={20} mb={15}>
            {img.map((imagen, i) => (
              <Grid item key={i} xs={5} md={1} sm={4}>
                <Link href={imagen.ref}>
                  <Tooltip title={imagen.tittle} placement={"top"} followCursor>
                    <Box>
                      <motion.img
                        src={imagen.icon}
                        initial={{ rotate: 0, scale: 1 }}
                        transition={{ duration: 1 }}
                        whileInView={{ rotate: 720, scale: 2, y: 100 }}
                        className="movimiento"
                      />
                    </Box>
                  </Tooltip>
                </Link>
              </Grid>
            ))}
          </Grid>
    
      </Container>
    </>
  );
};

export default Skills;
