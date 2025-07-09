import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
export default function GradientText({
  children,
  fontSize = "inherit",
  isStroked = false,
  strokeSize = 1,
}) {
  const theme = useTheme()
  return (
    <>
      <Typography
        fontWeight="bold"
        fontSize={fontSize}
        variant="span"
        sx={{
          background: "-webkit-linear-gradient(#d4af37, #0A192F)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: isStroked ? `${strokeSize}px ${theme.palette.custom.contrastColor}`: 'none',
        }}
      >
        {children}
      </Typography>
    </>
  );
}
