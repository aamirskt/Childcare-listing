import { Box, Grid, Stack, Typography } from '@mui/material';

const DayCareSecThree = ({ detailData }: any) => {
  return (
    <>
      <Grid sx={{ py: 0 }}>
        {/* <Box sx={{ mt: 5 }}>
          <Stack>
            <Typography variant="subheading2" sx={{  fontSize: '18px',  }}>
              Financial Aid:
            </Typography>
            <Typography
              variant="bodytext"
              sx={{
                fontSize: '14px',
                mt: 1
              }}
            >
              Early Head Start & Head Start programs support pregnant women and families with children Younger than age of 3 years, and
              children between 3 to 5 years
            </Typography>
          </Stack>
        </Box> */}
        <Box sx={{ mt: 5 }}>
          <Stack>
            <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: 2 }}>
              {detailData?.early_head_start && (
                <Stack>
                  <Typography variant="bodytext1" sx={{ fontSize: '14px' }}>
                    Early Head Start Program:
                  </Typography>
                  <Typography variant="bodytext" sx={{}}>
                    {detailData?.early_head_start}
                  </Typography>
                </Stack>
              )}
              {detailData?.head_start && (
                <Stack>
                  <Typography variant="bodytext1" sx={{ fontSize: '14px' }}>
                    Head Start Program
                  </Typography>
                  <Typography variant="bodytext" sx={{}}>
                    {detailData?.head_start}
                  </Typography>
                </Stack>
              )}
              <Stack></Stack>
            </Stack>
          </Stack>
          <Stack sx={{ mt: 4 }}>
            <Typography
              variant="bodytext1"
              sx={{
                fontSize: '14px'
              }}
            >
              Licensing Details:
            </Typography>
            <Typography
              variant="bodytext"
              sx={{
                mt: 1
              }}
            >
              Day care centers are required by State law to be licensed.
            </Typography>
            <Stack sx={{ mt: 2 }}>
              <Typography variant="subheading2" sx={{ fontSize: '18px' }}>
                License Number
              </Typography>
              <Typography variant="bodytext" sx={{}}>
                {detailData?.license_number}
              </Typography>
              <Typography
                variant="bodytext"
                sx={{
                  mt: 2
                }}
              >
                {detailData?.center_name} is an active licensed child care facility. The identifying license indicating the provider met the
                state standards for operating a child care program.
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </>
  );
};

export default DayCareSecThree;
