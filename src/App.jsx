import React from 'react';
import { Container, CssBaseline } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <Container maxWidth="false">
      <ResponsiveAppBar />
    </Container>
  );
}

export default App;
