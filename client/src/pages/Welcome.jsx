import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { Box, Slide, Typography, useMediaQuery, useTheme } from "@mui/material";

import GradientText from "../components/GradientText";
import CustomProgress from "../components/CustomProgress";

import { isValidUser } from "../services/userValidity";
import { getData } from "../services/setup";

export default function Welcome() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  let navigate = useNavigate();

  const [label, setLabel] = useState("Analyzing...");
  const [progressType, setProgressType] = useState("gradientContinous");
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    setLabel("Just a moment...");
    setProgressType("percentage");
    setProgressValue(0);
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setProgressValue(30);
      if (isValidUser(user)) {
        setProgressValue(40);
        setLabel("Loading Data...");
        const data =  getData(user);
        navigate("/home", {
          state: {
            data,
          },
        });
      } else {
        localStorage.removeItem("user");
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"90vh"}
      rowGap={2}
    >
      <Slide in direction="up" timeout={1000}>
        <Typography variant="h3" fontSize={isMobile ? "30px" : "50px"}>
          Welcome To{" "}
          <GradientText isStroked={true} strokeSize={0.5}>
            Harmony Chat
          </GradientText>
        </Typography>
      </Slide>
      <CustomProgress label={label} type={progressType} value={progressValue} />
    </Box>
  );
}
