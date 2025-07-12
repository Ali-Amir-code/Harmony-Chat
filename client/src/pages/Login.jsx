import { useNavigate } from "react-router";

import {
  useTheme,
  Typography,
  Box,
  TextField,
  Button,
  Divider,
} from "@mui/material";

import Form from "../components/Form";

import { handleLogin } from "../services/login";

export default function Login() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100vw"}
        height={"90vh"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          padding={2}
          sx={{
            backdropFilter: "blur(5px) saturate(200%)",
            WebkitBackdropFilter: "blur(5px) saturate(200%)",
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.5)"
                : "rgba(104, 104, 104, 0.5)",
            borderRadius: "12px",
            border: "1px solid rgba(209, 213, 219, 0.3)",
          }}
        >
          <Typography variant="h3">Login To Harmony Chat</Typography>
          <Divider />
          <Form onSubmit={e => handleLogin(e, navigate)}>
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              fullWidth
              required={true}
              slotProps={{
                htmlInput: {
                  pattern: ".*\\S.*",
                  title: "This field cannot be blank or just spaces.",
                },
              }}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              required={true}
            />
               <Typography
                id="userInfoText"
                variant="body1"
                color="error"
                sx={{
                  textAlign: "center",
                  WebkitTextStroke: ".2px Black",
                }}
              >
              </Typography>
            <Button
              fullWidth
              variant="contained"
              sx={{ 
                marginTop: 2,
              }}
              type="submit"
            >
              Log In
            </Button>
          </Form>
          <Typography variant="body2">New to Harmony Chat?? </Typography>{" "}
          <Button color="initial" onClick={() => navigate("/register")}>
            Register Here
          </Button>
        </Box>
      </Box>
    </>
  );
}
