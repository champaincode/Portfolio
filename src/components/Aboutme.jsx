import React from "react";
import { Typography, Box, Container, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import styles from "./styles/aboutme.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  useTranslation
} from "react-i18next"
import es from "../flags/espana (1).png"
import en from "../flags/reino-unido.png"

const Aboutme = () => {
  const[t, i18n] = useTranslation("global")
  const matches = useMediaQuery("(min-width:638px)");
  const query = useMediaQuery("(min-width:638px)");
  const queryContainer = useMediaQuery("(min-width:638px)");
  return (
    <>
      <Container
        maxWidth
        id={"aboutme"}
        className={
          queryContainer ? `${styles.containerPh}` : `${styles.containerPc}`
        }
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
            <Box
              className={
                matches ? `${styles.boxparentPc}` : `${styles.boxparentPh}`
              }
            >
              <Box className={styles.boxis}> </Box>
            </Box>
           
            <Grid item sm={6} xs={12}>
              <Box
                className={
                  query ? `${styles.boxtextpc}` : `${styles.boxtextph}`
                }
              > 
                 <Box sx={{display:"flex", justifyContent:"end"}}> 
                <Button onClick={() => i18n.changeLanguage("es")}><img  className="ES" src={es} alt="" />  </Button>
              <Button onClick={() => i18n.changeLanguage("en")}> <img  className="EN" src={en} alt="" /></Button>
              </Box>
                <Typography align={"center"} variant="h2">
                {t("aboutme.aboutme")}
                </Typography>
                
                <Typography align={"center"}>
                {t("aboutme.text")}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Aboutme;
