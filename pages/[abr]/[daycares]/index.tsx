
import SearchDayCares from 'sections/search';
import Header from 'components/header';
import Footer from 'components/footer';
import Head  from 'next/head';
import { fetchTopSearches, fetchAllStates, fetchAIData, fetchBlogs } from '@/api/allAPIs'; // Adjust path accordingly
import SeoCategories1 from 'sections/home/seoCategories1';
import NewSeoSection from '@/sections/home/NewSeoSection';
import { Stack } from '@mui/material';
import MainBanner1 from '@/sections/home/MainBannerSearch';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const getServerSideProps = async (context: any) => {
  const { topCities, topStates, topSearches } = await fetchTopSearches();
  const { allStates } = await fetchAllStates();

  const pathname = context.resolvedUrl || '/';
  const abr = context.query.abr || '';
const daycares = context.query.daycares || ''; // ✅ This is fine in a server component
  const cityName = daycares?.replace('daycares-in-', '')?.replace(/\-+/g, ' ');
  const { aiData } = await fetchAIData(abr, cityName);
  const { allblogs } = await fetchBlogs();

  return {
    props: {
      topCities,
      topStates,
      topSearches,
      pathname,
      abr,
      isCity: false, // or true, depending on your logic
      allStates,
      cityName,
      aiData,
      allblogs,
      daycares

    },
  };
};



// 👇 Server Component
 function SearchPage(props: any) {
  const { allblogs, aiData, cityName, abr, daycares, topCities, topStates, topSearches, allStates} = props
    const {seo_title, seo_description} = aiData
 const theme = useTheme();  
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
       <Head>
       <title>{seo_title ? seo_title : `Best Daycares Near Me in ${cityName}`}</title>
        <meta
          name="description"
          content={seo_description ? seo_description : `Find daycares in ${cityName}. Explore trusted child care and preschool services,
  and explore best daycares in${cityName}; at affordable cost.`}
        />
        {/* Open Graph tags */}
        <meta property="og:title" content={seo_title ? seo_title : `Best Daycares Near Me in ${cityName}`} />
        <meta
          property="og:description"
          content={seo_description ? seo_description : `Find daycares in ${cityName}. Explore trusted child care and preschool services,
  and explore best daycares in${cityName}; at affordable cost.`}
        />
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `What types of daycare services are available in ${cityName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `In ${cityName}, you’ll find a wide range of options including infant care, toddler programs, preschools, part-time and full-time daycare, drop-in care, and after-school care.`
          }
        },
        {
          "@type": "Question",
          "name": `How much does daycare typically cost in ${cityName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `The average weekly cost ranges from $150 to $300 depending on age, program type, and provider. ChildrenKare also highlights affordable daycare options and providers with flexible pricing.`
          }
        },
        {
          "@type": "Question",
          "name": `Are there licensed home daycares near me in ${cityName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes! Many families in ${cityName} choose licensed in-home daycares for smaller class sizes and a home-like environment. ChildrenKare connects you with trusted local providers.`
          }
        },
        {
          "@type": "Question",
          "name": `What should I look for when choosing a daycare in ${cityName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Look for licensed providers with experienced staff, a clean and safe facility, small child-to-caregiver ratios, flexible hours, and strong parent reviews.`
          }
        },
        {
          "@type": "Question",
          "name": `Do any ${cityName} daycares offer extended hours or weekend care?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes, several local daycares offer extended hours—including early drop-off, evening care, and weekend services to accommodate working parents.`
          }
        }
      ]
    })
  }}
/>

        {/* <meta
    name="keywords"
    content={`${lsi_keywords}`}
  /> */}
        <meta property="og:url" content={`/${abr}/${daycares}`} />
        {/* Canonical link */}
        <link rel="canonical" href={`/${abr}/${daycares}`} />
      </Head>
      <Header />
        <Stack
          sx={{
            backgroundImage: `url(${matches ? "/assets/images/home/homebanner-min.webp" : "/assets/images/home/mobilehomeimg1.webp"})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '10vh',
            // minHeight: '100vh',
            backgroundPositionX: { md: 'right', xs: 'auto' },
            backgroundPositionY: 'flex-end',
            height: '100%',
            m: 2,
            mt: '80px',
            borderRadius: matches ?  '20px': '10px'
            
          }}
        > 
          <MainBanner1 />
        </Stack> 
      <SearchDayCares abr={abr} daycares={cityName} aiData={aiData} allblogs={allblogs}  topCities={topCities || []} />
      <NewSeoSection topCities={topCities || []}
              topStates={topStates || []}
              topSearches={topSearches || []} {...props} />
      
            < SeoCategories1 topCities={topCities || []}
              topStates={allStates || []} />
      <Footer />
    </>
  );
}

export default SearchPage;
