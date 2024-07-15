/* eslint-disable react/prop-types */
import { ListItem, ListItemText } from "@mui/material";

const Message = ({ text }) => {
  return (
    <ListItem>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default Message;
