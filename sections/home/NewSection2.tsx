import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Stack } from '@mui/material';

const NewSection2 = () => {
  return (
    <Box sx={{ background: '' }}>
      <Stack sx={{ background: '#000', height: '93px', px: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
          <Typography
            variant="subheading2"
            sx={{
              color: '#FFF',
              textAlign: 'center',
              fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' },
              paddingBottom: 1
            }}
          >
            A New Way to Get the Best Deal
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default NewSection2;
