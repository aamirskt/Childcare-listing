
// import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
// import { dispatch } from 'store';
// import { setIsParams } from 'store/reducers/zipcode';
// import { CircularProgress } from '@mui/material';
// import { setShowMarketPlaceHeader } from 'store/reducers/zipcode';
// import { useRouter } from 'next/navigation';


interface seoProps {
  state: any;
  data: any[];
}

const Statedetail = ({state, data}: seoProps) => {
    // const router = useRouter();
  // const [stateDetailData, setStateDetailData] = useState([] as any);
  // const [isLoading, setIsLoading] = useState(true);
  // const navigateToCityDetail = (_state: any) => {
  //   // localStorage.setItem('params-search', 'true');
  //   dispatch(setIsParams(true));
  //   dispatch(setShowMarketPlaceHeader(true))
  //   router.push(`/${_state?.state_code.toLowerCase()}/daycares-in-${_state.city.toLowerCase().replace(/\s+/g, '-')}`);

  // };



  // useEffect(() => {
  //  if(data.length > 0) {
  //   setIsLoading(false)
  //   setStateDetailData(data)
  //  }
  // }, [data]);
  return (
      <Grid container>
        <Grid xs={12} sm={12} md={12} lg={12} sx={{ px: { lg: 5, xs: 2 }, background: '#fff', pt: 13, pb: 10 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Stack>
              <Typography
                variant="subheading2"
                sx={{
                  fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' },
                  textTransform: 'capitalize',
                  pr: { md: 0, xs: 3 }
                }}
              >
                Search Best Daycares in {state?.replace('-', ' ')}
              </Typography>
            </Stack>
            <Grid container spacing={2} mt={4}>
              {/* {isLoading ? (
                <>
                  <Box sx={{ margin: 'auto' }}>
                    <CircularProgress />
                  </Box>
                </>
              ) : (
                <> */}
                  {data.map((_state: any, index: number) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
                         {/* <Link
                                            href={`/${_state?.state_code.toLowerCase()}/${_state.city.toLowerCase().replace(/\s+/g, '-')}`}
                                            style={{
                                              color: '#000',
                                              textDecoration: 'underline',
                                              cursor: 'pointer',
                                              lineHeight: '30px',
                                              fontSize: '14px',
                                            }}
                                             onClick={() => navigateToCityDetail(_state)}
                                          >
                                            {_state.city}
                                          </Link> */}
                      <Typography
                      component='a'
                      target='_blank'
                      href={`/${_state?.state_code.toLowerCase()}/daycares-in-${_state.city.toLowerCase().replace(/\s+/g, '-')}`}
                        // onClick={() => navigateToCityDetail(_state)}
                        variant="bodytext"
                        sx={{
                          textDecoration: 'underline',
                          cursor: 'pointer',
                          lineHeight: '30px'
                        }}
                      >
                        Daycares in {_state.city}
                      </Typography>
                    </Grid>
                  ))}
                {/* </>
              )} */}
            </Grid>
          </Box>
        </Grid>
      </Grid>
  );
};

export default Statedetail;
