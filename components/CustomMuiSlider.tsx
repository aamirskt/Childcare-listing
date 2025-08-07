'use client';

import { useRef } from 'react';
import Slider from 'react-slick';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import { styled, useTheme } from '@mui/material/styles';
import { dispatch } from 'store';
import { setIsParams } from 'store/reducers/zipcode';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SeoProps {
  topCities: { city: string; state: string }[];
  allStates: { state: string }[];
}

// Styled Link for Accordion Items
// const FooterLink = styled(MuiLink)(({ theme }) => ({
//   color: theme.palette.text.primary,
//   '&:hover, &:active': {
//     color: theme.palette.primary.main
//   },
// }));

const CustomMuiSlider = ({ topCities, allStates }: SeoProps) => {
  const sliderRef = useRef<Slider | null>(null);
  const theme = useTheme();

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 5 }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const renderAccordion = (
  title: string,
  items: any[],
  getUrl: (item: any) => string,
  getLabel: (item: any) => string
) => (
  <Accordion
    elevation={0}
    square
    disableGutters
    sx={{
      border: 'none',
      background: 'none',
      boxShadow: 'none',
      maxWidth: '180px',
      px: 1,
      mx: 3
    }}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      sx={{ flexDirection: 'row', p: 0, minHeight: 'auto' }}
    >
      <Typography
  noWrap
  sx={{
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
                fontSize: '14px',
    fontWeight: 'bold'
  }}
>
  {title}
</Typography>
    </AccordionSummary>
    <Box sx={{ maxHeight: 500, overflowY: 'auto', mb: 2 }}>
      {items.map((item, idx) => (
        <Link   style={{
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
  }} key={idx} href={getUrl(item)} passHref legacyBehavior>
           <AccordionDetails
              sx={{
                py: 1,
                cursor: 'pointer',
                p: 0,
                fontSize: '14px',
                fontWeight: 400
              }}
            >
              <Typography variant='p1' >{getLabel(item)}</Typography>
            </AccordionDetails>
        </Link>
      ))}
    </Box>
  </Accordion>
);

  return (
      <Box
        sx={{
          mt: { xs: 5},
          pt: 1,
          position: 'relative',
          width: { xs: '80%', md: '90%' },
          margin: 'auto',
          backgroundColor: 'rgba(192, 191, 191, 0.44)',
          borderRadius: 2,
          mb: 2

        }}
      >
        {/* Left Arrow */}
        <IconButton
  onClick={handlePrev}
  sx={{
    position: 'absolute',
    left: '-50px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.3)',
    zIndex: 1000,
    borderRadius: 2, // <-- Removes rounding
    '&:hover': { backgroundColor: '#f0f0f0' }
  }}
>
  <ArrowLeft2 size="24" color="#333" variant="Bold" />
</IconButton>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {renderAccordion(
            'All Daycares',
            topCities,
            (item) =>
              `/${item.state.toLowerCase()}/daycares-in-${item.city
                .replace(/\s+/g, '-')
                .toLowerCase()}`,
            (item) => `${item.city} Daycares`
          )}
          {renderAccordion(
            'All ChildCare',
            topCities,
            (item) =>
              `/childcare/${item.state.toLowerCase()}/${item.city
                .replace(/\s+/g, '-')
                .toLowerCase()}`,
            (item) => `${item.city} Childcare`
          )}
          {renderAccordion(
            'Preschools',
            topCities,
            (item) =>
              `/preschools/${item.state.toLowerCase()}/${item.city
                .replace(/\s+/g, '-')
                .toLowerCase()}`,
            (item) => `${item.city} Preschools`
          )}
          {renderAccordion(
            'Browse Care',
            allStates.sort((a, b) => a.state.localeCompare(b.state)),
            (item) => `/browse/${item.state.replace(/\s+/g, '-').toLowerCase()}`,
            (item) => item.state
          )}
          {renderAccordion(
            'All Infant Daycare',
            topCities,
            (item) =>
              `/infant-daycares/${item.state.toLowerCase()}/${item.city
                .replace(/\s+/g, '-')
                .toLowerCase()}`,
            (item) => `${item.city} Infant`
          )}
          {renderAccordion(
            'All Special Needs Daycare',
            topCities,
            (item) =>
              `/special-needs-daycares/${item.state.toLowerCase()}/${item.city
                .replace(/\s+/g, '-')
                .toLowerCase()}`,
            (item) => `${item.city} Special Needs`
          )}
          {renderAccordion(
            'All Toddler Daycare',
            topCities,
            (item) =>
              `/toddler-daycares/${item.state.toLowerCase()}/${item.city
                .replace(/\s+/g, '-')
                .toLowerCase()}`,
            (item) => `${item.city} Toddler`
          )}
        </Slider>

        {/* Right Arrow */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: '-50px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#fff',
            boxShadow: '0px 0px 10px rgba(0,0,0,0.3)',
    borderRadius: 2, // <-- Removes rounding
            zIndex: 1000,
            '&:hover': { backgroundColor: '#f0f0f0' }
          }}
        >
          <ArrowRight2 size="24" color="#333" variant="Bold" />
        </IconButton>
      </Box>
  );
};

export default CustomMuiSlider;