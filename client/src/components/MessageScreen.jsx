import { Box } from '@mui/material';
import MessageScreenHeader from './MessageScreenHeader';
import MessageBody from './MessageBody';
import MessageInput from './MessageInput';

export default function MessageScreen() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100%',
      border: '1px solid #ccc',
      paddingBottom: 5
    }}>
      <MessageScreenHeader />
      <MessageBody />
      <MessageInput />
    </Box>
  );
}
