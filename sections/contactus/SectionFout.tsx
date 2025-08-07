import { Grid, Stack, Typography } from '@mui/material';
import Message from 'assets/images/icons/message.png';
import Phone from 'assets/images/icons/call.png';
import Email from 'assets/images/icons/ContactUsEmail.png';
import Image from 'next/image';

function SectionFout() {
  return (
    <Stack sx={{ px: { xs: 2, sm: 0 }, my: { xs: 3, sm: 5, md: 10, lg: 12 } }}>
      <Stack
        sx={{
          color: '#fff',
          display: 'flex',
          justifyContent: { md: 'center', xs: 'left' },
          alignItems: { md: 'center', xs: 'left' },
          mt: 3
        }}
      >
        <Typography
          variant="subheading1"
          sx={{
            py: 2,
            fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' },
            textAlign: { md: 'center', xs: 'left' }
          }}
        >
          We can help you?
        </Typography>
        <Typography
          variant="bodytext"
          sx={{
            width: { md: '65%', xs: '100%' },
            textAlign: { md: 'center', xs: 'left' }
          }}
        >
          Call our friendly team or email us. We're available during our regular operating hours to assist you with any inquiries or to
          schedule a visit. We aim to respond to all email inquiries within 24 hours.
        </Typography>
      </Stack>
      <Grid container sx={{display:'flex', justifyContent:'center'}}>
        <Grid xs={0} sm={0} md={1.5} lg={1.5} />
        <Grid xs={12} sm={6} md={3} lg={3}>
          <Stack sx={{ background: '#FAFAFA', borderRadius: 2, py: 3, my: { xs: 4, sm: 4, md: 4 }, mx: 2,  }}>
            <Stack sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                    width={54}
                    height={54} 
                      src={Message}
                      alt={'message'}
                      // fill
                      // style={{ objectFit: 'contain' }}
                    />
              {/* <img src={Message} alt='message' style={{height:'54px', width:'54px'}}/> */}
            </Stack>
            <Typography
              variant="subheading3"
              sx={{ textAlign: 'center', mt: 2,  fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '20px' }  }}
            >
              For General Inquiries
            </Typography>
            <Typography
              component="a"
              href="mailto:Info@Childrenkare.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: { xs: 12, sm: 14, md: 12, lg: 12 },
                fontWeight: '400',
                color: '#000',
                textAlign: 'center',
                textDecorationLine: 'underline'
              }}
            >
              Info@Childrenkare.com
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={3}>
          <Stack sx={{ background: '#FAFAFA', borderRadius: 2, py: 3, my: { xs: 4, sm: 4, md: 4 }, mx: 2,  }}>
            <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', pt: 2 }}>
               <Image
                    width={54}
                    height={54} 
                      src={Phone}
                      alt={'Phone'}
                      // fill
                      // style={{ objectFit: 'contain' }}
                    />
              {/* <img src={Phone} alt='phone' style={{height:'54px', width:'54px'}}/> */}
            </Stack>
            <Typography
              variant="subheading3"
              sx={{ textAlign: 'center', mt: 2,  fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '20px' },  }}
            >
              Help Center
            </Typography>

            <Typography
              component="a"
              href="mailto:Support@Childrenkare.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: { xs: 12, sm: 14, md: 12, lg: 12 },
                fontWeight: '400',
                color: '#000',
                textAlign: 'center',
                textDecorationLine: 'underline'
              }}
            >
              Support@Childrenkare.com
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={3} sx={{display:'none'}}>
          <Stack sx={{ background: '#FAFAFA', borderRadius: 2, py: 6, my: { xs: 4, sm: 0, md: 4 }, mx: 2,  }}>
            <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', pt: 2 }}>
               <Image
                    width={54}
                    height={54} 
                      src={Email}
                      alt={'Email'}
                      // fill
                      // style={{ objectFit: 'contain' }}
                    />
              {/* <img src={Email} /> */}
            </Stack>
            <Typography
              variant="subheading2"
              sx={{ textAlign: 'center', mt: 2,  fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' },  }}
            >
              For Provider Concern
            </Typography>
            <Typography
              component="a"
              href="mailto:Support@Childrenkare.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: { xs: 12, sm: 14, md: 12, lg: 12 },
                fontWeight: '400',
                color: '#000',
                textAlign: 'center',
                textDecorationLine: 'underline'
              }}
            >
              Support@Childrenkare.com
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={0} sm={0} md={1.5} lg={1.5} />
      </Grid>
    </Stack>
  );
}

export default SectionFout;
