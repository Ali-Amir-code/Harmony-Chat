import * as React from "react";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography, Box } from "@mui/material";

export default function GradientCircularProgress({
  delay = 0,
  label = "",
  type = "continous",
  value = 0,
}) {
  const [loading, setLoading] = React.useState(false);
  const timerRef = React.useRef(undefined);
  React.useEffect(() => {
    timerRef.current = setTimeout(() => {
      setLoading(true);
    }, delay);

    return () => clearTimeout(timerRef.current);
  }, [delay]);
  if (type === "continous") {
    return (
      <>
        <Fade
          in={loading}
          style={{ transitionDelay: loading ? "800ms" : "0ms" }}
          unmountOnExit
        >
          <Box display="flex" alignItems="center" gap={2}>
            <CircularProgress />
            <Slide direction="up" in={loading}>
              <Typography>{label}</Typography>
            </Slide>
          </Box>
        </Fade>
      </>
    );
  } else if (type === "gradientContinous") {
    return (
      <>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#0A192F" />
            </linearGradient>
          </defs>
        </svg>

        {/* Animate entry */}
        <Fade
          in={loading}
          style={{ transitionDelay: loading ? "800ms" : "0ms" }}
          unmountOnExit
        >
          <Box display="flex" alignItems="center" gap={2}>
            <CircularProgress
              sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
            />
            <Slide direction="up" in={loading}>
              <Typography>{label}</Typography>
            </Slide>
          </Box>
        </Fade>
      </>
    );
  } else if (type === "percentage") {
    return (
      <>
        <Fade
          in={loading}
          style={{ transitionDelay: loading ? "800ms" : "0ms" }}
          unmountOnExit
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress variant="determinate" value={value} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="caption" component="div">
                  {`${Math.round(value)}%`}
                </Typography>
              </Box>
            </Box>
            <Slide direction="up" in={loading}>
              <Typography>{label}</Typography>
            </Slide>
          </Box>
        </Fade>
      </>
    );
  }
}
