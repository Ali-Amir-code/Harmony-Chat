import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Box display="flex" flexDirection="column" minHeight="100vh">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>
        <Footer />
      </Box>
    </>
  );
}

export default App;
