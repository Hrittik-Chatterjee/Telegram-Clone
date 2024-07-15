// HamburgerMenu.jsx (updated)

import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
// import { useThemeContext } from "../Context/ThemeContex";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, Divider } from "@mui/material";
import ProfileCard from "./ProfileCard";

const HamburgerMenu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Optional: Center align items

        width: "300px", // Optional: Adds space between items
      }}
    >
      <ProfileCard />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            marginBottom: "-10px",
            gap: "20px",
          }}
        >
          <AccountCircleOutlinedIcon /> <h6>My Profile</h6>
        </li>
        <Divider
          sx={{
            borderColor: "#303134",
            width: "300px",
          }}
        />

        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            gap: "20px",
            marginBottom: "-25px",
            marginTop: "-10px",
          }}
        >
          <GroupOutlinedIcon /> <h6>New Group</h6>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            gap: "20px",
            marginBottom: "-25px",
          }}
        >
          <PersonOutlineOutlinedIcon /> <h6>Contacts</h6>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            gap: "20px",
            marginBottom: "-25px",
          }}
        >
          <CallOutlinedIcon /> <h6>Calls</h6>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            gap: "20px",
            marginBottom: "-25px",
          }}
        >
          <PersonPinCircleOutlinedIcon /> <h6>People Nearby</h6>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            gap: "20px",
            marginBottom: "-25px",
          }}
        >
          <BookmarkBorderOutlinedIcon /> <h6>Saved Messages</h6>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            gap: "20px",
          }}
        >
          <SettingsOutlinedIcon /> <h6>Settings</h6>
        </li>
        <Divider
          sx={{
            borderColor: "#303134",
            width: "300px",
          }}
        />
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            gap: "20px",

            marginTop: "-8px",
          }}
        >
          <PersonAddOutlinedIcon /> <h6>Invite Friends</h6>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            marginTop: "-30px",

            gap: "20px",
          }}
        >
          <HelpOutlineOutlinedIcon /> <h6>Telegram Features</h6>
        </li>
      </ul>
    </Box>
  );
};

export default HamburgerMenu;
