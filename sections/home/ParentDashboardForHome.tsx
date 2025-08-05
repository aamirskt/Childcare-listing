import { Box, Container, Grid, Rating, Stack, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
// import parentdash from 'assets/images/home/pd.png';
// import parentdash1 from 'assets/images/home/pd1.png';
// import shakehand from 'assets/images/home/shakehands.png';
// import './style1.css';
// import { scroll } from "framer-motion/dom";
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'swiper/css/autoplay';
import { useEffect, useRef } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const ParentDashboardForHome = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const secHead=useRef<HTMLDivElement>(null);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          if (entry.target === leftRef.current) {
            leftRef.current?.classList.add('leftMove');
          } else if (entry.target === centerRef.current) {
            centerRef.current?.classList.add('centerGrow');
          } else if (entry.target === rightRef.current) {
            rightRef.current?.classList.add('rightMove');
          } else if (entry.target === secHead.current) {
            secHead.current?.classList.add('centerGrow1');
          }
        } else {
          if (entry.target === leftRef.current) {
            leftRef.current?.classList.remove('leftMove');
          } else if (entry.target === centerRef.current) {
            centerRef.current?.classList.remove('centerGrow');
          } else if (entry.target === rightRef.current) {
            rightRef.current?.classList.remove('rightMove');
          } else if (entry.target === secHead.current) {
            secHead.current?.classList.remove('centerGrow1');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    if (leftRef.current) observer.observe(leftRef.current);
    if (centerRef.current) observer.observe(centerRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (centerRef.current) observer.unobserve(centerRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <Grid container sx={{ background: '#F9EECE', py: { lg: '84px', xs: '30px', position: 'relative' } }}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: { md: 'center', xs: 'center' } }}>
              <Typography variant="subheading1" sx={{ fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' } }}>
                How to Connect with Parent or Institute
              </Typography>
              <Typography
                variant="bodytext"
                sx={{
                  textAlign: { md: 'center', xs: 'center' },
                  width: { md: '69%' },
                  pt: { md: 2, xs: 1 }
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aliquam tincidunt mauris eu risus Vestibulum auctor dapibus neque.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aliquam tincidunt mauris eu risus Vestibulum auctor dapibus neque.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aliquam tincidunt mauris eu risus Vestibulum auctor dapibus neque.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Grid container sx={{}}>
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true
          }}
          modules={[Mousewheel, Pagination, Autoplay]}
          className="mySwiper1"
        >
          <SwiperSlide className="test">
            <Container>
              <Grid container sx={{ mt: 7, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Grid
                  item
                  lg={5.5}
                  xs={12}
                  sx={{ boder: '1px solid #D8D8D8', background: '#fff', borderRadius: '10px', width: '631px', height: '668px' }}
                >
                  <Stack sx={{ background: '#F5F5F5' }}>
                    <Typography
                      variant="subheading1"
                      sx={{ fontSize: { lg: '24px', md: '22px', sm: '18', xs: '18px' }, textAlign: 'center', p: 1 }}
                    >
                      Childcare Service Dashboard
                    </Typography>
                  </Stack>
                  <Stack sx={{ mt: '53px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="bodytext" sx={{ width: '400px', textAlign: 'center' }}>
                      On this Dashboard, we have brought you an amazing feature that will make institute manage very easy for you.
                    </Typography>
                  </Stack>
                  <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 3, flexDirection: 'row', mt: '40px' }}>
                    <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1 }}>
                      <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                        Created professional profile
                      </Typography>
                    </Box>
                    <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1, ml: 2 }}>
                      <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                        Marketplace Bids
                      </Typography>
                    </Box>
                    <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1, ml: 2 }}>
                      <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                        Conversation
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 3, flexDirection: 'row', mt: '10px' }}>
                    <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1 }}>
                      <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                        Review Daily inquiry
                      </Typography>
                    </Box>
                    <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1, ml: 2 }}>
                      <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                        Finance management
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack sx={{ mt: 6, px: 3 }}>
                    <Image src='/assets/images/home/pd.png' alt="parentdash" 
                    width={100} height={100} 
                    />
                  </Stack>
                </Grid>
                <Grid
                  item
                  lg={5.5}
                  xs={12}
                  sx={{ boder: '1px solid #D8D8D8', background: '#fff', borderRadius: '10px', width: '631px', height: '668px', ml: 4 }}
                >
                  <Stack sx={{ background: '#F5F5F5' }}>
                    <Typography
                      variant="subheading1"
                      sx={{ fontSize: { lg: '24px', md: '22px', sm: '18', xs: '18px' }, textAlign: 'center', p: 1 }}
                    >
                      Parents Dashboard
                    </Typography>
                  </Stack>
                  <Stack sx={{ mt: '53px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="bodytext" sx={{ width: '400px', textAlign: 'center' }}>
                      Through this dashboard, you can find a childcare center for your kids with this amazing feature.
                    </Typography>
                  </Stack>
                  <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 3, flexDirection: 'row', mt: '40px' }}>
                    <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1 }}>
                      <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                        Choose Best Offer
                      </Typography>
                    </Box>
                    <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1, ml: 2 }}>
                      <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                        Choose Best Location
                      </Typography>
                    </Box>
                    <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1, ml: 2 }}>
                      <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                        Multiple Offers
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 3, flexDirection: 'row', mt: '10px' }}>
                    <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1 }}>
                      <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                        See Institute Details
                      </Typography>
                    </Box>
                    <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1, ml: 2 }}>
                      <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                        Institute Conversation
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack sx={{ mt: 6, px: 3 }}>
                    <Image src='/assets/images/home/pd1.png' alt="parentdash"
                    width={100} height={100} 
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </SwiperSlide>
          {/* <AnimationOnScroll animateIn={'animate__animated animate__delay-0s animate__backInLeft'}> */}
          <SwiperSlide className="test" style={{ display: matches ? 'block' : 'none' }}>
            <Grid
              container
              sx={{ mt: 7, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
            >
              <Grid
                item
                lg={3.7}
                xs={12}
                sx={{ border: '1px solid #D8D8D8', background: '#fff', borderRadius: '10px', width: '631px', height: '668px' }}
                ref={matches ? leftRef : null}
              >
                <Stack sx={{ background: '#F5F5F5' }}>
                  <Typography
                    variant="subheading1"
                    sx={{ fontSize: { lg: '24px', md: '22px', sm: '18', xs: '18px' }, textAlign: 'center', p: 1 }}
                  >
                    Childcare Service Dashboard
                  </Typography>
                </Stack>
                <Stack sx={{ mt: '53px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="bodytext" sx={{ width: '400px', textAlign: 'center' }}>
                    On this Dashboard, we have brought you an amazing feature that will make institute manage very easy for you.
                  </Typography>
                </Stack>
                <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 3, flexDirection: 'row', mt: '40px' }}>
                  <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1 }}>
                    <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                      Created Professional Profile
                    </Typography>
                  </Box>
                  <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1, ml: 2 }}>
                    <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                      Marketplace Bids
                    </Typography>
                  </Box>
                  <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1, ml: 2 }}>
                    <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                      Conversation
                    </Typography>
                  </Box>
                </Stack>
                <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 3, flexDirection: 'row', mt: '10px' }}>
                  <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1 }}>
                    <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                      Review Daily inquiry
                    </Typography>
                  </Box>
                  <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1, ml: 2 }}>
                    <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                      Finance management
                    </Typography>
                  </Box>
                </Stack>
                <Stack sx={{ mt: 6, px: 3 }}>
                  <Image src='/assets/images/home/pd.png' alt="parentdash"
                  width={100} height={100} 
                  />
                </Stack>
              </Grid>

              <Grid item lg={4} xs={12}>
                <Box ref={matches ? secHead : null}>

                <Stack>
                  <Typography variant="subheading3">Get a Reliable Offer</Typography>
                </Stack>
                <Stack sx={{ alignItems: 'center' }}>
                  <Rating name="simple-controlled" value={5} />
                </Stack>
                </Box>
                
                <Stack ref={matches ? centerRef : null}>
                  <Image src='/assets/images/home/shakehands.png' className="slide-in-boom" 
                  width={100} height={100} 
                  style={{ 
                    // width: '100%', 
                    objectFit: 'cover' }} 
                  alt="Shakehand" />
                </Stack>
              </Grid>

              <Grid
                item
                lg={3.7}
                sx={{ border: '1px solid #D8D8D8', background: '#fff', borderRadius: '10px', width: '631px', height: '668px' }}
                ref={matches ? rightRef : null}
              >
                <Stack sx={{ background: '#F5F5F5' }}>
                  <Typography
                    variant="subheading1"
                    sx={{ fontSize: { lg: '24px', md: '22px', sm: '18', xs: '18px' }, textAlign: 'center', p: 1 }}
                  >
                    Parents Dashboard
                  </Typography>
                </Stack>
                <Stack sx={{ mt: '53px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="bodytext" sx={{ width: '400px', textAlign: 'center' }}>
                    Through this dashboard, you can find a childcare center for your kids with this amazing feature.
                  </Typography>
                </Stack>
                <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 3, flexDirection: 'row', mt: '40px' }}>
                  <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1 }}>
                    <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                      Choose Best Offer
                    </Typography>
                  </Box>
                  <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1, ml: 2 }}>
                    <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                      Choose Best Location
                    </Typography>
                  </Box>
                  <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1, ml: 2 }}>
                    <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                      Multiple Offers
                    </Typography>
                  </Box>
                </Stack>
                <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 3, flexDirection: 'row', mt: '10px' }}>
                  <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1 }}>
                    <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                      See Institute Details
                    </Typography>
                  </Box>
                  <Box sx={{ height: '30px', background: '#F5F5F5', borderRadius: '30px', px: 1, ml: 2 }}>
                    <Typography variant="bodytext1" sx={{ fontSize: '14px', fontWeight: '400', color: '#000' }}>
                      Institute Conversation
                    </Typography>
                  </Box>
                </Stack>
                <Stack sx={{ mt: 6, px: 3 }}>
                  <Image src='/assets/images/home/pd1.png' alt="parentdash"
                  width={100} height={100} 
                  />
                </Stack>
              </Grid>
            </Grid>
          </SwiperSlide>
          {/* </AnimationOnScroll> */}
        </Swiper>
      </Grid>
    </Grid>
  );
};

export default ParentDashboardForHome;
