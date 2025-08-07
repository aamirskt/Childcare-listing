import Header from 'components/header';
import Footer from 'components/footer';
import ContactusComp from 'sections/contactus';
import Head from 'next/head';
import NewSeoSection from 'sections/home/NewSeoSection';
// Lazy import the server component
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

function ContactUs(props: any) {
  return (
    <>
      <Head>
        <title>Contact us</title>
        <meta
          name="description"
          content="Got questions about daycare services? Reach out to us! We're here to help. Contact us anytime for friendly assistance and quick answers."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="Contact us" />
        <meta
          property="og:description"
          content="Got questions about daycare services? Reach out to us! We're here to help. Contact us anytime for friendly assistance and quick answers."
        />
        <meta property="og:url" content={`/contactus`} />
        {/* Canonical link */}
        <link rel="canonical" href={`/contactus`} />
      </Head>
      <Header />
      <ContactusComp />
      <NewSeoSection topCities={props.topCities || []}
        topStates={props.topStates || []}
        topSearches={props.topSearches || []} {...props} />

      < SeoCategories1 topCities={props.topCities || []}
        topStates={props.allStates || []} />
      <Footer />
    </>
  );
}

export default ContactUs;
