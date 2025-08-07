import Footer from 'components/footer';
import Header from 'components/header';
import NewSeoSection from 'sections/home/NewSeoSection';
import CityComp from 'sections/cityComponent';
import Head from 'next/head';
import SeoCategories1 from 'sections/home/seoCategories1';
import { fetchTopSearches, fetchAllStates, fetchAllCitiesByState  } from '@/api/allAPIs'; // Adjust path accordingly

export const getServerSideProps = async (context: any) => {
  const { topCities, topStates, topSearches } = await fetchTopSearches();
  const { allStates } = await fetchAllStates();
   const stateParam = context?.params?.state; // ⬅️ Use `params`, not `query`
   const cityParam = context?.params?.city; // ⬅️ Use `params`, not `query`
  const state = typeof stateParam === 'string' ? stateParam?.replace('-', ' ') : null;
  const city = typeof cityParam === 'string' ? cityParam?.replace('-', ' ') : null;
  const { allCities } = await fetchAllCitiesByState(state);

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
      allStates,
      allCities,
      state,
      city
    },
  };
};


const Statedetail = (props: any) => {
  function capitalizeWords(str: any) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
  return (
    <>
        <Head>
           <title>Best Daycares in {capitalizeWords(props.city)}, {props.state.toUpperCase()} | ChildrenKARE</title>
        <meta name="description" content={`Find top daycares and childcare services in ${capitalizeWords(props.city)}, ${props.state.toUpperCase()}. Affordable, reviewed, and trusted daycare centers.`}/>

        <meta property="og:title" content={`Best Daycares in ${capitalizeWords(props.city)}, ${props.state.toUpperCase()} | ChildrenKARE`}/>
        <meta property="og:description" content={`Find top daycares and childcare services in ${capitalizeWords(props.city)}, ${props.state.toUpperCase()}. Affordable, reviewed, and trusted daycare centers.`}/>
        <meta property="og:url" content={`/${props.state}/${props.city}`}/>

        <link rel="canonical" href={`/${props.state}/${props.city}`}/>
          </Head>
                <Header />
      <CityComp city={props.city} state={props.state} />
        <NewSeoSection topCities={props.topCities || []}
              topStates={props.topStates || []}
              topSearches={props.topSearches || []} {...props} />
      
            < SeoCategories1 topCities={props.topCities || []}
              topStates={props.allStates || []} />
      <Footer />
    </>
  );
};

export default Statedetail;
