import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material";

import GradientText from "../components/GradientText";
import Form from "../components/Form";
import CustomProgress from "../components/CustomProgress";

import axios from "axios";

import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const theme = useTheme();

  async function handleRegister(e) {
    e.preventDefault();
    const res = await axios.post("/api/auth/login", {
      username: "admin",
      password: "1234",
    });
    console.log(res.data);
  }

  function handleOldUser() {
    navigate("/login");
  }

  function handleUsernameChange(e){
    if(e.target.value.trim() === ''){
      document.getElementById('usernameProgress').style.display = 'none'
    }else{
      document.getElementById('usernameProgress').style.display = 'flex'
      
    }
  }

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
          <Typography variant="h3">
            Register To Harmony Chat
          </Typography>
          <Divider />
          <Form>
            <Box display={"flex"} gap={2}>
              <TextField
                id="name"
                label="Enter Your Name"
                variant="outlined"
                required={true}
                sx={{ width: "50%" }}
              />
              <TextField
                id="username"
                label="Enter your Username"
                variant="outlined"
                required={true}
                sx={{ width: "50%" }}
                onChange={handleUsernameChange}
              />
            </Box>
            <Box id="usernameProgress" display={'none'} flexDirection={'row-reverse'}>
              <CustomProgress size={20} label="Checking Username" type="gradientContinous"/>
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
            />
            <Button
              fullWidth
              variant="contained"
              sx={{
                marginTop: 2,
              }}
              type="submit"
              onClick={handleRegister}
            >
              Register
            </Button>
          </Form>
          <Typography variant="body2">Already Registered??</Typography>{" "}
          <Button color="initial" onClick={handleOldUser}>
            Login Here
          </Button>
        </Box>
      </Box>
    </>
  );
}
