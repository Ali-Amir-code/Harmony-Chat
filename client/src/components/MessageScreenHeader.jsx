import { Box, Typography, Avatar, useTheme } from '@mui/material'

export default function MessageScreenHeader() {
  const theme = useTheme()
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      p: 2,
      borderBottom: '1px solid #ccc',
      backgroundColor: theme.palette.mode === 'dark' ? '#011738' : '#FFF8D1'
    }}>
      <Avatar src="/avatar.jpg" />
      <Box>
        <Typography variant="subtitle1">Ali Amir</Typography>
        <Typography variant="caption" color="text.secondary">Online</Typography>
      </Box>
    </Box>
  )
}
