import {
  Box,
  Button,
  useTheme,
  Tooltip,
  Typography,
  Badge,
  Avatar,
} from "@mui/material";

export default function ContactCard({
  imgSrc,
  name = "Ali Amir",
  lastMessageContent = "Here you will se the content of your last message",
  lastMessageTime = "Now",
  status = "ofline",
}) {
  const theme = useTheme();
  return (
    <>
      <Button
        color="initial"
        fullWidth
        sx={{
          border: "1px solid #ccc",
          background: theme.palette.custom.customShade,
        }}
      >
        <Box display={"flex"} flexDirection={"row"} width={"100%"} gap={1}>
          <Box>
            <Badge
              color="success"
              badgeContent={status === "online" ? " " : 0}
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Avatar src={imgSrc} />
            </Badge>
          </Box>
          <Box display={"flex"} flexDirection={"column"} width={"100%"}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box>
                <Typography variant="h6">{name}</Typography>
              </Box>
              <Box>
                <Typography variant="h6">{lastMessageTime}</Typography>
              </Box>
            </Box>
            <Box>
              <Tooltip title={lastMessageContent} placement="top">
                <Typography
                  noWrap
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: 200,
                  }}
                >
                  {lastMessageContent}
                </Typography>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Button>
    </>
  );
}
