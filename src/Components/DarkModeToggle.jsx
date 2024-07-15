/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const DarkModeToggle = ({ toggleTheme, light }) => {
  const [isDarkMode, setDarkMode] = useState(!light);

  useEffect(() => {
    setDarkMode(!light);
  }, [light]);

  const handleToggle = (checked) => {
    setDarkMode(checked);
    toggleTheme();
  };

  return (
    <DarkModeSwitch
      style={{
        marginTop: "15px",
      }}
      checked={isDarkMode}
      onChange={handleToggle}
      size={24}
      sunColor="white"
    />
  );
};

export default DarkModeToggle;
