import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import TypeWriter from "./Typewriter";
import Link from "@mui/material/Link";
import DrawerComp from "./Drawer";
import Aboutme from './Aboutme'
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

const typeWriter = ["Edgar Lagos", "Full Stack Developer"];

const Header = () => {
  const [value, setValue] = useState();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ background: "black" }}>
        <Toolbar sx={{ display: "flex", flexDirection: "center" }}>
          {isMatch ? (
            <>
              <Typography className="elh1">
                Edgar Lagos <span>&#160;</span>
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Box className="typewriter-holder ">
                <Typography variant="p" className="elh1" align="center">
                  <TypeWriter data={typeWriter} />
                </Typography>
              </Box>

              <Tabs
                sx={{ width: "50%" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
               
                  <Tab label="About me"   href="#aboutme"/>
                  <Tab label="Portfolio"  href="#portfolio"/>
                  <Tab label="Skills"      href="#skills"  />
                  <Tab label="Contact" href="#contact" />
         
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
  <Aboutme/> 
 <Portfolio/> 
 <Skills/>

 <Contact/>
  <Footer/>

    </React.Fragment>
  );
};

export default Header;
