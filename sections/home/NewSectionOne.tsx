import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import maketplacesearch from 'assets/images/home/aisearch.png';
import aisearch from 'assets/images/home/marketplacesearch.png';
import mapsearch from 'assets/images/home/mapsearch.png';
import Image from 'next/image';


function NewSectionOne() {
  return (
    <Stack sx={{ background: '#fff', px: { xs: 5, lg: 0 } }}>
      <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', py: 8, mt: 6 }}>
        <Typography sx={{ fontSize: { lg: '32px', md: '30px', sm: '28px', xs: '27px' }, fontWeight: '600' }}>
          3 Unique & Different Ways to Find the Best Match
        </Typography>
      </Stack>
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: { lg: '200px', md: '100px', sm: '20px' }
        }}
      >
        <Grid
          item
          xs={12}
          sm={9}
          md={8}
          lg={10}
          sx={{ px: 1, mt: { xs: 2 }, minWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' } }}
        >
          <Box
            sx={{
              background: '#F4F4F4',
              border: '1px solid #CFD1D4',
              p: 3,
              minHeight: { xs: 'auto', sm: 330, md: 430, lg: '286px' },
              borderRadius: '10px',
              display: 'flex',
              flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column' },
              alignItems: 'center'
            }}
          >
            <Box>
                <Image
                    width={192}
                    height={192} 
                      src={aisearch}
                      alt={'aisearch'}
                      // fill
                      // style={{ objectFit: 'contain' }}
                    />
              {/* <img src={aisearch} style={{ width: '192px', height: '192px' }} /> */}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: { lg: '30px', md: '30px', sm: '30px', xs: '0px' }
              }}
            >
              <Typography variant="h4" sx={{ pb: 1, fontSize: '24px', fontWeight: '700' }}>
                AI Guided Search
              </Typography>
              <Typography variant="body2">
                AI Based system simple and easy way to match you to the ideal childcare provider based on your requirement. Simply answer
                some questions and let our AI engine find the best match
              </Typography>
              <Box
                sx={{
                  pt: 4,
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: '176px',
                    height: '34px',
                    padding: '10px 16px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    flexShrink: 0,
                    borderRadius: '60px',
                    border: '1px solid #4680FF',
                    background: '#257C07',
                    boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  Learn More
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: '176px',
                    height: '34px',
                    padding: '10px 16px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    flexShrink: 0,
                    borderRadius: '60px',
                    border: '1px solid #4680FF',
                    background: '#0D0D0D',
                    boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.04)',
                    marginLeft: { lg: '53px', xs: '0px' },
                    marginTop: { lg: '0px', xs: '10px' }
                  }}
                >
                  Lets Start Bidding
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          md={8}
          lg={10}
          sx={{ px: 1, mt: { xs: 2 }, minWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' } }}
        >
          <Box
            sx={{
              background: '#F4F4F4',
              border: '1px solid #CFD1D4',
              p: 3,
              minHeight: { xs: 'auto', sm: 330, md: 430, lg: '286px' },
              borderRadius: '10px',
              display: 'flex',
              flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column' },
              alignItems: 'center'
            }}
          >
            <Box>
                <Image
                    width={192}
                    height={192} 
                      src={mapsearch}
                      alt={'mapsearch'}
                      // fill
                      // style={{ objectFit: 'contain' }}
                    />
              {/* <img src={mapsearch} style={{ width: '192px', height: '192px' }} /> */}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: { lg: '30px', md: '30px', sm: '30px', xs: '0px' },
                margin: 'auto'
              }}
            >
              <Typography variant="h4" sx={{ pb: 1, fontSize: '24px', fontWeight: '700' }}>
                Map Based Search
              </Typography>
              <Typography variant="body2">Simple Map Based Search to Find the Care nearest to you</Typography>
              <Box sx={{ pt: 4, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Button
                  variant="contained"
                  sx={{
                    width: '176px',
                    height: '34px',
                    padding: '10px 16px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    flexShrink: 0,
                    borderRadius: '60px',
                    border: '1px solid #4680FF',
                    background: '#0D0D0D',
                    boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  Lets Start Bidding
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          md={8}
          lg={10}
          sx={{ px: 1, mt: { xs: 2 }, minWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' } }}
        >
          <Box
            sx={{
              background: '#F4F4F4',
              border: '1px solid #CFD1D4',
              p: 3,
              minHeight: { xs: 'auto', sm: 330, md: 430, lg: '286px' },
              borderRadius: '10px',
              display: 'flex',
              flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column' },
              alignItems: 'center'
            }}
          >
            <Box>
                <Image
                    width={192}
                    height={192} 
                      src={maketplacesearch}
                      alt={'maketplacesearch'}
                      // fill
                      // style={{ objectFit: 'contain' }}
                    />
              {/* <img src={maketplacesearch} style={{ width: '192px', height: '192px' }} /> */}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '30px' }}>
              <Typography variant="h4" sx={{ pb: 1, fontSize: '24px', fontWeight: '700' }}>
                AI Guided Search
              </Typography>
              <Typography variant="body2">
                AI Based system simple and easy way to match you to the ideal childcare provider based on your requirement. Simply answer
                some questions and let our AI engine find the best match
              </Typography>
              <Box sx={{ pt: 4, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Button
                  variant="contained"
                  sx={{
                    width: '176px',
                    height: '34px',
                    padding: '10px 16px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    flexShrink: 0,
                    borderRadius: '60px',
                    border: '1px solid #4680FF',
                    background: '#0D0D0D',
                    boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  Lets Start Bidding
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default NewSectionOne;
