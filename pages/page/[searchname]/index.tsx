import Header from 'components/header';
import SearchnameComp from 'sections/popularSearchPage';
import NewSeoSection from 'sections/home/NewSeoSection';
import Footer from 'components/footer';
import SeoCategories1 from 'sections/home/seoCategories1';
import { fetchTopSearches, fetchAllStates, fetchPopularKey  } from '@/api/allAPIs'; // Adjust path accordingly

export const getServerSideProps = async (context: any) => {
  const { topCities, topStates, topSearches } = await fetchTopSearches();
  const { allStates } = await fetchAllStates();
   const _searchname = context.query.searchname?.replace(/\s+/g, '-').toLowerCase();
  const {popularData} = await fetchPopularKey(_searchname);

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
      _searchname,
      popularData
    },
  };
};

// 👇 Server Component
export default function CityDetail(props: any) {
  return (
    <>
      <Header />
      <SearchnameComp searchname={props._searchname} popularData={props.popularData || []} />
        <NewSeoSection topCities={props.topCities || []}
        topStates={props.topStates || []}
        topSearches={props.topSearches || []} {...props} />

      < SeoCategories1 topCities={props.topCities || []}
        topStates={props.allStates || []} />
      <Footer />

    </>
  );
}