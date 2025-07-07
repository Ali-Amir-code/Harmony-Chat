import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import GradientText from "../components/GradientText";
import CustomProgress from "../components/CustomProgress";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";

export default function Welcome() {
  let navigate = useNavigate()
  const [label, setLabel] = useState("Analyzing...")
  const [progressType, setProgressType] = useState("gradientContinous")
  const [progressValue, setProgressValue ]= useState(0)
  useEffect(() => {
    // if(localStorage.getItem('auth')){
    if (true) {
      setLabel('Reading Messages...')
      setProgressType('percentage')
      setTimeout(() => {
        setProgressValue(50)
      }, 2000);
      setTimeout(() => {
        setProgressValue(100)
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
        <Typography variant="h3">
          Welcome To <GradientText>Harmony Chat</GradientText>
        </Typography>
      </Slide>
      <CustomProgress label={label} type={progressType} value={progressValue}/>
    </Box>
  );
}
