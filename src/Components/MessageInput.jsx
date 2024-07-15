import { Box, TextField, Button } from "@mui/material";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { blue } from "@mui/material/colors";

const MessageInput = () => {
  return (
    <Box display="flex" p="10px" borderTop="1px solid #ddd">
      <TextField fullWidth placeholder="Type a message" variant="outlined" />
      <Button variant="contained" color="primary">
        Send
      </Button>
      <KeyboardVoiceIcon
        sx={{
          color: "white", // Icon color
          backgroundColor: blue[600], // Background color
          borderRadius: "50%", // Rounded background
          padding: "8px", // Increased padding around the icon
          marginLeft: "8px", // Margin left
          marginTop: "3px", // Margin top
          fontSize: "50px", // Increased font size

          "&:hover": {
            background: blue[800],
          },
        }}
      />
    </Box>
  );
};

export default MessageInput;
