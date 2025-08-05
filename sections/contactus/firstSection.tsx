'use client';

import { Typography, Stack, useMediaQuery } from '@mui/material';
const bannerimage = '/assets/compresspics/contact.webp';
import { useTheme } from '@mui/material/styles';
const aboutusmobilebg = '/assets/compresspics/contacusmobilebg.webp'

function ContactUs() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
      <Stack
        sx={{
          backgroundImage: `url(${matches?bannerimage:aboutusmobilebg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          border: '1px solid transparent',
          backgroundPositionX: { sm: 'right', xs: 'auto' },
          justifyContent: 'center',
          display: 'flex',  mt:7
        }}
      >
        <Stack
          sx={{
            color: '#000',
            display: 'flex',
            justifyContent: 'center',
            px: { xs: 5, md: 10 },
            minHeight: { md: '340px', xs: '250px' }
          }}
        >
          <Typography
            variant="mainheading"
            sx={{
              fontSize: { lg: '40px', md: '36px', xs: '30px' }
            }}
          >
            Contact Us
          </Typography>
          <Typography variant="bodytext" sx={{ pt: 2, width: { lg: '60%', xs: 'auto' } }}>
            Use this Form to Contact Us
          </Typography>
        </Stack>
      </Stack>
  );
}

export default ContactUs;
