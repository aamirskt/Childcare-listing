'use client';

import { Stack, Typography } from '@mui/material';
const BannerImage = '/assets/images/icons/contactusbannerImage.png';

function SectionTwo() {
  const divStyle = {
    backgroundImage: `url(${BannerImage})`, // Replace with the path to your image
    backgroundSize: 'cover', // Adjust as needed
    backgroundRepeat: 'no-repeat',
    height: '363px'
    // maxWidth:"99%"
  };
  return (
    <Stack style={divStyle} sx={{ px:{md:0, xs:2}}}>
      <Stack
        sx={{
          color: '#fff',
          display: 'flex',
          justifyContent: { md: 'center', xs: 'center', sm: 'center' },
          alignItems: { md: 'center', sm: 'left', xs: 'left' },
          mt: 7
        }}
      >
        <Typography
          variant="subheading1"
          sx={{
            textAlign: { md: 'center', xs: 'left' },
            fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' },
            py: 2
          }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="bodytext"
          component="p"
          sx={{
            textAlign: { md: 'center', xs: 'left' },
            color: '#000',
            width: { lg: '70%', xs: 'auto' }
          }}
        >
          We also invite you to schedule a visit to our partner centers to see the facilities, meet the staff, and learn more about the
          programs. We look forward to getting to know your family and answering any questions you may have. Thank you for considering
          ChildrenKARE as your partner in your child's early education and care journey. We are excited to embark on this adventure with you
          and your child.
        </Typography>
      </Stack>
    </Stack>
  );
}

export default SectionTwo;
