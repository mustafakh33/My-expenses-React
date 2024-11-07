import React from "react";
import {
  Drawer,
  List,
  Divider,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListItem,
  Box,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useLocation } from 'react-router-dom';

const Drawerr = ({ drawerWidth, setMyMode ,noneORblock ,drawerType,hideDrawer}) => {


  const navigate = useNavigate();
  const theme = useTheme();
  const currentLocation = useLocation();

  const myList = [
    {text:"Home", icon: <HomeIcon /> , pathname: "/"},
    {text:"Create", icon: <CreateIcon /> , pathname: "/create"},
    {text:"Profile", icon: <PersonIcon /> , pathname: "/profile"},
    {text:"Settings", icon: <SettingsIcon /> , pathname: "/settings"},
  ];

  return (
    <Box component="nav" >
      <Drawer
        sx={{
          display: {xs: noneORblock , sm:"block"},
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant= {drawerType}      
        anchor="left"
        open= {true}
        onClose={()=>{
          hideDrawer();
        }}
      >
        <List>
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: "14px",
            }}
            disablePadding
          >
            <IconButton
              onClick={() => {
                localStorage.setItem("currentMode",theme.palette.mode === "light" ? "dark" : "light");
                setMyMode(theme.palette.mode === "light" ? "dark" : "light");
              }}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon sx={{ color: "orange" }} />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </ListItem>
          <Divider />


        {myList.map((item,index)=>{
          return(
            <ListItem 
            key={index}
          sx={{bgcolor: currentLocation.pathname === item.pathname ? theme.palette.favColor.main : null }}
          disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(`${item.pathname}`);
              }}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
          )
        })}
          

          {/* <ListItem
          sx={{bgcolor: currentLocation.pathname === '/create'? theme.palette.favColor.main : null }}
           disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/create");
              }}
            >
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/profile");
              }}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/settings");
              }}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
*/}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/logout");
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem> 


          
        </List>
      </Drawer>
    </Box>
  );
};

export default Drawerr;
