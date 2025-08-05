
'use client';
// material-ui

import {  Stack } from '@mui/material';

// ==============================|| UNDER CONSTRUCTION ||============================== //

import Header from 'components/header';
// import { useState } from 'react';

// import NewSectionOne from 'sections/home/NewSectionOne';
// import NewSectionFive from 'sections/home/NewSectionFive';
// import SectionTwo from 'sections/home/SectionTwo';
// import SectionThree from 'sections/home/SectionThree';
// import NewSectionSeven from 'sections/home/NewSectionSeven';
// import NewSectionEight from 'sections/home/NewSectionEight';
import Footer from 'components/footer';
// import NewSection2 from 'sections/home/NewSection2';
// import NewSeoSection from 'sections/home/NewSeoSection';
// import { Helmet } from 'react-helmet';
// import UpdatedSecOne from 'sections/home/UpdateSecOne';
// import SeoTabsPanel from 'sections/home/SeoTabPanel';
// import  { useEffect } from 'react';
// import MainBanner1 from 'sections/home/MainBanner1';
// import mobilehomebg from 'assets/images/home/mobilebg.png';
// import banner1 from 'assets/images/home/homebanner-min.jpg';
// import HomeSecOne from 'sections/home/HomeSecOne';
// import NewHomesec7 from 'sections/home/NewHomesec7';
// import SlickSlider from 'sections/home/SwiperSlider';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// import mobilebg from 'assets/images/home/mobilehomeimg.png';
// import ParentDashboard from 'sections/home/ParentDashboardForHomecopy';
// import ParentDashboardForHomeMobile from 'sections/home/MobilesecForParent';
// import { useLocation } from 'react-router-dom';


function HomePage() {
  const theme = useTheme();  

  const matches = useMediaQuery(theme.breakpoints.up('md'));
    // const matches1 = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Stack>
      <>
        <Stack
          sx={{
            backgroundImage: `url(${matches ? "/assets/images/home/homebanner-min.webp" : "/assets/images/home/mobilehomeimg1.webp"})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: {xl:'100vh', lg:'800px', xs:'100vh'},
            // minHeight: '100vh',
            backgroundPositionX: { md: 'right', xs: 'auto' },
            backgroundPositionY: 'center',
            height: '100%'
            
          }}
        >
          <Header />
          {/* <MainBanner1 /> */}
        </Stack>
        {/* <HomeSecOne /> */}
        {/* <SlickSlider /> */}
        {/* <UpdatedSecOne /> */}
        {/* {matches1 ? <ParentDashboard /> : <ParentDashboardForHomeMobile />} */}

        {/* <SectionTwo /> */}
        {/* <NewSection2 /> */}
        {/* <NewHomesec7 /> */}
        {/* <SectionThree /> */}
        {/* <NewSectionFive />
        <NewSectionSeven />
        <NewSectionEight />
        <NewSeoSection />
        <Container>
          <Stack sx={{ height: '1px', background: '#C0BFBF' }}></Stack>
        </Container>
        <SeoTabsPanel /> */}
        <Footer />
      </>
    </Stack>
  );
}

export default HomePage;
