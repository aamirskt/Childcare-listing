'use client';

import { Box, Container, Grid, Stack, Typography } from '@mui/material';
// import pattern from 'assets/images/home/bgimgnew-min.png';
// import Image from 'next/image';

const NewSectionFive = () => {


  const data = [
    { id: 1, number: '120,000', description: 'Number of Childcare Centers' },
    { id: 2, number: '761,000', description: 'Number of professional Childcare Workers' },
    { id: 3, number: '$10,500 / yr', description: 'Typical Childcare Costs' }
  ];
  return (
    <>
      <Grid container sx={{ mt: '100px' }}>
        <Container>
          <Grid container>
            <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto', pb: 3 }}>
              <Typography variant="bodytext1" component='h5' sx={{ textAlign: 'center' }}>
                TRY OUR PLATFORM
              </Typography>
              <Typography variant="subheading1" component='h3' sx={{ fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' }, textAlign: 'center' }}>
                Available in 50 States
              </Typography>
            </Grid>
          </Grid>
        </Container>

      </Grid>

      <Grid container>
        <Grid
          item
          xs={12}
        >
          {/* <Container> */}
          <Box sx={{ position: 'relative', margin: 'auto' }}>

            <Stack
              sx={{
                height: { xs: '400px', sm: '1000px', md: '1180px' },
                width: '100%',
                backgroundImage: `url("/assets/images/home/bgimgnew-min1.webp")`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                zIndex: -999,
              }}
              aria-label="happy family"
              role="img"
            />
          </Box>
          {/* </Container> */}
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          color: '#fff',
          px: { xs: 5, md: 15 },
          height: { md: '147px', xs: 'auto' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#19A3E0',
          py: 2,
          marginTop: { xl: '-510px', md: '-410px', sm: '-410px', xs: '-99px' }
        }}
      >
        {data.map((item, id) => (
          <Grid
            key={id}
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', sm: 'center' },
              color: '#fff',
              px: 1
            }}
          >
            <Typography
              variant="subheading1"
              sx={{
                color: '#FFF',
                textAlign: 'center',
                fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' },
                fontWeight: 700,
                lineHeight: '72px'
              }}
            >
              {item.number}
            </Typography>
            <Typography
              variant="bodytext"
              sx={{
                color: 'rgba(255, 255, 255, 0.90)',
                fontWeight: 500,
                lineHeight: '28px',
                textAlign: 'center',
                mt: -2
              }}
            >
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default NewSectionFive;
