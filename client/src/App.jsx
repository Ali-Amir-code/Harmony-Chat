import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* Main content area that can scroll if content overflows */}
        <Box sx={{ flex: 1, overflowY: "auto" }}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home/*" element={<Home />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
