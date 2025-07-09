import { Box, IconButton, TextField, useTheme } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function MessageInput() {
  const theme = useTheme()
  return (
    <Box sx={{
      display: 'flex',
      p: 2,
      borderTop: '1px solid #ccc',
      backgroundColor: theme.palette.mode === 'dark' ? '#011738' : '#FFF8D1'
    }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type a message"
        size="small"
      />
      <IconButton sx={{ ml: 1 }}>
        <SendIcon />
      </IconButton>
    </Box>
  );
}
