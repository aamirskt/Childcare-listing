'use client';

import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
// import sec6home from 'assets/images/compresspics/sec6home-min.webp';
// import sec7home from 'assets/images/compresspics/overlay2-min.webp';
// import mobilesec6 from 'assets/images/compresspics/mobilesec6-min.webp';
// import mobilesec7 from 'assets/images/compresspics/mobilesec7-min.webp';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// import Image from 'next/image';

const NewHomesec7 = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      <Grid container sx={{ py: 4, background: '#fff', overflow: 'hidden' }}>
        <Container sx={{ px: 0 }}>
          <Grid container>
            <Grid item md={6} xs={12}>
              {matches ? (
                <AnimationOnScroll animateIn="animate__animated animate__delay-0s animate__backInLeft">
                  <Stack
                    sx={{
                      backgroundImage: `url("/assets/compresspics/sec6home-min.webp")`,
                      alt:'Our Commitment sec',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      height: '733px',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '20px'
                    }}
                  >
                    <Stack
                      sx={{             
                        display: 'flex',
                        flexDirection: 'column',
                        // justifyContent: 'center',
                        px: { lg: '61px', xs: '20px' },
                        pt: '51px',
                        borderRadius:'20px',
                        background: 'linear-gradient(180deg, #F9F9F9 0%, #EDEDED 0.01%, rgba(237, 237, 237, 0.61) 22.55%, rgba(237, 237, 237, 0.00) 40.44%)',
                        height: '733px'
                      }}
                    >
                      <Typography
                        variant="subheading1"
                        sx={{ py: 2, textAlign: 'left', fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' } }}
                        component='h3'
                      >
                        Our Commitment
                      </Typography>
                      <Typography variant="bodytext" sx={{ textAlign: { md: 'justify', xs: 'left' } }}>
                        At ChildrenKARE, we are committed to ensuring that you have access to the best childcare options available. We take
                        the time to understand your unique needs, whether you're looking for daycare centers, preschools, or afterschool
                        programs. Our vast network of childcare providers has been thoroughly vetted, ensuring that they meet our rigorous
                        standards for safety, quality, and professionalism.
                      </Typography>
                    </Stack>
                  </Stack>
                </AnimationOnScroll>
              ) : (
                <Stack
                  sx={{
                    backgroundImage: `url("/assets/compresspics/mobilesec6-min.webp")`,
                    backgroundSize: 'cover',
                    alt:'Our Commitment sec',
                    backgroundRepeat: 'no-repeat',
                    height: '733px',
                    width: '100%',
                    objectFit: 'cover'
                  }}
                >
                  <Stack
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      // justifyContent: 'center',
                      px: { lg: '61px', xs: '20px' },
                      pt: '51px',
                      background:
                        'linear-gradient(180deg, #F9F9F9 0%, #EDEDED 0.01%, rgba(237, 237, 237, 0.61) 22.55%, rgba(237, 237, 237, 0.00) 40.44%)',
                      height: '733px'
                    }}
                  >
                    <Typography
                      variant="subheading1"
                      sx={{ py: 2, textAlign: 'left', fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' } }}
                      component='h3'
                    >
                      Our Commitment
                    </Typography>
                    <Typography variant="bodytext" sx={{ textAlign: { md: 'justify', xs: 'left' } }}>
                      At ChildrenKARE, we are committed to ensuring that you have access to the best childcare options available. We take
                      the time to understand your unique needs, whether you're looking for daycare centers, preschools, or afterschool
                      programs. Our vast network of childcare providers has been thoroughly vetted, ensuring that they meet our rigorous
                      standards for safety, quality, and professionalism.
                    </Typography>
                  </Stack>
                </Stack>
              )}
            </Grid>
            <Grid item md={6} xs={12} sx={{ pl: { md: '14px', xs: 0 } }}>
              {matches ? (
                <AnimationOnScroll animateIn="animate__animated animate__delay-0s animate__backInRight">
                  <Stack
                    sx={{
                      backgroundImage: `url('/assets/compresspics/overlay2-min.webp')`,
                      backgroundSize: 'cover',
                      alt:'Why Choose Us',
                      backgroundRepeat: 'no-repeat',
                      height: '733px',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '20px'
                    }}
                  >
                    <Stack
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        // justifyContent: 'center',
                        px: { lg: '61px', xs: '20px' },
                        pt: '51px',
                        borderRadius:'20px',
                        background:
                          'linear-gradient(180deg, #F9F9F9 0%, #EDEDED 0.01%, rgba(237, 237, 237, 0.61) 22.55%, rgba(237, 237, 237, 0.00) 40.44%)',
                        height: '733px'
                      }}
                    >
                      <Typography
                        variant="subheading1"
                        sx={{ py: 2, textAlign: 'left', fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' } }}
                        component='h3'
                      >
                        Why Choose Us
                      </Typography>
                      <Typography variant="bodytext" sx={{ textAlign: { md: 'justify', xs: 'left' } }}>
                        We have a proven track record of successfully matching families with the right childcare providers. Our services are
                        personalized, ensuring that your family's unique needs are met. We prioritize safety, quality, and professionalism
                        in all of our referrals. We save you time and alleviate the stress of searching for childcare on your own
                      </Typography>
                    </Stack>
                  </Stack>
                </AnimationOnScroll>
              ) : (
                <Stack
                  sx={{
                    backgroundImage: `url("/assets/compresspics/mobilesec7-min.webp")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    alt:'Why Choose Us',
                    height: '733px',
                    width: '100%',
                    objectFit: 'cover',
                    mt:'-6px'
                  }}
                >
                  <Stack
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      // justifyContent: 'center',
                      px: { lg: '61px', xs: '20px' },
                      pt: '51px',
                      background:
                        'linear-gradient(180deg, #F9F9F9 0%, #EDEDED 0.01%, rgba(237, 237, 237, 0.61) 22.55%, rgba(237, 237, 237, 0.00) 40.44%)',
                      height: '733px'
                    }}
                  >
                    <Typography
                      variant="subheading1"
                      sx={{ py: 2, textAlign: 'left', fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' } }}
                      component='h3'
                    >
                      Why Choose Us
                    </Typography>
                    <Typography variant="bodytext" sx={{ textAlign: { md: 'justify', xs: 'left' } }}>
                      We have a proven track record of successfully matching families with the right childcare providers. Our services are
                      personalized, ensuring that your family's unique needs are met. We prioritize safety, quality, and professionalism in
                      all of our referrals. We save you time and alleviate the stress of searching for childcare on your own
                    </Typography>
                  </Stack>
                </Stack>
              )}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default NewHomesec7;
