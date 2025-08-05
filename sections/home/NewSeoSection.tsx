// 'use client'; // Remove this line to make it a server component

import { Grid } from '@mui/material';
import TopStates from './seoSections/TopStates';
import TopCities from './seoSections/TopCities';
import PapularSearches from './seoSections/PapularSearches';
// import NearByZipcode from './seoSections/NearByZipcode';
import { Container } from '@mui/material';

interface seoProps {
  isCity?: any;
  topCities: any[];
  topStates: any[];
  topSearches: any[];
  pathname: string;
  abr?: string;
}

const NewSeoSection = ({ isCity, topCities, topStates, topSearches, pathname, abr }: seoProps) => {
  const isCityDetailPage =
    pathname === '/states' || pathname.startsWith('/Statedetail/') || pathname.startsWith('/citydetail');

  const isStateDetailPage = pathname.startsWith('/daycaredetail/') || (abr && pathname.includes(`${abr}`));

  return (
    <>
      <Grid sx={{ background: '#fff', pl: 2, display: 'flex', justifyContent: 'center' }} container>
        <Container>
          <Grid
            container
            spacing={3}
            sx={{ mt: { md: 10, xs: 2.5 }, mb: { md: 10, xs: 2.5 }, background: 'rgba(192, 191, 191, 0.44)', borderRadius: '20px', py: 5 }}
          >
            <Grid item xs={12} sx={{ pl: 0 }}>
              <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                <Grid
                  item
                  lg={isStateDetailPage ? 4 : 4}
                  md={isStateDetailPage ? 4 : 4}
                  sm={12}
                  xs={12}
                  sx={{ display: 'block' }}
                >
                  <TopStates topState={topStates} />
                </Grid>

                {/* {!isCity && ( */}
                  <Grid item lg={isStateDetailPage ? 4 : 4} md={isStateDetailPage ? 4 : 4} sm={12} xs={12} sx={{}}>
                    <TopCities topcities={topCities} />
                  </Grid>
                {/* )} */}

                {/* {isCity && ( */}
                  {/* <Grid
                    item
                    lg={isStateDetailPage ? 4 : 4}
                    md={isStateDetailPage ? 4 : 4}
                    sm={12}
                    xs={12}
                    sx={{ display: 'block'  }}
                  >
                    <NearByZipcode />
                  </Grid> */}
                {/* )} */}
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', pl: 0 }}>
              <PapularSearches topsearches={topSearches} />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default NewSeoSection;

