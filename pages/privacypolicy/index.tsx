import Header from 'components/header';
import NewSeoSection from 'sections/home/NewSeoSection';
import Footer from 'components/footer';
import PrivacyPolicyPage from 'sections/privacypolicy';
import SeoCategories1 from 'sections/home/seoCategories1';
import Head from 'next/head';
import { fetchTopSearches, fetchAllStates } from '@/api/allAPIs'; //

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

function PrivacyPolicy(props: any) {
  return (
    <>
     <title>Privacy Policy</title>
  <meta name="description" content="Explore our Privacy Policy to understand how we safeguard your information at ChildrenKARE. Your privacy and security are paramount to us."/>

  <meta property="og:title" content="Privacy Policy"/>
  <meta property="og:description" content="Explore our Privacy Policy to understand how we safeguard your information at ChildrenKARE. Your privacy and security are paramount to us."/>
  <meta property="og:url" content={`/privacypolicy`}/>

  <link rel="canonical" href={`/privacypolicy`}/>
      <Header />
     <PrivacyPolicyPage />
      <NewSeoSection topCities={props.topCities || []}
        topStates={props.topStates || []}
        topSearches={props.topSearches || []} {...props} />

      < SeoCategories1 topCities={props.topCities || []}
        topStates={props.allStates || []} />
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
