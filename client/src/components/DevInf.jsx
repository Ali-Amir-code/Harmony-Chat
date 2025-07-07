import Typography from "@mui/material/Typography";
import GradientText from "./GradientText";

export default function DevInf() {
  return (
    <Typography variant="body1">
      Developed by{" "}
      <GradientText fontSize="23px">
        <a
          href="https://github.com/ali-amir-code"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          Ali Amir
        </a>
      </GradientText>
    </Typography>
  );
}
