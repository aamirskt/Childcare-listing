import React from 'react'
import BlogDetailPage from 'sections/blogs/blog_detail';
import Header from 'components/header';
import Footer from 'components/footer';
// import type { Metadata } from 'next';
// import axios from 'utils/axios'; // Custom axios instance
import NewSeoSection from 'sections/home/NewSeoSection';
import Head from 'next/head';
import { fetchTopSearches, fetchAllStates, fetchblogById } from '@/api/allAPIs'; // Adjust path accordingly
import SeoCategories1 from 'sections/home/seoCategories1';
export const getServerSideProps = async (context: any) => {
  const { topCities, topStates, topSearches } = await fetchTopSearches();
  const { allStates } = await fetchAllStates();
  let blog = null;

  try {
    const blogRes: any = await fetchblogById(context?.query?.id);
    blog = blogRes?.blog;
console.log('Blog Data:', blog); // Debugging line to check the fetched blog data
    if (!blog || Object.keys(blog).length === 0) {
     return {
    redirect: {
      destination: '/',
      permanent: false, // Use false for temporary redirect (like 302)
    },
  };
    }
  } catch (error) {
    // Log the error if needed
    console.error('Error fetching blog:', error);
    return { notFound: true }; // Serve 404 page
  }


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
      blog
    },
  };
};
  
  // Accept props in BlogDetail
  function BlogDetail(props: any) {
    return (
      <>
        <Head>
          <title>{props?.blog?.title || 'Blog Detail'}</title>
          <meta name="description" content={props?.blog?.meta_description || ''} />
          <meta property="og:title" content={props?.blog?.title || ''} />
          <meta property="og:description" content={props?.blog?.meta_description || ''} />
          <meta property="og:url" content={`/blogsDetail/${props?.blog?.id}/${props?.blog?.slug}`} />
          <link rel="canonical" href={`/blogsDetail/${props?.blog?.id}/${props?.blog?.slug}`} />
        </Head>
        <Header />
        <BlogDetailPage blog={props?.blog} />
       <NewSeoSection topCities={props.topCities || []}
               topStates={props.topStates || []}
               topSearches={props.topSearches || []} {...props} />
       
             < SeoCategories1 topCities={props.topCities || []}
               topStates={props.allStates || []} />
        <Footer />
      </>
    );
  }

export default BlogDetail;