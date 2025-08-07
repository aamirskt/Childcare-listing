import React from 'react';
import BlogsPage from 'sections/blogs';
import Header from 'components/header';
import Footer from 'components/footer';
import NewSeoSection from 'sections/home/NewSeoSection';
import Head from 'next/head';
import { fetchTopSearches, fetchAllStates, fetchBlogs } from '@/api/allAPIs'; // Adjust path accordingly
import SeoCategories1 from 'sections/home/seoCategories1';
export const getServerSideProps = async (context: any) => {
  const { topCities, topStates, topSearches } = await fetchTopSearches();
  const { allStates } = await fetchAllStates();
  const { allblogs } = await fetchBlogs();

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
      allblogs
    },
  };
};

function Bloglist(props: any) {
  return (
    <>
      <Head>
        <title>Blogs-ChildrenKare</title>
        <meta name="description" content="At ChildrenKARE, we understand the importance of providing a secure and enriching environment for your child's growth. Read Best Daycare blogs here." />
        <meta property="og:title" content="Blogs-ChildrenKare" />
        <meta property="og:description" content="At ChildrenKARE, we understand the importance of providing a secure and enriching environment for your child's growth. Read Best Daycare blogs here." />
        <meta property="og:url" content={`/blogs`} />
        <link rel="canonical" href={`/blogs`} />
      </Head>
      <Header />
      <BlogsPage allblogs={props.allblogs || []} />
      <NewSeoSection topCities={props.topCities || []}
        topStates={props.topStates || []}
        topSearches={props.topSearches || []} {...props} />

      < SeoCategories1 topCities={props.topCities || []}
        topStates={props.allStates || []} />
      <Footer />
    </>
  );
}

export default Bloglist;
