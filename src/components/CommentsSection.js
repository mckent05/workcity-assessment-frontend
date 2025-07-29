import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const CommentsSection = ({ comments, currentUserId }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
        Comments
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          minHeight: "200px",
        }}
      >
        {comments && comments.length > 0 ? (
          comments.map((comment) => {
            const isCurrentUser = comment.user.id === currentUserId;

            return (
              <Box
                key={comment.id}
                sx={{
                  display: "flex",
                  justifyContent: isCurrentUser ? "flex-end" : "flex-start",
                  width: "100%",
                }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    maxWidth: "75%",
                    p: 2,
                    bgcolor: isCurrentUser ? "#f9a10910" : "#f0f0f0",
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: isCurrentUser ? "flex-end" : "flex-start",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "bold",
                      mb: 0.5,
                      color: "text.secondary",
                    }}
                  >
                    {comment.user.role === "agent"
                      ? `Agent-${comment.user.username}`
                      : comment.user.username}
                  </Typography>
                  <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
                    {comment.content}
                  </Typography>
                </Paper>
              </Box>
            );
          })
        ) : (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            No comments yet.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default CommentsSection;
