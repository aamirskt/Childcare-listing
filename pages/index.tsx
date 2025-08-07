// 'use client';

// material-ui

import { Container, Divider, Stack } from '@mui/material';
  import Header from 'components/header';
  import NewSectionFive from 'sections/home/NewSectionFive';
  import SectionTwo from 'sections/home/SectionTwo';
  import NewSectionSeven from 'sections/home/NewSectionSeven';
  import NewSectionEight from 'sections/home/NewSectionEight';
import Footer from 'components/footer';
import SeoTabsPanel from 'sections/home/SeoTabPanel';
import MainBanner1 from 'sections/home/MainBanner1';
import HomeSecOne from 'sections/home/HomeSecOne';
import NewHomesec7 from 'sections/home/NewHomesec7';
import SlickSlider from 'sections/home/SwiperSlider';
import ParentDashboard from 'sections/home/ParentDashboardForHomecopy';
import ParentDashboardForHomeMobile from 'sections/home/MobilesecForParent';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NewSeoSection from 'sections/home/NewSeoSection';
// Lazy import the server component
// import NewSeoSection from 'sections/home/NewSeoSectionChild';
import { fetchTopSearches, fetchAllStates } from '@/api/allAPIs'; // Adjust path accordingly
import SeoCategories1 from 'sections/home/seoCategories1';


export const getServerSideProps = async (context: any) => {
  const { topCities, topStates, topSearches } = await fetchTopSearches();
  const { allStates  } = await fetchAllStates();

  const pathname = context.resolvedUrl || '/';
  const abr = context.query.abr || '';

  return {
    props: {
      topCities,
      topStates,
      topSearches,
      pathname,
      abr,
      isCity: false, // or true, depending on your logic
      allStates
    },
  };
};
// import ProviderWrapper from "./ProviderWrapper";
import Head from 'next/head';
// import axios from 'axios';

// const getTopSearchData = async () => {
//   const res = await fetch(`${process.env.NEXT_APP_API_URL}api/search/top_searches`, {
//     method: 'GET',
//     cache: 'no-store',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   const data = await res.json();
//   return {
//     topCities: data?.data?.topCities || [],
//     topStates: data?.data?.topStates || [],
//     topSearches: data?.data?.popularSearches || [],
//   };
// };
 function HomePage(props: any) {
  const theme = useTheme();  
// const { topCities, topStates, topSearches } = await getTopSearchData();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
    const matches1 = useMediaQuery(theme.breakpoints.up('lg'));
  return (
      <>
            <Head>
        <title>Find Best Daycares in USA | Affordable Prices | ChildrenKARE</title>
        <meta
          name="description"
          content="Discover best daycares in USA with ChildrenKARE. Find affordable options with prices, reviews and photos for a reliable daycare choice. Start your search now!"
        />
        <link rel="canonical" href="/" />
      </Head>

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
          <MainBanner1 />
        </Stack> 
        <HomeSecOne />
        <SlickSlider />
        {matches1 ? <ParentDashboard /> : <ParentDashboardForHomeMobile />}

        <SectionTwo />
        <NewHomesec7 />
        <NewSectionFive />
        <NewSectionSeven />
        <NewSectionEight />
      
       <NewSeoSection   topCities={props.topCities || []}
  topStates={props.topStates || []}
  topSearches={props.topSearches || []} {...props}  />
    <Container>
          <Stack sx={{ height: '1px', background: '#C0BFBF' }}></Stack>
        </Container>
        <SeoTabsPanel />
               

                  < SeoCategories1  topCities={props.topCities || []}
  topStates={props.allStates || []} />
        <Footer />
        </>
  );
}

export default HomePage;
