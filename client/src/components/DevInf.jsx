import Typography from "@mui/material/Typography";
import GradientText from "./GradientText";

export default function DevInf() {
  return (
    <Typography variant="body1">
      Developed by{" "}
      <GradientText fontSize="20px" isStroked={true} strokeSize={0.1}>
        <a
          href="https://github.com/ali-amir-code"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Ali Amir
        </a>
      </GradientText>
    </Typography>
  );
}
