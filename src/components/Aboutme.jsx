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
        id={"aboutme"}
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
           
          
            <Grid item sm={6} xs={12}>
            <Typography align={"center"} variant="h2">
               About me
              </Typography>
              <Typography align={"center"} >
             Hi, My name is Edgar lagos. Am Responsible, proactive and with a positive attitude. I like to train myself in what I do, and above all work as a team. As I was doing a course on graphic design I was struck by web development and mobile applications, for this reason, I decided to do the platform 5 bootcamp in order to graduate from full stack my goal is to perfect myself in my favorite area, front end, and enjoy the journey learning and implementing all my acquired knowledge
        
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Aboutme;
