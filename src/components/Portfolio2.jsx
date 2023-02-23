import React from "react";
import { Typography, Box, Container } from "@mui/material";
import styles from "./styles/portfolio.module.css";
import Grid from "@mui/material/Grid";
import Tmdbsvg from "./Tmdbsvg";
import Coffeels from "./Coffeels";
import Morty from "./Morty"
import {
  useTranslation
} from "react-i18next"
import useMediaQuery from "@mui/material/useMediaQuery";

const Portfolio = () => {
  const matches = useMediaQuery("(min-width:900px)");
  const[t, i18n] = useTranslation("global")
  return (
    <>
    
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
        <Typography variant="h2" ml={3}align={"center"} color={"white"}>
        {t("portfolio.text")} 
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            container
            justifyContent={"center"}
            align={"center"}
            sx={{ marginLeft: "2%" }}
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
        
            {/* <Grid item xs={12} md={3} sm={12}>
              <div className={matches?"card":"cardmovil"}>
                <div className="card-info">
                  <Ecommerce className="svgTmdb" />

                  <p className="title">E-COMMERCE</p>
                </div>
              </div>
            </Grid> */}
            <Grid item xs={12} md={3} sm={12}>
            <a href="https://www.youtube.com/watch?v=9tY8vwYSOBg">
              <div className={matches?"card":"cardmovil"}>
                <div className="card-info">
                  <Coffeels className="svgTmdb" />

                  <p className="title">COFFEELS <br/> Deploy <br/> ¡Coming soon!</p>
                </div>
              </div>
              </a>
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
