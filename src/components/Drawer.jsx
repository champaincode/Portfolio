import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  useTranslation
} from "react-i18next"
import MenuIcon from "@mui/icons-material/Menu";

const pages = [{text:"About me", link:"#aboutme"}, {text:"Portfolio", link:"#portfolio"},{text:"Skills", link:"#skills"} ,{text:"Contact", link:"#contact"}];
const DrawerComp = () => {
  const[t, i18n] = useTranslation("global")
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
              
              <a onClick={() => setOpenDrawer(false)} href={page.link}  > <ListItemText >{page.text}</ListItemText> </a> 
               
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