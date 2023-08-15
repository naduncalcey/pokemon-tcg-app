import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import StyleIcon from '@mui/icons-material/Style';
import DatasetIcon from '@mui/icons-material/Dataset';
import InfoIcon from "@mui/icons-material/Info";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const drawerContent = (
    <div>
      <List>
        <ListItem button component="a" href="/" onClick={toggleDrawer(false)}>
          <ListItemIcon>
            <StyleIcon />
          </ListItemIcon>
          <ListItemText primary="Card Search" />
        </ListItem>
        <ListItem button component="a" href="/set-search" onClick={toggleDrawer(false)}>
          <ListItemIcon>
            <DatasetIcon />
          </ListItemIcon>
          <ListItemText primary="Set Search" />
        </ListItem>
        <ListItem button component="a" href="/about" onClick={toggleDrawer(false)}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className="Header">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokemon TCG Search V1
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </div>
  );
}

export default Header;
