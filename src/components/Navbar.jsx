import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Box
} from "@mui/material";
import TypeWriter from "./Typewriter";

import DrawerComp from "./Drawer";
const typeWriter = ["Edgar Lagos", "Full Stack Developer"];


const Header = () => {
  const [value, setValue] = useState();

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);



  return (
    <React.Fragment>
      <AppBar  position="sticky"sx={{ background: "black" }}>
        <Toolbar  sx={{ display:"flex", flexDirection:"center"}} >
       
          {isMatch ? (
            <>
              <Typography className="elh1">
                Edgar Lagos <span>&#160;</span>
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Box className="typewriter-holder " >
                <Typography variant="p" className="elh1"align="center" >
                <TypeWriter data={typeWriter} />
              </Typography>
              </Box>
       
          
              <Tabs
                sx={{width:"50%"}}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              > 
               
                <Tab label="About me"  />
       
               
                <Tab label="Portfolio" />
                <Tab label="Skills"  />
                <Tab label="Contact"   />
              </Tabs>

            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;