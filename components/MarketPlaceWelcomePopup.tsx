// material-ui
import { Box, Button, Stack } from '@mui/material';
import { Grid, Typography } from '@mui/material';
import { Dialog, DialogContent } from '@mui/material';
const tellusImg = '/assets/images/icons/marketplaceVid.png';
const tellusImg1 = '/assets/images/icons/marketplaceVid.png';
// import firsticon from 'assets/images/icons/iconpop1.png';
// import secondicon from 'assets/images/icons/iconpop2.png';
// import thirdicon from 'assets/images/icons/iconpop3.png';
// import startsimg from 'assets/images/icons/play.png';
import { useMediaQuery } from '@mui/material';
// import logo from 'assets/images/home/logo.png';
const gcheck = '/assets/images/home/gCheck.svg'
const info = '/assets/images/home/info1.png'
// import playicon from 'assets/images/home/playicon.png';
import {
  // createTheme,
  useTheme
} from '@mui/material/styles';
// project-imports
import PopupTransition from 'components/@extended/Transitions';
import { useState } from 'react';
// import startsimg from 'assets/images/home/startsimg.png';
// import xcircle from 'assets/images/home/x-circle.png';
import { ArrowLeft, Play } from 'iconsax-react';
import VideoPopup from './VideoPopup';
// import Dot from 'components/@extended/Dot';
import { setShowMarketPlaceHeader } from 'store/reducers/zipcode';
import { dispatch } from 'store';
import Image from 'next/image';

// ==============================|| CUSTOMER - DELETE ||============================== //

interface DeleteChildrenModalProps {
  open: boolean;
  onClose: any;
  setMarketPlacePopup: any;
  setWelcomePopup: any
}
const DeleteChildrenModal: React.FC<DeleteChildrenModalProps> = ({ open, onClose, setMarketPlacePopup, setWelcomePopup }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [open1, setOpen1] = useState(false);
  const [smartSearch, setSmartSearch] = useState(false);
  const handleOpen = () => {
    setOpen1(true);
  };

  const handleClose = () => {
    setOpen1(false);
  };
  // const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  // const sm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Dialog
      open={open}
      onClose={onClose}
      keepMounted
      TransitionComponent={PopupTransition}
      maxWidth="lg"
      sx={{
        backdropFilter: 'blur(5px)',
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            borderRadius: '20px',
            width: '100%',
            maxWidth: { xs: '315px', md: '910px' } // Set your width here
          }
        }
      }}
      PaperProps={{
    sx: {
      m: 0,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }}
    >
      <DialogContent sx={{ p: 0 }}>

        <Grid tabIndex={-1} container alignItems={'center'}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              p: 0,
              backgroundImage: { xs: `url(${tellusImg1})`, md: `url(${tellusImg})` },
              m: { xs: 2, md: 0 },
              borderRadius: { xs: '20px', md: 0 },
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // height:{md:'570px'},
              // height:'100%',
              minHeight: { xs: '270px', md:  '600px', }, position: 'relative'
            }}
          >
            <Stack sx={{ mt: 2, position: 'absolute', bottom: '10px', right: '10px' }}>
              <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Stack onClick={handleOpen}>
                  {/* <img src={playicon} alt="playicon" style={{ height: '40px', width: '40px', cursor: 'pointer' }} /> */}
                  <Play
                    size="32"
                    color="#FFF"
                    style={{cursor:'pointer'}}
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
              <Grid item xs={12} md={8} sx={{ pl: { xs: 2, md: 4 }, color: '#252B42' }}>
                <Stack sx={{ mr: 2, py: 0 }}>
                  <Box display="flex" alignContent="center" justifyContent={'center'} mb={2}>
                    {
                      <Stack
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"

                        sx={{ cursor: 'pointer', width: { md: '250px', sm: '200px' } }}
                      >
                          <Image
                          src="/assets/images/home/logo.png"
                          alt="Logo"
                          width={!matches ? 180 : 150}
                          height={35} // Adjust to match your logo's aspect ratio
                        />
                        {/* <img src={logo} alt="Logo" style={{ height: 'auto', width: matches ? '180px' : '150px' }} /> */}
                      </Stack>
                    }
                  </Box>
                  <Typography
                    variant="mainheading"
                    sx={{
                      fontSize: { md: '24px', xs: '22px' },
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
                      // width: { lg: '520px' },
                      // ml: 0
                      margin:'0 auto'
                    }}
                  >
                    <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                      <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                      <Typography sx={{ fontSize: { md: '16px', xs: '14px' }, fontWeight: { md: 500, xs: 400 }, ml: 1 }}>Our <span style={{ fontWeight: 600 }}>CHILDCARE SEARCH MARKETPLACE</span></Typography>
                    </Stack>

                    <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 1 }}>
                      <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                      <Typography sx={{ fontSize: { md: '16px', xs: '14px' }, fontWeight: { md: 500, xs: 400 }, ml: 1 }}>Connects families with a  <span style={{ fontWeight: 600 }}>NETWORK OF PROVIDERS</span></Typography>
                    </Stack>
                    <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 1 }}>
                      <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                      <Typography sx={{ fontSize: { md: '16px', xs: '14px' }, fontWeight: { md: 500, xs: 400 }, ml: 1 }}>Ensuring access to  <span style={{ fontWeight: 600 }}>QUALITY, AFFORDABLE CARE</span></Typography>
                    </Stack>
                    <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 1 }}>
                      <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                      <Typography sx={{ fontSize: { md: '16px', xs: '14px' }, fontWeight: { md: 500, xs: 400 }, ml: 1 }}>Parents can  <span style={{ fontWeight: 600 }}>SEARCH, COMPARE, SELECT AND NEGOTIATE</span></Typography>
                    </Stack>
                    <Stack pl={2}><Typography sx={{ fontSize: '15px', fontWeight: '400' }}>(from a wide range of Trusted childcare options)</Typography></Stack>
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
                          setWelcomePopup(false)
                        }}
                      >
                        Start Smart Search
                      </Button>
                      <Image
  src={info}
  alt="infoicon"
  width={20}
  height={20} // Adjust to match your logo's aspect ratio
  style={{ marginLeft: '4px', cursor: 'pointer' }}
  onClick={() => {
    setSmartSearch(true)
  }}
