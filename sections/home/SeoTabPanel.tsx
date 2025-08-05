'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, Grid, Stack } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      component="div"
      role="tabpanel"
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      sx={{
        display: value === index ? 'block' : 'none',
        width: '100%',
        p: 3,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

export default function SeoTabsPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid sx={{ background: '#fff', py: 8, height: matches ? '100%' : '400px', overflowY: matches ? 'hidden' : 'scroll' }}>
      <Container>
        <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mb: { md: 5, xs: 2 } }}>
          <Typography variant="subheading1" sx={{ fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' } }}>
            Useful Information
          </Typography>
        </Stack>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            height: '100%',
            '& .css-19kzrtu': {
              paddingTop: { md: '14px', xs: '16px' }
            }
            , '& .css-7gc1he': { p: '14px 24px 24px 24px'}
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: 'divider',
              minWidth: { md: '250px', xs: 'auto' },
              '& .MuiTab-textColorPrimary': {
                alignItems: 'flex-start'
              },
              '& .css-19kzrtu': {
                paddingTop: '10px'
              }
            }}
          >
            <Tab label="Looking for Best Daycare" {...a11yProps(0)} />
            <Tab label="ChildrenKARE Can Help Parents" {...a11yProps(1)} />
            <Tab label="Explore Best Daycare Near Me" {...a11yProps(2)} />
            <Tab label="Find Daycare Near Me" {...a11yProps(3)} />
            <Tab label="High Quality Daycare Services" {...a11yProps(4)} />
            <Tab label="Why ChildrenKARE?" {...a11yProps(5)} />
          </Tabs>

          <TabPanel value={value} index={0}>
            <Stack sx={{ paddingTop: '0px' }}>
              <Typography variant="bodytext1">Are You Looking for the Best Daycares In USA</Typography>
              <Typography variant="bodytext" sx={{ mt: 2 }}>
                Are you a parent, searching for the
                <a href="/">
                  <strong> Best Daycares In USA? </strong>
                </a>
                This is where ChildrenKARE proves its worth as a trustworthy resource which can find capable daycares to connect with
                parents. No one wants to take any wrong chances when it comes to choosing the right day-cares for their kids. The reason why
                we have created our platform is to make this process of choosing day-cares easy and simple so parents can easily navigate
                the best day-care choices for their little ones. ChildrenKARE sticks out by providing the most authentic, licensed childcare
                providers throughout the United States. We provide the most accurate and up-to-date information about each daycare center to
                help parents choose the best daycares for their kids.
              </Typography>
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Stack>
              <Typography variant="bodytext1">How ChildrenKARE Helps Parents to Find Top Daycares In USA</Typography>
              <Typography variant="bodytext" sx={{ mt: 2 }}>
                ChildrenKARE is a dedicated companion that helps you Find
                <a href="/page/top-daycares-usa">
                  <strong> Top Daycares In USA </strong>
                </a>
                . We understand that every child is different from one another, and parents have different needs when it comes to choosing from
                daycare options. With the help of our database, parents can easily navigate and filter daycare options based on multiple
                criteria which includes location, services offered and user reviews. Parents can take advantage of our large network of
                childcare providers which in turn can help them make good and well-informed decisions regarding their beloved little ones.
                We know how crucial it is for parents to find the right options for caretaking; this is the reason why we focus on
                connections and keep the best standards of safety, quality care, and professionalism.
              </Typography>
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Stack>
              <Typography variant="bodytext1">Explore Best Daycares Near Me</Typography>
              <Typography variant="bodytext" sx={{ mt: 2 }}>
                ChildrenKARE made it easy for parents to find
                <a href="/page/daycares-near-me">
                  <strong> Best Daycares Near Me </strong>
                </a>
                as we assist parents in finding good quality daycares near their location. Our convenient and user-friendly platform allows
                the user to locate high-class daycare centers according to their personal preferences. Therefore, our platform does not just
                show choices which are highly rated but also those that are easily located according to the user needs.
              </Typography>
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <Stack>
              <Typography variant="bodytext1">Find Best Daycare Centers in My Area</Typography>
              <Typography variant="bodytext" sx={{ mt: 2 }}>
                Our huge database ensures that there are
                <a href="/page/daycare-centers-near-me">
                  <strong> Best Daycare Centers in My Area</strong>
                </a>
                . Furthermore, ChildrenKARE not only provides a listing of daycare centres; but also ensures that the information of each
                centre is authentic and up to date. From all aspects of childcare, our platform equips you with the information needed to
                make an informed selection. We believe that locating the right daycare needs to be an easy job, and ChildrenKARE is devoted
                to increasing ease and comfort for parents in the USA who are looking for quality daycares.
              </Typography>
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={4}>
            <Stack>
              <Typography variant="bodytext1">Do Your Children Need High Quality Daycare Services</Typography>
              <Typography variant="bodytext" sx={{ mt: 2 }}>
                Every child is benefitted from splendid daycare service, and ChildrenKARE is here to ensure that parents can access <a href="/page/high-quality-daycare-services">
                  <strong>High Quality Daycare Services</strong>
                </a> in their area. We apprehend the importance of early youth improvement and the effect that a nurturing daycare environment
                may have on a baby development. Our platform is devoted to connecting parents with daycare centres that prioritise
                excellence in care, training, and protection. Either you're looking for educational enrichment, social improvement, or a
                mixture of both, ChildrenKARE is your trusted companion in locating daycare services that align with your expectations.
              </Typography>
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={5}>
            <Stack>
              <Typography variant="bodytext1">Why Choose ChildrenKARE</Typography>
              <Typography variant="bodytext" sx={{ mt: 2 }}>
                Why do parents pick
                <a href="/">
                  <strong> ChildrenKARE</strong>
                </a> over other daycare search platforms? The answer lies in our determination to excellence and transparency. Because of our
                extraordinary network of childcare providers, we make sure that parents get access to the complete and authentic data. Our
                platform isn’t just about connecting parents with daycare centres; it is also about empowering parents to select the best
                options for their children. We offer insights into daycare facilities, health & safety measures, rating & reviews, and much
                more. ChildrenKARE isn’t simply a daycare providers network; it’s an associate to discover the best daycare options for your
                child, making sure a foundation of care and assisting in a healthy development.
              </Typography>
            </Stack>
          </TabPanel>
        </Box>
      </Container>
    </Grid>
  );
}