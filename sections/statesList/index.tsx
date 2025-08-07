
"use client";


import { Typography, Stack, Grid, Box } from '@mui/material';

const States = ({allStates}: any) => {
 

  return (
    <Grid container>
        <Grid xs={12} sm={12} md={12} lg={12} sx={{ px: { lg: 5, xs: 2 }, background: '#fff', pt: 13, pb: 10 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Stack>
              <Typography
                component="h1"
                variant="subheading2"
                sx={{
                  fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' }
                }}
              >
                Search Best Daycares By State
              </Typography>
            </Stack>
            <Stack sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', mt: 2 }}>
              {allStates.map((state: any, index: number) => (
                <Typography
                component="a"
                href={`/${state?.state?.toLowerCase().replace(/\s+/g, '-')}`}
                  key={index}
                  variant="bodytext"
                  sx={{
                    mr: '10px',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    lineHeight: '30px'
                  }}
                >
                  {state.state}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
  );
};

export default States;
