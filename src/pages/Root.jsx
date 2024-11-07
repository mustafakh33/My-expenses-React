import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../MUI-Components/Appbar";
import Drawerr from "../MUI-Components/Drawerr";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getDesignTokens } from "../style/MyTheme";

const drawerWidth = 240;

const Root = () => {
  const [noneORblock, setnoneORblock] = useState("none");
  const [drawerType, setDrawerType] = useState("permanent");
  const [mode, setMyMode] = useState(
    localStorage.getItem("currentMode") || "light"
  );

  const showDrawer = () => {
    setDrawerType("temporary");
    setnoneORblock("block");
  };

  const hideDrawer = () => {
    setDrawerType("permanent");
    setnoneORblock("none");
  };

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar
        {...{showDrawer,drawerWidth}}
         />
        <Drawerr
        {...{hideDrawer,drawerType,noneORblock,setMyMode,drawerWidth}}
        />

        <Box
          component="main"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
