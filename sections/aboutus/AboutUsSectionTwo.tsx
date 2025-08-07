import { Grid, Stack, Typography } from '@mui/material';
const SectiontwoImage1 = '/assets/images/icons/icon1.png';
const SectiontwoImage2 = '/assets/images/icons/icon2.png';
const SectiontwoImage3 = '/assets/images/icons/icon3.png';
const SectiontwoImage4 = '/assets/images/icons/icon4.png';
const SectiontwoImage5 = '/assets/images/icons/icon5.png';
import Image from 'next/image';

function AboutUsSectionTwo() {
  const data = [
    {
      id: 1,
      imageadress: SectiontwoImage1,
      heading: 'Open Communication',
      description:
        "We believe in transparent and open communication with parents. We encourage ongoing dialogue, regular updates, and parent-provider meetings to keep you informed about your child's progress and daily activities."
    },
    {
      id: 2,
      imageadress: SectiontwoImage2,
      heading: 'Quality Education',
      description:
        'We offer partners with comprehensive early childhood education programs that are founded on research-based curricula, designed to meet and exceed national standards.'
    },
    {
      id: 3,
      imageadress: SectiontwoImage3,
      heading: 'Safety and Security',
      description:
        'Your childs safety is paramount. Our centers are dedicated to providing security measures, ensuring peace of mind for parents.'
    },
    {
      id: 4,
      imageadress: SectiontwoImage4,
      heading: 'Passionate Educators',
      description:
        'Our team comprises highly qualified and dedicated professionals who are passionate about early childhood education and the well-being of your child.'
    },
    {
      id: 5,
      imageadress: SectiontwoImage5,
      heading: 'Family Partnership',
      description:
        'We view parents as our partners in your child education and development. Our open communication policy fosters strong parent-provider relationships.'
    }
  ];

  return (
    <Grid container spacing={2} sx={{ px: { xs: 2, md: 0 }, py: { md: '65px', sx: 0 } }}>
      <Grid item xs={12} sm={12} md={12} lg={12} sx={{ py: { md: 3 }, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <Typography
          variant="subheading1"
          sx={{ textAlign: { xs: 'auto', md: 'center' }, fontSize: { lg: '30px', md: '28px', sm: '26px', xs: '25px' } }}
        >
          Why Parents Trust Us
        </Typography>
        <Typography variant="bodytext" sx={{ py: 2, textAlign: { xs: 'auto', md: 'center' } }}>
          We understand that choosing a childcare provider is one of the most important decisions parents can make. Rest assured that we
          take this responsibility seriously, and our commitment to your child's well-being and development is unwavering. Your trust in us
          is a testament to our dedication to providing exceptional childcare services.
        </Typography>
      </Grid>
      <Grid container justifyContent="center" sx={{ px: { md: 0, xs: 5 } }}>
        {data.map((item, id) => (
          <Grid
            item
            xs={12}
            sm={8}
            md={4}
            lg={3}
            // p={{ xs: '16px', md: 2 }}
            sx={{ background: '#FAFAFA', mr: { md: 3, xs: 0 }, my: 4,  width:{md:'412px', xs:'auto'} }}
            key={id}
          >
            <Stack sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: { xs: 'center', md: 'center' }, px:3, py:2 }}>
              {/* <img src={item.imageadress} style={{ height: '64px', width: '64px' }} alt={item.imageadress} /> */}
              <Image
      width={64}
      height={64} 
        src={item.imageadress}
        alt={item.imageadress}
        // fill
        // style={{ objectFit: 'contain' }}
      />
              <Typography
                variant="subheading3"
                sx={{ textAlign: 'center', pt: 2, fontSize: { lg: '24px', md: '22px', sm: '20px', xs: '20px' } }}
              >
                {item.heading}
              </Typography>
              <Typography component="p" variant="bodytext" sx={{ py: 2,  }}>
                {item.description}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} mb={5} sx={{ display: 'none', flexDirection: 'column' }}>
        <Typography variant="bodytext" sx={{ textAlign: { xs: 'auto', md: 'center' } }}>
          We invite you to explore our website, discover our partners, and find a ChildrenKARE partner center near you. Join the thousands
          of families who have entrusted us with their children's early education and care needs. Together, we can nurture the future
          leaders, thinkers, and dreamers of tomorrow.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default AboutUsSectionTwo;
