import Typography  from "@mui/material/Typography";
export default function GradientText({children, fontSize = "inherit"}) {
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
        }}
      >
        {children}
      </Typography>
    </>
  );
}
