// import React from 'react'

import TermsConditionComp from 'sections/termsandcondition';
import Header from 'components/header';
import NewSeoSection from 'sections/home/NewSeoSection';
import Footer from 'components/footer';
import Head from 'next/head';
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

function TermsAndCondition(props: any) {
  return (
    <>
    <Head>
  <title>Terms and Conditions</title>
  <meta name="description" content="Discover ChildrenKARE Terms and Conditions. We are your trusted guide to finding the perfect daycare for your child. Simplifying search, ensuring reliability and prioritizing your family's needs."/>

  <meta property="og:title" content="Terms and Conditions"/>
  <meta property="og:description" content="Discover ChildrenKARE Terms and Conditions. We are your trusted guide to finding the perfect daycare for your child. Simplifying search, ensuring reliability and prioritizing your family's needs."/>
  <meta property="og:url" content={`/termsandcondition`}/>

  <link rel="canonical" href={`/termsandcondition`}/>
</Head>
      <Header />
      <TermsConditionComp />
       <NewSeoSection topCities={props.topCities || []}
              topStates={props.topStates || []}
              topSearches={props.topSearches || []} {...props} />
      
            < SeoCategories1 topCities={props.topCities || []}
              topStates={props.allStates || []} />
      <Footer />
    </>
  );
}

export default TermsAndCondition;
