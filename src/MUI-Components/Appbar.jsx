import React from 'react'
import {Typography, Avatar, Link,Toolbar,AppBar, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Appbar = ({drawerWidth,showDrawer}) => {

  return (
    <div>
      <AppBar position="static" sx={{ width: {sm:  `calc(100% - ${drawerWidth}px)`}, ml:{sm: `${drawerWidth}px`} }}>
        <Toolbar>
        <IconButton
        onClick={()=>{
          showDrawer();
        }}
         sx={{
          display: {sm:"none"},
          mr:"10px",
        }}>
          <MenuIcon/>
        </IconButton>
          <Link
            underline="none"
            color="inherit"
            sx={{ flexGrow: 1, "&:hover":{fontSize:"16.5px"} }}
            href="/"
          >
            My expenses
          </Link>

          <Typography
            mr={2}
            variant="body1"
            color="inherit"
          >
            Mustafa Khaled
          </Typography>

          <Avatar
            
           sx={{ width: "37px", height: "37px" }}
            src="./images/me.jpg"
          />

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Appbar
