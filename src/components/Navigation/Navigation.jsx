import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUserName } from 'redux/authSlice';
import NavigationLogin from 'components/NavigationLogin/NavigationLogin';
import NavigationSignup from 'components/NavigationSignup/NavigationSignup';
import NavigationLogout from 'components/NavigationLogout/NavigationLogout';
import { Link } from 'components/Navigation/Navigation.styled'

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Link to="/" end>
              Home
            </Link>
            {!isLoggedIn && (
              <Box sx={{
                flexGrow: 1,
                display: { md: 'flex', justifyContent: 'flex-end' },
              }}>
                <NavigationLogin />
                <NavigationSignup />
              </Box>
            )}
            {isLoggedIn && (
              <>
              <Link to="/contacts" >
              Contacts
            </Link>
            <Box sx={{
                flexGrow: 1,
                display: { md: 'flex', gap: "20px", justifyContent: 'flex-end', alignItems: 'center' },
              }}>
                <h3>Welcome, {userName}</h3>
                <NavigationLogout />
                </Box>
              </>
            )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;
