'use client';

// import { useEffect, useState } from 'react';
import { Stack, Typography, Grid, Container } from '@mui/material';
// import { dispatch } from 'store';
// import { openSnackbar } from 'store/reducers/snackbar';
// import axios from 'utils/axios';
import { useRouter } from 'next/navigation';

import { Button } from '@mui/material';
const blogdetailpattern = '/assets/images/home/blogdetailpattern.png';
// import NewSeoSection from 'sections/home/NewSeoSection';
// import { getListOfTagsTextFromString } from 'utils/globalFuntions';
// import { useParams } from 'react-router';
// import MetaTags from 'react-meta-tags';

interface seoProps {
  blog: any;
}
function BlogDetailPage({blog}: seoProps) {
  // let userId  = useParams();
  // const navigate = useNavigate();
  const router = useRouter();

  // const [blogdetail, setblogdetail] = useState<any>({});
  // const [blogtitle, setblogtitle] = useState<any>({});
  // console.log(blogtitle);

  // useEffect(() => {
  //   // console.log(window.location.pathname.split('/'), 'iiiiiiiihhhh');

  //   BlogbyId(window.location.pathname.split('/')[2]);
  // }, []);
  // const BlogbyId = (id: any) => {
  //   // setblogtitle('https://childrenkare.com/blog/get_blog_content/' + id);
  //   axios
  //     .get('api/blog/get_blog_content/' + id)
  //     .then((response) => {
  //       // console.log(response.data.data);
  //       if (response.data.status === 'fail') {
  //         dispatch(
  //           openSnackbar({
  //             open: true,
  //             message: 'Something Went Wrong',
  //             variant: 'alert',
  //             alert: {
  //               color: 'error'
  //             },
  //             close: false
  //           })
  //         );
  //       }
  //       if (response.data.status === 'pass') {
  //         setblogdetail(response?.data?.data);
  //         // console.log(blogdetail);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log('erro uploading', error.message);
  //     });
  // };
  function wrapContentInDiv(html: any) {
    if(html){
    return html.replace(
      /(<h[2-4]>.*?<\/h[2-4]>)([\s\S]*?)(?=<h[2-4]>|$)/g,
      (match: any, heading: any, content: any) => {
        let fontSize =
          heading?.startsWith("<h2>")
            ? "18px"
            : heading?.startsWith("<h3>")
              ? "16px"
              : "inherit";

        return heading?.replace(
          /<h(\d)>/,
          `<h$1 style='font-size: ${fontSize}; font-weight: bold;'>`
        ) + `<div style='font-size: 14px; color: #1D2630; padding: 0 0 18px 0;'>${content}</div>`;
      }
    );
  }
  }
  return (
    <Stack sx={{}}>
 
      <Stack
        sx={{
          backgroundImage: `url(${process.env.NEXT_APP_API_URL + blog?.blog_img})`,

          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          // backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          minHeight: 600,
          position: 'relative',
          // borderRadius: 4,
          // p: 5,
          // minHeight:window.innerHeight,
          // minWidth:window.innerWidth,
          mt:7
        }}
      >
        <Stack sx={{ backgroundColor: '#00000080', minHeight: 600 }}>
          <Stack
            sx={{
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              // alignItems: { xs: 'auto', md: 'center' },
              px: { xs: 5, md: 10 },
              // py: 8,
              // pt: 18
              position: 'absolute',
              bottom: '100px'
            }}
          >
            <Typography
              variant="mainheading"
              sx={{
                textAlign: 'left',
                fontSize: { lg: '40px', md: '36px', xs: '30px' },
                color: '#fff',
                width: { lg: '60%' }
              }}
            >
              {blog?.title}
            </Typography>
            <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
              <Typography variant="bodytext" sx={{ textAlign: 'left', pt: 2, color: '#fff' }}>
                by {blog?.author_name}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Container>
        <Stack
          sx={{
            px: { xs: 5, md: 0 },
            py: 2
          }}
        >
           {blog?.content && <div dangerouslySetInnerHTML={{ __html: wrapContentInDiv(blog?.content) }} />}
         
          <Grid
            container
            sx={{
              backgroundImage: `url(${blogdetailpattern})`,

              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              minHeight: 200,
              borderRadius: 2,
              boxShadow: '0 4px 8px rgba(33, 158, 188, 0.1)',
              marginBottom: '100px'
            }}
          >
            <Grid xs={12} sm={12} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography
                variant="subheading3"
                sx={{ color: '#fff', textAlign: 'center', fontSize: { lg: '28px', md: '26px', sm: '24px', xs: '22px' } }}
              >
                Connecting Families to Perfect Daycares
              </Typography>
            </Grid>
            <Grid xs={12} sm={12} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button
                size="small"
                onClick={() => {
                  router.push('/');
                }}
                variant={'contained'}
                sx={{
                  fontSize: '16px',
                  fontWeight: 500,
                  minWidth: 114,
                  backgroundColor: '#000',
                  '&:hover': {
                    backgroundColor: '#000'
                  }
                }}
              >
                Find Best Daycares
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Container>
      <Grid container sx={{ background: '#fff' }}>
        <Grid xs={12} sm={12} md={12} lg={12} sx={{ px: 0 }} >
          {/* <NewSeoSection /> */}
        </Grid>
      </Grid>
    </Stack>
  );
}

export default BlogDetailPage;
