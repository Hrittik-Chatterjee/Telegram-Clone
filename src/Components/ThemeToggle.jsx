/* eslint-disable react/prop-types */

import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeToggle = ({ toggleTheme, light }) => {
  const theme = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      style={{ color: theme.palette.text.primary }} // Ensure button text color follows theme
      startIcon={light ? <LightModeIcon /> : <DarkModeIcon />}
    >
      Toggle Theme
    </Button>
  );
};

export default ThemeToggle;
