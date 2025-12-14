import axios from "axios";

export const getVideos = async () => {
  try {
    const res = await axios.get(
      "https://api-json-youtube.onrender.com/videosData"
    );
    return { data: res.data, isError: false };
  } catch (error) {
    return { isError: true };
  }
};
