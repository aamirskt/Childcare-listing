"use client";

import {
  Button,
  Stack,
  Grid,
  InputLabel,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Box,
  Modal
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';
import axios from 'utils/axios';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import type { Editor } from '@ckeditor/ckeditor5-core';
import Image from 'next/image';

const xcicle = '/assets/images/home/x-circle.png';

interface CityContentModalProps {
  open: boolean;
  onClose: () => void;
  eventType: any;
  cityData: any;
  onSuccess: () => void;
  topCities?: any[];
}

const types = [
  'infant daycares',
  'toddler daycares',
  'in home daycares',
  'special needs daycares',
  'daycare centers',
  'preschools',
  'childcare',
  'daycare'
];

const CityContentModal = ({ open, onClose, eventType, cityData, onSuccess, topCities }: CityContentModalProps) => {
  const [topStates, setStates] = useState<any>([]);
  const [topCites, setTopCites] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    if (open) {
      handleAllStates();
    }
  }, [open]);

  const style = {
    maxHeight: '75vh',
    overflowY: 'auto' as const,
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
    toolbar: {
      items: [
        'heading', '|',
        'bold', 'italic', 'blockQuote', 'link',
        'numberedList', 'bulletedList', 'imageUpload',
        'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells',
        'mediaEmbed', '|', 'undo', 'redo'
      ],
      shouldNotGroupWhenFull: true
    },
    toolbarSticky: true
  };
  console.log('Internal topCites:', topCites, 'Passed topCities:', topCities, 'cityData');
  const getInitialValues = () => {
    const newEvent = {
      state: eventType === 'Edit' ? cityData.state : '',
      city: eventType === 'Edit' ? cityData.city : '',
      type: eventType === 'Edit' ? cityData.type : '',
      title: eventType === 'Edit' ? cityData?.seo_title : '',
      description: eventType === 'Edit' ? cityData?.seo_description : '',
      content: eventType === 'Edit' ? cityData?.content : '',
      keywords: eventType === 'Edit' ? cityData?.main_keyword : '',
      likeywords: eventType === 'Edit' ? cityData?.lsi_keywords : ''
    };

    return newEvent;
  };

  const handleAllStates = () => {
    axios({
      method: 'get',
      url: 'api/search/all_states',
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        setStates(response.data?.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  const handleStateDetailByStatename = (selectedState: any) => {
    axios({
      method: 'get',
      url: `api/search/get_cities/${selectedState}`,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response: any) => {
        if (response.status !== 'fail') {
          setTopCites(response.data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  const storeData = (setSubmitting: any) => {
    const data = new FormData();
    setIsLoading(true);

    data.append('state', values.state);
    data.append('city', values.city);
    data.append('seo_title', values.title);
    data.append('seo_description', values.description);
    data.append('content', values.content);
    data.append('main_keyword', values.keywords);
    data.append('lsi_keywords', values.likeywords);
    data.append('type', values.type);

    const _url = eventType === 'Edit' ? 'api/city/update-content/' + cityData.id : 'api/city/save-content';

    axios({
      method: 'post',
      url: _url,
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 'fail') {
          setIsLoading(false);
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
        if (response.data.status === 'success') {
          setSubmitting(true);
          setIsLoading(false);
          onClose();
          onSuccess();

          dispatch(
            openSnackbar({
              open: true,
              message: 'Data Posted Successfully',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.log('error uploading', error.message);
      });
  };

  const formik = useFormik({
    initialValues: getInitialValues(),
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      state: Yup.string()
        .required('State is Required'),
      city: Yup.string()
        .required('City is Required'),
      type: Yup.string()
        .required('Category Type is Required')
    }),
    onSubmit: (values, { setSubmitting }) => {
      storeData(setSubmitting);
    }
  });

  const { values, errors, touched, handleSubmit, setFieldValue } = formik;

  if (!editorLoaded || !CKEditor || !ClassicEditor) {
    return null;
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          onClick={onClose}
          sx={{ position: 'absolute', top: 10, right: '25px', cursor: 'pointer', zIndex: 9 }}
        >
          <Image
            height={20}
            width={20}
            src={xcicle}
            alt={'xcicle'}
          />
        </Box>
        <FormikProvider value={formik}>
          <Form noValidate onSubmit={handleSubmit}>
            <DialogTitle>
              <Typography variant="h2" sx={{ py: 3 }}>
                City Content
              </Typography>
            </DialogTitle>
            <Divider />
            <DialogContent sx={{ p: 2.5 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="state">State</InputLabel>
                    <Select
                      value={values.state}
                      onChange={(_tags) => {
                        handleStateDetailByStatename(_tags.target.value);
                        setFieldValue('state', _tags.target.value);
                      }}
                    >
                      {topStates.map((item: any) => (
                        <MenuItem key={item.state} value={item.state}>
                          {item.state}
                        </MenuItem>
                      ))}
                    </Select>
                    {touched.state && errors.state && (
                      <FormHelperText error id="state-helper">
                        {errors.state as string}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="city">City</InputLabel>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="city"
                        defaultValue={cityData?.city}
                        value={values.city}
                        onChange={(_tags) => setFieldValue('city', _tags.target.value)}
                      >
                        {(topCities || topCites).map((item: any) => (
                          <MenuItem key={item.city} value={item.city}>
                            {item.city}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {touched.city && errors.city && (
                      <FormHelperText error id="city-helper">
                        {errors.city as string}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="likeywords">Category Type</InputLabel>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="type"
                        defaultValue={cityData?.type}
                        value={values.type}
                        onChange={(_tags) => setFieldValue('type', _tags.target.value)}
                      >
                        {types.map((item: any) => (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {touched.type && errors.type && (
                      <FormHelperText error id="type-helper">
                        {errors.type as string}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="likeywords">SEO Title</InputLabel>
                    <TextField
                      fullWidth
                      id="title"
                      value={values.title}
                      name="title"
                      onChange={(_tags) => setFieldValue('title', _tags.target.value)}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="likeywords">SEO Description</InputLabel>
                    <TextField
                      fullWidth
                      id="description"
                      value={values.description}
                      name="description"
                      onChange={(_tags) => setFieldValue('description', _tags.target.value)}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="likeywords">List Keywords</InputLabel>
                    <TextField
                      fullWidth
                      id="likeywords"
                      value={values.likeywords}
                      name="likeywords"
                      onChange={(_tags) => setFieldValue('likeywords', _tags.target.value)}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="keywords">Main Keywords</InputLabel>
                    <TextField
                      fullWidth
                      id="keywords"
                      value={values.keywords}
                      name="keywords"
                      onChange={(_tags) => setFieldValue('keywords', _tags.target.value)}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="content">City Content</InputLabel>
                    <div className="editor-wrapper" style={{
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      minHeight: '200px'
                    }}>
                      <CKEditor
                        editor={ClassicEditor as unknown as { create(...args: any[]): Promise<Editor> }}
                        data={values?.content}
                        config={editorConfiguration}
                        onReady={(editor: any) => {
                          console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event: any, editor: any) => {
                          const _data = editor.getData();
                          setFieldValue('content', _data);
                          console.log({ _data });
                        }}
                      />
                    </div>
                  </Stack>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions sx={{ p: 2.5 }}>
              <Grid container justifyContent="flex-end" alignItems="center">
                <Grid item>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Button color="error" onClick={onClose}>
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: '#000',
                        '&:hover': {
                          background: '#000'
                        }
                      }}
                    >
                      {eventType === 'Edit' ? 'Update' : 'Add'}
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </DialogActions>
          </Form>
        </FormikProvider>
      </Box>
    </Modal>
  );
};

export default CityContentModal; 