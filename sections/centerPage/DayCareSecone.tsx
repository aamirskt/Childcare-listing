import { Box, Grid, Rating, Stack, Typography } from '@mui/material';
// import daycaredetail from 'assets/images/home/centerimg.png';
// import approval from 'assets/images/home/Approval.png';
// import phoneicon from 'assets/images/home/phoneicon.png';

const DayCareSecone = ({ detailData }: any) => {
  // const imagePath = `https://devian.amwaus.com/${detailData?.center_image}`;
  console.log('Image Path:', detailData);

  return (
    <>
      <Grid sx={{ py: 5 }}>
        <Box>
          <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Stack>
              <img style={{ height: '150px', width: '150px', borderRadius: '50%' }} src={`https://devian.amwaus.com/${detailData?.center_image}`} alt="daycaredetail" />
            </Stack>
            <Stack>
              <Stack sx={{ ml: 2 }}>
                <Stack sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Stack>
                    <Typography
                      component="h1"
                      variant="subheading2"
                      sx={{
                        fontSize: '26px',
                        lineHeight: '32px',
                        alignItems: 'center',
                        maxWidth: '500px'
                      }}

                    >
                      {detailData?.center_name}
                      {/* <img src={approval} alt="approval" style={{ width: '22px', height: '22px', marginLeft: '5px' }} /> */}
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography
                      variant="bodytext"
                      sx={{
                        color: '#70757A',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '20px',
                        my: 1
                      }}
                    >
                      childcare center
                    </Typography>
                  </Stack>
                  {detailData?.ratings && (
                    <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <Stack
                        sx={{
                          color: '#374151',
                          fontSize: '15px',
                          fontWeight: 600,
                          lineHeight: '20px',
                          mr: 1
                        }}
                      >
                        {parseFloat(detailData?.ratings)}
                      </Stack>
                      <Stack>
                        <Rating name="disabled" readOnly value={parseFloat(detailData?.ratings)} precision={0.5} />
                      </Stack>
                    </Stack>
                  )}
                </Stack>


              </Stack>
            </Stack>
          </Stack>
          {/* <Stack>
            <img height="284px" src={daycaredetail} alt="daycaredetail" />
          </Stack> */}

        </Box>
        <Box sx={{ mt: 5 }}>
          <Stack sx={{border:'1px solid #B4B2B2',borderRadius:'10px',p:2}}>
            <Typography
              variant="subheading2"
              sx={{
                fontSize: '16px'
              }}
            >
              Description:
            </Typography>
            <Typography
              variant="bodytext"
              sx={{
                fontSize: '14px',
                mt: 1
              }}
            >
              {detailData?.center_name} provides quality early education in {detailData?.city}, {detailData?.zip_code}. Explore information
              such as Address, Operating Hours, Contact info, Licensing, Age Serving, Rating, Financial Aid and much more! Program provides
              opportunities for recreation, enrichment, and character building with flexible care schedules. Use the Pre-Enrollment form to
              enroll your child in this care facility.
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Stack sx={{border:'1px solid #B4B2B2',borderRadius:'10px',p:2}}>
            <Typography
              variant="subheading2"
              sx={{
                fontSize: '16px'
              }}
            >
              Facility Details:
            </Typography>
            <Stack
              sx={{
                display: 'flex',
                flexDirection: { md: 'row', xs: 'column' },
                justifyContent: detailData?.age_serving ? 'space-between' : 'left',
                mt: 2
              }}
            >
              <Stack>
                <Typography sx={{ fontSize: '14px' }}>Capacity</Typography>
                <Typography variant="bodytext" sx={{}}>
                  {detailData?.capacity}
                </Typography>
              </Stack>
              <Stack sx={{ mt: { md: 0, xs: 1 }, ml: detailData?.age_serving ? 0 : { md: 17, xs: 0 } }}>
                <Typography sx={{ fontSize: '14px' }}>Operating Hours</Typography>
                <Typography variant="bodytext" sx={{}}>
                  {detailData?.operating_hours ? detailData?.operating_hours : 'N/A'}
                </Typography>
              </Stack>
              {detailData?.age_serving && (
                <Stack sx={{ mt: { md: 0, xs: 1 }, width: { lg: '417px', md: '417px', xs: '100%' } }}>
                  <Typography sx={{ fontSize: '14px' }}>Age Serving</Typography>
                  <Typography variant="bodytext">{detailData?.age_serving}</Typography>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </>
  );
};

export default DayCareSecone;
