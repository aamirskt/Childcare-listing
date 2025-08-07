"use client";


import React, { useState, SyntheticEvent, useEffect } from 'react';
import axios from 'utils/axios';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';
// import useAuth from 'hooks/useAuth';

import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
// import { strengthColor, strengthIndicator } from 'utils/password-strength';

// types
// import { StringColorProps } from 'types/password';

// assets
import { Eye, EyeSlash } from 'iconsax-react';
import {
  // Box,
  Button,
  // FormControl,
  FormHelperText,
  Grid,
  // Link,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
  Checkbox,
  FormControlLabel
} from '@mui/material';
// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// import { StringColorProps } from 'types/password';
// import { strengthColor, strengthIndicator } from 'utils/password-strength';
import useScriptRef from 'hooks/useScriptRef';
import { useRouter } from 'next/navigation';

const AdminLogin: React.FC = () => {
  const router = useRouter();

  // const [showFirstPart, setShowFirstPart] = useState(true);
  // const [level, setLevel] = useState<StringColorProps>();

  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');;
    if (storedUser) {
        router.push('/admin'); // Replace with your target route
      }
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault();
  };
  const handleLocalStorage = async (userData: string, userType: string) => {
    const data = localStorage.getItem('user');
    const _userData = JSON.parse(userData);
    if (!data) {
      localStorage.setItem('user', userData);
      const session = localStorage.getItem('session');

      if (!session) {
        const sessions = { isloggedin: 'true' };
        localStorage.setItem('session', JSON.stringify(sessions));
      }
    }

    if (_userData?.roles[0].id == 3) {
      router.push('/admin');
    }

    // window.location.reload();
  };



  const scriptedRef = useScriptRef();
  return (
    <Grid container spacing={2} sx={{ border: '1px solied #000', display: 'flex', direction:'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: '100vh' }}>
      

      <Grid item xs={4} sx={{  }}>
  
            <Grid container spacing={3}>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Welcome 
                </Typography>
                <Typography variant="body1" sx={{ fontSize: 12, mb: 5, color: '#8692a6', mr: 3 }}>
                  Login with your Personal Credentials
                </Typography>
              </Grid>
              
              <Grid item xs={12}>
                
                <>
                  <Formik
                    initialValues={{
                      email: '',
                      password: '',

                      submit: null
                    }}
                    validationSchema={Yup.object().shape({
                      email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                      password: Yup.string().max(255).required('Password is required')

                      // confirmPassword: Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone Number is required'),
                    })}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                      try {
                        await axios({
                          method: 'post',
                          url: 'api/user/login',
                          data: values,
                          headers: { 'Content-Type': 'multipart/form-data' }
                        })
                          .then((response) => {
                            //console.log(response.data);
                            debugger
                            const _tempData: any = response.data.data;
                            if (response.data.status === 'pass') {
                              localStorage.setItem('isNotification', 'true');
                              setStatus({ success: true });
                              setSubmitting(false);
                              dispatch(
                                openSnackbar({
                                  open: true,
                                  message: response.data.message,
                                  variant: 'alert',
                                  alert: {
                                    color: 'success'
                                  },
                                  close: false
                                })
                              );

                              if (checked === true) {
                                handleLocalStorage(JSON.stringify(response.data.data), response.data.data.roles[0].name);
                              } else {
                                if (response.data.data.roles[0].id == 3) {
                                  localStorage.setItem('user', JSON.stringify(response.data.data));

                                  router.push('/admin');
                                  // window.location.reload();
                                } 
                              }
                            }
                            if (response.data.status === 'fail') {
                              setStatus({ success: false });
                              setSubmitting(false);
                              dispatch(
                                openSnackbar({
                                  open: true,
                                  message: Object.keys(_tempData).map((data: any) => (
                                    <Typography>{data + ':' + ' ' + _tempData[data]}</Typography>
                                  )),
                                  variant: 'alert',
                                  alert: {
                                    color: 'error'
                                  },
                                  close: false
                                })
                              );
                            } else {
                            }
                          })
                          .catch((error) => {
                            if (error.status === 'fail') {
                              setStatus({ success: false });
                              setSubmitting(false);
                              dispatch(
                                openSnackbar({
                                  open: true,
                                  message: JSON.stringify(error.message),
                                  variant: 'alert',
                                  alert: {
                                    color: 'error'
                                  },
                                  close: false
                                })
                              );
                            }
                            //console.log(error);
                          });
                      } catch (err: any) {
                        console.error(err.message);
                        if (scriptedRef.current) {
                          setStatus({ success: false });
                          setErrors({ submit: err.message });
                          setSubmitting(false);
                        }
                      }
                    }}
                  >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                      <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={12}>
                            <Stack spacing={1}>
                              <OutlinedInput
                                fullWidth
                                error={Boolean(touched.email && errors.email)}
                                id="email-login"
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="Email"
                                inputProps={{}}
                              />
                              {touched.email && errors.email && (
                                <FormHelperText error id="helper-text-email-signup">
                                  {errors.email}
                                </FormHelperText>
                              )}
                            </Stack>
                          </Grid>

                          <Grid item xs={12}>
                            <Stack>
                              <OutlinedInput
                                fullWidth
                                error={Boolean(touched.password && errors.password)}
                                id="-password-login"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                endAdornment={
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                      edge="end"
                                      color="secondary"
                                    >
                                      {showPassword ? <Eye /> : <EyeSlash />}
                                    </IconButton>
                                  </InputAdornment>
                                }
                                placeholder="Password"
                              />
                              {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                  {errors.password}
                                </FormHelperText>
                              )}
                            </Stack>
                            {/* Password strength indicator removed */}
                          </Grid>

                          {errors.submit && (
                            <Grid item xs={12}>
                              <FormHelperText error>{errors.submit}</FormHelperText>
                            </Grid>
                          )}
                          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={checked}
                                  onChange={(event) => setChecked(event.target.checked)}
                                  name="checked"
                                  color="primary"
                                  size="small"
                                />
                              }
                              label={<Typography variant="h6">Keep me sign in</Typography>}
                            />

                            {/* <Link variant="h6" component={RouterLink} to="/forgot-password" color="text.primary">
                    Forgot Password?
                  </Link> */}
                          </Stack>
                          <Grid item xs={12}>
                            <AnimateButton>
                              <Button
                                disableElevation
                                disabled={isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                color="secondary"
                                style={{ borderRadius: '20px' }}
                              >
                                Login
                              </Button>
                            </AnimateButton>
                          </Grid>
                        </Grid>
                      </form>
                    )}
                  </Formik>
                </>
              </Grid>
            </Grid>
      </Grid>
    </Grid>
  );
};

export default AdminLogin;