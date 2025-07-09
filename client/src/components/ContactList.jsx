import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import ContactCard from "./ContactCard";

export default function ContactList() {
  const theme = useTheme();
  const oppositeColor = theme.palette.mode === "dark" ? "#FFF0A0" : "#0A192F";
  return (
    <>
      <Container
        sx={{
          padding: "0px !important",
          border: `1px solid ${oppositeColor}`,
          borderRadius: "8px",
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Contacts</Typography>
        <Box  width="100%" borderTop={`1px solid ${oppositeColor}`} overflow={'auto'} paddingBottom={5}>
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </Box>
      </Container>
    </>
  );
}
