// app/browse/[state]/page.tsx
import Header from 'components/header';
import StatePage from 'sections/state';
import NewSeoSection from 'sections/home/NewSeoSection';
import Footer from 'components/footer';
import Head  from 'next/head';
import { fetchTopSearches, fetchAllStates, fetchAllCitiesByState } from '@/api/allAPIs'; // Adjust path accordingly
import SeoCategories1 from 'sections/home/seoCategories1';
export const getServerSideProps = async (context: any) => {
  const { topCities, topStates, topSearches } = await fetchTopSearches();
  const { allStates } = await fetchAllStates();
  const { allCities } = await fetchAllCitiesByState(context.query.abr);

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
      allCities
    },
  };
};

// 👇 Server Component
export default function Statedetail(props: any) {
  return (
    <>
       <Head>
       <title>Best Daycares in  {props.abr} | ChildrenKARE</title>
        <meta
          name="description"
          content={`Find top daycares and childcare services in ${props.abr}. Affordable, reviewed, and trusted daycare centers.`}
        />
        {/* Open Graph tags */}
        <meta property="og:title" content={`Best Daycares in ${props.abr} | ChildrenKARE`} />
        <meta
          property="og:description"
          content={`Find top daycares and childcare services in ${props.abr}. Affordable, reviewed, and trusted daycare centers.`}
        />
        <meta property="og:url" content={`/${props.abr}`} />
        {/* Canonical link */}
        <link rel="canonical" href={`/${props.abr}`} />
      </Head>
      <Header />
      <StatePage state={props.abr}  data={props.allCities} />
      <NewSeoSection topCities={props.topCities || []}
              topStates={props.topStates || []}
              topSearches={props.topSearches || []} {...props} />
      
            < SeoCategories1 topCities={props.topCities || []}
              topStates={props.allStates || []} />
      <Footer />

    </>
  );
}