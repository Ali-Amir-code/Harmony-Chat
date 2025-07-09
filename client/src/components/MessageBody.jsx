import { Box, Typography } from "@mui/material";

const messages = [
  { id: 1, text: "Hey Ali!", type: "received" },
  { id: 2, text: "Hi there! Whats up?", type: "sent" },
  { id: 3, text: "Im building my chat app UI!", type: "received" },
  { id: 1, text: "Hey Ali!", type: "received" },
  { id: 2, text: "Hi there! Whats up?", type: "sent" },
  { id: 3, text: "Im building my chat app UI!", type: "received" },
  { id: 1, text: "Hey Ali!", type: "received" },
  { id: 2, text: "Hi there! Whats up?", type: "sent" },
  { id: 3, text: "Im building my chat app UI!", type: "received" },
  { id: 1, text: "Hey Ali!", type: "received" },
  { id: 2, text: "Hi there! Whats up?", type: "sent" },
  { id: 3, text: "Im building my chat app UI!", type: "received" },
  { id: 1, text: "Hey Ali!", type: "received" },
  { id: 2, text: "Hi there! Whats up?", type: "sent" },
  { id: 3, text: "Im building my chat app UI!", type: "received" },
  { id: 1, text: "Hey Ali!", type: "received" },
  { id: 2, text: "Hi there! Whats up?", type: "sent" },
  { id: 3, text: "Im building my chat app UI!", type: "received" },
  { id: 1, text: "Hey Ali!", type: "received" },
  { id: 2, text: "Hi there! Whats up?", type: "sent" },
  { id: 3, text: "Im building my chat app UI!", type: "received" },
  { id: 1, text: "Hey Ali!", type: "received" },
  { id: 2, text: "Hi there! Whats up?", type: "sent" },
  { id: 3, text: "Im building my chat app UI!", type: "received" },
  { id: 1, text: "Hey Ali!", type: "received" },
  { id: 2, text: "Hi there! Whats up?", type: "sent" },
  { id: 3, text: "Im building my chat app UI!", type: "received" },
  { id: 1, text: "Hey Ali!", type: "received" },
  { id: 2, text: "Hi there! Whats up?", type: "sent" },
  { id: 3, text: "Im building my chat app UI!", type: "received" },
  { id: 1, text: "Hey Ali!", type: "received" },
  { id: 2, text: "Hi there! Whats up?", type: "sent" },
  { id: 3, text: "Im building my chat app UI!", type: "received" },
  { id: 1, text: "Hey Ali!", type: "received" },
  { id: 2, text: "Hi there! Whats up?", type: "sent" },
  { id: 3, text: "Im building my chat app UI!", type: "received" },
  { id: 1, text: "Hey Ali!", type: "received" },
  { id: 2, text: "Hi there! Whats up?", type: "sent" },
  { id: 3, text: "Im building my chat app UI!", type: "received" },
  { id: 1, text: "Hey Ali!", type: "received" },
  { id: 2, text: "Hi there! Whats up?", type: "sent" },
  { id: 3, text: "Im building my chat app UI!", type: "received" },
  { id: 1, text: "Hey Ali!", type: "received" },
  { id: 2, text: "Hi there! Whats up?", type: "sent" },
  { id: 3, text: "Im building my chat app UI!", type: "received" },
  { id: 1, text: "Hey Ali!", type: "received" },
  { id: 2, text: "Hi there! Whats up?", type: "sent" },
  { id: 3, text: "Im building my chat app UI!", type: "received" },
];

export default function MessageBody() {
  return (
    <Box
      sx={{
        flex: 1,
        p: 2,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {messages.map((msg) => (
        <Box
          key={msg.id}
          sx={{
            alignSelf: msg.type === "sent" ? "flex-end" : "flex-start",
            backgroundColor: msg.type === "sent" ? "#dcf8c6" : "#fff",
            color: "#000",
            p: 1.5,
            borderRadius: 2,
            maxWidth: "75%",
          }}
        >
          <Typography variant="body2" color="inherit">
            {msg.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
