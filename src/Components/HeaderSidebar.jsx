/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Drawer, IconButton, TextField, Typography } from "@mui/material";
import HamburgerMenu from "./HamBurgerMenu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const HeaderSidebar = ({ toggleSidebar }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showBackButton, setShowBackButton] = useState(false);

  const startXRef = useRef(null);

  const handleTouchStart = (event) => {
    startXRef.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    if (!startXRef.current) return;
    const currentX = event.touches[0].clientX;
    if (startXRef.current - currentX > 50) {
      setDrawerOpen(false);
    }
  };

  const handleMouseDown = (event) => {
    startXRef.current = event.clientX;
  };

  const handleMouseMove = (event) => {
    if (!startXRef.current) return;
    const currentX = event.clientX;
    if (startXRef.current - currentX > 50) {
      setDrawerOpen(false);
      toggleSidebar(false);
    }
  };

  const handleMouseUp = () => {
    startXRef.current = null;
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
    setShowBackButton(false);
  };

  const toggleSearch = () => {
    setShowBackButton(!showBackButton);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {showBackButton ? (
        <IconButton
          onClick={toggleSearch}
          sx={{ color: "action.active", mr: 1 }}
        >
          <ArrowBackIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{ color: "action.active", mr: 1, marginTop: "10px" }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <HamburgerMenu />
      </Drawer>
      {isMobile && !showBackButton && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 26,
            marginTop: "10px",
          }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1, ml: "10px" }}>
            Telegram
          </Typography>
          <IconButton onClick={toggleSearch}>
            <SearchIcon />
          </IconButton>
        </Box>
      )}
      {isMobile && showBackButton && (
        <TextField
          fullWidth
          placeholder="Search"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <SearchIcon
                sx={{ color: "action.active", mr: 1, pointerEvents: "none" }}
              />
            ),
            sx: {
              borderRadius: "20px",
            },
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
      {!isMobile && (
        <TextField
          fullWidth
          placeholder="Search"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <SearchIcon
                sx={{ color: "action.active", mr: 1, pointerEvents: "none" }}
              />
            ),
            sx: {
              borderRadius: "20px",
            },
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
    </Box>
  );
};

export default HeaderSidebar;
