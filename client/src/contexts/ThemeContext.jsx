import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import getThemeOptions from "../theme/theme";

const ThemeModeContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useThemeMode = () => useContext(ThemeModeContext);

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("mui-theme-mode");
    if (savedMode === "light" || savedMode === "dark") {
      setMode(savedMode);
    } else {
      // 👀 system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const systemMode = prefersDark ? "dark" : "light";
      setMode(systemMode);
      localStorage.setItem("mui-theme-mode", systemMode);
    }
  }, []);

  // 🎨 2. Build theme dynamically
  const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

  // 🔁 Toggle
  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mui-theme-mode", newMode);
  };

  // 🎯 Force to specific mode
  const setThemeMode = (desiredMode) => {
    if (desiredMode !== mode && ["light", "dark"].includes(desiredMode)) {
      setMode(desiredMode);
      localStorage.setItem("mui-theme-mode", desiredMode);
    }
  };

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme, setThemeMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
