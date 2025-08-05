// app/browse/[state]/page.tsx

import Header from 'components/header';
import BrowseStatePage from 'sections/browse';
import NewSeoSection from 'sections/home/NewSeoSection';
import Footer from 'components/footer';
import Head from 'next/head';
import SeoCategories1 from 'sections/home/seoCategories1';
import { fetchTopSearches, fetchAllStates, fetchAllCitiesByState  } from '@/api/allAPIs'; // Adjust path accordingly

export const getServerSideProps = async (context: any) => {
  const { topCities, topStates, topSearches } = await fetchTopSearches();
  const { allStates } = await fetchAllStates();
   const stateParam = context?.params?.state; // ⬅️ Use `params`, not `query`
  const state = typeof stateParam === 'string' ? stateParam?.replace('-', ' ') : null;
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
      state
    },
  };
};


// 👇 Server Component
export default function Statedetail(props: any) {
 
  return (
    <>
    <Head>
     <title>Best Daycares in {props.state} | ChildrenKARE</title>
  <meta name="description" content={`Find top daycares and childcare services in ${props.state}. Affordable, reviewed, and trusted daycare centers.`}/>

  <meta property="og:title" content={`Best Daycares in ${props.state} | ChildrenKARE`}/>
  <meta property="og:description" content={`Find top daycares and childcare services in ${props.state}. Affordable, reviewed, and trusted daycare centers.`}/>
  <meta property="og:url" content={`/${props.state}`}/>

  <link rel="canonical" href={`/${props.state}`}/>
    </Head>
      <Header />
      <BrowseStatePage state={props.state} data={props.allCities || []} />
     <NewSeoSection topCities={props.topCities || []}
        topStates={props.topStates || []}
        topSearches={props.topSearches || []} {...props} />

      < SeoCategories1 topCities={props.topCities || []}
        topStates={props.allStates || []} />
      <Footer />

    </>
  );
}