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


import { Box, Grid } from '@mui/material';
const sliderimg1 = '/assets/images/home/imgslide1.png';
const sliderimg2 = '/assets/images/home/imgslide2.png';
const sliderimg3 = '/assets/images/home/imgslide3.png';

const DayCareSecTwo = ({ detailData }: any) => {
  const backendImages = [sliderimg1, sliderimg2, sliderimg3];

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} >
        <Grid container spacing={2} justifyContent="center">
          {detailData && detailData?.picture?.length > 0
            ? detailData.picture.map((img: any, index: number) => (
                <Grid item key={index}>
                  <Box
                    component="img"
                    src={`${process.env.REACT_APP_API_URL}${img.img_path}`}
                    alt={`Slide ${index + 1}`}
                    sx={{
                      width: 250,
                      height: 150,
                      borderRadius: '10px',
                      objectFit: 'cover',
                      border: '1px solid #ccc',
                    }}
                  />
                </Grid>
              ))
            : backendImages.map((image: any, index: number) => (
                <Grid item key={index}>
                  <Box
                    component="img"
                    src={image}
                    alt={`Slide ${index + 1}`}
                    sx={{
                      width: 250,
                      height: 150,
                      borderRadius: '10px',
                      objectFit: 'cover',
                      border: '1px solid #ccc',
                    }}
                  />
                </Grid>
              ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DayCareSecTwo;

