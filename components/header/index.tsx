'use client';
import { useEffect, useState } from 'react';
import { Stack, Typography, Box, Button } from '@mui/material';
import { Grid } from '@mui/material';
// import { APP_EMPLOYEE_PATH } from 'config';
// import { APP_NEWJOBPOST_PATH } from 'config';
// import logo from 'assets/images/logo/logo-white.png';
// import logo from 'public/';
// import shareicon from '/public/assets/images/home/shareicon.png';
// import arrow from 'assets/images/icons/arrow.png';
// import { Link } from 'react-router-dom';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { useRouter, useParams, usePathname } from 'next/navigation';
// import { HambergerMenu } from 'iconsax-react';
import useMediaQuery from '@mui/material/useMediaQuery';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import burgermenu from 'assets/images/home/mobilemenu.png';
import axios from 'utils/axios';
import { setShowMarketPlaceHeader } from 'store/reducers/zipcode';
import { dispatch } from 'store';
import Image from 'next/image';

import {
  // createTheme,
  useTheme
} from '@mui/material/styles';

function Header() {
  // type RouteUrl = string;
  const router = useRouter();
  const handleClearLocalStorage = () => {
    localStorage.setItem('showMap', 'false');
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  const [sideNav, setSideNav] = useState(false);
  const pathname = usePathname();
  const [backgroundcolor, setBackgroundColor] = useState('#EAEAEA');
  const [zipCode, setZipcode] = useState<string | null>(null);
  const [searchButton, setSearchButton] = useState(true);
  // console.log('zipcode', zipCode, window.location.hostname );
  const [host, setHost] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHost(window.location.hostname);
    }
  }, []);

  useEffect(() => {
    const newZipcode = localStorage.getItem('currentuserzipcode');
    setZipcode(newZipcode ?? null);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = typeof window !== 'undefined' ? window.scrollY : 0;

      if (scrollPosition >= 100) {
        setBackgroundColor('#EAEAEA');
      } else {
        setBackgroundColor('rgba(234, 234, 234, 0.30)');
      }
    };

    if (typeof window !== 'undefined' && pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined' && pathname === '/') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [pathname]);
  const params = useParams();
const abr = params?.abr || null;

  useEffect(() => {
    if (pathname.includes(`${abr}`)) {
      console.log('i am in the header');
      setSearchButton(false);
    }
  }, []);

  const handlesearch = () => {
    if (zipCode === null) {
      console.log('Zip code is null');
      return;
    }

    const data = new FormData();
    data.append('zip_code', zipCode);
    data.append('miles', '12');

    axios({
      method: 'post',
      url: 'api/search/get_center',
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        // Handle the response data here
        if (response.data.status === 'pass') {
          const city = response?.data?.data?.center[0]?.city;
          const cityAbr = response?.data?.data?.CityContent?.state?.abr.toLowerCase();

          console.log(cityAbr, 'cityabr');
          const formattedCity = city ? city.replace(/\s+/g, '-').toLowerCase() : '';

          if (zipCode) {
            router.push(`/${cityAbr}/${formattedCity}/${zipCode}`);
          }
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
  const handleredirecthome = () => {
    router.push('/#mapsearch');
  };

  const list = () => (
    <Box
      sx={{ width: '100%', height: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
      role="presentation"
      onClick={() => {
        setTimeout(() => {
          setSideNav(false);
        }, 1000);
      }}
      onKeyDown={() => {
        setTimeout(() => {
          setSideNav(false);
        }, 1000);
      }}
    >
      <List>
        {[
          { name: 'Home', url: '/' },
          { name: 'About us', url: '/aboutus' },
          { name: 'Blogs', url: '/blogs' },
          // { name: 'Search', url: '#' },
          { name: 'Contact us', url: '/contactus' }
        ].map((text) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton
              onClick={() => {
                router.push(`${text.url}`);
                handleClearLocalStorage();
              }}
            >
              <ListItemText sx={{ textAlign: 'center' }} onClick={handleClearLocalStorage}>
                 <a
                        className="seo-link"
                         href='/aboutus'
                      >
                        {text.name}
                      </a>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
       {/* {searchButton && (
          <ListItem sx={{ pt: 0 }}>
            <ListItemButton onClick={zipCode === null ? handleredirecthome : handlesearch}>
              <ListItemText sx={{ textAlign: 'center' }}>
                <Typography variant="bodytext1">Search</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        )}
        {!searchButton && (
          <ListItem sx={{ pt: 0 }}>
            <ListItemButton onClick={() => dispatch(setShowMarketPlaceHeader(true))}>
              <ListItemText sx={{ textAlign: 'center' }}>
                <Typography variant="bodytext1">Marketplace</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        )}
        {!searchButton && (
          <ListItem sx={{ pt: 0 }}>
            <ListItemButton onClick={() => dispatch(setShowMarketPlaceHeader(false))}>
              <ListItemText sx={{ textAlign: 'center' }}>
                <Typography variant="bodytext1">Simple search</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        )} */}
      </List>
      {/* <List>
        {[
          { name: 'Home', url: '/' },
          { name: 'About us', url: '/aboutus' },
          { name: 'Blogs', url: '/blogs' },
          // { name: 'Search', onClick: zipCode === null ? handleredirecthome : handlesearch },
          { name: 'Contact us', url: '/contactus' }
        ].map((text) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton
              onClick={() => {
                if (text.onClick) {
                  text.onClick(); // Call the onClick function if defined
                }
                navigate(`${text.url}`);
                handleClearLocalStorage();
              }}
            >
              <ListItemText sx={{ textAlign: 'center' }}>
                <Typography variant="bodytext1">{text.name}</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem></ListItem>
      </List> */}

      <Link 
       href={`https://provider.${host}?user_type=ck`}
        // to="https://qatesting.amwaus.com/provider-auth-login?user_type=ck"
       target="_blank" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          sx={{
            display: 'flex',
            height: '35px',
            padding: '9px 20px',
            justifyContent: 'center',
            alignItems: 'center',

            borderRadius: '60px',
            background: '#ED5B09',
            boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.02)',
            minWidth: '150px',

            '&:hover': {
              background: 'rgba(237, 91, 9, 0.8)'
            }
          }}
        >
          For Provider
          <Box display="flex" alignContent="center">
            {
              <Stack flexDirection="row" justifyContent="space-between" alignItems="center" marginLeft="5px">
                {/* <Image fill src='/assets/images/home/logo.png' alt="Logo" style={{ height: '14px', width: '14px' }} /> */}
                <div style={{ position: 'relative', width: '14px', height: '14px' }}>
  <Image
    src='/assets/images/home/logo.png'
    alt="Logo"
    fill
    style={{ objectFit: 'contain' }}
  />
</div>
              </Stack>
            }
          </Box>
        </Button>
      </Link>
    </Box>
  );

  // const handleLinkClick = (url: RouteUrl) => {
  //   if (url === '/') {
  //     navigate(url); // Navigate to the home route
  //     window.location.reload(); // Reload the page (if needed)
  //   } else {
  //     setSideNav(false); // Close the side navigation for other links
  //   }
  // };

  return (
    <Grid
      container
      alignItems="center"
      sx={{
        py: { lg: '10px', xs: 0 },
        background: matches ? '#EAEAEA' : backgroundcolor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'fixed',
        top: 0,
        zIndex: 9999999
      }}
    >
      <Grid item lg={6} xs={8}>
        <Box display="flex" alignContent="center" sx={{ ml: { md: '64px', xs: '0px' } }}>
          {
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              component='a'
              href='/'
              onClick={() => {
                handleClearLocalStorage();
              }}
              sx={{ cursor: 'pointer', width: { md: '250px', sm: '200px' } }}
            >
              <Image
  src="/assets/images/home/logo.png"
  alt="Logo"
  width={!matches ? 180 : 150}
  height={35} // Adjust to match your logo's aspect ratio
/>
            </Stack>
          }
        </Box>
      </Grid>

      {!matches ? (
        <Grid item xs={8} sm={4} md={5.5}>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              // paddingRight: '250px',
              justifyContent: 'space-around',
              alignItems: 'center',
              ml: { xs: 5, sm: 'auto' }
            }}
          >
            <Typography
              color="#000"
              align="center"
              variant="bodytext1"
              sx={{ cursor: 'pointer', fontWeight: '500', fontSize: { xs: '12px', md: '14px' }, marginRight: 6 }}
              onClick={() => {
                handleClearLocalStorage();
              }}
            >
               <a
                        className="seo-link"
                         href='/'
                      >
                        Home
                      </a>
            </Typography>
          
              {/* {searchButton ? (
              <Typography
                color="#000"
                align="center"
                variant="bodytext1"
                sx={{ cursor: 'pointer', fontWeight: '500', fontSize: { xs: '12px', md: '14px' }, marginRight: 6 }}
                onClick={zipCode === null ? handleredirecthome : handlesearch}
              >
                Search
              </Typography>
            ) : (
              <Typography
                color="#000"
                align="center"
                variant="bodytext1"
                sx={{ cursor: 'pointer', fontWeight: '500', fontSize: { xs: '12px', md: '14px' }, marginRight: 6 }}
                onClick={() => {
                  dispatch(setShowMarketPlaceHeader(true));
                }}
              >
                Marketplace
              </Typography>
            )} */}
            <Typography
              color="#fff"
              align="center"
              variant="bodytext1"
              sx={{
                cursor: 'pointer',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                color: '#000',
                fontSize: { xs: '12px', md: '14px' },
                marginRight: 4
              }}
            >
              <a
                        className="seo-link"
                         href='/aboutus'
                      >
                        About Us
                      </a>
            </Typography>
            <Typography
              color="#fff"
              align="center"
              variant="bodytext1"
              sx={{ cursor: 'pointer', fontWeight: '500', color: '#000', fontSize: { xs: '12px', md: '14px' }, marginRight: 6 }}
              onClick={() => {
                // router.push('/blogs');
                handleClearLocalStorage();
              }}
            >
               <a
                        className="seo-link"
                         href='/blogs'
                      >
                        Blogs
                      </a>
              
            </Typography>

            <Typography
              color="#fff"
              align="center"
              variant="bodytext1"
              sx={{
                cursor: 'pointer',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                color: '#000',
                fontSize: { xs: '12px', md: '14px' },
                marginRight: 2
              }}
            >
               <a
                        className="seo-link"
                         href='/contactus'
                      >
                       Contact Us
                      </a>
              
            </Typography>
             {/* {!searchButton && (
              <Typography
                color="#fff"
                align="center"
                variant="bodytext1"
                sx={{
                  display: 'flex',
                  height: '35px',
                  padding: '9px 10px',
                  justifyContent: 'center',
                  alignItems: 'center',
      
                  borderRadius: '60px',
                  background: '#ED5B09',
                  boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.02)',
                  minWidth: '150px',
                  marginRight: 1,
                  cursor: 'pointer',
                  '&:hover': {
                    background: 'rgba(237, 91, 9, 0.8)'
                  }
                }}
                // sx={{ cursor: 'pointer', fontWeight: '500', fontSize: { xs: '12px', md: '14px' }, marginRight: 6 }}
                onClick={() => {
                  dispatch(setShowMarketPlaceHeader(true));
                }}
              >
                Marketplace
              </Typography>
            )} */}
            <Link
            //  to={`${process.env.EK_URL}provider/login`}
            href={`https://provider.${host}?user_type=ck`}
             target="_blank" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  display: 'flex',
                  height: '35px',
                  padding: '9px 20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontFamily: 'sans-serif',
                  borderRadius: '60px',
                  background: '#ED5B09',
                  boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.02)',
                  minWidth: '150px',

                  '&:hover': {
                    background: 'rgba(237, 91, 9, 0.8)'
                  }
                }}
              >
                For Provider
                <Box display="flex" alignContent="center">
                  {
                    <Stack flexDirection="row" justifyContent="space-between" alignItems="center" marginLeft="5px">
                      {/* <Image src='/assets/images/home/shareicon.png' alt="Logo" style={{ height: '14px', width: '14px' }} /> */}
                     
                      <Image 
  src='/assets/images/home/shareicon.png' 
  alt="Logo" 
  width={14} 
  height={14} 
/>
                    </Stack>
                  }
                </Box>
              </Button>
            </Link>
          </Stack>
        </Grid>
      ) : (
        <Grid item xs={2.5} sx={{ textAlign: 'end' }}>
          <Box
            onClick={() => setSideNav(!sideNav)}
            sx={{ backgroundColor: 'transparent', cursor: 'pointer', p: 2, borderRadius: 50, mr: 1, mt: '4px' }}
          >
            {/* <HambergerMenu size={30} color="black" /> */}
            {/* <Image src='/assets/images/home/mobilemenu.png' alt='burger-menu' /> */}
            <Image
  src='/assets/images/home/mobilemenu.png'
  alt='burger-menu'
  width={24}
  height={24}
/>
          </Box>
        </Grid>
      )}
      <Grid item xs={0} sm={1} md={0.5}></Grid>

      <SwipeableDrawer
        PaperProps={{
          sx: { width: '100%', pt: 10 }
        }}
        anchor="right"
        open={sideNav}
        onClose={() => setSideNav(false)}
        onOpen={() => setSideNav(true)}
      >
        {/* <Stack onClick={() => setSideNav(false)} sx={{ m: 5 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#219EBC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M15 9L9 15" stroke="#219EBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 9L15 15" stroke="#219EBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Stack> */}
        {list()}
      </SwipeableDrawer>
    </Grid>
  );
}

export default Header;
