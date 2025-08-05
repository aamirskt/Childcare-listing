'use client';


// material-ui
import React, {
  useEffect,
  useRef,
  // KeyboardEvent,
  useState
} from 'react';
import { Box, InputBase } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import {
  Stack,
  // TextField,
  Typography,
  // Slide
} from '@mui/material';
// import HomeSectionOneRightBanner from 'assets/images/icons/HomeSectionOneRightBanner.png';
// import banner1 from 'assets/images/home/banner1.png'
// import bimg from 'assets/images/home/bimg.png';
// import { useLocation, useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
// ==============================|| UNDER CONSTRUCTION ||============================== //
import axios from 'utils/axios';
// import SearchDayCares from 'sections/home/SearchDayCares';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SearchNormal } from 'iconsax-react';
// import checkicon from 'assets/images/home/Check1.png';
// import playicon from 'assets/images/home/playicon.png';
// import stroke from 'assets/images/home/stroke.png';
import { setZipCodetest, setCentersList, setIsParams } from 'store/reducers/zipcode';
// import { InputBase } from '@mui/material';
// import ReactPlayer from 'react-player';

// import videoplayicon from 'assets/images/home/videoplayicon.png';
// import stopicon from 'assets/images/home/stopicon.png';
// import startsimg from 'assets/images/home/startsimg.png';
// import xcircle from 'assets/images/home/x-circle.png';
import Header from 'components/header';
// import GoogleAutoComplete from 'components/GoogleAutoComplete';
// import negotiate from 'assets/images/home/negotiate1.png';
// import price from 'assets/images/home/price1.png';
import { setShowMarketPlaceHeader } from 'store/reducers/zipcode';
// import gcheck from 'assets/images/home/greenCheck.png'
import Image from 'next/image';


