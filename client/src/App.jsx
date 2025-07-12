import { BrowserRouter, Routes, Route } from "react-router";

import { CssBaseline, Box } from "@mui/material";

import { AuthProvider } from "./contexts/AuthContext";

import Footer from "./components/Footer";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
