'use client';

import {Container, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
// import videodummy from 'assets/images/home/videodummyimg.png';
// import ReactPlayer from 'react-player';
// import videoplayicon from 'assets/images/home/videoplayicon.png';
// import stopicon from 'assets/images/home/stopicon.png';
// import startsimg from 'assets/images/home/startsimg.png';
import { useMediaQuery } from '@mui/material';
import {
  // createTheme,
  useTheme
} from '@mui/material/styles';
// import Image from 'next/image';
import Ytplayer from './videoPlayer';


function SectionTwo() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Grid container sx={{ background: '#fff', py: { lg: '84px', xs: '30px' }, px: { xs: 2 } }}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: { md: 'center', xs: 'center' } }}>
              <Typography variant="subheading1" sx={{ fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' } }}>
                ChildrenKARE
              </Typography>
              <Typography
                variant="bodytext"
                sx={{
                  textAlign: { md: 'center', xs: 'center' },
                  width: { md: '53%' },
                  pt: { md: 2, xs: 1 }
                }}
              >
                 We are dedicated and experienced team of professionals who are passionate about helping parents like you navigate the often
                complex landscape and of childcare options
              </Typography>
            </Stack>
             <Ytplayer />

            <Stack sx={{ display: 'none', justifyContent: 'center', alignItems: { md: 'center', xs: 'left' }, mt: '88px' }}>
              <Typography variant="subheading2" sx={{ fontSize: { lg: '28px', md: '26px', sm: '24px', xs: '22px' } }}>
                Our mission is simple
              </Typography>
              <Typography
                variant="bodytext"
                sx={{
                  textAlign: { md: 'center', xs: 'left' },
                  width: { md: '50%' },
                  pt: { md: 2, xs: 1 }
                }}
              >
                to connect families with the ideal childcare providers that align with your preferences, values, and specific requirements.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default SectionTwo;
