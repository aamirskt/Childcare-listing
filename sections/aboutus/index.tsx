'use client';

import { Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import AboutUsSectionOne from 'sections/aboutus/AboutUsSectionOne';
import AboutUsSectionTwo from 'sections/aboutus/AboutUsSectionTwo';
import AboutUsSectionThree from 'sections/aboutus/AboutUsSectionThree';
import AboutUsSectionFour from 'sections/aboutus/AboutUsSectionFour';
// import NewSeoSection from 'sections/home/NewSeoSection';
import { useTheme } from '@mui/material/styles';
const bannerimage = '/assets/compresspics/about.webp';
const aboutusmobilebg = '/assets/compresspics/aboutusmobilebg.webp';
function AboutUs() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Stack
    sx={{
      backgroundColor: '#fff'
    }}>
        <Stack
          sx={{
            backgroundImage: `url(${matches ? bannerimage : aboutusmobilebg})`,
            backgroundRepeat: 'no-repeat',

            backgroundSize: 'cover',

            backgroundPositionX: { sm: 'right', xs: 'auto' },
            justifyContent: 'center',
            display: 'flex',
            mt: 7
          }}
        >
          <Stack
            sx={{
              color: '#000',
              display: 'flex',
              justifyContent: 'center',
              // alignItems: 'center',
              px: { xs: 5, md: 10 },
              // py: 8,
              minHeight: { md: '340px', xs: '250px' }
            }}
          >
            <Typography
              variant="mainheading"
              sx={{
                fontSize: { lg: '40px', md: '36px', xs: '30px' }
              }}
            >
              About Us
            </Typography>
            <Typography variant="bodytext" sx={{ pt: 2, width: { md: '100%', xs: '180px' } }}>
              We are the Largest Network of Childcare Providers in the United States
            </Typography>
          </Stack>
        </Stack>
        <Grid container>
          <Grid container>
            <Container>
              <Grid xs={12} sm={12} md={12} lg={12} sx={{ px: 0, background: '#fff' }}>
                <AboutUsSectionOne />
                <AboutUsSectionTwo />
              </Grid>
            </Container>
            <Grid container sx={{ background: '#FAFAFA' }}>
              <Container>
                <Grid xs={12} sm={12} md={12} lg={12} sx={{}}>
                  <AboutUsSectionThree />
                </Grid>
              </Container>
            </Grid>
            <Grid container>
              <Container>
                <Grid xs={12} sm={12} md={12} lg={12} sx={{ px: 0, background: '#fff' }}>
                  <AboutUsSectionFour />
                </Grid>
              </Container>
            </Grid>
            {/* <Grid xs={12} sm={12} md={12} lg={12} sx={{ px: 0, mt: 0, background: '#fff' }}>
              <NewSeoSection />
            </Grid> */}
          </Grid>
        </Grid>
    </Stack>
  );
}

export default AboutUs;
