import { useMediaQuery, useTheme } from "@mui/material"
import Box from "@mui/material/Box"
import { Route, Routes, useLocation } from "react-router"
import ContactList from "../components/ContactList";
import MessageScreen from "../components/MessageScreen";
const Home = ({contacts}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const location = useLocation();
  const data = location.state?.data;

  return isMobile ? (
    <Routes>
      <Route path="" element={<ContactList />} />
      <Route path=":contactId" element={<MessageScreen />} />
    </Routes>
  ) : (
    <Box display="flex" width="100%" height="100%">
      <Box width="30%" borderRight="1px solid #ccc">
        <ContactList />
      </Box>
      <Box flex={1}>
        <MessageScreen />
      </Box>
    </Box>
  );
};

export default Home
