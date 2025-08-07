import NewSeoSection from 'sections/home/NewSeoSectionChild';
import axios from 'axios';

export const getServerSideProps = async () => {
  try {
    const res = await axios.get('https://devian.amwaus.com/api/search/top_searches');
    // console.log('Fetched:', res.data?.data);

    return {
      props: {
        topCities: res.data?.data?.topCities || [],
        topStates: res.data?.data?.topStates || [],
        topSearches: res.data?.data?.popularSearches || [],
        isCity: false
      }
    };
  } catch (error: any) {
    console.error('SSR Error:', error?.response?.data || error.message);
    return {
      props: {
        topCities: [],
        topStates: [],
        topSearches: [],
        isCity: false
      }
    };
  }
};
export default function StateDetailPage(props: any) {
  console.log('adfadfa', props)

  return <NewSeoSection {...props} />;
}