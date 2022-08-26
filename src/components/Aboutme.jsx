import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import styles from "./styles/aboutme.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Aboutme = () => {
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
                <Typography align={"center"} variant="h2">
                  About me
                </Typography>

                <Typography align={"center"}>
                  Hi, I'am Edgar Lagos. I consider myselft as a responsible,
                  proactive and positive person. I learn new things all the
                  time, and I enjoy working as a team. I studied a course on
                  graphical design and that's why I decided to focus more on web
                  development. A few months later, I took a course on Plataforma
                  5 to become a Full Stack Developer. My goals are to work as a
                  Front-End Developer, join the path and apply everything I
                  know.
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
