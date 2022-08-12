import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const pages = [{text:"About me", link:"#aboutme"}, {text:"Portfolio", link:"#portfolio"},{text:"Skills", link:"#skills"} ,{text:"Contact", link:"#contact"}];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List >
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
              
              <Link href={page.link}  color="inherit" underline="always" > <ListItemText>{page.text}</ListItemText> </Link> 
               
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;