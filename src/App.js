import React from "react";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HeroSection from "./components/HeroSection";
import { Box } from "@mui/material";
import CakeSection from "./components/CakeSection";
import ContactUs from "./components/ContactUs";

const theme = createTheme({
  palette: {
    primary: {
      main: "#864313",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar></Navbar>
      <Box sx={{ mx: "40px" }}>
        <HeroSection></HeroSection>
        <CakeSection></CakeSection>
        <ContactUs></ContactUs>
      </Box>
    </ThemeProvider>
  );
}

export default App;
