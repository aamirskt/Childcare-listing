import { Container, Grid, Stack, Typography } from '@mui/material';
const BannerImage = '/assets/compresspics/sectionfourImage1.webp';
const sectionfourImage3 = '/assets/compresspics/sectionfourImage3.webp';
import { useMediaQuery } from '@mui/material';
import {
  useTheme
} from '@mui/material/styles';

function AboutUsSectionFour() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '80px' }}>
       <div
  style={{
    width: '98.8vw',
    height: '524px', // or any height you need
    backgroundImage: `url(${BannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
/>
      {/* <img src={BannerImage} style={{ width: '98.8vw' }} /> */}
       <Grid container rowGap={3} sx={{ justifyContent: 'center', background: '#fff', width: '100%', mt: -7, pt: 7, borderRadius: '10px' }} spacing={2}>
        {/* Your content here */}
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Stack>
            <Typography
              variant="subheading1"
              sx={{ textAlign: 'left', pt: 2, fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' } }}
            >
              Our Mission
            </Typography>
            <Typography
              component="p"
              variant="bodytext"
              sx={{
                py: 2,
                textAlign: 'left'
              }}
            >
              At ChildrenKARE, our mission is to empower families with the knowledge and guidance they need to make informed choices about
              their children's childcare. We are dedicated to ensuring that every child has access to a nurturing, secure, and enriching
              environment that fosters their growth, learning, and happiness.
            </Typography>
            {/* <Typography variant="subheading3" sx={{ textAlign: 'left', pt: 2,  fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '20px' } , }}>
              Our commitment is two-fold:
            </Typography> */}
          </Stack>{' '}
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
        <div
  style={{
    height: matches ? '100%' : '319px',
    width: '100%',
    backgroundImage: `url(${sectionfourImage3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
  }}
/>
          {/* <img src={sectionfourImage3} style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '10px' }} /> */}
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} sx={{ borderRight: { md: '1px solid #D4D4D4', xs: 'none' }, borderTop: { md: '1px solid #D4D4D4', xs: 'none' }, borderBottom: { md: '1px solid #D4D4D4', xs: 'none' }, pr: 5}}>
          <Stack>
            <Typography
              variant="subheading3"
              sx={{ textAlign: 'left', pt: 4, fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '20px' } }}
            >
              Supporting Families
            </Typography>
            <Typography
              variant="bodytext"
              component="p"
              sx={{
                py: 2,
                textAlign: 'left'
              }}
            >
              We are committed to simplifying the childcare search process for parents and guardians. We understand that finding the right
              childcare provider is a significant decision, and our mission is to ease the burden. We work tirelessly to match families with
              providers that align with their unique needs, preferences, and values. By doing so, we aim to empower parents with peace of
              mind, knowing that their children are in capable and caring hands.
            </Typography>
          </Stack>{' '}
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5} sx={{ borderTop: { md: '1px solid #D4D4D4', xs: 'none' }, borderBottom: { md: '1px solid #D4D4D4', xs: 'none' }}}>
          <Stack>
            <Typography
              variant="subheading3"
              sx={{ textAlign: 'left', pt: 4, pl: {md: 5, xs: 0}, fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '20px' } }}
            >
              Advocating for Children
            </Typography>
            <Typography
              variant="bodytext"
              component="p"
              sx={{
                pt: 2,
                pb: '64px',
                textAlign: 'left',
                pl: {md: 5, xs: 0}
              }}
            >
              Above all, we advocate for the well-being and development of children. We believe that every child deserves access to a safe,
              loving, and stimulating environment that encourages their physical, cognitive, social, and emotional growth. Our mission is to
              connect families with childcare providers who share our commitment to excellence in early childhood education and care.
              Through our expertise, dedication, and extensive network of trusted childcare providers, we aspire to make a positive impact
              on the lives of children and families. Together, we create brighter futures for our youngest generation, one referral at a
              time."
            </Typography>
          </Stack>{' '}
        </Grid>
      </Grid>
    </Stack>
  );
}

export default AboutUsSectionFour;
