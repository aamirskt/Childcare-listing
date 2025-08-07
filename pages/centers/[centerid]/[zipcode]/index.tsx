import React from 'react'
import CenterComp from 'sections/centerPage';
import Header from 'components/header';
import Footer from 'components/footer';
import type { Metadata } from 'next';
import NewSeoSection from 'sections/home/NewSeoSection';
// Lazy import the server component
import { fetchTopSearches, fetchAllStates, getCenterDetail } from '@/api/allAPIs'; // Adjust path accordingly
import SeoCategories1 from 'sections/home/seoCategories1';
import Head from 'next/head';

export const getServerSideProps = async (context: any) => {
  const { topCities, topStates, topSearches } = await fetchTopSearches();
  const { allStates } = await fetchAllStates();
  const id = context.query.centerid || '';
  const { data } = await getCenterDetail(id);

  const pathname = context.resolvedUrl || '/';
  const abr = context.query.abr || '';
  const _zipcode = context.query.zipcode || '';

  return {
    props: {
      topCities,
      topStates,
      topSearches,
      pathname,
      abr,
      isCity: false, // or true, depending on your logic
      allStates,
      id,
      data,
      _zipcode
    },
  };
};

  // 👇 Server Component
    function BlogDetail(props: any) {
    return (
    <>
     <Head>
            <title>{props.data?.center_name} - Daycare in {props.data?.city}, {props.data?.zip_code}</title>
            <meta
              name="description"
              content={`Find quality early education at ${props.data?.center_name} in ${props.data?.city}, ${props.data?.zip_code}. Find Operating Hours, Contact info, Age Serving, Rating, Financial Aid. Click to explore!`}
            />
            {/* Open Graph tags */}
            <meta property="og:title" content="Contact us" />
            <meta
              property="og:description"
              content="Got questions about daycare services? Reach out to us! We're here to help. Contact us anytime for friendly assistance and quick answers."
            />
          
            <meta property="og:url" content={`/centers/${props.id}/${props._zipcode}`} />
            {/* Canonical link */}
            <link rel="canonical" href={`/centers/${props.id}/${props._zipcode}`} />
             <meta name="robots" content="noindex, nofollow" />
          </Head>
      <Header />
      <CenterComp centerData={props.data}/>
      <NewSeoSection topCities={props.topCities || []}
              topStates={props.topStates || []}
              topSearches={props.topSearches || []} {...props} />
      
            < SeoCategories1 topCities={props.topCities || []}
              topStates={props.allStates || []} />
      <Footer />
    </>
    )
}

export default BlogDetail;