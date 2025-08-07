"use client";
import {
  TextField, Typography, Box, Button, Select, Grid, InputLabel, FormControl, Input, Modal,
  // Switch
} from '@mui/material';
import { MenuItem } from '@mui/material';
import { Stack } from '@mui/material';
import {
  useEffect, useState
  , useMemo
} from 'react';
import axios from 'utils/axios';
import { dispatch } from 'store';
import type { Editor } from '@ckeditor/ckeditor5-core';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
// import '@ckeditor/ckeditor5-ckfinder/theme/css/ckfinder.css';
// import { DocumentEditor } from './tinyEditor';
import { openSnackbar } from 'store/reducers/snackbar';
import ReactTable from 'components/tables/react-table/simpleTable';
// import { useNavigate } from 'react-router';
import AdminNav from 'components/AdminNav';
const xcicle = '/assets/images/home/x-circle.png';
// import { toggleBtnStyles } from 'utils/globelStyles';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LoadingComp from 'components/loaderComp';
// import CustomSearchFilter from 'components/customSearchFilter';

const FormComp = ({ open, handleClose, style, title, settitle, setFullNameValidation, fullNameValidation, shortdescription, setShortDescription, setEmailValidation, emailValidation, metaTitle, setMetaTitle, setNumberValidation, numberValidation, openEdit, role, handleMenuItemSelect, autherList, roleValidation, categoryName, handleCategorySelect, categories, categoryV, metaDescription, setMetaDescription, setmetaDescriptionValidation, metaDescriptionValidation, slug, setSlug, setslugValidation, slugValidation, handleFileChange, content, editorConfiguration, setcontent, setcontentValidation, contentValidation, isSubmitting, submitOrEdit, blogImage }: any) => {
 const [editorLoaded, setEditorLoaded] = useState(false);
  const [ClassicEditor, setClassicEditor] = useState<any>(null);
  const [CKEditor, setCKEditor] = useState<any>(null);

  useEffect(() => {
    // Dynamically import the CKEditor and the Classic build
    import('@ckeditor/ckeditor5-react').then((mod) => {
      setCKEditor(() => mod.CKEditor);
    });
    import('@ckeditor/ckeditor5-build-classic').then((mod) => {
      setClassicEditor(() => mod.default);
    });
    setEditorLoaded(true);
  }, []);
    if (!editorLoaded || !CKEditor || !ClassicEditor) return <p>Loading CKEditor...</p>;
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Box
          onClick={handleClose}
          sx={{ position: 'absolute', top: 10, right: '25px', cursor: 'pointer', zIndex: 9 }}
        >
          <Image
            height={20}
            width={20}
            src={xcicle}
            alt={'xcicle'}
          />
          {/* <img src={xcicle} height={'20px'} alt="xcicle" /> */}
        </Box>
        <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fff', py: 4 }}>
          <Typography variant="h2" sx={{ py: 3 }}>
            Blog Form
          </Typography>
          <Grid container>
            <Grid item sm={12} xs={12} md={6} lg={6}>
              <Stack sx={{ mx: 2, mt: { md: 4, xs: 2 } }}>
                <InputLabel htmlFor="Blog Title">Blog Title</InputLabel>

                <TextField
                  placeholder="Blog Title"
                  sx={{ width: '100%', background: 'white', outline: 'none', border: 'none', borderRadius: 1 }}
                  value={title}
                  onChange={(e: any) => {
                    settitle(e.target.value);
                    if (e.target.value.length > 2) {
                      setFullNameValidation(false);
                    }
                  }}
                />
                {fullNameValidation && (
                  <Typography component="p" sx={{ color: 'red' }}>
                    Enter Full Name
                  </Typography>
                )}
              </Stack>
            </Grid>
            <Grid item sm={12} xs={12} md={6} lg={6}>
              <Stack direction={'column'} sx={{ mx: 2, mt: { md: 4, xs: 2 } }}>
                <InputLabel htmlFor="Short Description">Short Description</InputLabel>

                <TextField
                  placeholder="Short Description"
                  sx={{ width: '100%', background: 'white', outline: 'none', border: 'none', borderRadius: 1 }}
                  fullWidth
                  value={shortdescription}
                  onChange={(e: any) => {
                    setShortDescription(e.target.value);
                    if (e.target.value.length > 2) {
                      setEmailValidation(false);
                    }
                  }}
                />
                {emailValidation && (
                  <Typography component="p" sx={{ color: 'red' }}>
                    Enter Short Description
                  </Typography>
                )}
              </Stack>
            </Grid>
            <Grid item sm={12} xs={12} md={6} lg={6}>
              <Stack direction={'column'} sx={{ mx: 2, mt: { md: 4, xs: 2 } }}>
                <InputLabel htmlFor="Meta Title">Meta Title</InputLabel>

                <TextField
                  placeholder="Meta Title"
                  sx={{ width: '100%', background: 'white', outline: 'none', border: 'none', borderRadius: 1 }}
                  value={metaTitle}
                  onChange={(e: any) => {
                    setMetaTitle(e.target.value);
                    if (e.target.value.length > 2) {
                      setNumberValidation(false);
                    }
                  }}
                />
                {numberValidation && (
                  <Typography component="p" sx={{ color: 'red' }}>
                    Enter Metatitle
                  </Typography>
                )}
              </Stack>
            </Grid>
            {!openEdit && (
              <Grid item sm={12} xs={12} md={6} lg={6}>
                <Stack sx={{ mx: 2, mt: { md: 4, xs: 2 } }}>
                  <InputLabel htmlFor="Author">Author</InputLabel>


                  <FormControl fullWidth>

                    <Select
                      sx={{ width: '100%', background: 'white', outline: 'none', border: 'none', borderRadius: 1 }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={role}
                      onChange={handleMenuItemSelect}
                    >
                      {autherList.map((item: any) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {roleValidation && (
                    <Typography component="p" sx={{ color: 'red' }}>
                      Select Value
                    </Typography>
                  )}
                </Stack>
              </Grid>
            )}
            <Grid item sm={12} xs={12} md={6} lg={6}>
              <Stack sx={{ mx: 2, mt: { md: 4, xs: 2 } }}>
                <InputLabel htmlFor="Select Category">Select Category</InputLabel>

                <FormControl fullWidth>
                  <Select
                    // defaultValue={categoryName}
                    sx={{ width: '100%', background: 'white', outline: 'none', border: 'none', borderRadius: 1 }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoryName}
                    onChange={handleCategorySelect}
                  >
                    {categories.map((item: any) => (
                      <MenuItem key={item.id} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {categoryV && (
                  <Typography component="p" sx={{ color: 'red' }}>
                    Select Category
                  </Typography>
                )}
              </Stack>
            </Grid>
            <Grid item sm={12} xs={12} md={6} lg={6}>
              <Stack direction={'column'} sx={{ mx: 2, mt: { md: 4, xs: 2 } }}>
                <InputLabel htmlFor="Meta Description">Meta Description</InputLabel>

                <TextField
                  placeholder="Meta Description"
                  sx={{ width: '100%', background: 'white', outline: 'none', border: 'none', borderRadius: 1 }}
                  value={metaDescription}
                  onChange={(e: any) => {
                    setMetaDescription(e.target.value);
                    if (e.target.value.length > 2) {
                      setmetaDescriptionValidation(false);
                    }
                  }}
                />
                {metaDescriptionValidation && (
                  <Typography component="p" sx={{ color: 'red' }}>
                    Enter Meta description
                  </Typography>
                )}
              </Stack>
            </Grid>
            <Grid item sm={12} xs={12} md={6} lg={6}>
              <Stack direction={'column'} sx={{ mx: 2, mt: { md: 4, xs: 2 } }}>
                <InputLabel htmlFor="Enter Slug">Enter Slug</InputLabel>

                <TextField
                  placeholder="Slug"
                  sx={{ width: '100%', background: 'white', outline: 'none', border: 'none', borderRadius: 1 }}
                  value={slug}
                  onChange={(e: any) => {
                    setSlug(e.target.value);
                    if (e.target.value.length > 2) {
                      setslugValidation(false);
                    }
                  }}
                />
                {slugValidation && (
                  <Typography component="p" sx={{ color: 'red' }}>
                    Enter Slug
                  </Typography>
                )}
              </Stack>
            </Grid>
            {/* {openEdit || open && ( */}
            <Grid item sm={12} xs={12} md={6} lg={6}>
              <Stack direction={'column'} sx={{ mx: 2, mt: { md: 4, xs: 2 } }}>
                <InputLabel htmlFor=" Select Image"> Select Image</InputLabel>

                <label htmlFor="contained-button-file" />
                <Input onChange={handleFileChange} id="contained-button-file" type="file" />

                {/* {imageValidation && (
                    <Typography component="p" sx={{ color: 'red' }}>
                      Select Image
                    </Typography>
                  )} */}
                {blogImage && typeof blogImage === 'string' && (
                  <Typography
                    variant="body2"
                    component="a"
                    href={`${process.env.NEXT_APP_API_URL}/${blogImage}`}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ cursor: 'pointer', color: 'primary.main', textDecoration: 'underline' }}
                  >
                    Selected File: {blogImage}
                  </Typography>
                )}

              </Stack>
            </Grid>
            {/* )} */}

            <Grid item sm={12} xs={12} md={12} lg={12}>
              <Stack direction={'column'} sx={{ mx: 2, mt: { md: 4, xs: 2 } }}>
                {/* <Typography variant="h6" sx={{ my: 1, fontWeight: 'bold' }}>
            Phone Number *
          </Typography> */}

                <InputLabel htmlFor="description">SEO Content</InputLabel>
                <div className="ck-body-wrapper">
                  {/* <DocumentEditor data={content} onChange={onHandleChange} /> */}
                  <CKEditor
                    editor={ClassicEditor as unknown as { create(...args: any[]): Promise<Editor> }}
                    data={content}
                    config={editorConfiguration}
                    onReady={(editor: any) => {
                      // You can store the "editor" and use when it is needed.
                      console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event: any, editor: any) => {
                      const _data = editor.getData();

                      setcontent(_data);
                      if (_data?.length > 10) {
                        setcontentValidation(false);
                      }
                    }}
                  // onBlur={(event, editor) => {
                  //   console.log('Blur.', editor);
                  // }}
                  // onFocus={(event, editor) => {
                  //   console.log('Focus.', editor);
                  // }}
                  />
                </div>
                {contentValidation && (
                  <Typography component="p" sx={{ color: 'red' }}>
                    Enter Content
                  </Typography>
                )}
              </Stack>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end" alignItems="center">
            <Grid item mt={2}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Button color="error" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  type="button"
                  sx={{
                    borderRadius: '20px', background: '#000', '&:hover': {
                      background: '#000'
                    }
                  }}
                  disabled={!isSubmitting} // Disable the button while submitting
                  onClick={submitOrEdit}
                >
                  {!openEdit ? 'Submit' : 'Update'}
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Modal>
  )
}

function BlogForm() {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  // const navigate = useNavigate();
  const [title, settitle] = useState<any>(null);
  const [shortdescription, setShortDescription] = useState<any>(null);
  const [blogImage, setBlogImage] = useState<any>(null);
  const [categoryName, setCategoryName] = useState<any>(null);
  console.log('🚀 ~ file: BlogForm.tsx:19 ~ BlogForm ~ categoryNameNNNNNNNNNNNNNNNNNNNNNnnnnnn:', categoryName);
  const [metaTitle, setMetaTitle] = useState<any>(null);
  const [role, setRole] = useState<any>(null);
  const [metaDescription, setMetaDescription] = useState<any>(null);
  const [slug, setSlug] = useState<any>(null);
  const [image, setImage] = useState<any>(null);
  const [content, setcontent] = useState<any>(null);
  const [autherList, setautherList] = useState<any>([]);
  const [allblogs, setAllBlogs] = useState<any>([]);
  console.log('🚀 ~ file: BlogForm.tsx:32 ~ BlogForm ~ allblogs:bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', allblogs);
  const [categories, setCategories] = useState<any>([]);
  const [blogdetail
    , setblogdetail
  ] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const [fullNameValidation, setFullNameValidation] = useState<any>(false);
  const [categoryV, setCategoryValidation] = useState<any>(false);
  const [emailValidation, setEmailValidation] = useState<any>(false);
  const [numberValidation, setNumberValidation] = useState<any>(false);
  const [roleValidation, setRoleValidation] = useState<any>(false);
  const [metaDescriptionValidation, setmetaDescriptionValidation] = useState<any>(false);
  const [slugValidation, setslugValidation] = useState<any>(false);
  // const [imageValidation, setImageValidation] = useState<any>(false);
  const [contentValidation, setcontentValidation] = useState<any>(false);
  // const editorRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);
   const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 6;

  const totalPages = Math.ceil(allblogs.length / pageSize);
  const paginatedData = allblogs.slice(currentPage * pageSize, (currentPage + 1) * pageSize);


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    if (!storedUser) {
      router.push('/login'); // Replace with your target route
    }
  }, []);

  const BlogCategory = () => {
    axios
      .get('api/blogCategory/get_blog_category')
      .then((response) => {
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
  useEffect(() => {
    AutherList();
    Bloglist();
    BlogCategory();
  }, []);
  // interface CKEditorConfig {
  //   toolbar: { items: string[] };
  //   image: { toolbar: string[] };
  //   table: { contentToolbar: string[] };
  //   language: string;
  //   ckfinder: { uploadUrl: string };
  // }

  const handleMenuItemSelect = (event: any) => {
    setRole(event.target.value);
  };
  const handleCategorySelect = (event: any) => {
    debugger;
    setCategoryName(event.target.value);
  };
  const AutherList = () => {
    axios
      .get('api/blog/author_list')
      .then((response) => {
        if (response.data.status === 'pass') {
          setautherList(response.data.data);
          // dispatch(
          //   openSnackbar({
          //     open: true,
          //     message: 'E-Mail Sent Successfully..',
          //     variant: 'alert',
          //     alert: {
          //       color: 'success'
          //     },
          //     close: false
          //   })
          // );
        } else {
          dispatch(
            openSnackbar({
              open: true,
              message: 'Faile ',
              variant: 'alert',
              alert: {
                color: 'info'
              },
              close: false
            })
          );
        }
      })
      .catch((response) => {
        // setisLoading(false)

        console.log('Error Raised => ', response.message);
      });
  };

  // const onHandleChange = (_tempData: any) => {
  //   const _data = _tempData;

  //   setcontent(_data);
  //   if (_data?.length > 10) {
  //     setcontentValidation(false);
  //   }
  // };

  const handleFileChange = async (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    setImage(event.target.files[0]);
    // if (event.target.files[0]) {
    //   setImageValidation(false);
    // }

    const reader = new FileReader();
    reader.addEventListener('load', (e: any) => {
      //   setImage(e.target.result);
      // setImage(e.target.result);
      // handleOnSend(e.target.result);
    });

    reader.readAsDataURL(fileObj);
    // .then((res: any) => {

    //   console.log(res);
    // });
    // if (!fileObj && fileObj.type == 'image/jpeg') {

    // }
  };

  const submit = async () => {
    var count = 0;
    setIsLoading(true)
    if (title) {
      setFullNameValidation(false);
    } else {
      setFullNameValidation(true);
    }
    if (shortdescription) {
      setEmailValidation(false);
    } else {
      count += 1;
      setEmailValidation(true);
    }
    if (metaTitle) {
      setNumberValidation(false);
    } else {
      setNumberValidation(true);
    }
    if (categoryName) {
      setCategoryValidation(false);
    } else {
      setCategoryValidation(true);
    }
    if (role) {
      setRoleValidation(false);
    } else {
      setRoleValidation(true);
    }
    if (metaDescription) {
      setmetaDescriptionValidation(false);
    } else {
      setmetaDescriptionValidation(true);
    }
    if (slug) {
      setslugValidation(false);
    } else {
      setslugValidation(true);
    }
    // if (image) {
    //   setImageValidation(false);
    // } else {
    //   setImageValidation(true);
    // }
    if (content) {
      setcontentValidation(false);
    } else {
      setcontentValidation(true);
    }

    if (count > 0) {
      setIsLoading(false)
      return;
    }
    const data = new FormData();
    data.append('title', title);
    data.append('short_description', shortdescription);
    data.append('category_name', categoryName);
    const selectedCategory = categories.find((item: any) => item.name == categoryName);
    data.append('category_id', selectedCategory.id);
    data.append('meta_title', metaTitle);
    data.append('meta_description', metaDescription);
    data.append('content', content);
    data.append('blog_img', image);
    data.append('slug', slug);
    data.append('author_id', role);
    // setisLoading(true)

    axios({
      method: 'post',
      url: 'api/blog/store_blog_content',
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        if (response.data.status === 'pass') {
          Bloglist();
          setOpen(false);
          setIsSubmitting(true);
          setIsLoading(false)
          ResetForm();
          dispatch(
            openSnackbar({
              open: true,
              message: 'Blog is saved successfuly',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );
        } else {
          setIsLoading(false)
          dispatch(
            openSnackbar({
              open: true,
              message: 'Faile to Send the message',
              variant: 'alert',
              alert: {
                color: 'info'
              },
              close: false
            })
          );
        }
      })
      .catch((response) => {
        setIsLoading(false)
        dispatch(
          openSnackbar({
            open: true,
            message: response?.data && Object.keys(response?.data).map((data: any) => (
              <Typography>{data + ':' + ' ' + response?.data[data]}</Typography>
            )),
            variant: 'alert',
            alert: {
              color: 'info'
            },
            close: false
          })
        );
        console.log('Error Raised => ', response.message);
      });
  };
  const UpdateBlog = async () => {
    var count = 0;
    setIsLoading(true)
    if (title) {
      setFullNameValidation(false);
    } else {
      setFullNameValidation(true);
    }
    if (shortdescription) {
      setEmailValidation(false);
    } else {
      count += 1;
      setEmailValidation(true);
    }
    if (metaTitle) {
      setNumberValidation(false);
    } else {
      setNumberValidation(true);
    }
    if (categoryName) {
      setCategoryValidation(false);
    } else {
      setCategoryValidation(true);
    }
    // if (role) {
    //   setRoleValidation(false);
    // } else {
    //   setRoleValidation(true);
    // }
    if (metaDescription) {
      setmetaDescriptionValidation(false);
    } else {
      setmetaDescriptionValidation(true);
    }
    if (slug) {
      setslugValidation(false);
    } else {
      setslugValidation(true);
    }
    // if (image) {
    //   setImageValidation(false);
    // } else {
    //   setImageValidation(false);
    // }
    if (content) {
      setcontentValidation(false);
    } else {
      setcontentValidation(true);
    }

    if (count > 0) {
      setIsLoading(false)
      return;
    }
    const data = new FormData();
    data.append('title', title);
    data.append('short_description', shortdescription);
    data.append('meta_title', metaTitle);
    data.append('meta_description', metaDescription);
    data.append('category_name', categoryName);
    const selectedCategory = categories.find((item: any) => item.name == categoryName);
    data.append('category_id', selectedCategory.id);
    data.append('content', content);
    data.append('blog_img', image);
    data.append('slug', slug);
    // data.append('author_id', role);

    // setisLoading(true)

    axios({
      method: 'post',
      url: 'api/blog/update_blog_content/' + blogdetail?.id,
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        if (response.data.status === 'pass') {
          Bloglist();
          setOpen(false);

          setIsLoading(false)

          ResetForm();
          dispatch(
            openSnackbar({
              open: true,
              message: 'Blog is saved successfuly',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );
        } else {
          setIsLoading(false)
          dispatch(
            openSnackbar({
              open: true,
              message: 'Faile to Send the message',
              variant: 'alert',
              alert: {
                color: 'info'
              },
              close: false
            })
          );
        }
      })
      .catch((response) => {
        setIsLoading(false)

        dispatch(
          openSnackbar({
            open: true,
            message: response?.data && Object.keys(response?.data).map((data: any) => (
              <Typography>{data + ':' + ' ' + response?.data[data]}</Typography>
            )),
            variant: 'alert',
            alert: {
              color: 'info'
            },
            close: false
          })
        );
        console.log('Error Raised => ', response.message);
      });
  };
  //Reset the form here.
  const ResetForm = () => {
    settitle('');
    // setFullNameValidation(false);
    setShortDescription('');
    // setEmailValidation(false);
    setMetaTitle('');
    // setNumberValidation(false);
    setRole('');
    // setRoleValidation(false)
    setMetaDescription('');
    // setmetaDescriptionValidation(false)
    setSlug('');
    // setslugValidation(false)
    setImage(null);
    // setImageValidation(false)
    setcontent('');
  };
  const submitOrEdit = () => {
    // setIsSubmitting(true);
    debugger;
    if (isSubmitting) {
      // setIsSubmitting(true);
      if (!openEdit) {
        submit();
      } else {
        UpdateBlog();
      }
      // After submission is complete, reset isSubmitting to enable the button again
      setIsSubmitting(true);
    }
  };
  const Bloglist = () => {
    setIsLoading(true)
    axios
      .get('api/blog/get_all_blogs')
      .then((response) => {
        if (response.data.status === 'fail') {
          setIsLoading(false)
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
          setIsLoading(false)
          const _tempBlogs = response?.data?.data.length > 0 ? response?.data?.data.filter((item: any) => item.status == 'true') : []
          setAllBlogs(_tempBlogs);
          // setAllBlogs(response?.data?.data);
        }
      })
      .catch((error) => {
        setIsLoading(false)
        // console.log('erro uploading', jobListDatabyid);
      });
  };
  const BlogbyId = (id: any) => {
    axios
      .get('api/blog/get_blog_content/' + id)
      .then((response) => {
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
          settitle(response?.data?.data?.title);
          setShortDescription(response?.data?.data?.short_description);
          setBlogImage(response?.data?.data?.blog_img)
          setMetaTitle(response?.data?.data?.meta_title);
          setMetaDescription(response?.data?.data?.meta_description);
          setSlug(response?.data?.data?.slug);
          setCategoryName(response?.data?.data?.category_name);
          setcontent(response?.data?.data?.content);
        }
      })
      .catch((error) => {
        console.log('erro uploading', error.message);
      });
  };
  const handleClose = (event: any, reason: any) => {
    if (reason && reason === 'backdropClick') return;
    setOpen(false);
    setOpenEdit(false);
    setIsSubmitting(true);
    ResetForm();
  };
  const handleChange = (id: any) => {
    // setChecked(event.target.checked);
    StatusChange(false, id);
  };
  const StatusChange = (status: any, id: any) => {
    const data = new FormData();

    // data.append('city_name', values.cityname);
    data.append('status', status);
    setIsLoading(true)
    axios({
      method: 'post',
      url: 'api/blog/blog_status/' + id,
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        if (response.data.status === 'fail') {
          setIsLoading(false)
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
          Bloglist();
          setIsLoading(false)
          // {eventType === 'Edit' ? 'Edit' : 'Add'}

          dispatch(
            openSnackbar({
              open: true,
              message: status ? 'Status Changed to Open' : 'Status Changed to Close',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );

          // setTimeout(() => {
          //   navigate('/joblist');
          // }, 2000);
        }
      })
      .catch((error) => {
        setIsLoading(false)
        console.log('erro uploading', error.message);
      });
  };
  const jobsColumns = useMemo(
    () => [
      {
        Header: 'Blog title',
        accessor: 'title'
      },
      {
        Header: 'description',
        accessor: 'short_description'
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: (value: any) => {
          return (
            <Stack display="flex" flexDirection="row">
              {/* <Switch
                sx={toggleBtnStyles}
                defaultChecked={value?.row?.original?.status === 'true' ? true : false}
                onChange={(e) => {
                  console.log(value?.row?.original?.status);
                  handleChange(e, value?.row?.original?.id);
                }}
              // inputProps={{ 'aria-label': 'controlled' }}
              /> */}
              <Button
                variant="contained"
                color="primary"
                sx={{
                  mr: 1, borderRadius: '20px', background: '#000', fontSize: '10px',  '&:hover': {
                    background: '#000', fontSize: '10px'
                  }
                }}
                onClick={() => {
                  // handleDialogopen(value?.row?.original?.id);
                  BlogbyId(value?.row?.original?.id);
                  setOpenEdit(true);
                  setOpen(true);
                  // handleOpen(value?.row?.id);
                }}
              // disabled={isSubmitting}
              >
                Edit
              </Button>

              <Button
                variant="contained"
                color="error"
                sx={{ fontSize: '10px' }}
                onClick={() => {
                  // console.log(value?.row?.original?.status);
                  handleChange(value?.row?.original?.id);
                }}
              >
                Delete
              </Button>
            </Stack>
          );
        }
      }
    ],
    []
  );
  const style = {
    maxHeight: '75vh', // You can adjust the maximum height as needed
    overflowY: 'auto',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };

  const editorConfiguration = {
    toolbar: ['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList', 'bulletedList', 'imageUpload', 'insertTable',
      'tableColumn', 'tableRow', 'mergeTableCells', 'mediaEmbed', '|', 'undo', 'redo', 'sticky ']
  }
  //   let url: any;

  //  if (windowWidth) {
  //       url = `/api/provider/get_salary_detail?page=${pageCount}&perPage=1`
  //   } else {
  //       url = `/api/provider/get_salary_detail`

  //   }

  //     const handleSetFilterdData = (props: any) => {
  //       debugger
  //       setAllBlogs(props?.data);
  //       // setData(props);
  //   }
  return (
    <>
      {isLoading && <LoadingComp loading={isLoading} />}

      <AdminNav />
      <Stack sx={{ background: '#fff' }}>
        <Stack sx={{ display: 'flex', justifyContent: 'right', flexDirection: 'row', py: 5 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              mr: 1, borderRadius: '20px', background: '#000', '&:hover': {
                background: '#000'
              }
            }}
            onClick={() => {
              setOpen(true);
            }}
          // disabled={isSubmitting}
          >
            Add Blog
          </Button>
          {/* <Button
            variant="contained"
            color="primary"
            sx={{ mr: 1, borderRadius: '20px',  background: '#000', '&:hover': {
              background: '#000'}  }}
            onClick={() => {
              navigate('/addCategory');
            }}
            // disabled={isSubmitting}
          >
            Add Category
          </Button> */}
        </Stack>
        <Stack sx={{ px: 5 }}>
          <Typography variant="h3" sx={{ py: 3 }}>
            Blog List
          </Typography>
          {/* <Stack sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <Stack>
                            <CustomSearchFilter
                                columns={jobsColumns}
                                ApiUrl={url}
                                filter1={true}
                                setUpdateState={handleSetFilterdData}
                            />
                        </Stack>
                    </Stack> */}
              <ReactTable columns={jobsColumns} data={paginatedData} />
          {/* ✅ Custom Pagination */}
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button onClick={() => setCurrentPage(p => Math.max(p - 1, 0))} disabled={currentPage === 0}>
              Previous
            </button>
            <span>
              Page <strong>{currentPage + 1}</strong> of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages - 1))}
              disabled={currentPage + 1 === totalPages}
            >
              Next
            </button>
          </div>
        </Stack>
      </Stack>
      <FormComp open={open} handleClose={handleClose} style={style} title={title} settitle={settitle} setFullNameValidation={setFullNameValidation} fullNameValidation={fullNameValidation} shortdescription={shortdescription} setShortDescription={setShortDescription} setEmailValidation={setEmailValidation} emailValidation={emailValidation} metaTitle={metaTitle} setMetaTitle={setMetaTitle} setNumberValidation={setNumberValidation} numberValidation={numberValidation} openEdit={openEdit} role={role} handleMenuItemSelect={handleMenuItemSelect} autherList={autherList} roleValidation={roleValidation} categoryName={categoryName} handleCategorySelect={handleCategorySelect} categories={categories} categoryV={categoryV} metaDescription={metaDescription} setMetaDescription={setMetaDescription} setmetaDescriptionValidation={setmetaDescriptionValidation} metaDescriptionValidation={metaDescriptionValidation} slug={slug} setSlug={setSlug} setslugValidation={setslugValidation} slugValidation={slugValidation} handleFileChange={handleFileChange} content={content} editorConfiguration={editorConfiguration} setcontent={setcontent} setcontentValidation={setcontentValidation} contentValidation={contentValidation} isSubmitting={isSubmitting} submitOrEdit={submitOrEdit} blogImage={blogImage} />
    </>
  );
}

export default BlogForm;