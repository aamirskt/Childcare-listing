import { Divider } from '@mui/material';
import { Grid, Stack, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
const ChildImage = '/assets/images/icons/childimage1.png';
import {
  useTheme
} from '@mui/material/styles';
// import Image from 'next/image';


function AboutUsSectionOne() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Stack>
      <Grid container spacing={4} sx={{ py: { md: '100px', xs: '30px' }, px:{md:0, xs:2} }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid container>
            <Grid item xs={12}>
              <Stack>
              <div
      style={{
        width: '100%',
        height: matches ? '500px' : '259px',
        backgroundImage: `url(${ChildImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '20px',
      }}
    />
                {/* <img src={ChildImage} style={{ width: '100%', height: matches?'500px':'100%', objectFit: 'cover', borderRadius: '20px' }} /> */}
              </Stack>
            </Grid>

          </Grid>{' '}
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', ml:{md:'20px', xs:0} }}>
          <Typography variant="subheading2" sx={{ fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' } }}>
            We are the largest Childcare Network in the USA.
          </Typography>
          <Typography variant="bodytext" sx={{ py: 1 }}>
            We are a premier provider of high-quality childcare and early education services across the United States. With a rich history
            of nurturing young minds and supporting families, we are proud to be the nation's largest and most trusted childcare network.
          </Typography>
          <Typography variant="bodytext" sx={{ py: 1,  }}>
            We understand that choosing the right childcare center for your child is a significant decision, and we're delighted that you're
            considering us. At ChildrenKARE, we are dedicated to providing the highest quality childcare services, and we're excited to
            share our story with you.
          </Typography>
          <Typography variant="bodytext" sx={{ py: 1 }}>
            With a network of thousands of centers spread across 50 states, we are proud to serve diverse communities from coast to coast.
            Our dedicated team of passionate educators and caregivers provides a safe, nurturing, and stimulating environment where children
            thrive academically, socially, and emotionally.
          </Typography>
        </Grid>
      </Grid>
      <Divider style={{ backgroundColor: '#80808085', width: '95%' }} variant="middle" />
    </Stack>
  );
}

export default AboutUsSectionOne;
