import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import MyDrawer from "./components/MyDrawer";
import { useState } from "react";
import VideoContainer from "./components/VideoContainer";
import { videosData } from "./data/Data";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Watch from "./components/Watch";

const getTheme = (mode) => {
  const theme = createTheme({
    palette: {
      mode: (mode && "light") || "dark",
    },
  });
  return theme;
};

function App() {
  const [isLight, setIsLight] = useState(true);
  return (
    <ThemeProvider theme={getTheme(isLight)}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<MyDrawer isLight={isLight} setIsLight={setIsLight} />}
            >
              <Route index element={<VideoContainer videos={videosData} />} />
              <Route
                path="videos"
                element={<VideoContainer videos={videosData} />}
              />
              <Route path="watch/:id" element={<Watch />} />
            </Route>
            <Route
              path="*"
              element={
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  height={"100dvh"}
                  flexDirection={"column"}
                >
                  <Typography variant="h1">Not Found</Typography>
                  <Link to={"/"}>Home</Link>
                </Box>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
