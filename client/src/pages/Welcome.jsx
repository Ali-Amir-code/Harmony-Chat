import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import GradientText from "../components/GradientText";
import CustomProgress from "../components/CustomProgress";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import { useMediaQuery, useTheme } from "@mui/material";

export default function Welcome() {
    const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  let navigate = useNavigate();
  const [label, setLabel] = useState("Analyzing...");
  const [progressType, setProgressType] = useState("gradientContinous");
  const [progressValue, setProgressValue] = useState(0);
  useEffect(() => {
    // if(localStorage.getItem('auth')){
    if (true) {
      setLabel("Reading Messages...");
      setProgressType("percentage");
      setTimeout(() => {
        setProgressValue(50);
      }, 2000);
      setTimeout(() => {
        setProgressValue(100);
      }, 4000);
      // navigate('/home')
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
        <Typography
          variant="h3"
          fontSize={isMobile? '30px' : '50px'}
        >
          Welcome To <GradientText isStroked={true} strokeSize={0.5}>Harmony Chat</GradientText>
        </Typography>
      </Slide>
      <CustomProgress label={label} type={progressType} value={progressValue} />
    </Box>
  );
}
