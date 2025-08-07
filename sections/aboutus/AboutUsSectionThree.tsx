import { Grid, Stack, Typography } from '@mui/material';
const Maskgroup = '/assets/compresspics/Maskgroup.webp';
const MaskgroupOne = '/assets/compresspics/MaskgroupOne.webp';
import { useMediaQuery } from '@mui/material';
import {
  useTheme
} from '@mui/material/styles';

function AboutUsSectionThree() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Grid container spacing={2} sx={{ my: 1, background: '#FAFAFA' }}>
      <Grid item xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="subheading1"
          sx={{
            textAlign: { xs: 'auto', md: 'center' },
            px: { xs: 5, md: 10 },
            fontSize: { lg: '30px', md: '28px', sm: '26px', xs: '25px' }
          }}
        >
          What We Offers?
        </Typography>
        <Typography
          variant="bodytext"
          component="p"
          sx={{
            py: 2,
            mb: 2,
            textAlign: { xs: 'auto', md: 'center' },
            px: { xs: 5, md: 10 }
          }}
        >
          Our services play a crucial role in helping parents find reliable and appropriate childcare options that meet their specific needs
          and preferences. They can save parents time and stress by offering expert guidance and access to a network of trusted childcare
          providers.
        </Typography>
      </Grid>
      <Grid container sx={{ mt: '80px', paddingRight: { xs: 2, sm: 4, md: 15 } }}>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
        <div
  style={{
    width: '100%',
    maxWidth: '78%',
    height:  matches ? '100%' : '319px', // define a fixed height
    backgroundImage: `url(${Maskgroup})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '20px'
  }}
/>
          {/* <img src={Maskgroup} style={{ width: '100%', maxWidth: '78%', objectFit: 'cover', borderRadius:'20px' }} />{' '} */}
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container spacing={2} sx={{ pl: { xs: 5, md: 0 } }}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Stack>
                    <Typography
                      variant="numberstyle"
                      sx={{ textAlign: 'left', pt: 2,  fontSize: { lg: '50px', md: '45px', xs: '30px' }, }}
                    >
                      01
                    </Typography>
                    <Typography
                      variant="subheading3"
                      sx={{ textAlign: 'left', pt: 2, fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '20px' } }}
                    >
                      Needs Assessment
                    </Typography>
                    <Typography
                      variant="bodytext"
                      component="p"
                      sx={{
                        py: 2,
                        textAlign: 'left'
                      }}
                    >
                      The process often begins with a thorough assessment of the parent's or guardian's childcare needs. This includes
                      considering factors such as the child's age, location, preferred hours of care, budget constraints, and any special
                      requirements.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Stack>
                    <Typography
                      variant="numberstyle"
                      sx={{ textAlign: 'left', pt: 2,  fontSize: { lg: '50px', md: '45px', xs: '30px' }, }}
                    >
                      02
                    </Typography>
                    <Typography
                      variant="subheading3"
                      sx={{ textAlign: 'left', pt: 2,  fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '20px' } , }}
                    >
                      Database or Network
                    </Typography>
                    <Typography
                      component="p"
                      variant="bodytext"
                      sx={{
                        py: 2,
                        textAlign: 'left'
                      }}
                    >
                      We have the most authentic & updated database of licensed childcare providers, daycare centers, and other relevant
                      options. Our database are categorized by location, age group, type of care (e.g., infant care, preschool), and
                      operating hours
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} sx={{ pl: { xs: 5, md: 0 } }}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Stack>
                    <Typography
                      variant="numberstyle"
                      sx={{ textAlign: 'left', pt: 2,  fontSize: { lg: '50px', md: '45px', xs: '30px' }, }}
                    >
                      03
                    </Typography>
                    <Typography
                      variant="subheading3"
                      sx={{ textAlign: 'left', pt: 2,  fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '20px' } , }}
                    >
                      Matching
                    </Typography>
                    <Typography
                      component="p"
                      variant="bodytext"
                      sx={{
                        py: 2,
                        textAlign: 'left'
                      }}
                    >
                      Using the information gathered during the needs assessment, our intelligent database identifies potential childcare
                      providers or facilities that align with the family's specific criteria. This may involve using search filters and
                      algorithms to generate suitable matches.
                    </Typography>
                  </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Stack>
                    <Typography
                      variant="numberstyle"
                      sx={{ textAlign: 'left', pt: 2,  fontSize: { lg: '50px', md: '45px', xs: '30px' }, }}
                    >
                      04
                    </Typography>
                    <Typography
                      variant="subheading3"
                      sx={{ textAlign: 'left', pt: 2,  fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '20px' } , }}
                    >
                      Recommendations
                    </Typography>
                    <Typography
                      component="p"
                      variant="bodytext"
                      sx={{
                        py: 2,
                        textAlign: 'left'
                      }}
                    >
                      Our database provides parents with a list of recommended childcare options based on their preferences. This list often
                      includes details about each provider or facility, such as location, contact information, fees, and available programs.
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Stack sx={{ display: 'flex', flexDirection: 'row' }}></Stack>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          pt: {md:'80px', xs:'0px'}
        }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid container mt={2} sx={{ mt: 2, paddingLeft: { xs: {md:2, xs:0}, sm: 4, md: 4 } }}>
            <Grid item xs={12}>
              <Grid container spacing={2} sx={{ pl: { xs: 5, md: 8 } }}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Stack>
                    <Typography
                      variant="numberstyle"
                      sx={{ textAlign: 'left', pt: 2,  fontSize: { lg: '50px', md: '45px', xs: '30px' }, }}
                    >
                      05
                    </Typography>
                    <Typography
                      variant="subheading3"
                      sx={{ textAlign: 'left', pt: 2,  fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '20px' } , }}
                    >
                      Information Sharing
                    </Typography>
                    <Typography
                      component="p"
                      variant="bodytext"
                      sx={{
                        py: 2,
                        textAlign: 'left'
                      }}
                    >
                      We facilitates the sharing of essential information between parents and caregivers. Parents can access comprehensive
                      profiles of caregivers, helping them make informed decisions about the well-being and safety of their children.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Stack>
                    <Typography
                      variant="numberstyle"
                      sx={{ textAlign: 'left', pt: 2,  fontSize: { lg: '50px', md: '45px', xs: '30px' }, }}
                    >
                      06
                    </Typography>
                    <Typography
                      variant="subheading3"
                      sx={{ textAlign: 'left', pt: 2,  fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '20px' } , }}
                    >
                      Visit and Interviews
                    </Typography>
                    <Typography
                      component="p"
                      variant="bodytext"
                      sx={{
                        py: 2,
                        textAlign: 'left'
                      }}
                    >
                      Parents have the opportunity to schedule visits and interviews with potential caregivers or daycare centers. These
                      interactions allow parents to assess the environment, ask specific questions, and personally evaluate whether the
                      caregiver or facility aligns with their preferences and standards.
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} sx={{ pl: { xs: 5, md: 8 } }}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Stack>
                    <Typography
                      variant="numberstyle"
                      sx={{ textAlign: 'left', pt: 2,  fontSize: { lg: '50px', md: '45px', xs: '30px' }, }}
                    >
                      07
                    </Typography>
                    <Typography
                      variant="subheading3"
                      sx={{ textAlign: 'left', pt: 2,  fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '20px' } , }}
                    >
                      Enrollment Assistance
                    </Typography>
                    <Typography
                      component="p"
                      variant="bodytext"
                      sx={{
                        py: 2,
                        textAlign: 'left'
                      }}
                    >
                      ChildrenKARE supports parents through the enrollment process for daycares and preschools. This may include providing
                      guidance, and assistance throughout the process by making it more convenient for parents seeking quality child care
                      options.
                    </Typography>
                  </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Stack>
                    <Typography
                      variant="numberstyle"
                      sx={{ textAlign: 'left', pt: 2,  fontSize: { lg: '50px', md: '45px', xs: '30px' }, }}
                    >
                      08
                    </Typography>
                    <Typography
                      variant="subheading3"
                      sx={{ textAlign: 'left', pt: 2,  fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '20px' } , }}
                    >
                      Feedback and Reviews
                    </Typography>
                    <Typography
                      component="p"
                      variant="bodytext"
                      sx={{
                        py: 2,
                        textAlign: 'left'
                      }}
                    >
                      Parents can leave feedback and reviews based on their experiences with specific caregivers or child care facilities to
                      helps build a transparent and trustworthy community, where parents can rely on the opinions and experiences of others
                      when making decisions about child care.
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Stack sx={{ display: 'flex', flexDirection: 'row' }}></Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          {/* <img src={ImageTwo} width={matches?"90%":"70%"} height={matches?"90%":"65%"} />{' '} */}
          <div
  style={{
    width: '100%',
    maxWidth: '78%',
    height: matches ? '100%' : '319px', // You must set height
    backgroundImage: `url(${MaskgroupOne})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginRight: 4,
    borderRadius: '20px',
  }}
/>
          {/* <img src={MaskgroupOne} alt="maskGrup" style={{ width: '100%', maxWidth: '78%', objectFit: 'cover', marginRight: 4,borderRadius:'20px' }} />{' '} */}
        </Grid>
        {/* <Grid item xs={0} md={0.5}></Grid> */}
      </Grid>

      <Grid item xs={0} sm={0} md={0.5} lg={0.5}></Grid>
      <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>

      <Grid item xs={12} sm={12} md={0.3} lg={0.3}></Grid>
    </Grid>
  );
}

export default AboutUsSectionThree;
