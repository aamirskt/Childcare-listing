import Header from 'components/header';
import Footer from 'components/footer';
import StatesListComp from 'sections/statesList';
import NewSeoSection from 'sections/home/NewSeoSection';
import SeoCategories1 from 'sections/home/seoCategories1';
import { fetchTopSearches, fetchAllStates  } from '@/api/allAPIs'; // Adjust path accordingly

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
      <Header />
      <StatesListComp allStates={props.allStates || []} />
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
