// material-ui
import {
  // KeyboardEvent,
  useState
} from 'react';
// import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import {
  Stack,
  // TextField,
  Typography
} from '@mui/material';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// ==============================|| UNDER CONSTRUCTION ||============================== //
const banner1 = '/assets/images/home/papularsearchbanner.png';

import axios from 'utils/axios';
// import SearchDayCares from 'sections/provider/SearchDayCares';
// import SearchDayCares from 'sections/provider/SearchDayCaresNewDesign';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SearchNormal } from 'iconsax-react';
// import checkicon from 'assets/images/home/Check1.png';
// import playicon from 'assets/images/home/playicon.png';
// import stroke from 'assets/images/home/stroke.png';
import { setZipCodetest, setCentersList, setIsParams } from 'store/reducers/zipcode';
import { InputBase } from '@mui/material';
// import ReactPlayer from 'react-player';
// import videoplayicon from 'assets/images/home/videoplayicon.png';
// import stopicon from 'assets/images/home/stopicon.png';
const mobilehomebg = '/assets/images/home/papularsechesbannermobilebg.png';
// import GoogleAutoComplete from 'components/GoogleAutoComplete';
import { setShowMarketPlaceHeader } from 'store/reducers/zipcode';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function MainBanner({ searchname, heading, description }: any) {
  const router = useRouter();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const [zipCode, setZipCode] = useState<any>(null);
  const [zipCodeValidation, setZipCodeValidation] = useState<any>(null);
  const [enterZip, setEnterZip] = useState(false);

  const [cityName, setCityName] = useState<any>('');
  // const [isPlaying, setIsPlaying] = useState(false);

  const handlesearch = () => {
    var count = 0;
debugger
    if ((zipCode == null || zipCode === '') && (cityName == null || cityName === '')) {
      setZipCodeValidation('Enter Zip Code or city name');
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
          // debugger;
          dispatch(setCentersList(response?.data?.data));
          const city = response?.data?.data?.geo_location?.city;
          const cityAbr = response?.data?.data?.geo_location?.state_code?.toLowerCase();
          const cityAbrs = response?.data?.data?.geo_location?.state_code?.toLowerCase();
          console.log(cityAbr, 'cityabr');
          const formattedCity = city ? city.replace(/\s+/g, '-').toLowerCase() : '';
          // localStorage.setItem('params-search', 'true');
          // debugger;
          dispatch(setIsParams(true));
          dispatch(setShowMarketPlaceHeader(true))

          if (zipCode) {
            router.push(`/${cityAbr}/${formattedCity}/${zipCode}`);
            dispatch(setZipCodetest(zipCode));
          } else if (cityName) {
             let cleaned = searchname.replace(/^top-/, '')       // Remove 'top-' from start
  .replace(/-usa$/, ''); 
            cleaned = cleaned.replace(/-near-me$/, '').replace(/-/g, ' ');
            if (cleaned == 'daycares'){
              router.push(`/${cityAbrs}/daycares-in-${cityName}`);

          } else {
            router.push(`/${cleaned.replace(/ /g, '-')}/${cityAbrs}/${cityName}`);
          }
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
      .catch ((error) => {
    // Handle errors

    console.log('Error:', error);
  });
};
const handleChangeSearchInput = (e: any) => {
  const input = e.target.value;
  // Check if input is purely numeric
  if (/^\d+$/.test(input)) {
    // Input is purely numeric, treat it as a zip code
    setZipCode(input);
    setCityName(''); // Clear any previously set city name
    localStorage.setItem('searchType', 'zipCode'); // Store search type as zip code in localStorage
  } else {
    setCityName(input);
    setZipCode('');
    localStorage.setItem('searchType', 'city');
  }
};
// const handleChangeSearchInput = (e: any) => {
//   const input = e;
//   // Check if input is purely numeric
//   if (/^\d+$/.test(input)) {
//     // Input is purely numeric, treat it as a zip code
//     setZipCode(input);
//     setCityName(''); // Clear any previously set city name
//     localStorage.setItem('searchType', 'zipCode'); // Store search type as zip code in localStorage
//   } else {
//     // Input includes non-numeric characters, treat it as a city name
//     const _tempVal = input.split(',');
//     if (_tempVal[0]) {
//       const _tempCity = _tempVal[0] + (_tempVal[1] ? ','+ _tempVal[1].replace(/[0-9]/g, '') : '')
//       setCityName(_tempCity);
//       setZipCode(''); // Clear any previously set zip code
//       localStorage.setItem('searchType', 'city'); // Store search type as city in localStorage
//     }
//   }
// };

// const [open, setOpen] = useState(false);

// const handleOpen = () => {
//   setOpen(true);
// };

// const handleClose = () => {
//   setOpen(false);
// };

return (
  <Stack>
    <>
      <Stack
        sx={{
          backgroundImage: `url(${matches ? banner1 : mobilehomebg})`,
          // backgroundSize: { md: '100% 100%', xs: 'cover' },
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: matches ? '70vh' : '700px',
          backgroundPositionX: { sm: 'right', xs: 'auto' },
          backgroundPositionY: 'center',
          height: '100%',
          justifyContent: matches ? 'center' : 'start',
          display: 'flex',
          py: 4,
          mt: 7
        }}
      >
        <Grid container sx={{ pt: matches ? 0 : 10 }}>
          <Grid item xs={12} sm={8} md={8} lg={12} sx={{ display: 'flex', flexDirection: 'column', px: { md: '115px', xs: 5 } }}>
            <Typography
              variant="mainheading"
              sx={{
                fontSize: { lg: '50px', md: '45px', xs: '30px' },
                letterSpacing: ' -1.75px',
                width: { lg: '675px', md: '575px', xs: 'auto' }
              }}
              component='h1'
            >
              {heading}
            </Typography>
            <Stack
              sx={{
                background: 'rgba(83, 95, 106, 0.12)',
                borderRadius: '10px',
                border: '1px solid rgba(83, 95, 106, 0.35)',
                mt: { md: '71px', xs: 4 },
                width: { lg: '650px' }
              }}
            >
              {/* <Typography
                    variant="bodytext"
                    sx={{
                      mt: 2,
                      mb: 1,
                      textAlign: { md: 'justify', xs: 'left' },
                      px: 4,
                      fontSize: { md: '16px', xs: '16px' },
                      fontWeight: 500
                    }}
                  >
                    Helping you navigate through the largest number of Childcare Providers in the US.
                  </Typography> */}
              <Typography
                variant="bodytext"
                sx={{
                  my: 2,
                  textAlign: { md: 'justify', xs: 'left' },
                  px: 4,
                  fontSize: { md: '16px', xs: '16px' },
                  fontWeight: 500
                }}
              >
                {description}
              </Typography>
            </Stack>
            <Stack sx={{ position: 'relative', mt: { md: '46px', xs: 4 }, width: { lg: '512px', md: '430px', xs: 'auto' } }}>
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
                  height: { md: '3em', xs: '2.5em' },
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
                  borderRadius: '0 30px 30px 0'
                }}
                onClick={handlesearch}
              >
                <SearchNormal className="child-care-center" size="28" cursor={'pointer'} color="#fff" />
              </Stack>
            </Stack>

            <Stack sx={{ display: 'none', flexDirection: { md: 'row', xs: 'column' }, ml: { md: 0, xs: 1 } }}>
              <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Stack>
                  <Image
                    src='/assets/images/home/Check1.png'
                    alt='greencheckicon'
                    width={13}
                    height={13}
                  />
                </Stack>
                <Stack>
                  <Typography
                    variant="bodytext"
                    sx={{
                      ml: 1
                    }}
                  >
                    Map Based Search
                  </Typography>
                </Stack>
              </Stack>
              <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ml: { md: 4, xs: 0 }, mt: { md: 0, xs: 2 } }}>
                <Image
                  src='/assets/images/home/Check1.png'
                  alt='greencheckicon'
                  width={13}
                  height={13}
                />
                <Stack>
                </Stack>
                <Stack>
                  <Typography
                    variant="bodytext"
                    sx={{
                      ml: 1
                    }}
                  >
                    AI Guided Search
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            {/* <Stack sx={{ mt: 5 }}>
                <Stack sx={{ display: 'none', flexDirection: 'row', alignItems: 'center' }}>
                  <Stack onClick={handleOpen}>
                    <Image
                     src='/assets/images/home/Check1.png'
                     alt='greencheckicon'
                     width={13}
                     height={13}
                   />
                      </Stack>
                  <Stack onClick={handleOpen}>
                    <Typography
                      variant="bodytext"
                      sx={{
                        ml: 1,
                        pb: '4px',
                        borderBottom: '3px solid black',
                        cursor: 'pointer'
                      }}
                    >
                      Watch Video
                    </Typography>
                  </Stack>
                </Stack>

                <Dialog open={open} onClose={handleClose} maxWidth="xl">
                  <DialogContent>
                    <Stack
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative'
                      }}
                    >
                      <ReactPlayer
                        style={{ borderRadius: '30px' }}
                        url={process.env.PUBLIC_URL + '/video/video.mp4'}
                        width="100%"
                        height="637px"
                        playing={isPlaying}
                      />
                      <Box
                        onClick={() => setIsPlaying(!isPlaying)}
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        {isPlaying ? (
                          <>
                            <img src={stopicon} alt="stopicon" height="77px" width="77px" />
                          </>
                        ) : (
                          <>
                            <img src={videoplayicon} alt="videoplayicon" height="77px" width="77px" />
                          </>
                        )}
                      </Box>
                    </Stack>
                  </DialogContent>
                </Dialog>
              </Stack> */}
          </Grid>
        </Grid>
      </Stack>
    </>
  </Stack>
);
}

export default MainBanner;
