import React from "react";
import { Box, Container, Typography, Divider, useTheme } from "@mui/material";
import ThemeToggleButton from "./ThemeToggleButton";
import DevInf from "./DevInf";
const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 0,
        px: 2,
        bgcolor: theme.palette.background.paper, // dynamic based on theme
        color: theme.palette.text.secondary, // auto-adjusts to theme
        textAlign: "center",
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box maxWidth="false" display={"flex"} alignItems={"center"} justifyContent={"space-between"} px={2}>
        <DevInf />
        <ThemeToggleButton />
      </Box>
    </Box>
  );
};

export default Footer;
