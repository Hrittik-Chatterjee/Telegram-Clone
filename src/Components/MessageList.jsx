/* eslint-disable react/prop-types */
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Avatar,
} from "@mui/material";
import { useEffect, useState } from "react";

const fetchChatMessages = async (chatId) => {
  const response = await fetch(
    `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
  );
  const data = await response.json();
  return data.data;
};

const MessageList = ({ chatId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const messagesFromApi = await fetchChatMessages(chatId);
      setMessages(messagesFromApi);
    };

    if (chatId) {
      fetchMessages();
    }
  }, [chatId]);

  return (
    <Box flex="1" overflow="auto" p={2}>
      <List>
        {messages.map((message) => (
          <Box
            key={message.id}
            display="flex"
            justifyContent={message.sender_id === 1 ? "flex-end" : "flex-start"}
            mb={2}
          >
            <ListItem
              alignItems="flex-start"
              sx={{
                backgroundColor:
                  message.sender_id === 1 ? "#e0f7fa" : "#fff9c4",
                borderRadius: 2,
                maxWidth: "60%",
                alignSelf: message.sender_id === 1 ? "flex-end" : "flex-start",
              }}
            >
              <Box display="flex" flexDirection="column">
                <Box display="flex" alignItems="center">
                  <Avatar
                    alt={message.sender.name}
                    src="/static/images/avatar/1.jpg"
                  />
                  <Typography
                    sx={{
                      display: "inline",
                      fontWeight: "bold",
                      marginLeft: 1,
                    }}
                    component="span"
                    variant="body1"
                  >
                    {message.sender.name}
                  </Typography>
                </Box>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        padding: 1,
                        borderRadius: 1,
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {message.message}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        color: "text.secondary",
                        marginTop: 1,
                      }}
                      component="span"
                      variant="body2"
                    >
                      {new Date(message.created_at).toLocaleString()}
                    </Typography>
                  }
                />
              </Box>
            </ListItem>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default MessageList;
