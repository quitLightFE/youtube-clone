import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { videosData } from "../data/Data";

export default function Watch() {
  const { id } = useParams();
  const video = videosData.find((v) => v.id === id);
  return (
    <Box p={0}>
      <iframe
        src={video.videoUrl}
        title={video.id}
        style={{ width: "100%", aspectRatio: 16 / 9, border: "none" }}
      />
      <Typography fontWeight={"bold"} variant="h6">
        {video.title}
      </Typography>
    </Box>
  );
}
