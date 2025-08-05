'use client';


import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
const parentdash = '/assets/images/home/parentdash31.webp';
const parentdash1 = '/assets/images/home/parentdash21.webp';
const shakehand = '/assets/images/home/parentdash1min.png';
// import './style1.css'; // Import the CSS
// import Image from 'next/image';

const ParentDashboardForHome: React.FC = () => {




  return (
    <Grid container sx={{ py: { lg: '84px', xs: '30px' }, position: 'relative', background: '#ccc' }} component={'div'}>
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
                  textAlign: { md: 'center', xs: 'center' },
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
      <Grid container>
        <Grid
          container
          sx={{
            mt: 7,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <Grid
            item
            lg={5}
            // className={`side ${isAnimated ? 'leftMove' : 'leftMoveReverse'}`}
            sx={{ border: '1px solid #D8D8D8', background: '#fff', borderRadius: '10px', width: { xl: '531px', lg: '470px' } }}
          >
            <Stack sx={{ background: '#F5F5F5' }}>
              <Typography
                variant="subheading1"
                sx={{ fontSize: { lg: '24px', md: '22px', sm: '18', xs: '18px' }, textAlign: 'center', p: 1 }}
              >
                Provider Service Dashboard
              </Typography>
            </Stack>
            <Stack sx={{ mt: '53px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="bodytext" sx={{ width: '400px', textAlign: 'center' }}>
                On this Dashboard, we have brought you an amazing feature that will make institute manage very easy for you.
              </Typography>
            </Stack>
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 3, flexDirection: 'row', mt: '40px' }}>
              <Box sx={{ py: 1, textAlign: 'center', background: '#F5F5F5', borderRadius: '30px', px: 1 }}>
                <Typography variant="bodytext1" sx={{ fontSize: '12px', fontWeight: '400', color: '#000' }}>
                  Professional profile
                </Typography>
              </Box>
              <Box
                sx={{
                  py: 1,
                  textAlign: 'center',
                  background: '#F5F5F5',
                  borderRadius: '30px',
                  px: 1,
                  ml: 2,
                  display: { xl: 'block', xs: 'none' }
                }}
              >
                <Typography variant="bodytext1" sx={{ fontSize: '12px', fontWeight: '400', color: '#000' }}>
                  Marketplace Bids
                </Typography>
              </Box>
              <Box sx={{ py: 1, textAlign: 'center', background: '#F5F5F5', borderRadius: '30px', px: 1, ml: 2 }}>
                <Typography variant="bodytext1" sx={{ fontSize: '12px', fontWeight: '400', color: '#000' }}>
                  Conversation
                </Typography>
              </Box>
            </Stack>
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 3, flexDirection: 'row', mt: '10px' }}>
              <Box sx={{ py: 1, textAlign: 'center', background: '#F5F5F5', borderRadius: '30px', px: 1 }}>
                <Typography variant="bodytext1" sx={{ fontSize: '12px', fontWeight: '400', color: '#000' }}>
                  Review Daily inquiry
                </Typography>
              </Box>
              <Box sx={{ py: 1, textAlign: 'center', background: '#F5F5F5', borderRadius: '30px', px: 1, ml: 2 }}>
                <Typography variant="bodytext1" sx={{ fontSize: '12px', fontWeight: '400', color: '#000' }}>
                  Finance management
                </Typography>
              </Box>
            </Stack>
            <Stack sx={{ mt: 6, px: 3, mb: 2 }}>
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

          {/* <Grid item>
            <Stack className={`centerPart ${isAnimated ? 'centerGrow1 centerVisible1' : 'centerShrink1 centerVisible1'}`}>
              <Stack sx={{ alignItems: 'center' }}>
                <Typography variant="subheading3" sx={{fontSize:{md:'20px',xs:'18px'}}}>We Negotiate for you</Typography>
              </Stack>
              <Stack sx={{ alignItems: 'center' }}>
                <Rating name="simple-controlled" value={5} />
              </Stack>
            </Stack>
            <Stack
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              className={`center ${isAnimated ? 'centerGrow centerVisible' : 'centerShrink centerVisible'}`}
            >
              <img src={shakehand} alt="shakehand" style={{ width: '100%', height: '100%',position:'relative',zIndex:999 }} />
            </Stack>
          </Grid> */}

          <Grid item>
            {/* <Stack >
              <Stack sx={{ alignItems: 'center' }}>
                <Typography variant="subheading3" sx={{ fontSize: { md: '20px', xs: '18px' } }}>We Negotiate for you</Typography>
              </Stack>
              <Stack sx={{ alignItems: 'center' }}>
                <Rating name="simple-controlled" value={5} />
              </Stack>
            </Stack> */}
            <Stack
              sx={{
                position: 'absolute',
                top: '43%',
                // right:'35%',
                marginLeft: '-270px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            // className={`center ${isAnimated ? 'centerGrow centerVisible' : 'centerShrink centerVisible'}`}
            >
              <Box
                component="img"
                src={shakehand}
                alt="shakehand"
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </Stack>
          </Grid>

          <Grid
            item
            lg={5}
            // className={`side ${isAnimated ? 'rightMove' : 'rightMoveReverse'}`}
            sx={{
              border: '1px solid #D8D8D8',
              background: '#fff',
              borderRadius: '10px',
              width: { xl: '531px', lg: '470px' },
              ml: 3
            }}
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
              <Typography variant="bodytext" sx={{ width: '400px', textAlign: 'center', px: 2 }}>
                Through this dashboard, you can find a childcare center for your kids with this amazing feature.
              </Typography>
            </Stack>
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 3, flexDirection: 'row', mt: '40px' }}>
              <Box sx={{ py: 1, textAlign: 'center', background: '#F5F5F5', borderRadius: '30px', px: 1 }}>
                <Typography variant="bodytext1" sx={{ fontSize: '12px', fontWeight: '400', color: '#000' }}>
                  Choose Best Offer
                </Typography>
              </Box>
              <Box sx={{ py: 1, textAlign: 'center', background: '#F5F5F5', borderRadius: '30px', px: 1, ml: 2 }}>
                <Typography variant="bodytext1" sx={{ fontSize: '12px', fontWeight: '400', color: '#000' }}>
                  Choose Best Location
                </Typography>
              </Box>
              <Box
                sx={{
                  py: 1,
                  textAlign: 'center',
                  background: '#F5F5F5',
                  borderRadius: '30px',
                  px: 1,
                  ml: 2,
                  display: { xl: 'block', xs: 'none' }
                }}
              >
                <Typography variant="bodytext1" sx={{ fontSize: '12px', fontWeight: '400', color: '#000' }}>
                  Multiple Offers
                </Typography>
              </Box>
            </Stack>
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 3, flexDirection: 'row', mt: '10px' }}>
              <Box sx={{ py: 1, textAlign: 'center', background: '#F5F5F5', borderRadius: '30px', px: 1 }}>
                <Typography variant="bodytext1" sx={{ fontSize: '12px', fontWeight: '400', color: '#000' }}>
                  See Institute Details
                </Typography>
              </Box>
              <Box sx={{ py: 1, textAlign: 'center', background: '#F5F5F5', borderRadius: '30px', px: 1, ml: 2 }}>
                <Typography variant="bodytext1" sx={{ fontSize: '12px', fontWeight: '400', color: '#000' }}>
                  Institute Conversation
                </Typography>
              </Box>
            </Stack>
            <Stack sx={{ mt: 6, px: 3, mb: 2, position: 'relative', }}>
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
      </Grid>
    </Grid>
  );
};

export default ParentDashboardForHome;
