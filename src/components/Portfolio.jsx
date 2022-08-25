import React from "react";
import { Typography, Box, Container } from "@mui/material";
import styles from "./styles/portfolio.module.css";
import Grid from "@mui/material/Grid";
import Tmdbsvg from "./Tmdbsvg";
import Coffeels from "./Coffeels";
import Morty from "./Morty"
import Ecommerce from "./Ecommerce";
import useMediaQuery from "@mui/material/useMediaQuery";

const Portfolio = () => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <>
      <Container
        maxWidth
        id="portfolio"
        sx={{
          display: "flex",
          background: "black",
          alignContent: "space-around",
          flexDirection: "column",
          height: "800px",
          justifyContent: "center",
        }}
      >
        {" "}
        <Typography variant="h2" align={"center"} color={"white"}>
          Portfolio
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            container
            justifyContent={"center"}
            align={"center"}
            sx={{ marginLeft: "6%" }}
          > 
            <Grid item xs={12} md={3} sm={12}>
            <a href="https://deploy-front-tmdb.vercel.app/">
              <div className={matches?"card":"cardmovil"}>
                <div className="card-info">
                  <Tmdbsvg  className="svgTmdb" />
                  <p className="title">TMDB</p>
                </div>
               
              </div>
              </a>
            </Grid>
        
            <Grid item xs={12} md={3} sm={12}>
              <div className={matches?"card":"cardmovil"}>
                <div className="card-info">
                  <Ecommerce className="svgTmdb" />

                  <p className="title">E-COMMERCE</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3} sm={12}>
              <div className={matches?"card":"cardmovil"}>
                <div className="card-info">
                  <Coffeels className="svgTmdb" />

                  <p className="title">COFFEELS</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3} sm={12}>
            <a href="https://effulgent-sfogliatella-336aeb.netlify.app/">
              <div className={matches?"card":"cardmovil"}>
                <div className="card-info">
                  <Morty className="svgTmdb mortysvg" />

                  <p className="title">Rick and Morty <br/> API</p>
                </div>
              </div>
              </a>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Portfolio;
