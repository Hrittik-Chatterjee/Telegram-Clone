/* eslint-disable react/prop-types */
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const fetchSenderName = async (chatId) => {
  const response = await fetch(
    `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
  );
  const data = await response.json();
  const sender = data.data.find((message) => message.sender_id !== 1)?.sender;
  return sender ? sender.name : "Unknown"; // Return sender's name if found, otherwise default to "Unknown"
};

const HeaderChat = ({ chatId }) => {
  const [senderName, setSenderName] = useState("");

  useEffect(() => {
    const fetchName = async () => {
      const name = await fetchSenderName(chatId);
      setSenderName(name);
    };

    if (chatId) {
      fetchName();
    }
  }, [chatId]);

  return (
    <AppBar position="static" color="default">
      <Toolbar
        sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
      >
        <Typography variant="h6">{senderName}</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {senderName ? "Last seen recently" : ""}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderChat;
