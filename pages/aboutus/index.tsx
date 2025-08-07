import Header from 'components/header';
import Footer from 'components/footer';
import AboutUsComp from 'sections/aboutus';
import NewSeoSection from 'sections/home/NewSeoSection';
import Head  from 'next/head';
import { fetchTopSearches, fetchAllStates } from '@/api/allAPIs'; // Adjust path accordingly
import SeoCategories1 from 'sections/home/seoCategories1';
export const getServerSideProps = async (context: any) => {
  const { topCities, topStates, topSearches } = await fetchTopSearches();
  const { allStates } = await fetchAllStates();

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


function AboutUs(props: any) {
  return (
    <>
      <Head>
        <title>About us</title>
        <meta
          name="description"
          content="Best Daycares In USA, Top Daycares In USA, Best Daycares Near Me, Daycares Near Me, Best Daycare Centers in My Area, High Quality Daycare Services, Daycares In USA, Daycares, Daycare Services, Best Daycare Centers, Daycare Centers in USA, Affordable Childcare Centers, Children care centers, Find Best Daycares, Quality Daycare Providers, Affordable Childcare near me, Top Daycare Centers in the USA, ChildrenKARE."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="About us" />
        <meta
          property="og:description"
          content="Best Daycares In USA, Top Daycares In USA, Best Daycares Near Me, Daycares Near Me, Best Daycare Centers in My Area, High Quality Daycare Services, Daycares In USA, Daycares, Daycare Services, Best Daycare Centers, Daycare Centers in USA, Affordable Childcare Centers, Children care centers, Find Best Daycares, Quality Daycare Providers, Affordable Childcare near me, Top Daycare Centers in the USA, ChildrenKARE."
        />
        <meta property="og:url" content={`/aboutus`} />
        {/* Canonical link */}
        <link rel="canonical" href={`/aboutus`} />
      </Head>
      <Header />
      <AboutUsComp />
      <NewSeoSection topCities={props.topCities || []}
        topStates={props.topStates || []}
        topSearches={props.topSearches || []} {...props} />

      < SeoCategories1 topCities={props.topCities || []}
        topStates={props.allStates || []} />
      <Footer />
    </>
  );
}

export default AboutUs;
