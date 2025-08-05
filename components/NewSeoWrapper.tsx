// app/components/NewSeoWrapper.tsx
import NewSeoSection from 'sections/home/NewSeoSectionChild';
import { fetchTopSearches } from '@/api/allAPIs'; // Adjust path accordingly

export const getServerSideProps = async () => {
  const { topCities, topStates, topSearches } = await fetchTopSearches();

  return {
    props: {
      topCities,
      topStates,
      topSearches,
      isCity: false
    }
  };
};
export default async function NewSeoWrapper(props: any) {

  return (
    <NewSeoSection  {...props}   />
  );
}