/>
                      {/* <img src={info} alt='infoicon' style={{ marginLeft: '4px', cursor: 'pointer', height: '20px' }}
                        onClick={() => {
                          setSmartSearch(true)
                        }} /> */}
                      {/* <InfoCircle
                        size="28"
                        color="#FF8A65"
                        style={{marginLeft:'4px',cursor:'pointer'}}
                        onClick={() => {
                          setSmartSearch(true)
                        }}
                      /> */}
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
                          setWelcomePopup(false)
                          dispatch(setShowMarketPlaceHeader(false))
                        }}
                      >
                        click here
                      </Typography>
                    </Box>

                  </Box>


                  <Stack mt={2} px={3} display={'none'}>

                    <Typography
                      variant="mainheading"
                      sx={{
                        fontSize: { md: '16px', xs: '14px' },
                        fontWeight: '400',

                      }}
                    >
                      What sets us apart?<span style={{ position: 'relative', fontWeight: 600 }}> We <span style={{ fontSize: '18px' }}>N</span>egotiate on your behalf</span>.

                    </Typography>
                    <Typography
                      variant="mainheading"
                      sx={{
                        fontSize: { md: '16px', xs: '14px' },
                        fontWeight: '400',
                        mt: 1.5
                      }}
                    >
                      By leveraging our <span style={{ position: 'relative', fontWeight: 600 }}> <span style={{ fontSize: '18px' }}>M</span>arketplace model</span>, we create a competitive environment where providers <span style={{ position: 'relative', fontWeight: 600 }}>offer their best rates</span> to attract families.

                    </Typography>
                    <Typography
                      variant="mainheading"
                      sx={{
                        fontSize: { md: '16px', xs: '14px' },
                        fontWeight: '400',
                        mt: 1.5
                      }}
                    >
                      This means parents don't have to spend time negotiating-our platform negotiating-our platform ensures <span style={{ position: 'relative', fontWeight: 600 }}> <span style={{ fontSize: '18px' }}>T</span>ransparent pricing</span> and helps secure <span style={{ position: 'relative', fontWeight: 600 }}> <span style={{ fontSize: '18px' }}>C</span>ost-effective childcare solutions</span> without compromising quality.

                    </Typography>
                    <Typography
                      variant="mainheading"
                      sx={{
                        fontSize: { md: '16px', xs: '14px' },
                        fontWeight: '400',
                        mt: 2
                      }}
                    >
                      With our service finding <span style={{ position: 'relative', fontWeight: 600 }}><span style={{ fontSize: '18px' }}>S</span>afe, <span style={{ fontSize: '18px' }}>R</span>eliable, and <span style={{ fontSize: '18px' }}>B</span>udget-friendly childcare</span> has never been easier!
                    </Typography>

                  </Stack>
                  <Stack mt={3}>
                    <Typography
                      variant="mainheading"
                      sx={{
                        fontSize: { md: '20px', },
                        fontWeight: '600',
                        margin: 'auto'
                      }}
                    >
                      What sets us apart?

                    </Typography>

                    <Grid container mt={2} spacing={1} justifyContent={'center'} alignItems={'center'}>
                      <Grid item xs={4}>
                        <Stack direction="row" alignItems={'center'}>
                          <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                          <Typography
                            sx={{
                              p: '0px 8px',
                              color: '#000',
                              fontSize: '16px',
                              fontWeight: '400',
                              fontStyle: 'normal'
                            }}
                          >
                            Expert Negotiation
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={4}>
                        <Stack direction="row" alignItems={'center'}>
                          <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                          <Typography
                            sx={{
                              p: '0px 8px',
                              color: '#000',
                              fontSize: '16px',
                              fontWeight: '400',
                              fontStyle: 'normal'
                            }}
                          >
                            Competitive Rates
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={4}>
                        <Stack direction="row" alignItems={'center'}>
                          <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                          <Typography
                            sx={{
                              p: '0px 8px',
                              color: '#000',
                              fontSize: '16px',
                              fontWeight: '400',
                              fontStyle: 'normal'
                            }}
                          >
                            Transparent Pricing
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={4}>
                        <Stack direction="row" alignItems={'center'}>
                          <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                          <Typography
                            sx={{
                              p: '0px 8px',
                              color: '#000',
                              fontSize: '16px',
                              fontWeight: '400',
                              fontStyle: 'normal'
                            }}
                          >
                            Budget Friendly
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={4}>
                        <Stack direction="row" alignItems={'center'}>
                          <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                          <Typography
                            sx={{
                              p: '0px 8px',
                              color: '#000',
                              fontSize: '16px',
                              fontWeight: '400',
                              fontStyle: 'normal'
                            }}
                          >
                            Time Saving
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={4}>
                        <Stack direction="row" alignItems={'center'}>
                          <img src={gcheck} alt='greencheckicon' style={{ height: '13px', width: '13px' }} />
                          <Typography
                            sx={{
                              p: '0px 8px',
                              color: '#000',
                              fontSize: '16px',
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
                </Stack>
              </Grid>
            </> : <>
              <Grid item xs={12} md={8} sx={{ px: { xs: 2, md: 5 }, color: '#252B42' }}>
                <Stack sx={{ mr: 2, py: 2 }}>
                  <Box display="flex" alignItems="center" justifyContent={'space-between'} mb={2}>
                    <Stack>
                      <ArrowLeft size="28" color="#000" style={{fontWeight:'600',cursor:'pointer',marginTop:'10px'}} onClick={() => setSmartSearch(false)} />
                    </Stack>
                    <Stack
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"

                      sx={{ cursor: 'pointer', width: { md: '250px', sm: '200px' } }}
                    >
  <Image
  src="/assets/images/home/logo.png"
  alt="Logo"
  width={!matches ? 180 : 150}
  height={35} // Adjust to match your logo's aspect ratio
/>
                      {/* <img src={logo} alt="Logo" style={{ height: 'auto', width: matches ? '180px' : '150px' }} /> */}
                    </Stack>
                    <Stack></Stack>
                  </Box>
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

                  <Stack mt={2} display={'none'}>
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

        </Grid>
      </DialogContent>
      <VideoPopup open={open1} handleClose={handleClose} url={'childrenkare.mp4'} />
    </Dialog>
  );
};
export default DeleteChildrenModal;
