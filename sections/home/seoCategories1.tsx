import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Box, IconButton, Typography, Divider } from "@mui/material";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react"; // Import Iconsax icons

import { setIsParams } from 'store/reducers/zipcode';
import { dispatch } from 'store';
// import { useNavigate } from 'react-router';
import { Accordion } from '@mui/material';
import { AccordionSummary } from '@mui/material';
// import axios from 'utils/axios';
// import { Link } from '@mui/material';
import { AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';
import { Container } from "@mui/material";

// link - custom style
// const a = styled(Link)(({ theme }) => ({
//   color: theme.palette.text.primary,
//   '&:hover, &:active': {
//     color: theme.palette.primary.main
//   }
// }));
interface seoProps {
  topCities: any[];
  topStates: any[];
}

export default function CustomMuiSlider({topCities, topStates}: seoProps ) {
  const sliderRef = useRef<Slider | null>(null);
  const theme = useTheme();
  // Function to go to the previous slide
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Function to go to the next slide
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          rows: 1
          // Adjust marginLeft based on the lg breakpoint
          // marginLeft: '-200px'
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 1
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1
        }
      }
    ]
  };

  return (
    <Box
      sx={{ py: 2 }}> 
      {/* <Stack sx={{ mt: 5, backgroundColor: 'rgba(192, 191, 191, 0.44)', overflowX: 'hidden', borderRadius: 1 }}> */}
      {/* Left Arrow Button */}
        <Container >
           <Box   sx={{
        mt: { xs: 5, lg: 0 },
        pt: 1,
        position: "relative", width: { xs: '80%', md: "90%" }, margin: "auto", backgroundColor: 'rgba(192, 191, 191, 0.44)', borderRadius: 1
      }}> 
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: "-50px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
          zIndex: 1000,
          "&:hover": { backgroundColor: "#f0f0f0" },
        }}
      >
        <ArrowLeft2 size="24" color="#333" variant="Bold" />
      </IconButton>

      {/* Slider Component */}
      <Slider  ref={sliderRef} {...settings}>
        <Accordion sx={{ border: 'none', background: 'none', minWidth: '180px', maxWidth: '180px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-content`}
            id={`panel-header`}
            sx={{
              flexDirection: 'row',
              background: 'none',
              p: 0, // Remove padding
              minHeight: 'auto', // Prevent extra spacing
            }}
          >
            <Typography variant="p" >
              All Daycares
            </Typography>
          </AccordionSummary>
          <Box
            sx={{
              maxHeight: 500, // Limit height
              overflowY: 'auto', // Enable scrolling
              mb: 2
            }}
          >
            <AccordionDetails sx={{
                border: 'none',
                cursor: 'pointer',
                p: '0px 8px',
              fontSize: '14px'
              }}>
            {topCities.length != 0 && topCities.map((item: any, ind: any) => (<a
              className="seo-link"
              key={ind}
               href={`/${item.state.toLowerCase()}/daycares-in-${item.city.replace(/\s+/g, '-').toLowerCase()}`}
              target="_blank"
              >
                  {item.city} Daycares
              </a>))}
              </AccordionDetails>
          </Box>
        </Accordion>


        <Accordion sx={{ border: 'none', background: 'none', maxWidth: '180px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-content`}
            id={`panel-header`}
            sx={{
              flexDirection: 'row',
              background: 'none',
              p: 0, // Remove padding
              minHeight: 'auto', // Prevent extra spacing
            }}
          >
            <Typography variant="p" >
              All ChildCare
            </Typography>
          </AccordionSummary>
          <Box
            sx={{
              maxHeight: 500, // Limit height
              overflowY: 'auto', // Enable scrolling
              mb: 2
            }}
          >
             <AccordionDetails sx={{
                p: '0px 8px', // Remove padding
                border: 'none',
                cursor: 'pointer',
              fontSize: '14px'
              }}>
            {topCities.length != 0 && topCities.map((item: any, ind: any) => (<a
              className="seo-link"
              key={ind}
              href={`/childcare/${item.state.toLowerCase()}/${item.city.replace(/\s+/g, '-').toLowerCase()}`}
              target="_blank"
              > 
                  {item.city} Childcare
             </a>))}
              </AccordionDetails>
          </Box>
        </Accordion>





        <Accordion sx={{ border: 'none', background: 'none', maxWidth: '180px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-content`}
            id={`panel-header`}
            sx={{
              flexDirection: 'row',
              background: 'none',
              p: 0, // Remove padding
              minHeight: 'auto', // Prevent extra spacing
            }}
          >
            <Typography variant="p" >
              Preschools
            </Typography>
          </AccordionSummary>
          <Box
            sx={{
              maxHeight: 500, // Limit height
              overflowY: 'auto', // Enable scrolling
              mb: 2
            }}
          >
             <AccordionDetails sx={{
                p: '0px 8px', // Remove padding
                border: 'none',
                cursor: 'pointer',
              fontSize: '14px'
              }}>
            {topCities.length != 0 && topCities.map((item: any, ind: any) => (<a
              className="seo-link"
              key={ind}
               href={`/preschools/${item.state.toLowerCase()}/${item.city.replace(/\s+/g, '-').toLowerCase()}`}
              target="_blank">
                  {item.city} Preschools</a>))}
              </AccordionDetails>
          </Box>
        </Accordion>


        <Accordion sx={{ border: 'none', background: 'none', maxWidth: '180px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-content`}
            id={`panel-header`}
            sx={{
              flexDirection: 'row',
              background: 'none',
              p: 0, // Remove padding
              minHeight: 'auto', // Prevent extra spacing
            }}
          >
            <Typography variant="p" >
              Browse Care
            </Typography>
          </AccordionSummary>
          <Box
            sx={{
              maxHeight: 500, // Limit height
              overflowY: 'auto', // Enable scrolling
              mb: 2
            }}
          >
            <AccordionDetails sx={{
                p: '0px 8px', // Remove padding
                border: 'none',
                cursor: 'pointer',
              fontSize: '14px'
              }}>
                 
            {topStates.length != 0 && topStates.sort((a: any, b: any) => a.state.localeCompare(b.state)).map((item: any, ind: any) => (<a
              className="seo-link"
              key={ind}
               href={`/browse/${item.state.replace(/\s+/g, '-').toLowerCase()}`}
              target="_blank"> 
                  {item.state}
              </a>))}
              </AccordionDetails>
          </Box>
        </Accordion>


        <Accordion sx={{ border: 'none', background: 'none', maxWidth: '180px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-content`}
            id={`panel-header`}
            sx={{
              flexDirection: 'row',
              background: 'none',
              p: 0, // Remove padding
              minHeight: 'auto', // Prevent extra spacing
            }}
          >
            <Typography variant="p" >
              All Infant Daycare
            </Typography>
          </AccordionSummary>
          <Box
            sx={{
              maxHeight: 500, // Limit height
              overflowY: 'auto', // Enable scrolling
              mb: 2
            }}
          >
            <AccordionDetails sx={{
                border: 'none',
                p: '0px 8px', // Remove padding

                cursor: 'pointer',
              fontSize: '14px'
              }}>
            {topCities.length != 0 && topCities.map((item: any, ind: any) => (<a
              className="seo-link"
              key={ind}
               href={`/infant-daycares/${item.state.toLowerCase()}/${item.city.replace(/\s+/g, '-').toLowerCase()}`}
              target="_blank">  {item.city} Infant
                  </a>))}
              </AccordionDetails>
          </Box>
        </Accordion>


        <Accordion sx={{ border: 'none', background: 'none', minWidth: '220px', maxWidth: '220px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-content`}
            id={`panel-header`}
            sx={{
              flexDirection: 'row',
              background: 'none',
              p: 0, // Remove padding
              minHeight: 'auto', // Prevent extra spacing
            }}
          >
            <Typography variant="p" >
              All Special Needs Daycare
            </Typography>
          </AccordionSummary>
          <Box
            sx={{
              maxHeight: 500, // Limit height
              overflowY: 'auto', // Enable scrolling
              mb: 2
            }}
          >
            <AccordionDetails sx={{
                border: 'none',
                p: '0px 8px', // Remove padding

                cursor: 'pointer',
              fontSize: '14px'
              }}>
            {topCities.length != 0 && topCities.map((item: any, ind: any) => (<a
              className="seo-link"
key={ind}
 href={`/special-needs-daycares/${item.state.toLowerCase()}/${item.city.replace(/\s+/g, '-').toLowerCase()}`}
              target="_blank"> 
                  {item.city} Special Needs</a>))}
              </AccordionDetails>
          </Box>
        </Accordion>


        <Accordion sx={{ border: 'none', background: 'none', maxWidth: '180px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-content`}
            id={`panel-header`}
            sx={{
              flexDirection: 'row',
              background: 'none',
              p: 0, // Remove padding
              minHeight: 'auto', // Prevent extra spacing
            }}
          >
            <Typography variant="p" >
              All Toddler Daycare
            </Typography>
          </AccordionSummary>
          <Box
            sx={{
              maxHeight: 500, // Limit height
              overflowY: 'auto', // Enable scrolling
              mb: 2
            }}
          >
             <AccordionDetails sx={{
                p: '0px 8px', // Remove padding

                border: 'none',
                cursor: 'pointer',
              fontSize: '14px'
              }}>
            {topCities.length != 0 && topCities.map((item: any, ind: any) => (<a
              className="seo-link"
key={ind}
 href={`/toddler-daycares/${item.state.toLowerCase()}/${item.city.replace(/\s+/g, '-').toLowerCase()}`}
              target="_blank">
                  {item.city} Toddler</a>))}
              </AccordionDetails>
          </Box>
        </Accordion>
      </Slider>

      {/* Right Arrow Button */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: "-50px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
          zIndex: 1000,
          "&:hover": { backgroundColor: "#f0f0f0" },
        }}
      >
        <ArrowRight2 size="24" color="#333" variant="Bold" />
      </IconButton>
    </Box>
          <Divider sx={{ mt: 2 }} />

    </Container>
    </Box>
  );
}
