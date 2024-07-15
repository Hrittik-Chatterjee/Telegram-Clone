/* eslint-disable react/prop-types */
import { Box, List, ListItem, ListItemText, Divider } from "@mui/material";
import { useState, useEffect } from "react";

const fetchChats = async (page) => {
  const response = await fetch(
    `https://devapi.beyondchats.com/api/get_all_chats?page=${page}`
  );
  const data = await response.json();
  return data.data.data;
};

const ChatPreview = ({ page, onChatSelect }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchAllChats = async () => {
      const chatsFromApi = await fetchChats(page);
      setChats(chatsFromApi);
    };

    fetchAllChats();
  }, [page]);

  return (
    <Box sx={{ borderRight: "1px solid grey" }}>
      <List sx={{ width: "100%", maxWidth: 360 }}>
        {chats.map((chat) => (
          <div key={chat.id}>
            <ListItem
              alignItems="flex-start"
              button
              onClick={() => onChatSelect(chat.id)}
            >
              <ListItemText
                primary={`Chat with ${chat.creator.name}`}
                secondary={`${chat.status} (${chat.msg_count} messages)`}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    </Box>
  );
};

export default ChatPreview;
