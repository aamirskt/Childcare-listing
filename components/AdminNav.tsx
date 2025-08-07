import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
  Stack,
} from '@mui/material';

const AdminNav: React.FC = () => {
  const router = useRouter();


  const handleLogout = () => {
    // Clear local storage and redirect to the login page
    localStorage.removeItem('user');
    localStorage.removeItem('profile_id');
    localStorage.removeItem('session');
    router.push('/login');
  };

  return (
    <CssBaseline>
      <AppBar position="sticky">
        <Container>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>
            <Stack display={'flex'} direction={'row'} justifyContent={'center'} spacing={2}>
              <Link href="/adminblog" style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold', paddingRight: 4, textDecoration: 'none' }}>
                Blog Form
              </Link>
              {/* <Button component={Link} to="/city-content" color="inherit">
              City Content
            </Button> */}
              <Link href="/admin" style={{ color: '#fff', textDecoration: 'none',fontSize: '14px', fontWeight: 'bold' }}>
                City Content
              </Link>
            <Button onClick={handleLogout}  style={{ color: '#fff', textDecoration: 'none',fontSize: '14px', fontWeight: 'bold' }}>
              Logout
            </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </CssBaseline>
  );
};

export default AdminNav;
