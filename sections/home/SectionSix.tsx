import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';

function SectionSix() {
  return (
    <Stack sx={{ background: '#fff' }}>
      <Stack sx={{ py: 6 }}>
        <Typography variant="h1" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Blogs{' '}
        </Typography>
      </Stack>
      <Grid container sx={{ px: 4 }}>
        <Grid xs={12} sm={12} md={3} lg={3}>

        </Grid>
        </Grid>
    </Stack>
  );
}

export default SectionSix;
