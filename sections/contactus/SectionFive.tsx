import { Grid, Stack, TextField, Typography } from '@mui/material';

function SectionFive() {
  return (
    <Grid container sx={{ px: 5 }}>
      <Grid xs={12} sm={12} md={6} lg={6}>
        <Stack sx={{ color: '#fff', display: 'flex', mt: 3 }}>
          <Typography variant="h2" sx={{ color: '#141414' }}>
            How We Can Help You
          </Typography>
          <Typography component="p" sx={{ color: '#666C89' }}>
            Follow our newsletter We will regularly update our latest project and availability{' '}
          </Typography>
        </Stack>
      </Grid>
      <Grid xs={12} sm={12} md={6} lg={6}>
        <Stack sx={{ color: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'right', mt: 3 }}>
          <Stack sx={{ px: 2 }}>
            <TextField placeholder="Enter your Email" sx={{ background: '#EEF7FB' }} />
          </Stack>
          <button type="button" className="btn btn-shadow" style={{ borderRadius: 30, background: '#219EBC',color:"#fff" }}>
            Subscribe
          </button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default SectionFive;
