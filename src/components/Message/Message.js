import { Box } from "@mui/material";
import { Message as SemanticMessage } from "semantic-ui-react";

function Message({ text, positive }) {
  return (
    <SemanticMessage positive={positive} negative={!positive}>
      <Box sx={{ justifyContent: "center" }}>
        <SemanticMessage.Header>{text}</SemanticMessage.Header>
      </Box>
    </SemanticMessage>
  );
}

export default Message;
