/* eslint-disable react-refresh/only-export-components */
import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

import { blueGrey, grey } from "@mui/material/colors";
import { ThemeProvider, useThemeContext } from "./Context/ThemeContex.jsx";
const theme = createTheme({
  palette: {
    secondary: {
      main: blueGrey[800],
    },
    text: {
      primary: "#000000", // Setting text color to black
    },
  },
});
const themeLight = createTheme({
  palette: {
    background: {
      default: "#ffffff", // White background for light theme
    },
    text: {
      primary: "#240", // Dark text for light theme
    },
    primary: {
      main: blueGrey[800], // You can customize the primary color if needed
    },
    secondary: {
      main: blueGrey[700], // Secondary color
    },
  },
});

// Define the dark theme
const themeDark = createTheme({
  palette: {
    background: {
      default: grey[900], // Dark grey background for dark theme
      paper: grey[800], // Dark grey background for paper components
    },
    text: {
      primary: "#ffffff", // White text for dark theme
    },
    primary: {
      main: grey[600], // Grey primary color
    },
    secondary: {
      main: grey[500], // Grey secondary color
    },
  },
});

const Root = () => {
  const { light } = useThemeContext();
  const selectedTheme = light ? themeLight : themeDark;

  return (
    <React.StrictMode>
      <MuiThemeProvider theme={{ ...theme, ...selectedTheme }}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <Root />
  </ThemeProvider>
);
