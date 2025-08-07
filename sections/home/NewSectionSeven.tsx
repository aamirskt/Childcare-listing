
'use client';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
// import { useLocation } from 'react-router';

function NewSectionSeven() {
  const data = [
    {
      question: 'How does your childcare search platform work?',
      answer:
        'Our platform connects parents with a comprehensive network of childcare providers, allowing them to search, compare, and secure the best childcare options based on their needs. We also help negotiate rates to make childcare more affordable.'
    },
    {
      question: 'Do you charge parents for using this service?',
      answer:
        'No, our service is free for parents. We work directly with childcare providers to bring you the best options at the most affordable prices.'
    },
    {
      question: 'How do you negotiate childcare costs?',
      answer:
        'Through our marketplace model, providers compete to offer the best rates, and we use our industry expertise to negotiate lower prices on behalf of families.'
    },
    {
      question: 'How do I know if a childcare provider is trustworthy?',
      answer:
        'All providers in our network are vetted, licensed, and reviewed by other parents. Our platform includes ratings, reviews, and background details to help you make an informed choice.'
    },
    {
      question: 'What types of childcare providers are included?',
      answer: 'We offer access to daycare centers, preschools, and flexible childcare options, including part-time and full-time care.'
    },
    {
      question: 'Can I filter providers based on my specific needs?',
      answer:
        'Yes! Our Smart Search feature allows you to filter by location, budget, availability, hours, and special services like bilingual care or special needs accommodations.'
    },
    {
      question: 'How do I get started?',
      answer:
        'Simply enter your childcare needs on our platform, and we’ll provide a list of the best providers that match your criteria. You can then compare options and connect with providers directly.'
    },
    {
      question: 'Do you help with last-minute or emergency childcare needs?',
      answer:
        'Yes! We offer real-time availability updates using our managed services so parents can find and secure childcare quickly, even for last-minute needs.'
    },
    {
      question: 'Can I schedule a tour with a childcare provider through your platform?',
      answer: 'Yes! Many providers offer virtual or in-person tours, which can be scheduled through our platform'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach out to our support team through email, phone, or live chat for assistance with your childcare search.'
    }
  ];
  const faqSectionRef = useRef<HTMLDivElement | null>(null);
  // const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      if (
        typeof window !== 'undefined' &&
        faqSectionRef.current &&
        window.location.hash === '#faqs'
      ) {
        faqSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000);
  }, []);

  return (
    <>
      <Grid
        container
        sx={{ background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        id="faqs"
        ref={faqSectionRef}
      >
        <Grid item xs={12} sm={12} md={12} lg={7} sx={{ px: { lg: 8, xs: 0 }, py: '100px' }}>
          <Stack>
            <Typography
              variant="subheading1"
              sx={{
                mb: { md: 10, xs: 3 },
                fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' },
                lineHeight: '48px',
                textAlign: 'center'
              }}
            >
              Frequently Asked Questions
            </Typography>
          </Stack>
          <Container sx={{ px: 0 }}>
            {data.map((item, index) => (
              <Accordion key={index} sx={{ border: 'none', background: 'none' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index + 1}-content`}
                  id={`panel${index + 1}-header`}
                  sx={{
                    flexDirection: 'row',
                    borderBottom: '1px solid #DADBDD',
                    background: 'none',
                    lineHeight: '28.08px',
                    padding: '10px'
                  }}
                >
                  <Typography variant="bodytext1" sx={{ fontWeight: 400 }}>
                    {' '}
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="bodytext" sx={{ fontWeight: 400 }}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default NewSectionSeven;