function MainBanner1() {
  // const theme = useTheme();
  const router = useRouter();
  // const pathname = usePathname();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  // const navigate = useNavigate();

  // const [showMap, setshowMap] = useState<any>(localStorage.getItem('showMap') === 'true');

  const [zipCode, setZipCode] = useState<any>(null);
  // const [radius, setradius] = useState<any>(5);
  const [zipCodeValidation, setZipCodeValidation] = useState<any>(null);
  const [enterZip, setEnterZip] = useState(false);

  // const [capacity, setcapacity] = useState<any>(false);
  // const [transport, settransport] = useState<any>(false);
  const [cityName, setCityName] = useState<any>('');
  // const [isPlaying, setIsPlaying] = useState(false);
  // const cleearestorage = () => {
  //   localStorage.setItem('showMap', 'false');
  //   setshowMap(false);
  // };
  // const cityName = 'NewYork';
  // useEffect(() => {
  //   localStorage.setItem('showMap', showMap.toString());
  // }, [showMap]);
  const handlesearch = () => {
    var count = 0;

    if ((zipCode == null || zipCode === '') && (cityName == null || cityName === '')) {
      setZipCodeValidation('Enter Zip Code or City Name');
      setEnterZip(false);
      count += 1;
    }
    // else if (zipCode?.length != 5) {
    //   dispatch(
    //     openSnackbar({
    //       open: true,
    //       message: 'No Center Found for this zip code try another',
    //       variant: 'alert',
    //       alert: {
    //         color: 'error'
    //       },
    //       close: false
    //     })
    //   );
    // }
    else {
      setZipCodeValidation(null);
    }
    if (count > 0) {
      return;
    }
    const data = new FormData();
    data.append('zip_code', zipCode);
    data.append('miles', '12');

    axios({
      method: zipCode ? 'post' : 'get',
      url: zipCode
        ? 'api/search/get_center'
        : // `api/search/get_content/${abr}/${cityName}`
        `api/search/get_content?city_name=${cityName}`,
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        // Handle the response data here
        if (response.data.status === 'pass') {
          debugger;
          dispatch(setCentersList(response?.data?.data));
          const city = response?.data?.data?.geo_location?.city;
          const cityAbr = response?.data?.data?.geo_location?.state_code?.toLowerCase();
          const cityAbrs = response?.data?.data?.geo_location?.state_code?.toLowerCase();
          const formattedCity = city ? city.replace(/\s+/g, '-').toLowerCase() : '';
          // localStorage.setItem('params-search', 'true');
          // debugger;
          dispatch(setIsParams(true));
          dispatch(setShowMarketPlaceHeader(true));

          if (zipCode) {
            router.push(`/${cityAbr}/${formattedCity}/${zipCode}`);
            dispatch(setZipCodetest(zipCode));
          } else if (cityName) {
            router.push(`/${cityAbrs}/daycares-in-${formattedCity}`);
          } else {
            router.push(`/${zipCode}/daycares-in-cityNotFound`);
          }
          // ...other logic based on the response
        } else if (response.data.status === 'fail') {
          dispatch(
            openSnackbar({
              open: true,
              message: 'No Center Found for this zip code try another',
              variant: 'alert',
              alert: {
                color: 'error'
              },
              close: false
            })
          );
        }
      })
      .catch((error) => {
        // Handle errors

        console.log('Error:', error);
      setZipCodeValidation('Enter valid Zip Code or City Name');

      });
  };
  const handleChangeSearchInput = (e: any) => {
    const input = e.target.value;
    // Check if input is purely numeric
    if (e) {
      if (/^\d+$/.test(input)) {
        // Input is purely numeric, treat it as a zip code
        setZipCode(input);
        setCityName(''); // Clear any previously set city name
        localStorage.setItem('searchType', 'zipCode'); // Store search type as zip code in localStorage
      } else {
        // Input includes non-numeric characters, treat it as a city name
        // const _tempVal = input.split(',');
        // if (_tempVal[0]) {
        //   const _tempCity = _tempVal[0] + (_tempVal[1] ? ',' + _tempVal[1].replace(/[0-9]/g, '') : '');
          setCityName(input);
          setZipCode(''); // Clear any previously set zip code
          localStorage.setItem('searchType', 'city'); // Store search type as city in localStorage
        // }
      }
    }
  };
  // const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
  //   if (event.key === 'Enter') {
  //     handlesearch();
  //   }
  // };

  // const handleTransport = () => {
  //   settransport(!transport);
  // };
  // const handleCapacity = () => {
  //   setcapacity(!capacity);
  // };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const searchSectionRef = useRef<HTMLDivElement | null>(null);
  // const location = useLocation();
  // Add this state to hold the hash
  const [locationHash, setLocationHash] = useState<string>('');

  // Set locationHash only on client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLocationHash(window.location.hash);
    }
  }, []);

  // Update locationHash on hash change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleHashChange = () => setLocationHash(window.location.hash);
      window.addEventListener('hashchange', handleHashChange);
      return () => window.removeEventListener('hashchange', handleHashChange);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (searchSectionRef.current && locationHash === '#mapsearch') {
        searchSectionRef.current.scrollIntoView({ behavior: 'smooth' } as ScrollIntoViewOptions);
      }
    }, 1000);
  }, [locationHash]);

  useEffect(() => {
    if (locationHash === '#mapsearch') {
      setEnterZip(true);
    }
  }, [locationHash]);
  const faqSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (faqSectionRef.current && locationHash === '#mapsearch') {
        faqSectionRef.current.scrollIntoView({ behavior: 'smooth' } as ScrollIntoViewOptions);
      }
    }, 1000);
  }, [locationHash]);

  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
      {...props}
      classes={{ popper: className }}
      placement="top-start"
      arrow
      sx={{
        '.MuiTooltip-arrow': {
          color: 'white !important'
        }
      }}
    />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#FBF6F4',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 211,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
      padding: 10,
      '.MuiTooltip-arrow': {
        color: 'white !important'
      }
    }
  }));
  const HtmlTooltip1 = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
      {...props}
      classes={{ popper: className }}
      placement="bottom-end"
      arrow
      sx={{
        '.MuiTooltip-arrow': {
          color: 'white !important'
        }
      }}
    />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#FBF6F4',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 308,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
      padding: 10,
      '.MuiTooltip-arrow': {
        color: 'white !important'
      }
    }
  }));
  return (
    <Stack>
      <Header />
      {/* {!showMap ? ( */}
        <>
          <Stack
            sx={{
              justifyContent: matches ? 'center' : 'center',
              display: 'flex',
              // pt: { lg: 14, xs: 14 },
              // alignItems: 'center',
              flexDirection: 'column',
              px: { lg: 0, md: 2, xs: 2 },
              // height: '100vh',
              ml: { xl: '100px', lg: '30px', xs: 0 }

              // mt: { xl: 0, lg: 7, xs: 0 },
              // mb: { xl: 0, lg: 7, xs: 0 }
            }}
            id="mapsearch"
            ref={faqSectionRef}
          >
            <Grid
              container
              sx={{
                background: 'linear-gradient(121deg, rgba(255, 255, 255, 0.65) 0.76%, rgba(255, 255, 255, 0.55) 97.98%)',
                border: '1px solid #ADABAB',
                borderRadius: '10px',
                backdropFilter: 'blur(20px)',
                width: { xl: '670px', md: '600px', xs: 'auto' },
                height: { xl: 'auto', lg: 'auto', xs: 'auto' },
                // mb: { lg: 3, xs: 2 },
                mt: { lg: 15, md: 14, xs: 40 },
                // mt:10

              }}
            >
              <Grid
                item
                xs={12}
                sx={{ display: 'flex', flexDirection: 'column', px: { xl: 7, lg: 4, xs: 2 }, my: { md: '30px', xs: 3 } }}
                component="h1"
              >
                <Typography
                  variant="mainheading"
                  sx={{
                    fontSize: { md: '40px', xs: '30px' },
                    letterSpacing: ' -1.75px'
                    // width: { lg: '600px', md: '575px', xs: 'auto' }
                  }}
                >
                  Affordable Childcare Through <span style={{ position: 'relative', color: '#ED5B09' }}>Smart Negotiation</span>

                </Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>
                  We Help You Negotiate the Best Rates!

                </Typography>
                <Stack
                  sx={{
                    mt: { md: '20px', xs: 2 },
                    width: { lg: '520px' },
                    ml: { md: 2, xs: 0 }
                  }}
                >
                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <Image
  src='/assets/images/home/Check1.png'
  alt='greencheckicon'
  width={13}
  height={13}
/>
                    {/* <Image src='assets/images/home/Check1.png' alt='greencheckicon' style={{ height: '13px', width: '13px' }} /> */}
                    <Typography sx={{ fontSize: { md: '16px', xs: '13px' }, fontWeight: { md: 500, xs: 400 }, ml: 1 }}>Our <span style={{ fontWeight: 600 }}>CHILDCARE SEARCH MARKETPLACE</span></Typography>
                  </Stack>

                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 1 }}>
                    <Image
  src='/assets/images/home/Check1.png'
  alt='greencheckicon'
  width={13}
  height={13}
