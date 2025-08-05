'use client';
// material-ui
import { styled } from '@mui/material/styles';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';

// project-imports
// import logo from 'assets/images/home/logo.png';
// import Insta from 'assets/images/home/Instagram.png';
// import Facebook from 'assets/images/home/Facebook.png';
// import Pintrest from 'assets/images/home/Pinterest.png';
// import Twitter from 'assets/images/home/twitterx.png';
import { Tooltip } from '@mui/material';
// import SeoCategories1 from 'sections/home/seoCategories1';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
// assets

// link - custom style
// const FooterLink = styled(Link)(({ theme }) => ({
//   color: theme.palette.text.primary,
//   '&:hover, &:active': {
//     color: theme.palette.primary.main
//   }
// }));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

const FooterBlock = () => {
  const router = useRouter();
  // const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const redirectToHome = () => {
    scrollToTop();
    router.push('/'); // Change '/home' to the actual route of your home page
  };

  return (
    <>
      <Box
        sx={{
          pb: 10,
          // borderTop: `1px solid ${theme.palette.divider}`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
           fontSize: '14px', // ✅ set global font size
            fontFamily: 'Helvetica',
        }}
      >

        <Container>
          {/* < SeoCategories1 /> */}
          <Grid container spacing={2} sx={{ pt: { lg: 3, xs: 5 } }}>
            <Grid item xs={12} md={4} sx={{ px: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Link href="/">
    <Image
      width={210}
      height={40}
      src="/assets/images/home/logo.png"
      alt="Logo"
      style={{ objectFit: 'contain' }}
    />
</Link>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" sx={{ fontSize: '14px', fontWeight: 400 }}>
                    ChildrenKARE is a trusted, Denver-based company with over 15 years of experience in the childcare industry. We specialize in delivering high-quality services tailored to the needs of both childcare providers and parents. Our commitment to excellence and community support has made us a reliable partner in nurturing safe, supportive, and enriching environments for children
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={{ xs: 5, md: 2 }} sx={{ px: 0 }}>
                <Grid item xs={6} sm={3}>
                  <Stack spacing={3}>
  <Typography variant="bodytext1" sx={{fontWeight: 600}}>Company</Typography>
  <Stack spacing={{ xs: 1.5, md: 2.5 }}>
    <Link
      
       style={{
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => {
    const target = e.target as HTMLElement;
    target.style.textDecoration = 'underline';
    target.style.color = '#1E90FF';
  }}
  onMouseLeave={(e) => {
    const target = e.target as HTMLElement;
    target.style.textDecoration = 'none';
    target.style.color = 'inherit';
  }}
      href="/"
    >
      Home
    </Link>
    <Link
      
       style={{
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => {
    const target = e.target as HTMLElement;
    target.style.textDecoration = 'underline';
    target.style.color = '#1E90FF';
  }}
  onMouseLeave={(e) => {
    const target = e.target as HTMLElement;
    target.style.textDecoration = 'none';
    target.style.color = 'inherit';
  }}
      href="/aboutus"
    >
      About Us
    </Link>
    <Link
      
       style={{
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => {
    const target = e.target as HTMLElement;
    target.style.textDecoration = 'underline';
    target.style.color = '#1E90FF';
  }}
  onMouseLeave={(e) => {
    const target = e.target as HTMLElement;
    target.style.textDecoration = 'none';
    target.style.color = 'inherit';
  }}
      href="/blogs"
    >
      Blogs
    </Link>
      
  </Stack>
</Stack>
                </Grid>
                <Grid item xs={6} sm={3} sx={{ display: { sm: 'block', xs: 'none' } }}>
  <Stack spacing={3}>
    <Typography variant="bodytext1" sx={{fontWeight: 600}}>Help & Support</Typography>
    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
     <Link
         style={{
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => {
    const target = e.target as HTMLElement;
    target.style.textDecoration = 'underline';
    target.style.color = '#1E90FF';
  }}
  onMouseLeave={(e) => {
    const target = e.target as HTMLElement;
    target.style.textDecoration = 'none';
    target.style.color = 'inherit';
  }}
        href="/contactus"
      >
        Contact Us
      </Link>
    </Stack>
  </Stack>
</Grid>
<Grid item xs={6} sm={3}>
  <Stack spacing={3}>
    <Typography variant="bodytext1" sx={{fontWeight: 600}}>Legal Resources</Typography>
    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
      <Link
        
         style={{
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => {
    const target = e.target as HTMLElement;
    target.style.textDecoration = 'underline';
    target.style.color = '#1E90FF';
  }}
  onMouseLeave={(e) => {
    const target = e.target as HTMLElement;
    target.style.textDecoration = 'none';
    target.style.color = 'inherit';
  }}
        href="/termsandcondition"
      >
        Terms & Condition
      </Link>
      <Link
          style={{
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => {
    const target = e.target as HTMLElement;
    target.style.textDecoration = 'underline';
    target.style.color = '#1E90FF';
  }}
  onMouseLeave={(e) => {
    const target = e.target as HTMLElement;
    target.style.textDecoration = 'none';
    target.style.color = 'inherit';
  }}
       
        href="/privacypolicy"
      >
        Privacy Policy
      </Link>
      <Link
          style={{
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => {
    const target = e.target as HTMLElement;
    target.style.textDecoration = 'underline';
    target.style.color = '#1E90FF';
  }}
  onMouseLeave={(e) => {
    const target = e.target as HTMLElement;
    target.style.textDecoration = 'none';
    target.style.color = 'inherit';
  }}
       
        href="/#faqs"
      >
        FAQ
      </Link>
    </Stack>
  </Stack>
</Grid>
                <Grid item xs={12} sm={3}>
                  <Stack display="flex" sx={{ flexDirection: { md: 'row', sm: 'row', xs: 'row' } }}>
                    <Stack sx={{ mr: { md: 1, xs: 1 }, mt: { md: 0, xs: 1 } }}>
                      <Tooltip title={'Instagram'}>
                        <a href="https://www.instagram.com/children.kare/" target="_blank">
                          <Image alt="Instagram" src='/assets/images/home/Instagram.png' width={30} height={30} />
                        </a>
                      </Tooltip>
                    </Stack>
                    <Stack sx={{ mr: { md: 1, xs: 1 }, mt: { md: 0, xs: 1 } }}>
                      <Tooltip title={'Facebook'}>
                        <a href="https://www.facebook.com/children.kare0/" target="_blank">
                          <Image alt="Facebook" src='/assets/images/home/Facebook.png' width={30} height={30} />
                        </a>
                      </Tooltip>
                    </Stack>
                    <Stack sx={{ mr: { md: 1, xs: 1 }, mt: { md: 0, xs: 1 } }}>
                      <Tooltip title={'Twitter'}>
                        <a href="https://twitter.com/children_kare" target="_blank">
                          <Image alt="Twitter" src='/assets/images/home/twitterx.png' width={40} height={30} />
                        </a>
                      </Tooltip>
                    </Stack>
                    <Stack sx={{ mr: { md: 1, xs: 1 }, mt: { md: 0, xs: 1 } }}>
                      <Tooltip title={'Pinterest'}>
                        <a href="https://www.pinterest.com/childrenkare/" target="_blank">
                          <Image alt="Pintrest" src='/assets/images/home/Pinterest.png' width={30} height={30} />
                        </a>
                      </Tooltip>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FooterBlock;
