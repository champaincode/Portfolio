import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import styles from "./styles/aboutme.module.css";
import myphoto from "../assets/foto.jpg"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Aboutme = () => {
  return (
    <>
      <Container
        maxWidth
      
        sx={{
     
          height: "600px",
          display: "flex",
          justifyContent: "end",
          mixHeight: "50vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 3 }}
          >
          
              <Box className={styles.boxis}> </Box>
              {/* <img src={myphoto} width={"100%"} className={styles.myphoto} /> */}
          
            <Grid item sm={6} xs={12}>
            <Typography align={"center"} variant="h2">
               About me
              </Typography>
              <Typography align={"center"} >
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido usó
        
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Aboutme;
