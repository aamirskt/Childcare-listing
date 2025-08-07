'use client';

import { Box, Container, Grid, Stack, Typography } from '@mui/material';
const parentdash = '/assets/images/home/parentdash3.png';
const parentdash1 = '/assets/images/home/parentdash2.png';
// import Image from 'next/image';

const ParentDashboardForHomeMobile = () => {
  return (
    <Grid container sx={{  py: { lg: '84px', xs: '30px', position: 'relative', background: '#ccc'  } }}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: { md: 'center', xs: 'center' } }}>
              <Typography variant="subheading1" sx={{ fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' } }}>
                How to Connect with Parent or Institute
              </Typography>
              <Typography
                variant="bodytext"
                sx={{
                  textAlign: { md: 'center', xs: 'left' },
                  width: { md: '69%' },
                  pt: { md: 2, xs: 1 }
                }}
              >
                Our business is dedicated to making childcare search easy, affordable, and stress-free by connecting parents with a comprehensive network of daycare providers. Through our smart search platform, parents can quickly find, compare, and secure the best childcare options based on their specific needs, including location, budget, availability, and services offered. Unlike traditional searches, we use a marketplace model where providers compete to offer the best rates, and we even help negotiate pricing to ensure affordability. Whether parents need full-time, part-time, or flexible care, we streamline the process, providing personalized recommendations, transparent pricing, and verified reviews-all in one convenient place. With our service, parents can feel confident in finding safe, high-quality, and budget-friendly childcare without the hassle.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Grid container sx={{}}>
        <Container>
          <Grid container sx={{ mt: 7, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Grid
              item
              lg={5.5}
              sm={7}
              xs={12}
              sx={{ boder: '1px solid #D8D8D8', background: '#fff', borderRadius: '10px', width: '631px' }}
            >
              <Stack sx={{ background: '#F5F5F5' }}>
                <Typography
                  variant="subheading1"
                  sx={{ fontSize: { lg: '24px', md: '22px', sm: '18', xs: '18px' }, textAlign: 'center', p: 1 }}
                >
                  Childcare Service Dashboard
                </Typography>
              </Stack>
              <Stack sx={{ mt: '53px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="bodytext" sx={{ width: { sm: '400px', xs: 'auto' }, textAlign: 'center', px: 2 }}>
                  On this Dashboard, we have brought you an amazing feature that will make institute manage very easy for you.
                </Typography>
              </Stack>
              <Stack
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: { sm: 'center', xs: 'flex-start' },
                  px: 3,
                  flexDirection: { sm: 'row', xs: 'column' },
                  flexWrap: 'wrap',
                  mt: { sm: '40px', xs: '20px' }
                }}
              >
                <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1, display: 'flex', alignItems: 'center' }}>
                  <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                    Created professional profile
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '30px',
                    background: '#F5F5F5',
                    borderRadius: '30px',
                    px: 1,
                    ml: { sm: 2, xs: 0 },
                    mt: { xs: 1, sm: 0 },
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                    Marketplace Bids
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '30px',
                    background: '#F5F5F5',
                    borderRadius: '30px',
                    px: 1,
                    ml: { sm: 2, xs: 0 },
                    mt: { xs: 1, sm: 0 },
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                    Conversation
                  </Typography>
                </Box>
              </Stack>
              <Stack
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: { sm: 'center', xs: 'flex-start' },
                  px: 3,
                  flexDirection: { sm: 'row', xs: 'column' },
                  flexWrap: 'wrap',
                  mt: '10px'
                }}
              >
                <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1, display: 'flex', alignItems: 'center' }}>
                  <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                    Review Daily inquiry
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '30px',
                    background: '#F5F5F5',
                    borderRadius: '30px',
                    px: 1,
                    ml: { sm: 2, xs: 0 },
                    mt: { xs: 1, sm: 0 },
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                    Finance management
                  </Typography>
                </Box>
              </Stack>
              <Stack sx={{ mt: { sm: 6, xs: 3 }, px: 3, mb: 3 }}>
              <div
    style={{
      width: '100%',
      height: '300px', // set a fixed or responsive height
      backgroundImage: `url(${parentdash})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '16px', // optional
    }}
    aria-label="parentdash"
    role="img"
  />
              </Stack>
            </Grid>
            <Grid
              item
              lg={5.5}
              sm={7}
              xs={12}
              sx={{ boder: '1px solid #D8D8D8', background: '#fff', borderRadius: '10px', width: '631px', mt: 3 }}
            >
              <Stack sx={{ background: '#F5F5F5' }}>
                <Typography
                  variant="subheading1"
                  sx={{ fontSize: { lg: '24px', md: '22px', sm: '18', xs: '18px' }, textAlign: 'center', p: 1 }}
                >
                  Parents Dashboard
                </Typography>
              </Stack>
              <Stack sx={{ mt: '53px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="bodytext" sx={{ width: { sm: '400px', xs: 'auto' }, textAlign: 'center', px: 2 }}>
                  Through this dashboard, you can find a childcare center for your kids with this amazing feature.
                </Typography>
              </Stack>
              <Stack
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: { sm: 'center', xs: 'flex-start' },
                  px: 3,
                  flexDirection: { sm: 'row', xs: 'column' },
                  flexWrap: 'wrap',
                  mt: { sm: '40px', xs: '20px' }
                }}
              >
                <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1, display: 'flex', alignItems: 'center' }}>
                  <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                    Choose Best Offer
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '30px',
                    background: '#F5F5F5',
                    borderRadius: '30px',
                    px: 1,
                    ml: { sm: 2, xs: 0 },
                    mt: { xs: 1, sm: 0 },
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                    Choose Best Location
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '30px',
                    background: '#F5F5F5',
                    borderRadius: '30px',
                    px: 1,
                    ml: { sm: 2, xs: 0 },
                    mt: { xs: 1, sm: 0 },
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                    Multiple Offers
                  </Typography>
                </Box>
              </Stack>
              <Stack
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: { sm: 'center', xs: 'flex-start' },
                  px: 3,
                  flexDirection: { sm: 'row', xs: 'column' },
                  flexWrap: 'wrap',
                  mt: '10px'
                }}
              >
                <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1, display: 'flex', alignItems: 'center' }}>
                  <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                    See Institute Details
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '30px',
                    background: '#F5F5F5',
                    borderRadius: '30px',
                    px: 1,
                    ml: { sm: 2, xs: 0 },
                    mt: { xs: 1, sm: 0 },
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                    Institute Conversation
                  </Typography>
                </Box>
              </Stack>
              <Stack sx={{ mt: { sm: 6, xs: 3 }, px: 3, mb: 3 }}>
              <div
    style={{
      width: '100%',
      height: '300px', // set a fixed or responsive height
      backgroundImage: `url(${parentdash1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '16px', // optional
    }}
    aria-label="parentdash"
    role="img"
  />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default ParentDashboardForHomeMobile;
