// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

// import './styles.css';

// import required modules
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
// import slide1 from 'assets/images/home/Frame1.png';
// import slide2 from 'assets/images/home/Frame2.png';
// import slide3 from 'assets/images/home/Frame3.png';
// import slide4 from 'assets/images/home/Frame4.png';
// import check1 from 'assets/images/home/Check1.png' width={14} height={14};
import Image from 'next/image';

export default function SlickSlider() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#000',
          position: 'relative',
          pb: 4
        }}
      >
        <Container>
          <Stack
            sx={{
              display: { lg: 'flex', xs: 'flex' },
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              mt: { md: '72px', xs: 3 }
            }}
          >
            <Typography
              variant="subheading1"
              sx={{
                fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' },
                textAlign: 'center',
                color: 'white'
              }}
            >
              Unique & Different Ways to Find the Best Match
            </Typography>
          </Stack>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay
            pagination={{
              clickable: true
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  //   mt: { lg: '2px', xs: '40px' },
                  py: { lg: 5, xs: 0 },
                  px: 2
                }}
              >
                <Box>
                  <Stack
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      pt: { lg: 0, xs: 3 }
                    }}
                  >
                    <Image
                      src='/assets/images/home/Frame1min1.webp'
                      alt="childrenmarketplace"
                      width={670} height={433}
                      style={{
                        height: matches ? '443px' : '100%',
                        width: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Stack>
                </Box>
                <Box>
                  <Box sx={{ px: 0 }}>
                    <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'left', xs: 'left' } }}>
                      <Typography
                        variant="subheading2"
                        sx={{
                          fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' },
                          pb: 1,
                          color: 'white',
                          textAlign: { sm: 'center', xs: 'left' },
                          mt: 3
                        }}
                      >
                        Our Marketplace Model
                      </Typography>
                      <Typography
                        variant="bodytext"
                        sx={{
                          pt: '17px',
                          color: 'white',
                          width: { lg: '700px', xs: '100%' },
                          // pb: { lg: 0, xs: 7 },
                          textAlign: { sm: 'center', xs: 'left' }
                        }}
                      >
                        Our marketplace model creates a competative environment where childcare provider offer their best rates and services,giving parents more choices and better pricies.
                      </Typography>

                      <Typography
                        variant="bodytext"
                        sx={{
                          pt: '17px',
                          color: 'white',
                          width: { lg: '700px', xs: '100%' },
                          // pb: { lg: 0, xs: 7 },
                          textAlign: { sm: 'center', xs: 'left' }
                        }}
                      >
                        Unlike Tradition searches,our platform allows families to compare multiple providers in one place,ensuring transparency,affordability and convenience.
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  //   mt: { lg: '2px', xs: '40px' },
                  py: { lg: 5, xs: 0 },
                  px: 2
                }}
              >
                <Box>
                  <Stack
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      pt: { lg: 0, xs: 3 }
                    }}
                  >
                    <Image
                      src='/assets/images/home/Frame2min1.webp'
                      alt="childrenmarketplace"
                      width={670} height={433}
                      style={{
                        height: matches ? '443px' : '100%',
                        width: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Stack>
                </Box>
                <Box>
                  <Box sx={{ px: 0 }}>
                    <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'left', xs: 'left' } }}>
                      <Typography
                        variant="subheading2"
                        sx={{
                          fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' },
                          pb: 1,
                          color: 'white',
                          textAlign: { sm: 'center', xs: 'left' }
                        }}
                      >
                        Curated Provider List
                      </Typography>
                      <Typography
                        variant="bodytext"
                        sx={{
                          pt: '17px',
                          color: 'white',
                          width: { lg: '700px', xs: '100%' },
                          textAlign: { sm: 'center', xs: 'left' }
                        }}
                      >
                        Our marketplace model allows parents to receive a curated list of childcare providers that best their needs, saving time and effort.
                      </Typography>

                      <Typography
                        variant="bodytext"
                        sx={{
                          pt: '17px',
                          color: 'white',
                          width: { lg: '700px', xs: '100%' },
                          textAlign: { sm: 'center', xs: 'left' }
                        }}
                      >
                        Instead of searching Endlessly,Families can compare multiple providers in one place ,With transparent Pricing,Reviews,And real-time Availability.
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  //   mt: { lg: '2px', xs: '40px' },
                  py: { lg: 5, xs: 0 },
                  px: 2
                }}
              >
                <Box>
                  <Stack
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      pt: { lg: 0, xs: 3 }
                    }}
                  >
                    <Image
                      src='/assets/images/home/Frame3min1.webp'
                      alt="childrenmarketplace"
                      width={670} height={433}
                      style={{
                        height: matches ? '443px' : '100%',
                        width: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Stack>
                </Box>
                <Box>
                  <Box sx={{ px: 0 }}>
                    <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'left', xs: 'left' } }}>
                      <Typography
                        variant="subheading2"
                        sx={{
                          fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' },
                          pb: 1,
                          color: 'white',
                          //   textAlign: { sm: 'center', xs: 'left' }
                          mt: 2
                        }}
                      >
                        Childcare Marketplace
                      </Typography>
                      <Typography
                        variant="bodytext"
                        sx={{
                          pt: '21px',
                          fontSize: '18px',
                          color: '#ED5B09'
                          //   textAlign: { sm: 'center', xs: 'left' }
                        }}
                      >
                        Check Center Details
                      </Typography>

                      <Box sx={{ display: { lg: 'flex', xs: 'none' }, flexDirection: { lg: 'row', xs: 'column' }, mt: 3, pb: 6 }}>
                        <Stack sx={{ display: 'flex', flexDirection: { lg: 'column', xs: 'row' } }}>
                          <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image src='/assets/images/home/Check1.png' width={14} height={14} alt='Check1' style={{ height: '14px', width: '14px' }} />
                            <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                              Direction
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ml: { lg: 0, xs: 2 }, mt: { lg: 1, xs: 0 } }}
                          >
                            <Image src='/assets/images/home/Check1.png' width={14} height={14} alt='Check2' style={{ height: '14px', width: '14px' }} />
                            <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                              License Number
                            </Typography>
                          </Stack>
                        </Stack>
                        <Stack
                          sx={{ display: 'flex', flexDirection: { lg: 'column', xs: 'row' }, ml: { lg: 2, xs: 0 }, mt: { lg: 0, xs: 2 } }}
                        >
                          <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image src='/assets/images/home/Check1.png' width={14} height={14} alt='Check3' style={{ height: '14px', width: '14px' }} />
                            <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                              Phone Number
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ml: { lg: 0, xs: 2 }, mt: { lg: 1, xs: 0 } }}
                          >
                            <Image src='/assets/images/home/Check1.png' width={14} height={14} alt='Check4' style={{ height: '14px', width: '14px' }} />
                            <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                              Age Serving
                            </Typography>
                          </Stack>
                        </Stack>
                        <Stack
                          sx={{ display: 'flex', flexDirection: { lg: 'column', xs: 'row' }, ml: { lg: 2, xs: 0 }, mt: { lg: 0, xs: 2 } }}
                        >
                          <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image src='/assets/images/home/Check1.png' width={14} height={14} alt='Check5' style={{ height: '14px', width: '14px' }} />
                            <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                              Capacity
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ml: { lg: 0, xs: 2 }, mt: { lg: 1, xs: 0 } }}
                          >
                            <Image src='/assets/images/home/Check1.png' width={14} height={14} alt='Check6' style={{ height: '14px', width: '14px' }} />
                            <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                              Operating Hours
                            </Typography>
                          </Stack>
                        </Stack>
                        <Stack
                          sx={{ display: 'flex', flexDirection: { lg: 'column', xs: 'row' }, ml: { lg: 2, xs: 0 }, mt: { lg: 0, xs: 2 } }}
                        >
                          <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image src='/assets/images/home/Check1.png' width={14} height={14} alt='Check7' style={{ height: '14px', width: '14px' }} />
                            <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                              Head Start
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ml: { lg: 0, xs: 2 }, mt: { lg: 1, xs: 0 } }}
                          >
                            <Image src='/assets/images/home/Check1.png' width={14} height={14} alt='Check8' style={{ height: '14px', width: '14px' }} />
                            <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                              Early Head Start
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>
                      <Box sx={{ display: { xs: 'flex', lg: 'none' }, flexDirection: { lg: 'column', xs: 'row' }, mt: 3, pb: 6 }}>
                        <Stack sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' } }}>
                          <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image src='/assets/images/home/Check1.png' width={14} height={14} alt='Check9' style={{ height: '14px', width: '14px' }} />
                            <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                              Direction
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ml: { lg: 2, xs: 0 }, mt: { lg: 0, xs: 2 } }}
                          >
                            <Image src='/assets/images/home/Check1.png' width={14} height={14} alt='Check10' style={{ height: '14px', width: '14px' }} />
                            <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                              Phone Number
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ml: { lg: 2, xs: 0 }, mt: { lg: 0, xs: 2 } }}
                          >
                            <Image src='/assets/images/home/Check1.png' width={14} height={14} alt='Check1' style={{ height: '14px', width: '14px' }} />
                            <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                              Capacity
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ml: { lg: 2, xs: 0 }, mt: { lg: 0, xs: 2 } }}
                          >
                            <Image src='/assets/images/home/Check1.png' width={14} height={14} alt='Check1' style={{ height: '14px', width: '14px' }} />
                            <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                              Head Start
                            </Typography>
                          </Stack>
                        </Stack>
                        <Stack
                          sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, ml: { lg: 0, xs: 3 }, mt: { lg: 2, xs: 0 } }}
                        >
                          <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image src='/assets/images/home/Check1.png' width={14} height={14} alt='Check1' style={{ height: '14px', width: '14px' }} />
                            <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                              License Number
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ml: { lg: 2, xs: 0 }, mt: { lg: 0, xs: 2 } }}
                          >
                            <Image src='/assets/images/home/Check1.png' width={14} height={14} alt='Check1' style={{ height: '14px', width: '14px' }} />
                            <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                              Age Serving
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ml: { lg: 2, xs: 0 }, mt: { lg: 0, xs: 2 } }}
                          >
                            <Image src='/assets/images/home/Check1.png' width={14} height={14} alt='Check1' style={{ height: '14px', width: '14px' }} />
                            <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                              Operating Hours
                            </Typography>
                          </Stack>
                          <Stack
                            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ml: { lg: 2, xs: 0 }, mt: { lg: 0, xs: 2 } }}
                          >
                            <Image src='/assets/images/home/Check1.png' width={14} height={14} alt='Check1' style={{ height: '14px', width: '14px' }} />
                            <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                              Early Head Start
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  //   mt: { lg: '2px', xs: '40px' },
                  py: { lg: 5, xs: 0 },
                  px: 2
                }}
              >
                <Box>
                  <Stack
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      pt: { lg: 0, xs: 3 }
                    }}
                  >
                    <Image
                      src='/assets/images/home/Frame4min1.webp'
                      alt="Map based search"
                      width={670} height={433}

                      style={{
                        height: matches ? '443px' : '100%',
                        width: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Stack>
                </Box>
                <Box>
                  <Box sx={{ px: 0 }}>
                    <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'left', xs: 'left' } }}>
                      <Typography
                        variant="subheading2"
                        sx={{
                          fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' },
                          pb: 1,
                          color: 'white',
                          textAlign: { sm: 'center', xs: 'left' },
                          mt: 3
                        }}
                      >
                        Map Based Search
                      </Typography>

                      <Typography
                        variant="bodytext"
                        sx={{
                          pt: '17px',
                          color: 'white',
                          width: { lg: '700px', xs: '100%' },
                          textAlign: { sm: 'center', xs: 'left' }
                        }}
                      >
                        Simple Map Based Search to Find the ChildCare nearest to you
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </SwiperSlide>
          </Swiper>
        </Container>
      </Grid>
    </>
  );
}
