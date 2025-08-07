'use client';

import { Grid, Container } from '@mui/material';
import SectionTwo from 'sections/contactus/SectionTwo';
import SectionThree from 'sections/contactus/SectionThree';
import SectionOne from 'sections/contactus/firstSection';

function ContactUs() {
  return (
    <>
      <SectionOne />
      <Grid container>
        <Container>
          <Grid container>
            <Grid xs={12} sm={12} md={12} lg={12} sx={{}}>
              <SectionTwo />
            </Grid>
            <Grid xs={12} sm={12} md={12} pt={50} lg={12} sx={{ mt: '-180px',mb:'56px' }}>
              <SectionThree />
            </Grid>
          </Grid>
        </Container>
          </Grid>
    </>
  );
}

export default ContactUs;
