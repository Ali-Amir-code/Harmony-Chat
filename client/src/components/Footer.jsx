import { Box, useTheme, Button, useMediaQuery } from "@mui/material";
import ThemeToggleButton from "./ThemeToggleButton";
import DevInf from "./DevInf";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 0,
        px: 2,
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        textAlign: "center",
        borderTop: `1px solid ${theme.palette.divider}`,
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Box
        maxWidth="false"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={isMobile ? 0 : 2}
      >
        <DevInf />
        <Box display={"flex"}>
          <Button>
            <SettingsIcon sx={{ color: theme.palette.text.primary }} />
          </Button>
          <Button>
            <NotificationsIcon sx={{ color: theme.palette.text.primary }} />
          </Button>
          <ThemeToggleButton />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
