import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import axios from 'utils/axios';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// import useGetBlogByCategory from 'hooks/useBlogCategory';
import { useRouter } from 'next/navigation';

// const category = [
//   {
//     categoryName: "Parenting Tips"
//   },
//   {
//     categoryName: "Family Activities"
//   },
//   {
//     categoryName: "Health & Wellness"
//   },
//   {
//     categoryName: "Finding a Program"
//   },
//   {
//     categoryName: "Early Learning"
//   },
//   {
//     categoryName: "Misscellaneous"
//   }
// ]

// console.log("🚀 ~ file: blog_category.tsx:31 ~ category:", category)
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

function Category() {
    const router = useRouter();

  const theme = useTheme();
  const [allblogs, setAllBlogs] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);

  const [open, setOpen] = useState<boolean>(false);
  console.log('🚀 ~ file: blog_category.tsx:56 ~ Category ~ open:', open);
  const [blogdetail, setblogdetail] = useState<any>({});
  // const [trigger, updateTrigger] = useState<any>(false);
  // const [selectedCategory, setSelectedCategory] = useState<any>({});
  console.log('🚀 ~ file: blog_category.tsx:65 ~ Category ~ allblogs:bbbbbbbbbbbbbbbbbbbbbbb', allblogs);

  const BlogbyId = (id: any) => {
    axios
      .get('api/blog/get_blog_content/' + id)
      .then((response) => {
        console.log(response.data.data);
        if (response.data.status === 'fail') {
          dispatch(
            openSnackbar({
              open: true,
              message: 'Something Went Wrong',
              variant: 'alert',
              alert: {
                color: 'error'
              },
              close: false
            })
          );
        }
        if (response.data.status === 'pass') {
          setblogdetail(response?.data?.data);
          console.log(blogdetail);
        }
      })
      .catch((error) => {
        console.log('erro uploading', error.message);
      });
  };
  const handleOpen = (id: any) => {
    setOpen(true);
    BlogbyId(id);
  };
  // const { loading, error, blogs, count } = useGetBlogByCategory(selectedCategory, trigger);
  // console.log("🚀 ~ file: blog_category.tsx:55 ~ Category ~ loading:", loading,error,blogs,count);
  const BlogCategory = () => {
    axios
      .get('api/blogCategory/get_blog_category')
      .then((response) => {
        console.log(response.data.data);
        if (response.data.status === 'fail') {
          dispatch(
            openSnackbar({
              open: true,
              message: 'Something Went Wrong',
              variant: 'alert',
              alert: {
                color: 'error'
              },
              close: false
            })
          );
        }
        if (response.data.status === 'pass') {
          setCategories(response.data.data);
        }
      })
      .catch((error) => {
        // console.log('erro uploading', jobListDatabyid);
      });
  };
  const mddown = useMediaQuery(theme.breakpoints.down('sm'));
  console.log('🚀 ~ file: blog_category.tsx:63 ~ Category ~ mddown:', mddown);
  const Bloglist = () => {
    axios
      .get('api/blog/get_blogs')
      .then((response) => {
        console.log(response.data.data);
        if (response.data.status == 'fail') {
          dispatch(
            openSnackbar({
              open: true,
              message: 'Something Went Wrong',
              variant: 'alert',
              alert: {
                color: 'error'
              },
              close: false
            })
          );
        }
        if (response.data.status === 'pass') {
          setAllBlogs(response.data.data);
        }
      })
      .catch((error) => {
        // console.log('erro uploading', jobListDatabyid);
      });
  };

  useEffect(() => {
    Bloglist();
    BlogCategory();
  }, []);
  const [value, setValue] = React.useState(0);
  const BloglistByCtegory = (id: any) => {
    debugger;
    axios
      .get(`api/blog/get_blog_by_categories/${id}`)
      .then((response) => {
        console.log(response.data.data);
        if (response.data.status == 'fail') {
          dispatch(
            openSnackbar({
              open: true,
              message: 'Something Went Wrong',
              variant: 'alert',
              alert: {
                color: 'error'
              },
              close: false
            })
          );
        }
        if (response.data.status === 'pass') {
          setAllBlogs(response.data.data);
        }
      })
      .catch((error) => {
        // console.log('erro uploading', jobListDatabyid);
      });
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log('hhhh1');

    // setSelectedCategory(newValue);
    setValue(newValue);
    // updateTrigger(!trigger);
  };
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    console.log(
      '🚀 ~ file: blog_category.tsx:192 ~ CustomTabPanel ~ children:ccccccccccccccccccccccccccc',
      children,
      allblogs,
      value,
      index
    );

    return (
      <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
        {value === index && (
          <Grid container justifyContent="center" spacing={2}>
            {allblogs.map((item: any, blogIndex: number) => (
              <Grid container direction="column" alignItems="center" item key={blogIndex} xs={12} sm={6} md={4} lg={4} mt={6}>
                <Card
                  sx={{ maxWidth: 450, minHeight: 380, cursor: 'pointer' }}
                  onClick={() => {
                    router.push('/blogsDetail/' + item?.id + '/' + item?.slug);
                    handleOpen(item?.id);
                  }}
                >
                  <CardMedia
                    sx={{ height: 140, fontSize: '16px', color: '#000', fontWeight: 'bold' }}
                    image={process.env.NEXT_APP_API_URL + item?.blog_img}
                    title={item?.title}
                  />
                  <CardContent>
                    <Typography gutterBottom sx={{ fontSize: '16px', color: '#000', fontWeight: '600' }} component="div">
                      {item?.title}
                    </Typography>
                    <Typography variant="bodytext" mt={4}>
                      {item?.short_description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    );
  }

  return (
    <>
      <Box sx={{ width: '100%', paddingBottom: '100px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
            <Tab onClick={Bloglist} label="All" {...a11yProps(0)} />
            {categories.slice(0, 6).map((item: any, index: any) => (
              <Tab
                onClick={() => {
                  BloglistByCtegory(item?.id);
                }}
                label={item.name}
                {...a11yProps(index)}
                key={index}
              />
            ))}
          </Tabs>
        </Box>
        <Container>
          {categories.map((item: any, index: any) => (
            <CustomTabPanel value={value} index={index} key={index}>
              {item.name}
            </CustomTabPanel>
          ))}
        </Container>
      </Box>
    </>
  );
}

export default Category;
