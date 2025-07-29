import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postTicketComment } from "../store/tickets/thunkCreators";
import { Box, TextField, IconButton, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const CommentBox = ({ ticketId }) => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = async () => {
    if (!content.trim()) return;

    try {
      await dispatch(postTicketComment({ ticketId, content })).unwrap();
      setContent("");
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add a Comment
      </Typography>
      <Box display="flex" alignItems="center">
        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="Type your message..."
          variant="outlined"
          value={content}
          onChange={onChange}
          sx={{ mr: 2 }}
        />
        <IconButton
          onClick={onSubmit}
          sx={{
            backgroundColor: "#f9a109",
            color: "white",
            "&:hover": {
              backgroundColor: "#e78f00",
            },
            height: 48,
            width: 48,
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default CommentBox;
