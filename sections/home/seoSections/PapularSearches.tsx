// import { Box } from '@mui/material';
// import { Grid, Stack, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const PapularSearches = ({ topsearches }: any) => {
//   const navigate = useNavigate();

//   const handleNavigation = (path: string) => {
//     navigate(`/page${path}`);
//   };

//   return (
//     <Grid sx={{ display: 'flex', mt: { md: 0, sm: '20px', xs: '20px' } }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column', px: 5 }}>
//         <Stack>
//           <Typography
//             sx={{
//               cursor: 'pointer',
//               fontWeight: 'bold',
//               whiteSpace: 'nowrap',
//               color: '#000',
//               fontSize: { xs: '12px', md: '16px' }
//             }}
//           >
//             Popular Searches
//           </Typography>
//         </Stack>
//         <Stack sx={{ display: 'flex', flexDirection: { lg: 'column', md: 'row', sm: 'row', xs: 'row' }, flexWrap: 'wrap', mt: 2 }}>
//           {topsearches.map((state: any, index: number) => (
//             <Typography key={index}>
//               <Typography
//                 onClick={() => handleNavigation(state[1])}
//                 color="primary"
//                 sx={{
//                   mr: '10px',
//                   mt: 1,
//                   cursor: 'pointer',
//                   color: '#000',
//                   fontSize: '12px',
//                   fontWeight: '400',
//                   textDecoration: 'underline',
//                   fontFamily: 'inter'
//                 }}
//               >
//                 {state[0].replace('in Affordable Prices',' ')}
//               </Typography>
//             </Typography>
//           ))}
//         </Stack>
//       </Box>
//     </Grid>
//   );
// };

// export default PapularSearches;

import {  Container } from '@mui/material';
import { Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
// import { ArrowCircleDown, ArrowCircleUp } from 'iconsax-react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';

const PapularSearches = ({ topsearches }: any) => {
  // const [showAll, setShowAll] = useState(false);
  // const itemsToShow = showAll ? topsearches.length : 5;

  // const navigate = useNavigate();
  const router = useRouter();

  // const handleNavigation = (path: string) => {
  //   router.push(`/page${path}`);
  // };

  return (
    <Grid
      container
      sx={{ display: 'flex', mt: { md: 0, sm: '20px', xs: '20px' }, }}
    >
      
      <Container  sx={{  mx: {lg:23, xs:0},}}>
        <Grid container sx={{ background: 'rgba(248, 250, 252, 0.56)', borderRadius: '20px', py:{md:5,xs:2}}}>
          <Grid item xs={12}>
            <Stack>
              <Typography
                sx={{
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  color: '#000',
                  fontSize: { xs: '12px', md: '16px' },
                  textAlign: {lg:'center', xs:'left'},
                  mb:2,
                  px:2
                }}
              >
                Popular Searches
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={12}>
          <Grid container spacing={1} sx={{ display: 'flex', flexDirection: 'row', px: {lg:6 ,xs:2} }}>
              {topsearches && topsearches.map((state: any, index: any) => (
                <Grid item key={index} xs={12} sm={6}>
                  <Link
                  href={`/page${state[1]}`}
                  style={{
                    color: '#000',
                    fontSize: '12px',
                    fontWeight: '400',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
<Typography
                    // onClick={() => handleNavigation(state[1])}
                    color="primary"
                    sx={{
                      mt: 1,
                      cursor: 'pointer',
                      color: '#000',
                      fontSize: '12px',
                      fontWeight: '400',
                      textDecoration: 'underline',
                    }}  
                  >
                    {`${state[0].replace('in Affordable Prices', ' ')}`}
                  </Typography>
                </Link>
                  
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
    
      </Container>
    </Grid>
  );
};

export default PapularSearches;
