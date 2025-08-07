

import SearchDayCares from 'sections/search/searchpage3';
import SearchDayCaresMobile from 'sections/search/searchPageMobile';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


interface SearchProps {
  zipcode?: any;
  daycares?: any;
  abr?: any;
  aiData?: any;
  allblogs?: any;
  topCities?: any;
}
function SearchPage({ abr, daycares, zipcode, aiData, allblogs, topCities }: SearchProps) {
    // console.log(topCities, 'topCities')
    
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {smallScreen ? <SearchDayCaresMobile abr={abr} daycares={daycares} zipcode={zipcode} aiData={aiData} allblogs={allblogs} topCities={topCities} /> :
        <SearchDayCares abr={abr} daycares={daycares} zipcode={zipcode} aiData={aiData} allblogs={allblogs} topCities={topCities} />
         } 
    </>
  );
}

export default SearchPage;
