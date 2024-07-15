/* eslint-disable react/prop-types */
import { Box, Tabs, Tab } from "@mui/material";
import ChatPreview from "./Chats/ChatPreview";
import HeaderSidebar from "./HeaderSidebar";
import { useState } from "react";

const Sidebar = ({ onChatSelect }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: "100%", // Adjust to fit your design needs
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: { xs: "100%", sm: "30%" }, // 100% width for xs (extra small) screens, 30% width for sm (small) screens and up
        transition: "margin-left 0.3s ease",
        marginLeft: "0", // Adjust based on your sidebar width
        overflowX: "auto", // Allow horizontal scrolling if tabs overflow
      }}
    >
      <HeaderSidebar />
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="sidebar tabs"
        variant="scrollable" // Enable scrollable tabs
        scrollButtons="auto" // Show scroll buttons when tabs overflow
      >
        <Tab label="All" />
        <Tab label="Unread" />
        <Tab label="Pending" />
        <Tab label="Regular" />
        <Tab label="Contacts" />
        <Tab label="Important" />
      </Tabs>
      <Box sx={{ flex: 1, overflow: "auto" }}>
        <ChatPreview page={value + 1} onChatSelect={onChatSelect} />
      </Box>
    </Box>
  );
};

export default Sidebar;
