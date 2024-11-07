
import { grey } from "@mui/material/colors";
export const getDesignTokens = (mode) => ({
    palette: {
        // @ts-ignore
        mode,
        ...(mode === "light"
          ? {
              // palette values for light mode
              mustafa: {
                main: "#64748B",
              },
  
              favColor: {
                main: grey[300],
              },
            }
          : {
              // palette values for dark mode
              mustafa: {
                main: "teal",
              },
  
              favColor: {
                main: grey[800],
              },
            }),
      },
  });
  