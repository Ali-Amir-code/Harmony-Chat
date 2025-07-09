import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeModeProvider } from "./theme/ThemeContext.jsx";
import { Box } from "@mui/material";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeModeProvider>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
          transition: "background-color 0.4s ease, color 0.4s ease", // 👈 Smooth transition
        }}
      >
        <App />
      </Box>
    </ThemeModeProvider>
  </StrictMode>
);
