// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import sliderimg1 from 'assets/images/home/imgslide1.png';
// import sliderimg2 from 'assets/images/home/imgslide2.png';
// import sliderimg3 from 'assets/images/home/imgslide3.png';
// import { Box, Grid } from '@mui/material';

// const DayCareSecTwo = ({ detailData }: any) => {
//   const settings = {
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     swipe: false
//   };

//   const backendImages = [sliderimg1, sliderimg2, sliderimg3];
// // console.log(detailData, 'detailData')
//   return (
//       <Grid container justifyContent={'center'} >
//       <Grid item xs={12} md={6} >
//         <Slider {...settings}>
//           {detailData && detailData?.picture?.length > 0
//             ? detailData.picture.map((img: any, index: any) => (
//                 <Box
//                   key={index}
//                   sx={{
//                     '&.custom-slick-slide': {
//                       width: '95% !important'
//                     }
//                   }}
//                   className="custom-slick-slide"
//                 >
//                   <img src={`${process.env.REACT_APP_API_URL}${img.img_path}`} alt={`Slide ${index + 1}`} style={{ width: '100%',  maxWidth: '250px', maxHeight: '150px', borderRadius: '10px' }} />
//                 </Box>
//               ))
//             : backendImages.map((image: string, index: number) => (
//                 <Box
//                   key={index}
//                   sx={{
//                     '&.custom-slick-slide': {
//                       width: '95% !important'
//                     }
//                   }}
//                   className="custom-slick-slide"
//                 >
//                   <img src={image} alt={`Slide ${index + 1}`} style={{width: '100%',  maxWidth: '250px', maxHeight: '150px', borderRadius: '10px' }} />
//                 </Box>
//               ))}
//         </Slider>
//       </Grid>
//       </Grid>
//   );
// };

// export default DayCareSecTwo;


// 'use client';
// import React, { useState } from 'react';
// import { Box, Grid, Dialog, IconButton } from '@mui/material';
// import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
// import { useMediaQuery } from '@mui/material';
// import { useTheme } from '@mui/system';

// const sliderimg1 = '/assets/images/home/imgslide1.png';
// const sliderimg2 = '/assets/images/home/imgslide2.png';
// const sliderimg3 = '/assets/images/home/imgslide3.png';

// const ZOOM_LEVEL = 2;

// const DayCareSecTwo = ({ detailData }: any) => {
//   const backendImages = [sliderimg1, sliderimg2, sliderimg3];
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.up('sm'));

//   const images = detailData?.picture?.length
//     ? detailData.picture.map((img: any) => `${process.env.NEXT_PUBLIC_API_URL}${img.img_path}`)
//     : backendImages;

//   const [openDialog, setOpenDialog] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

//   const handleImageClick = (index: number) => {
//     setActiveIndex(index);
//     setOpenDialog(true);
//   };

//   const handleMouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
//     const bounds = e.currentTarget.getBoundingClientRect();
//     const x = ((e.clientX - bounds.left) / bounds.width) * 100;
//     const y = ((e.clientY - bounds.top) / bounds.height) * 100;
//     setHoverPos({ x, y });
//   };

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <>
//       <Grid container justifyContent="center" spacing={2}>
//         <Grid item xs={12}>
//           <Grid container spacing={2} justifyContent="center">
//             {images.map((img: string, index: number) => (
//               <Grid item key={index}>
//                 <Box
//                   onClick={() => handleImageClick(index)}
//                   sx={{
//                     width: 250,
//                     height: 150,
//                     position: 'relative',
//                     overflow: 'hidden',
//                     borderRadius: '10px',
//                     border: '1px solid #ccc',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src={img}
//                     alt={`Slide ${index + 1}`}
//                     sx={{
//                       width: '100%',
//                       height: '100%',
//                       objectFit: 'cover',
//                     }}
//                   />
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid>

