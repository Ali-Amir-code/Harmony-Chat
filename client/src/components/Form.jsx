import Box from "@mui/material/Box";
export default function Form({ children, onSubmit }) {
  return (
    <>
      <Box
        component="form"
        autoComplete="off"
        width={"100%"}
        padding={2}
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        onSubmit={onSubmit}
      >
        {children}
      </Box>
    </>
  );
}
