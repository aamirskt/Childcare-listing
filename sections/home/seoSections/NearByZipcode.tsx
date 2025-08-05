import { Box } from '@mui/material';
import { Grid, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'utils/axios';
import { dispatch, type RootState } from 'store';
import { useRouter } from 'next/navigation';

import { setIsParams } from 'store/reducers/zipcode';
import { setShowMarketPlaceHeader } from 'store/reducers/zipcode';

const NearByZipcode = () => {
  const [nearBy, setNearBy] = useState([]);
  const router = useRouter();


  const ZipcodeFromMap = useSelector((state: RootState) => state.zipcodereducer.zipCodeReducer);
  console.log('{ZipcodeFromMap}', ZipcodeFromMap);

  const handleNearByZipCode = () => {
    if (ZipcodeFromMap) {
      axios({
        method: 'get',
        url: `api/search/get_nearby/${ZipcodeFromMap}`,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then((response) => {
          console.log('response.NearByZipCode', response.data.data);
          setNearBy(response.data.data);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    }
  };
  const handleClick = (data: any) => {
    // localStorage.setItem('params-search', 'true');
    dispatch(setShowMarketPlaceHeader(true))
    dispatch(setIsParams(true));

    const abr = data?.state_code.toLowerCase();
    const daycares = data?.city?.replace(/\s+/g, '-').toLowerCase();
    router.push(`/${abr}/${daycares}/${data?.zip_code}`);
  };
  useEffect(() => {
    handleNearByZipCode();
  }, [ZipcodeFromMap]);
  return (
    <Grid sx={{ display: 'flex', flexDirection: { md: 'row', sm: 'column', xs: 'column' }, mt: { md: 0, sm: '20px', xs: '20px' } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', px: 5 }}>
        <Stack>
          <Typography
            sx={{
              cursor: 'pointer',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              color: '#000',
              fontSize: { xs: '12px', md: '16px' }
            }}
          >
            Nearby Zip Codes
          </Typography>
        </Stack>
        <Stack sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', mt: 2 }}>
          {nearBy.map((item: any, index) => (
            <Typography color="primary"
            sx={{
              mr: '10px',
              color: '#000',
              fontSize: '12px',
              fontWeight: '400',
              textDecoration: 'underline',
              mt: 1,
              cursor: 'pointer'
            }}
            onClick={() => handleClick(item)} key={index}>
              {/* <Link
                
                color="primary"
                sx={{ mr: '10px', color: '#000', fontSize: '12px', fontWeight: '400', textDecoration: 'underline', fontFamily: 'inter' }}
              > */}
                Daycares in {item.zip_code}
              {/* </Link> */}
            </Typography>
          ))}
        </Stack>
      </Box>
      <Box>
        <Stack sx={{ height: '282px', width: '1px', background: '#C0BFBF', display: { md: 'block', sm: 'none', xs: 'none' } }}></Stack>
      </Box>
    </Grid>
  );
};

export default NearByZipcode;
