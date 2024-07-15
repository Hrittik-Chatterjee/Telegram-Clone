import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { useThemeContext } from "../Context/ThemeContex";

import DarkModeToggle from "./DarkModeToggle";

const ProfileCard = () => {
  const { light, toggleTheme } = useThemeContext();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: "	#24A1DE",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", mb: "10px", mt: "8px" }}
        >
          <Avatar
            sx={{
              bgcolor: red[500],

              mt: "10px",
              mr: "200px",
              ml: "15px",
            }}
            aria-label="recipe"
          >
            W
          </Avatar>

          {/* This box will take up the remaining space */}
          <IconButton aria-label="settings">
            <DarkModeToggle light={light} toggleTheme={toggleTheme} />
          </IconButton>
        </Box>
        <Box sx={{ ml: "-190px" }}>
          <Typography sx={{ fontSize: "0.8rem", color: grey[800] }}>
            Wardaddy
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "0.6rem", mb: "5px" }}
          >
            +88 01645607305
          </Typography>
        </Box>
      </Box>
      <Box /> {/* This box will take up the remaining space */}
    </Box>
  );
};

export default ProfileCard;
