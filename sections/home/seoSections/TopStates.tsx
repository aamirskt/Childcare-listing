import { Box, Button } from '@mui/material';
import { Grid, Stack, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const TopStates = ({ topState }: any) => {
  // const navigate = useNavigate();
  const router = useRouter();

  const handleViewMoreClick = () => {
    router.push('/states');
  };
  // const handleClick = (e: any, item: any) => {
  //   e.preventDefault();
  //   const url = `/${item?.state?.toLowerCase().replace(/\s+/g, '-')}`;
  //   router.push(url);
  // };

  return (
    <Grid sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'center', xs: 'start' }, px: 5 }}>
        <Stack>
          <Typography
            sx={{
              cursor: 'pointer',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              color: '#000',
              fontSize: { xs: '12px', md: '16px' }
            }}
          >
            Top States
          </Typography>
        </Stack>
        <Grid item>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: { md: 'start', xs: 'start' },
              flexWrap: 'wrap',
              mt: 2,
              minHeight: '124px'
            }}
          >
            {topState && topState.map((item: any, index: number) => (
              <Stack key={index}>
                <Typography
                  sx={{
                    mr: '10px',
                    color: '#000',
                    fontSize: '12px',
                    fontWeight: '400',
                    textDecoration: 'underline',
                    cursor: 'pointer'
                    // lineHeight: '30px'
                  }}
                  // onClick={(e: any) => handleClick(e, item)}S
                >
                  <Link
                                      href={`/${item?.state?.toLowerCase().replace(/\s+/g, '-')}`}
                                      style={{
                                        color: '#000',
                                      }}
                                    >
                                                        {item.state}
                                    </Link>

                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Stack sx={{ mt: 4 }}>
          <Box
  component="a"
  href="/states"
  onClick={handleViewMoreClick}
  sx={{
    display: 'inline-block',
    textAlign: 'center',
    background: '#000',
    width: '113px',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
    borderRadius: '60px',
    textDecoration: 'none',
    py: 1,
    px: 2,
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.8)'
    }
  }}
>
  View More
</Box>
        </Stack>
      </Box>
      <Box>
        <Stack sx={{ height: '282px', width: '1px', background: '#C0BFBF', display: { md: 'block', sm: 'none', xs: 'none' } }}></Stack>
      </Box>
    </Grid>
  );
};

export default TopStates;
