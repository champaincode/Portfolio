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
                <Link
                  href="#aboutme"
                  color="inherit"
                  underline="none"
                  sx={{
                    "&:active": {
                      textDecoration: "red",
                    },
                  }}
                >
                  <Tab label="About me" />
                </Link>
                <Link href="#portfolio" color="inherit" underline="hover">
                  <Tab label="Portfolio" />
                </Link>

                <Link href="#skills" color="inherit" underline="hover">
                  <Tab label="Skills" />
                </Link>

                <Link href="#contact" color="inherit" underline="hover">
                  <Tab label="Contact" />
                </Link>
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
