
import { Typography, Stack, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';

const BrowseStataPage = ({state, data}: any) => {
    return(
       < Grid container>
      <Grid item xs={12} sx={{ px: { lg: 5, xs: 2 }, background: '#fff', pt: 13, pb: 10 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Stack>
            <Typography
              variant="subheading2"
              sx={{
                fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' },
                textTransform: 'capitalize',
                pr: { md: 0, xs: 3 },
              }}
              component="h1"
            >
              Browse in {state?.replace('-', ' ')}
            </Typography>
          </Stack>
          <Grid container spacing={2} mt={4}>
            {data.length > 0 &&
              data.map((_state: any, index: number) => (
                <Grid item key={index} xs={12} sm={6} md={2}>
                  <Link
                    href={`/browse/${_state?.state_code.toLowerCase()}/${_state.city.toLowerCase().replace(/\s+/g, '-')}`}
                    style={{
                      color: '#000',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      lineHeight: '30px',
                      fontSize: '14px',
                    }}
                  >
                    {_state.city}
                  </Link>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
    )
}
export default BrowseStataPage;