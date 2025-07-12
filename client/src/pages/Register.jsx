import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material";

import Form from "../components/Form";
import CustomProgress from "../components/CustomProgress";

import {
  handleRegister,
  handleConfirmPasswordChange,
} from "../services/register";

import { useNavigate } from "react-router";

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
          <Typography variant="h3">Register To Harmony Chat</Typography>
          <Divider />
          <Form onSubmit={(e) => handleRegister(e, navigate)}>
            <Box display={"flex"} gap={2}>
              <TextField
                id="name"
                label="Enter Your Name"
                variant="outlined"
                required={true}
                sx={{ width: "50%" }}
                slotProps={{
                  htmlInput: {
                    pattern: ".*\\S.*",
                    title: "This field cannot be blank or just spaces.",
                  },
                }}
              />
              <TextField
                id="username"
                label="Enter your Username"
                variant="outlined"
                required={true}
                sx={{ width: "50%" }}
                slotProps={{
                  htmlInput: {
                    pattern: ".*\\S.*",
                    title: "This field cannot be blank or just spaces.",
                  },
                }}
              />
            </Box>
            <TextField
              id="email"
              label="Enter Email Address"
              variant="outlined"
              fullWidth
              type="email"
              required={true}
            />
            <TextField
              id="password"
              label="Enter Password"
              variant="outlined"
              fullWidth
              type="password"
              required={true}
            />
            <TextField
              id="confirmPassword"
              label="Re-Enter Password"
              variant="outlined"
              fullWidth
              type="password"
              required={true}
              onChange={handleConfirmPasswordChange}
            />
            <Typography
              id="userInfoText"
              variant="body1"
              color="error"
              sx={{
                textAlign: "center",
                WebkitTextStroke: ".2px Black",
              }}
            ></Typography>
            <Button
              id="registerButton"
              fullWidth
              variant="contained"
              sx={{
                marginTop: 2,
              }}
              type="submit"
            >
              Register
            </Button>
          </Form>
          <Typography variant="body2">Already Registered??</Typography>{" "}
          <Button color="initial" onClick={() => navigate("/login")}>
            Login Here
          </Button>
        </Box>
      </Box>
    </>
  );
}
