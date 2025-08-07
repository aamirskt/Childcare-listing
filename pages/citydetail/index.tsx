import Header from 'components/header';
import CityDetailComp from 'sections/cityDetail';
import NewSeoSection from 'sections/home/NewSeoSection';
import Footer from 'components/footer';
import SeoCategories1 from 'sections/home/seoCategories1';
import { fetchTopSearches, fetchAllStates, fetchCityGroup  } from '@/api/allAPIs'; // Adjust path accordingly

export const getServerSideProps = async (context: any) => {
  const { topCities, topStates, topSearches } = await fetchTopSearches();
  const { allStates } = await fetchAllStates();
  const { cityGroup } = await fetchCityGroup();

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
      cityGroup
    },
  };
};

// 👇 Server Component
export default function CityDetail(props: any) {
  return (
    <>
      <Header />
      <CityDetailComp cityGroup={props.cityGroup || []} />
      <NewSeoSection topCities={props.topCities || []}
        topStates={props.topStates || []}
        topSearches={props.topSearches || []} {...props} />

      < SeoCategories1 topCities={props.topCities || []}
        topStates={props.allStates || []} />
      <Footer />

    </>
  );
}