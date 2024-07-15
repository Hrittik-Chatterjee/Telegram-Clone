/* eslint-disable react/prop-types */
import { Box, useMediaQuery } from "@mui/material";
import HeaderChat from "./HeaderChat";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const ChatWindow = ({ selectedChatId }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  if (isMobile) {
    return null;
  }
  return (
    <Box flex="1" display="flex" flexDirection="column">
      <HeaderChat chatId={selectedChatId} />
      <MessageList chatId={selectedChatId} />
      <MessageInput />
    </Box>
  );
};

export default ChatWindow;