/>
                    {/* <Image src='assets/images/home/Check1.png' alt='greencheckicon' style={{ height: '13px', width: '13px' }} /> */}
                    <Typography sx={{ fontSize: { md: '16px', xs: '13px' }, fontWeight: { md: 500, xs: 400 }, ml: 1 }}>Connects families with a  <span style={{ fontWeight: 600 }}>NETWORK OF PROVIDERS</span></Typography>
                  </Stack>
                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 1 }}>
                    <Image
  src='/assets/images/home/Check1.png'
  alt='greencheckicon'
  width={13}
  height={13}
/>
                    {/* <Image src='assets/images/home/Check1.png' alt='greencheckicon' style={{ height: '13px', width: '13px' }} /> */}
                    <Typography sx={{ fontSize: { md: '16px', xs: '13px' }, fontWeight: { md: 500, xs: 400 }, ml: 1 }}>Ensuring access to  <span style={{ fontWeight: 600 }}>QUALITY, AFFORDABLE CARE</span></Typography>
                  </Stack>
                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', mt: 1 }}>
                  <Image
  src='/assets/images/home/Check1.png'
  alt='greencheckicon'
  width={13}
  height={13}
/>
                    {/* <Image src='assets/images/home/Check1.png' alt='greencheckicon' style={{ height: '13px', width: '13px', marginTop: '3px' }} /> */}
                    <Typography sx={{ fontSize: { md: '16px', xs: '13px' }, fontWeight: { md: 500, xs: 400 }, ml: 1 }}>Parents can  <span style={{ fontWeight: 600 }}>SEARCH, COMPARE, SELECT AND NEGOTIATE</span></Typography>
                  </Stack>
                  <Stack pl={2}><Typography sx={{ fontSize: { md: '15px', xs: '12px' }, fontWeight: '400' }}>(from a wide range of Trusted childcare options)</Typography></Stack>
                </Stack>
                <Stack sx={{ position: 'relative', mt: { md: '26px', xs: 2 }, width: { lg: '512px', md: '430px', xs: 'auto' } }}>
                  {/* <GoogleAutoComplete
                    defaultValue=""
                    placeholder={'Search city or zip code'}
                    handleChangeSearchInput={handleChangeSearchInput}
                    sx={{
                      height: matches ? '3em' : '2.5em',
                      background: 'white',
                      outline: 'none',
                      border: 'none',
                      borderRadius: '30px',
                      paddingLeft: '30px',
                      fontSize: '16px'
                    }}
                  /> */}

                  <InputBase
                    autoFocus={enterZip ? true : false}
                    sx={{
                      background: 'white',
                      outline: 'none',
                      border: 'none',
                      borderRadius: '30px',
                      height: { md: '3em', xs: '48px' },
                      paddingLeft: '30px',
                      fontSize: '16px',
                      '& .MuiInputBase-input::placeholder': { fontSize: { xs: '12px !important', md: '14px !important' } }
                    }}
                    id="outlined-basic"
                    placeholder="Search city or zip code"
                    inputProps={{ 'aria-label': 'search zipCode' }}
                    value={zipCode ? zipCode : cityName}
                    onChange={handleChangeSearchInput}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault(); // Prevent default behavior of the Enter key
                        handlesearch();
                      }
                    }}
                  />

                  <Typography component="p" sx={{ color: 'red', mb: 2, mt: 1, px: 2, fontSize: '16px' }}>
                    {zipCodeValidation && zipCodeValidation}
                  </Typography>

                  <Stack
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      background: '#000',
                      px: 4,
                      py: 1,
                      position: 'absolute',
                      right: 0,
                      top: 0,
                      height: matches ? '48px' : '40px',
                      width: '79px',
                      borderRadius: '0 30px 30px 0',
                      cursor:'pointer'
                    }}
                    onClick={handlesearch}
                  >
                    <SearchNormal className="child-care-center" size="28" cursor={'pointer'} color="#fff" />
                  </Stack>
                </Stack>
                {enterZip && (
                  <Typography
                    component="p"
                    sx={{
                      color: 'red',
                      mb: 2,
                      mt: -2,
                      px: 2,
                      fontSize: '16px',
                      animation: 'blink-animation 1s linear infinite',
                      '@keyframes blink-animation': {
                        '0%': { opacity: 1 },
                        '50%': { opacity: 0 },
                        '100%': { opacity: 1 }
                      }
                    }}
                  >
                    Please Enter Your Zipcode Or City
                  </Typography>
                )}
                <Stack sx={{ display: 'none', flexDirection: { md: 'row', xs: 'column' }, ml: { md: 0, xs: 1 }, mt: { md: 0, xs: 0 } }}>
                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Stack>
                      <Image src='/assets/images/home/Check1.png' alt="checkicon" width={24} height={24} style={{ height: '24px', width: '24px' }} />
                    </Stack>
                    <Stack>
                      <Typography
                        variant="bodytext1"
                        sx={{
                          ml: 1,
                          fontSize: { md: '16px', xs: '14' },
                          fontWeight: { md: '600', xs: '500' }
                        }}
                      >
                        Simple Search
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ml: { md: 4, xs: 0 }, mt: { md: 0, xs: 2 } }}>
                    <Stack>
                      <Image src='/assets/images/home/Check1.png' alt="checkicon" width={24} height={24} style={{ height: '24px', width: '24px' }} />
                    </Stack>
                    <Stack>
                      <Typography
                        variant="bodytext1"
                        sx={{
                          ml: 1,
                          fontSize: { md: '16px', xs: '14' },
                          fontWeight: { md: '600', xs: '500' }
                        }}
                      >
                        Marketplace Smart Search
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack sx={{ display: 'none', flexDirection: 'row', alignItems: 'center', mt: { md: 2, xs: 2 }, ml: { md: 0, xs: 1 } }}>
                  <Stack>
                    <Image src='/assets/images/home/Check1.png' alt="checkicon" width={24} height={24} style={{ height: '24px', width: '24px' }} />
                  </Stack>
                  <Stack>
                    <Typography
                      variant="bodytext1"
                      sx={{
                        ml: 1
                      }}
                    >
                      AI Guided Search
                    </Typography>
                  </Stack>
                </Stack>
                <Stack sx={{ mt: 0, display: 'none' }}>
                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Stack onClick={handleOpen}>
                      <Image src='/assets/images/home/playicon.png' alt="playicon" width={24} height={24} style={{ height: '40px', width: '40px', cursor: 'pointer' }} />
                    </Stack>
                    <Stack onClick={handleOpen}>
                      <Typography
                        variant="bodytext1"
                        sx={{
                          ml: 1,
                          pb: '4px',
                          borderBottom: '3px solid black',
                          cursor: 'pointer',
                          fontSize: '16px'
                        }}
                      >
                        Watch Video
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                background: 'linear-gradient(121deg, rgba(255, 255, 255, 0.65) 0.76%, rgba(255, 255, 255, 0.55) 97.98%)',
                border: '1px solid #ADABAB',
                borderRadius: '10px',
                backdropFilter: 'blur(20px)',
                width: { xl: '670px', md: '600px', xs: 'auto' },
                mb: { lg: 5, xs: 2 },
                mt: 2
                // mt:10
              }}
            >
              <Grid
                item
                xs={12}
                sx={{ display: 'flex', flexDirection: 'column', px: { md: 4, xs: 2 }, my: { md: 4, xs: 2 } }}
                component="h1"
              >
                <Typography
                  variant="mainheading"
                  sx={{
                    fontSize: { md: '16px', xs: '14px' },
                    fontWeight: '400',
                    
                  }}
                >
                  What sets us apart?<span style={{ position: 'relative', fontWeight: 600 }}> We <span style={{ fontSize: '22px' }}>N</span>egotiate on your behalf</span>. 

                </Typography>
                <Typography
                  variant="mainheading"
                  sx={{
                    fontSize: { md: '16px', xs: '14px' },
                    fontWeight: '400',
                    mt: 2
                  }}
                >
                  By leveraging our <span style={{ position: 'relative', fontWeight: 600 }}> <span style={{ fontSize: '22px' }}>M</span>arketplace model</span>, we create a competitive environment where providers <span style={{ position: 'relative', fontWeight: 600 }}>offer their best rates</span> to attract families.

                </Typography>
                <Typography
                  variant="mainheading"
                  sx={{
                    fontSize: { md: '16px', xs: '14px' },
                    fontWeight: '400',
                    mt: 2
                  }}
                >
                  This means parents don't have to spend time negotiating-our platform negotiating-our platform ensures <span style={{ position: 'relative', fontWeight: 600 }}> <span style={{ fontSize: '22px' }}>T</span>ransparent pricing</span> and helps secure <span style={{ position: 'relative', fontWeight: 600 }}> <span style={{ fontSize: '22px' }}>C</span>ost-effective childcare solutions</span> without compromising quality.

                </Typography>
                <Typography
                  variant="mainheading"
                  sx={{
                    fontSize: { md: '16px', xs: '14px' },
                    fontWeight: '400',
                    mt: 2
                  }}
                >
                  With our service finding <span style={{ position: 'relative', fontWeight: 600 }}><span style={{ fontSize: '22px' }}>S</span>afe, <span style={{ fontSize: '22px' }}>R</span>eliable, and <span style={{ fontSize: '22px' }}>B</span>udget-friendly childcare</span> has never been easier!

                </Typography>
              </Grid>
            </Grid>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit" sx={{ color: 'black', fontSize: '14px', fontWeight: '600' }}>
                    Let Us Negotiate For You
                  </Typography>
                  <Typography sx={{ color: 'black', fontSize: '14px', fontWeight: '400', mt: '5px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quidem? Corporis cupiditate neque nisi modi!
                  </Typography>
                </React.Fragment>
              }
            >
              <Stack sx={{ position: 'absolute', right: '31%', display: { lg: 'none', xs: 'none' } }}>
              <Image
  src='/assets/images/home/negotiate1.png'
  alt='negotiate1'
  width={211}
  height={71}
/>
                {/* <Image src='assets/images/home/negotiate1.png' alt='negotiate1' style={{ width: '211px', height: '71px' }} /> */}
              </Stack>
            </HtmlTooltip>
            {/* <Stack sx={{ position: 'absolute', right: '31%', display: { lg: 'block', xs: 'none' } }}>
              <Image src={negotiate} style={{ width: '211px', height: '71px' }} />
            </Stack> */}
            {/* <Stack sx={{ position: 'absolute', right: '9%', display: { lg: 'block', xs: 'none' }, mt: 27 }}>
              <Image src={price} style={{ width: '308px', height: '92px' }} />
            </Stack> */}
            <HtmlTooltip1
              title={
                <React.Fragment>
                  <Typography color="inherit" sx={{ color: 'black', fontSize: '14px', fontWeight: '600' }}>
                    Choose Price For Your Children
                  </Typography>
                  <Typography sx={{ color: 'black', fontSize: '14px', fontWeight: '400', mt: '5px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quidem? Corporis cupiditate neque nisi modi!
                  </Typography>
                </React.Fragment>
              }
            >
              <Stack sx={{ position: 'absolute', right: '9%', display: { lg: 'none', xs: 'none' }, mt: 27 }}>
                <Image src='/assets/images/home/price1.png' alt='price1'  width={308} height={92} />
              </Stack>
            </HtmlTooltip1>
            {/* <Grid
              container
              sx={{
                // pt: matches ? 0 : '106px',
                ml: { lg: '100px', xs: 0 },
                background: 'linear-gradient(121deg, rgba(255, 255, 255, 0.65) 0.76%, rgba(255, 255, 255, 0.55) 97.98%)',
                border: '1px solid #ADABAB',
                borderRadius: '10px',
                backdropFilter: 'blur(20px)',
                width: { lg: '700px', xs: 'auto' },
                height: { lg: '165px', xs: 'auto' },
                mb: { lg: 10, xs: 2 }
              }}
            >
              
            </Grid> */}
            <Dialog open={open} onClose={handleClose} maxWidth="md" sx={{ overflow: 'hidden' }}>
              <DialogContent>
                <Box
                  onClick={handleClose}
                  sx={{ position: 'absolute', right: { xl: '33px', xs: '3px' }, top: '0px', cursor: 'pointer', zIndex: 1 }}
                >
                  <Image src='/assets/images/home/x-circle.png' alt="xcicle" width={24} height={24} />
                </Box>
                <Stack
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    px: { md: 5, xs: 0 },
                    borderRadius: { md: '30px', xs: 0 },
                    border: '1px solid transparent',
                    overflow: 'hidden',
                    height: { xl: '502px', xs: 'auto' }
                  }}
                >
                  {/* <ReactPlayer
                    url={process.env.PUBLIC_URL + '/video/video2.mp4'}
                    width="100%"
                    height="auto"
                    // borderRadius="30px"
                    playing={isPlaying}
                    style={{
                      borderRadius: '10px',
                      border: '1px solid transparent'
                    }}
                  /> */}
                  {/* <iframe
                    width={matches ? '870' : 'auto'}
                    height={matches ? '502' : 'auto'}
                    src="https://www.youtube.com/embed/cOKsDi_txSo?si=7kOQJ9DiZrtJMUO8&amp;controls=0?rel=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe> */}
                  <iframe
                    width={matches ? '870' : 'auto'}
                    height={matches ? '502' : 'auto'}
                    src="https://www.youtube.com/embed/cOKsDi_txSo?rel=0&controls=0&si=7kOQJ9DiZrtJMUO8"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>

                  <Box sx={{ position: 'absolute', left: '10%', width: { md: '100%', xs: '100px' } }}>
                    <Image src='/assets/images/home/startsimg.png' width={24} height={24} style={{ display: matches ? 'none' : 'none' }} alt="starsimg" />
                  </Box>
                  <Box sx={{ position: 'absolute', right: '10%', bottom: '10%' }}>
                    <Image src='/assets/images/home/startsimg.png' width={24} height={24} style={{ display: matches ? 'none' : 'none' }} alt="starsimg" />
                  </Box>
                  {/* <Box
                    onClick={() => setIsPlaying(!isPlaying)}
                    sx={{
                      position: 'absolute',
                      top: isPlaying ? 'auto' : '50%',
                      left: isPlaying ? 'auto' : '50%',
                      bottom: isPlaying ? '65px' : 'auto',
                      right: isPlaying ? '51px' : 'auto',
                      transform: isPlaying ? 'none' : 'translate(-50%, -50%)',
                      transition: 'top 0.5s ease-out, left 0.5s ease-out, transform 0.5s ease-out'
                    }}
                  >
                    {isPlaying ? (
                      <>
                        <Image src={stopicon} alt="stopicon" style={{ height: matches ? '77px' : '50px' }} />
                      </>
                    ) : (
                      <>
                        <Image src={videoplayicon} alt="videoplayicon" style={{ height: matches ? '77px' : '50px' }} />
                      </>
                    )}
                  </Box> */}
                </Stack>
              </DialogContent>
            </Dialog>
          </Stack>
        </>
      {/* ) : (
        <Slide direction="up" in={showMap} mountOnEnter unmountOnExit timeout={700}>
          <Stack className="SearchDayCares">
            <SearchDayCares
              zipprop={zipCode}
              capacity={capacity}
              handleCapacity={handleCapacity}
              transport={transport}
              handleTransport={handleTransport}
              cleearestorage={cleearestorage}
            />
          </Stack>
        </Slide>
      )} */}
    </Stack>
  );
}

export default MainBanner1;