//       {/* Dialog with zoom */}
//       <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="lg">
//         <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
//           <IconButton onClick={handlePrev}>
//             <ArrowBackIosNew />
//           </IconButton>

//           <Box
//             sx={{
//               display: 'flex',
//               gap: 2,
//               width: '80vw',
//               height: '60vh',
//               overflow: 'hidden',
//             }}
//           >
//             {/* Original Image with hover */}
//             <Box
//               sx={{
//                 flex: 1,
//                 overflow: 'hidden',
//                 position: 'relative',
//               }}
//             >
//               <img
//                 src={images[activeIndex]}
//                 onMouseMove={handleMouseMove}
//                 onMouseLeave={() => setHoverPos({ x: 0, y: 0 })}
//                 style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//                 alt="Zoomable"
//               />
//             </Box>

//             {/* Zoomed-in portion */}
//             {matches && (
//               <Box
//                 sx={{
//                   flex: 1,
//                   border: '1px solid #ccc',
//                   backgroundImage: `url(${images[activeIndex]})`,
//                   backgroundRepeat: 'no-repeat',
//                   backgroundSize: `${ZOOM_LEVEL * 100}%`,
//                   backgroundPosition: `${hoverPos.x}% ${hoverPos.y}%`,
//                   borderRadius: '10px',
//                   boxShadow: '0 0 10px rgba(0,0,0,0.2)',
//                 }}
//               />
//             )}
//           </Box>

//           <IconButton onClick={handleNext}>
//             <ArrowForwardIos />
//           </IconButton>
//         </Box>
//       </Dialog>
//     </>
//   );
// };

// export default DayCareSecTwo;

'use client';
import React, { useState } from 'react';
import { Box, Grid, Dialog, IconButton, Stack } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos, Close } from '@mui/icons-material';

const sliderimg1 = '/assets/images/home/imgslide1.png';
const sliderimg2 = '/assets/images/home/imgslide2.png';
const sliderimg3 = '/assets/images/home/imgslide3.png';

const DayCareSecTwo = ({ detailData }: any) => {
  const backendImages = [sliderimg1, sliderimg2, sliderimg3];

  const images = detailData?.picture?.length
    ? detailData.picture.map((img: any) => `${process.env.NEXT_APP_API_URL}${img.img_path}`)
    : backendImages;

  const [openDialog, setOpenDialog] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setOpenDialog(true);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <Grid container  spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent={{md:'flex-start',xs:'center'}}>
            {images.map((img: string, index: number) => (
              <Grid item key={index}>
                <Box
                  onClick={() => handleImageClick(index)}
                  sx={{
                    width: {xs: '100%', md: 225},
                    height:{ xs: '100%', md: 165},
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '10px',
                    border: '1px solid #ccc',
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    component="img"
                    src={img}
                    alt={`Slide ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Dialog for Image Viewer */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" >
        <Box sx={{ display: 'flex', alignItems: 'center', p: { md: 2, xs: 1 } }}>
          {/* Close Button */}
          <Stack mb={3} display={{ md: 'block', xs: 'none' }}>
            <IconButton
              onClick={() => setOpenDialog(false)}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                zIndex: 10,
                backgroundColor: 'white',
                border: '1px solid black',
                '&:hover': { backgroundColor: '#eee' },
              }}
            >
              <Close sx={{ fontWeight: '800' }} />
            </IconButton>
          </Stack>
          <IconButton onClick={handlePrev}>
            <ArrowBackIosNew />
          </IconButton>

          <Box
            component="img"
            src={images[activeIndex]}
            alt={`Zoomed ${activeIndex}`}
            sx={{
              width: { md: '500px', xs: 'auto' },
              height: { md: '500px', xs: 'auto' },
              maxHeight: '80vh',
              objectFit: 'contain',
              mx: 'auto',
            }}
          />

          <IconButton onClick={handleNext}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Dialog>
    </>
  );
};

export default DayCareSecTwo;


