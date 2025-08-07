'use client';


// material-ui
import React from 'react';
import { Grid } from '@mui/material';
import {
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';


function MainBanner1() {

  return (
          <Stack
            sx={{
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              px: { lg: 0, md: 2},
              // height: '100vh',
              ml: { xl: '100px', lg: '30px'}
            }}
            // id="mapsearch"
          >
            <Grid
              container
              sx={{
                // background: 'linear-gradient(121deg, rgba(255, 255, 255, 0.65) 0.76%, rgba(255, 255, 255, 0.55) 97.98%)',
                // border: '1px solid #ADABAB',
                // borderRadius: '10px',
                // backdropFilter: 'blur(20px)',
                width: { xl: '670px', md: '600px', xs: 'auto' },
                height: { xl: 'auto', lg: 'auto', xs: 'auto' },
                // mb: { lg: 3, xs: 2 },
                // mt:10

              }}
            >
              <Grid
                item
                xs={12}
                sx={{ color: '#fff', display: 'flex', flexDirection: 'column', px: { xl: 7, lg: 4, xs: 2 }, my: { md: '30px', xs: 3 } }}
                component="h1"
              >
                <Typography
                  sx={{
                    fontSize: { md: '20px', xs: '30px' },
                    fontWeight: '600',
                    letterSpacing: ' -1.75px',
                    // width: { lg: '600px', md: '575px', xs: 'auto' }
                  }}
                >
                  Affordable Childcare Through 
                </Typography>
                 <Typography
                  variant="mainheading"
                  sx={{
                    fontSize: { md: '20px', xs: '30px' },
                    letterSpacing: ' -1.75px',
                    // width: { lg: '600px', md: '575px', xs: 'auto' }  
                  }}
                > <span style={{ position: 'relative', color: '#ED5B09' }}>Smart Negotiation</span>

                </Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
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
                    <Typography sx={{ fontSize: { md: '14px', xs: '13px' }, fontWeight: { md: 500, xs: 400 }, ml: 1 }}>Our <span style={{ fontWeight: 600 }}>CHILDCARE SEARCH MARKETPLACE</span></Typography>
                  </Stack>

                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 1 }}>
                    <Image
  src='/assets/images/home/Check1.png'
  alt='greencheckicon'
  width={13}
  height={13}
/>
                    {/* <Image src='assets/images/home/Check1.png' alt='greencheckicon' style={{ height: '13px', width: '13px' }} /> */}
                    <Typography sx={{ fontSize: { md: '14px', xs: '13px' }, fontWeight: { md: 500, xs: 400 }, ml: 1 }}>Connects families with a  <span style={{ fontWeight: 600 }}>NETWORK OF PROVIDERS</span></Typography>
                  </Stack>
                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 1 }}>
                    <Image
  src='/assets/images/home/Check1.png'
  alt='greencheckicon'
  width={13}
  height={13}
/>
                    {/* <Image src='assets/images/home/Check1.png' alt='greencheckicon' style={{ height: '13px', width: '13px' }} /> */}
                    <Typography sx={{ fontSize: { md: '14px', xs: '13px' }, fontWeight: { md: 500, xs: 400 }, ml: 1 }}>Ensuring access to  <span style={{ fontWeight: 600 }}>QUALITY, AFFORDABLE CARE</span></Typography>
                  </Stack>
                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', mt: 1 }}>
                  <Image
  src='/assets/images/home/Check1.png'
  alt='greencheckicon'
  width={13}
  height={13}
/>
                    {/* <Image src='assets/images/home/Check1.png' alt='greencheckicon' style={{ height: '13px', width: '13px', marginTop: '3px' }} /> */}
                    <Typography sx={{ fontSize: { md: '14px', xs: '13px' }, fontWeight: { md: 500, xs: 400 }, ml: 1 }}>Parents can  <span style={{ fontWeight: 600 }}>SEARCH, COMPARE, SELECT AND NEGOTIATE</span></Typography>
                  </Stack>
                  <Stack pl={2}><Typography sx={{ fontSize: { md: '15px', xs: '12px' }, fontWeight: '400' }}>(from a wide range of Trusted childcare options)</Typography></Stack>
                </Stack>
               
              </Grid>
            </Grid>
          </Stack>
  );
}

export default MainBanner1;
