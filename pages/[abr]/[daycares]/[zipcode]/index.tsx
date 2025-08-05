
import SearchDayCares from 'sections/search';
import Header from 'components/header';
import Footer from 'components/footer';
import Head  from 'next/head';
import { fetchTopSearches, fetchAllStates, fetchAIDataByCategory, fetchBlogs } from '@/api/allAPIs'; // Adjust path accordingly
import SeoCategories1 from 'sections/home/seoCategories1';
import NewSeoSection from '@/sections/home/NewSeoSection';
import { getFaqsByCategory } from '@/api/faqsSchema'; // Adjust path accordingly

export const getServerSideProps = async (context: any) => {
  const { topCities, topStates, topSearches } = await fetchTopSearches();
  const { allStates } = await fetchAllStates();

  const pathname = context.resolvedUrl || '/';
  const abr = context.query.abr || '';
  const zipcode = context.query.zipcode || '';
  const daycares = context.query.daycares || ''; // ✅ This is fine in a server component
  const cityName = daycares.replace('daycares-in-', '').replace(/\-+/g, ' ');
    const { allblogs } = await fetchBlogs();
  
    if (!/^\d+$/.test(zipcode)) {
    const types = ['childcare', 'daycare-centers', 'infant-care', 'preschools', 'special-needs', 'toddler'];
     let _tempCategory = abr.split('-')[0];
     _tempCategory = types.find((_type) => _type.startsWith(_tempCategory));
  const { aiData } = await fetchAIDataByCategory( zipcode, cityName, _tempCategory);
  console.log('AI Data:', aiData,  zipcode, cityName, _tempCategory); // Debugging line to check the fetched AI data
  return {
    props: {
      topCities,
      topStates,
      topSearches,  
      pathname,
      abr,
      isCity: false, // or true, depending on your logic
      allStates,
      cityName,
      aiData,
      zipcode,
      allblogs,
      daycares
    },
  };
    }
  return {
    props: {
      topCities,
      topStates,
      topSearches,
      pathname,
      abr,
      isCity: false, // or true, depending on your logic
      allStates,
      cityName,
      zipcode,
      allblogs,
      daycares

    },
  };
};



// 👇 Server Component
 function SearchPage(props: any) {
  const { allblogs, aiData, cityName, zipcode, abr, daycares, topCities, topStates, topSearches, allStates} = props
   if (zipcode && !/^\d+$/.test(zipcode)) {
  const {seo_title, seo_description, lsi_keywords} = aiData
   return (
    <>
       <Head>
       <title>{seo_title}</title>
        <meta
          name="description"
          content={seo_description}
        />
        <meta property="og:title" content={seo_title} />
        <meta
          property="og:description"
          content={seo_description}
        />
 <script
   type="application/ld+json"
   dangerouslySetInnerHTML={{
     __html: JSON.stringify(getFaqsByCategory(abr, cityName))
   }}
 />



         {/* <meta
    name="keywords"
    content={`${lsi_keywords}`}
  /> */}
        <meta property="og:url" content={`/${abr}/${daycares}/${zipcode}`} />
        <link rel="canonical" href={`/${abr}/${daycares}/${zipcode}`} />
      </Head>
      <Header />
      <SearchDayCares abr={abr} daycares={cityName} aiData={aiData} zipcode={zipcode} allblogs={allblogs || []}  topCities={topCities || []} />
      <NewSeoSection topCities={topCities || []}
              topStates={topStates || []}
              topSearches={topSearches || []} {...props} />
      
            < SeoCategories1 topCities={topCities || []}
              topStates={allStates || []} />
      <Footer />
    </>
  );
   }
   
  return (
    <>
       <Head>
       <title>Best Daycares, Childcare & Preschools in {zipcode}</title>
        <meta
          name="description"
          content={`Find daycares near me in ${zipcode} for your children. Explore trusted child care services, preschools and best daycares in ${zipcode},${abr}; at affordable cost.`}
        />
        <meta property="og:title" content={`Best Daycares, Childcare & Preschools in ${zipcode}`} />
        <meta
          property="og:description"
          content={`Find daycares near me in ${zipcode} for your children. Explore trusted child care services, preschools and best daycares in ${zipcode},${abr}; at affordable cost.`}
        />
        <meta property="og:url" content={`/${abr}/${daycares}/${zipcode}`} />
        <link rel="canonical" href={`/${abr}/${daycares}/${zipcode}`} />
      </Head>
      <Header />
      <SearchDayCares abr={abr} daycares={cityName} aiData={aiData} zipcode={zipcode} allblogs={allblogs || []} topCities={topCities || []} />
      <NewSeoSection topCities={topCities || []}
              topStates={topStates || []}
              topSearches={topSearches || []} {...props} />
      
            < SeoCategories1 topCities={topCities || []}
              topStates={allStates || []} />
      <Footer />
    </>
  );
}

export default SearchPage;
