
'use client';

import React from 'react';
import { Stack, Typography, useMediaQuery } from '@mui/material';
const bannerimage = '/assets/compresspics/blog.webp';
import { useTheme } from '@mui/material/styles';
const blogmobilebg = '/assets/compresspics/blogsmobilebg.webp';

function Blogs() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
      <Stack
        sx={{
          backgroundImage: `url(${matches ? bannerimage : blogmobilebg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          border: '1px solid transparent',
          backgroundPositionX: 'right',
          mt: 7
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
            Blogs
          </Typography>
          {/* <Typography  sx={{ pt: 2, width: '60%', fontSize:'16px' }}>
            We'd love to hear from you and answer any questions you may have about our daycare services. Please feel free to reach out to us
            using the following contact methods.
          </Typography> */}
        </Stack>
      </Stack>
  );
}

export default Blogs;
