"use client";

import PapularSearchMainBanner from 'sections/home/PapularSearchMainBanner';
// ... (previous imports)

const PapularSearchDeatil = ({ searchname, popularData}: any) => {
  console.log('Popular Data:', popularData);

  return (
    <div>
        <PapularSearchMainBanner searchname={searchname} heading={popularData[0]?.heading} description={popularData.length > 0 ? popularData[0].tagline : ''} />
     
    </div>
  );
};

export default PapularSearchDeatil;
