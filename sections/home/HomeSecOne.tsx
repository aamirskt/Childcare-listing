'use client';

import { Container, Grid, Typography } from '@mui/material';
// import family from 'assets/images/compresspics/family-min.webp';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Stack } from '@mui/material';
// import Image from 'next/image';

const HomeSecOne = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <>
      <Grid sx={{ px: 0, pt: '70px', pb: '70px', background: '#fff' }}>
        <Container>
          <Grid
            container
            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', px: { lg: 8, xs: 0 } }}
          >
            <Grid item xs={12} lg={5.5}>
              <Typography
                variant="subheading2"
                sx={{
                  fontSize: { md: '32px', sm: '28px', xs: '26px' },
                  lineHeight: '1.1'
                }}
                component='h2'
              >
                We know how important it is to make a decision for a child's good future.
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6.5} sx={{ mt: { lg: 0, xs: 4 } }}>
              <Stack sx={{ mb: 2 }}>
                <Typography variant="bodytext">
                  ChildrenKARE is using the latest technology to help you identify the ideal childcare provider. ChildrenKARE platform is
                  developing advanced solutions to enable parents to find ideal childcare provider for their children. We are planning to
                  soon release an innovative way to negotiate the term of contract between parents and childcare providers. The new solution
                  is coming soon.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{ mt: { lg: '88px', xs: '21px' } }}
            >
              <AnimationOnScroll animateIn={matches ? 'animate__animated animate__delay-0s animate__backInLeft' : 'none'}>
                <div
                  style={{
                    height: matches ? '502px' : '273px',
                    width: '100%',
                    backgroundImage: `url("/assets/images/home/family-min.webp")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '20px',
                    boxShadow:
                      '0px 100px 80px 0px rgba(0, 0, 0, 0.07), 0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.05), 0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.04), 0px 20px 13px 0px rgba(0, 0, 0, 0.04), 0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.03), 0px 1.852px 3.148px 0px rgba(0, 0, 0, 0.02)'
                  }}
                  aria-label="happy family"
                  role="img"
                />
              </AnimationOnScroll>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default HomeSecOne;
