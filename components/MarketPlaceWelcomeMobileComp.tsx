// material-ui
import { Box, Button, Stack } from '@mui/material';
import { Grid, Typography } from '@mui/material';
const tellusImg = '/assets/images/icons/welcomemobilepopup.png';
// import tellusImg1 from 'assets/images/icons/welcomesm.png';
// import startsimg from 'assets/images/icons/play.png';
import { dispatch } from 'store';
import { setShowMarketPlaceHeader } from 'store/reducers/zipcode';
const gcheck = '/assets/images/home/gCheck.svg'
import { useState } from 'react';
import { ArrowLeft, Play } from 'iconsax-react';
const info = '/assets/images/home/info1.png'
import Image from 'next/image';

import {
  // createTheme,
  useTheme
} from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import VideoPopup from './VideoPopup'

// import { useMediaQuery } from '@mui/material';
// import {
//   // createTheme,
//   useTheme
// } from '@mui/material/styles';

// ==============================|| CUSTOMER - DELETE ||============================== //

interface DeleteChildrenModalProps {
  setIsSimpleSearch: any;
  daycareList: any;
  onClose?: any;
  setMarketPlacePopup?: any;
  setFilteredData: any;
}
const DeleteChildrenModal: React.FC<DeleteChildrenModalProps> = ({
  onClose,
  setMarketPlacePopup,
  setIsSimpleSearch,
  setFilteredData,
  daycareList
}) => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  console.log(matches)
  const [open1, setOpen1] = useState(false);
  const [smartSearch, setSmartSearch] = useState(false);
  const handleOpen = () => {
    setOpen1(true);
  };

  const handleClose = () => {
    setOpen1(false);
  };
  //   const theme = useTheme();
  //   const matches = useMediaQuery(theme.breakpoints.up('md'));
  // const sm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Stack tabIndex={-1} sx={{}}>
      <Grid container justifyContent={'center'}>
        <Grid
          item
          xs={12}
          sx={{
            p: 0,
            backgroundImage: `url(${tellusImg})`,
            m: 2,
            borderRadius: '20px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '270px',
            width: '100%',
            maxWidth: '100%',
            position: 'relative'
          }}
        >
          <Stack sx={{ mt: 2, position: 'absolute', bottom: '10px', right: '10px' }}>
            <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Stack onClick={handleOpen}>
                {/* <img src={playicon} alt="playicon" style={{ height: '40px', width: '40px', cursor: 'pointer' }} /> */}
                <Play
                  size="32"
                  color="#FFF"
                />
              </Stack>
              {/* <Stack onClick={handleOpen}>
                <Typography
                  variant="bodytext1"
                  sx={{
                    ml: 1,
                    pb: '4px',
                    borderBottom: '3px solid white',
                    cursor: 'pointer',
                    fontSize: '16px',
                    color: 'white'
                  }}
                >
                  Watch Video
                </Typography>
              </Stack> */}
            </Stack>
          </Stack>
          {/* <img style={{width: '100%'}} src={tellusImg}/> */}
          {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999, height: '100%' }}>
              <img src={startsimg} height={50} width={50} alt="starsimg" />
            </Box> */}
        </Grid>

        {!smartSearch ?
          <>
            <Grid item xs={12} md={8} sx={{ px: { xs: 2, md: 5 }, color: '#252B42' }}>
              <Stack sx={{ mr: 2, py: 2 }}>

                <Typography
                  variant="mainheading"
                  sx={{
                    fontSize: { md: '22px', xs: '24px' },
                    // letterSpacing: ' -1.75px',
                    mt: 2

                    // width: { lg: '600px', md: '575px', xs: 'auto' }
                  }}
                >
                  Affordable Childcare Through <span style={{ position: 'relative', color: '#ED5B09' }}>Smart Negotiation</span>

                </Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: '400', mt: 1 }}>
                  We Help You Negotiate the Best Rates!

                </Typography>
                <Stack
                  sx={{
                    mt: { md: '20px', xs: 2 },

                  }}
                >
                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                    <Typography sx={{ fontSize: { md: '16px', xs: '13px' }, fontWeight: { md: 500, xs: 400 }, ml: 1 }}>Our <span style={{ fontWeight: 600 }}>CHILDCARE SEARCH MARKETPLACE</span></Typography>
                  </Stack>

                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 1 }}>
                    <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                    <Typography sx={{ fontSize: { md: '16px', xs: '13px' }, fontWeight: { md: 500, xs: 400 }, ml: 1 }}>Connects families with a  <span style={{ fontWeight: 600 }}>NETWORK OF PROVIDERS</span></Typography>
                  </Stack>
                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 1 }}>
                    <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                    <Typography sx={{ fontSize: { md: '16px', xs: '13px' }, fontWeight: { md: 500, xs: 400 }, ml: 1 }}>Ensuring access to  <span style={{ fontWeight: 600 }}>QUALITY, AFFORDABLE CARE</span></Typography>
                  </Stack>
                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', mt: 1 }}>
                    <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px', marginTop: '3px' }} />
                    <Typography sx={{ fontSize: { md: '16px', xs: '13px' }, fontWeight: { md: 500, xs: 400 }, ml: 1 }}>Parents can  <span style={{ fontWeight: 600 }}>SEARCH, COMPARE, SELECT AND NEGOTIATE</span></Typography>
                  </Stack>
                  <Stack pl={2}><Typography sx={{ fontSize: '13px', fontWeight: '400' }}>(from a wide range of Trusted childcare options)</Typography></Stack>
                </Stack>

                <Box display="flex" flexDirection={'column'} alignItems={'center'} justifyContent={'center'} sx={{ pt: 5 }}>
                  <Box display="flex" flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                    <Button
                      variant="contained"
                      sx={{
                        background: '#FF7A00',
                        borderRadius: '30px',
                        width: '100%',
                        minWidth: '176px',
                        p: '9px 20px',
                        '&:hover': {
                          background: 'rgba(0, 0, 0, 0.8)' // Adjust the alpha channel (0.8) as needed
                        }
                      }}
                      onClick={() => {
                        setMarketPlacePopup(true);
                        onClose();
                      }}
                    >
                      Start Smart Search
                    </Button>
                    <Image
              height={20}
              width={20}
              src={info}
              alt={'infoicon'}
              style={{ marginLeft: '4px', cursor: 'pointer'}}
            />
                    {/* <img src={info} alt='infoicon' style={{ marginLeft: '4px', cursor: 'pointer', height: '20px' }}
                      onClick={() => {
                        setSmartSearch(true)
                      }} /> */}

                  </Box>
                  <Box display="flex" justifyContent="center" sx={{ fontSize: '14px', mt: 1, zIndex: 0, ml: '-20px' }}>
                    For Simple Search?
                    <Typography
                      sx={{
                        ml: 1,
                        color: '#FF7A00',
                        fontSize: '14px',
                        cursor: 'pointer'
                      }}
                      onClick={() => {
                        dispatch(setShowMarketPlaceHeader(false));
                        setFilteredData(daycareList);
                        setIsSimpleSearch(true);
                        onClose();
                      }}
                    >
                      click here
                    </Typography>
                  </Box>

                </Box>

                <Stack mt={2} px={2} display={'none'}>
                  <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
                    What sets us apart? We negotiate on your behalf. By leveraging our marketplace model, we create a competitive environment where providers offer their best rates to attract families.

                  </Typography>
                  <Typography sx={{ fontSize: '14px', fontWeight: '400', mt: 2 }}>
                    This means parents don't have to spend time negotiating-our platform negotiating-our platform ensures  transparent pricing and helps secure cost-effective childcare solutions without compromising quality.
                  </Typography>
                  <Typography sx={{ fontSize: '14px', fontWeight: '400', }}> With our service, finding safe, reliable, and budget-friendly childcare has never been easier! </Typography>
                </Stack>
              </Stack>

              <Stack mt={3} px={2}>
                <Typography
                  variant="mainheading"
                  sx={{
                    fontSize: '22px',
                    fontWeight: '600',
                    margin: 'auto'
                  }}
                >
                  What sets us apart?

                </Typography>

                <Grid container mt={2} spacing={1} justifyContent={'center'} alignItems={'center'}>
                  <Grid item xs={6}>
                    <Stack direction="row" alignItems={'center'}>
                      <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                      <Typography
                        sx={{
                          p: '0px 8px',
                          color: '#000',
                          fontSize: '13px',
                          fontWeight: '400',
                          fontStyle: 'normal'
                        }}
                      >
                        Expert Negotiation
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack direction="row" alignItems={'center'}>
                      <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                      <Typography
                        sx={{
                          p: '0px 8px',
                          color: '#000',
                          fontSize: '13px',
                          fontWeight: '400',
                          fontStyle: 'normal'
                        }}
                      >
                        Competitive Rates
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack direction="row" alignItems={'center'}>
                      <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                      <Typography
                        sx={{
                          p: '0px 8px',
                          color: '#000',
                          fontSize: '13px',
                          fontWeight: '400',
                          fontStyle: 'normal'
                        }}
                      >
                        Transparent Pricing
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack direction="row" alignItems={'center'}>
                      <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                      <Typography
                        sx={{
                          p: '0px 8px',
                          color: '#000',
                          fontSize: '13px',
                          fontWeight: '400',
                          fontStyle: 'normal'
                        }}
                      >
                        Budget Friendly
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack direction="row" alignItems={'center'}>
                      <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                      <Typography
                        sx={{
                          p: '0px 8px',
                          color: '#000',
                          fontSize: '13px',
                          fontWeight: '400',
                          fontStyle: 'normal'
                        }}
                      >
                        Time Saving
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack direction="row" alignItems={'center'}>
                      <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                      <Typography
                        sx={{
                          p: '0px 8px',
                          color: '#000',
                          fontSize: '13px',
                          fontWeight: '400',
                          fontStyle: 'normal'
                        }}
                      >
                        Peace Of Mind
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </> : <>
            <Grid item xs={12} md={8} sx={{ px: { xs: 2, md: 5 }, color: '#252B42' }}>
              <Stack sx={{ mr: 2, py: 2 }}>

                <Typography
                  variant="mainheading"
                  sx={{
                    fontSize: { md: '30px', xs: '24px' },
                    letterSpacing: ' -1.75px',
                    mt: 3
                    // width: { lg: '600px', md: '575px', xs: 'auto' }
                  }}
                >
                  Introduction to Smart Search
                  {/* <ArrowLeft
                    size="22"
                    color="#000"
                    style={{ marginRight: '8px' }}
                  /> */}
                </Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: '400', mt: '20px' }}>
                  Smart Search is our intelligent childcare search system that helps parents find the best childcare options quickly and efficiently. Unlike traditional search methods, our platform uses advanced filtering, real-time availability, and personalized recommendations to match families with the right providers.

                </Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: '600', mt: '20px' }}>
                  Here's how Smart Search works:
                </Typography>
                <Stack
                  sx={{
                    mt: { md: '20px', xs: 2 },
                    width: { lg: '520px' },

                  }}
                >
                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', }}>
                    <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px', marginTop: '4px' }} />
                    <Typography sx={{ fontSize: '14px', fontWeight: '400', ml: 1 }}>Comprehensive Provider Network - Access a wide range of trusted childcare centers, preschools, and in-home providers.</Typography>
                  </Stack>

                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', mt: 1 }}>
                    <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px', marginTop: '4px' }} />
                    <Typography sx={{ fontSize: '14px', fontWeight: '400', ml: 1 }}>Advanced Filters - Search by location, budget, hours, services offered, and more to find the perfect match.</Typography>
                  </Stack>
                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', mt: 1 }}>
                    <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px', marginTop: '4px' }} />
                    <Typography sx={{ fontSize: '14px', fontWeight: '400', ml: 1 }}>Live Pricing & Negotiation-Compare transparent pricing and let us negotiate the best deals for you through our marketplace model.</Typography>
                  </Stack>
                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', mt: 1 }}>
                    <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px', marginTop: '4px' }} />
                    <Typography sx={{ fontSize: '14px', fontWeight: '400', ml: 1 }}>Parent Reviews & Ratings-Make informed decisions with verified reviews from other families.</Typography>
                  </Stack>

                </Stack>

                <Stack mt={2}>
                  <Button onClick={() => setSmartSearch(false)} sx={{
                    maxWidth: '147px', background: '#000', color: 'white', borderRadius: '50px', p: '9px 20px', fontSize: '16px', fontWeight: '500', '&:hover': {
                      background: '#000',
                      color: 'white'
                    }
                  }}>
                    <ArrowLeft
                      size="32"
                      color="#fff"
                      style={{ marginRight: '8px' }}
                    /> Back
                  </Button>
                </Stack>

              </Stack>
            </Grid></>}


        <VideoPopup open={open1} handleClose={handleClose} url={'childrenkare.mp4'} />

      </Grid>
    </Stack>
  );
};
export default DeleteChildrenModal;
