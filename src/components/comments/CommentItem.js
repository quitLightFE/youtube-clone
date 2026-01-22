import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { TimeAgoDistance } from "../VideoContainer";
import { Delete } from "@mui/icons-material";

export default function CommentItem({ comment, onDelete }) {
  return (
    <Box display={"flex"} gap={1}>
      <Avatar>{comment.userId[0].toUpperCase()}</Avatar>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        alignItems={"center"}
      >
        <Box>
          <Typography>
            @{comment.userId} {<TimeAgoDistance date={comment.createdAt} />}
          </Typography>
          <Typography variant="p">{comment.text}</Typography>
        </Box>
        <IconButton onClick={() => onDelete(comment.id)}>
          <Delete />
        </IconButton>
      </Box>
    </Box>
  );
}
