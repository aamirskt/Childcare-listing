'use client';


import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/navigation';
import { setIsParams, setShowMarketPlaceHeader } from 'store/reducers/zipcode';
import { dispatch } from 'store';



const Statedetail = ({ city, state }: any) => {
  const router = useRouter();

  const categories = [{ name: 'Daycares', type: 'daycare' }, { name: 'Child Care', type: 'childcare' }, { name: 'Infant Daycares', type: 'infant-daycares' }, { name: 'Toddler Daycares', type: 'toddler-daycares' }, { name: 'Preschools', type: 'preschools' },{ name: 'Special Needs', type: 'special-needs' }];
  function capitalizeFirstLetter(word: any) {
    word = word.replace(/-/g, " ")
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  const navigateToCityDetail = (_state: any) => {
    dispatch(setIsParams(true));
    dispatch(setShowMarketPlaceHeader(true))
    router.push(`/${_state.type}/${state.toLowerCase()}/${city.toLowerCase().replace(/\s+/g, '-')}`);
  };
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
              Browse Child Care Providers in {city?.replace('-', ' ')}, {state.toUpperCase()}
            </Typography>
          </Stack>
          <Grid container spacing={2} mt={4}>
            {categories.map((_state: any, index: number) => (
              <Grid item key={index} xs={12}>
                <Typography
                  //  href={_state.type == 'daycare' ? process.env.PUBLIC_URL+`/${state.toLowerCase()}/daycares-in-${city.toLowerCase().replace(/\s+/g, '-')}`: process.env.PUBLIC_URL+`/${_state.type}/${state.toLowerCase()}/${city.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => navigateToCityDetail(_state)}
                  variant="bodytext"
                  style={{
                    color: '#000',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    lineHeight: '30px',
                    fontSize: '14px',
                  }}
                >
                  {_state.name} in {capitalizeFirstLetter(city)}, {state.toUpperCase()}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Statedetail;
