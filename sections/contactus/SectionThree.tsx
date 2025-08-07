'use client';

import { TextField, Typography, Box, Button, Grid, FormControl } from '@mui/material';
// import { MenuItem } from '@mui/material';
import { Stack } from '@mui/material';
import { useState } from 'react';
import axios from 'utils/axios';
import { RadioGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Radio } from '@mui/material';
import { CircularProgress } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
function SectionThree() {
  const [fullName, setFullName] = useState<any>(null);
  const [email, setEmail] = useState<any>(null);
  const [number, setNumber] = useState<any>(null);
  const [role, setRole] = useState<any>(null);
  const [message, setMessage] = useState<any>(null);
  const [isDisabled, setIsDisabled] = useState<any>(false);
  // console.log('🚀 ~ file: SectionThree.tsx:14 ~ SectionThree ~ message:', message);

  const [fullNameValidation, setFullNameValidation] = useState<any>(false);
  const [emailValidation, setEmailValidation] = useState<any>(false);
  const [numberValidation, setNumberValidation] = useState<any>(false);
  const [roleValidation, setRoleValidation] = useState<any>(false);
  const [messageValidation, setMessageValidation] = useState<any>(false);
  // console.log('🚀 ~ file: SectionThree.tsx:21 ~ SectionThree ~ messageValidation:', messageValidation);

  const [errorMessage, setErrorMessage] = useState('');
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);

  const submit = async () => {
    var count = 0;

    if (fullName) {
      setFullNameValidation(false);
    } else {
      count += 1;

      setFullNameValidation(true);
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setEmailValidation(false);
    } else {
      count += 1;
      setEmailValidation(true);
    }
    if (number?.length == 12) {
      setNumberValidation(false);
    } else {
      count += 1;

      setNumberValidation(true);
    }
    if (role) {
      setRoleValidation(false);
    } else {
      count += 1;

      setRoleValidation(true);
    }
    if (message) {
      setMessageValidation(false);
    } else {
      count += 1;

      setMessageValidation(true);
    }
    if (count > 0) {
      return;
    }
    const data = new FormData();
    data.append('full_name', fullName);
    data.append('email', email);
    data.append('phone', number);
    data.append('type', role);
    data.append('message', message);
    data.append('app', 'ChildrenKARE');
    setIsDisabled(true);
    // setisLoading(true)
    if (fullName && email && number && role && message) {
      axios({
        method: 'post',
        url: 'api/search/contactUs',
        data: data,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then((response) => {
          // console.log('response', response.data.data);
          if (response.data.status == 'pass') {
            // setisLoading(false)
            setIsDisabled(false);
            ResetForm();
            setErrorMessage('');
            setSuccessSnackbarOpen(true);
          } else {
            setIsDisabled(false);
            setErrorMessage(response?.data?.data?.message || 'Failed to Send the message. The message field must be at least 3 characters.');
          }
        })
        .catch((error) => {
          setIsDisabled(false);
          setErrorMessage(error?.response?.data?.message || error.message || 'An error occurred while sending the message.');
          console.log('Error Raised => ', error.message);
        });
    }
  };
  //Reset the form here.
  const ResetForm = () => {
    setFullName('');
    setFullNameValidation(false);
    setEmail('');
    setEmailValidation(false);
    setNumber('');
    setNumberValidation(false);
    setMessage('');
    setMessageValidation(false);
    setRole('');
  };

  return (
    <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pb: 3 }}>
      <Box
        sx={{
          background: '#C0BFBF',
          width: { md: '75%', xs: '98%' },
          mt: { md: -40, xs: -35 },
          px: 1,
          py: 4,
          boxShadow: 3,
          borderRadius: 2
        }}
      >
        <Grid container my={2}>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Stack sx={{ mx: 2, mt: { md: 4, xs: 2 } }}>
              <TextField
                placeholder="Full Name *"
                sx={{
                  width: '100%',
                  background: 'white',
                  outline: 'none',
                  border: 'none',
                  borderRadius: 1,
                  fontSize: '4px',
                  '& .MuiOutlinedInput-input': {
                    padding: '9px'
                  }
                }}
                InputProps={{
                  style: { fontSize: '14px' }
                }}
                value={fullName}
                onChange={(e: any) => {
                  setFullName(e.target.value);
                  if (e.target.value.length > 2) {
                    setFullNameValidation(false);
                  }
                }}
              />
              {fullNameValidation && (
                <Typography component="p" variant="bodytext" sx={{ color: 'red' }}>
                  Enter Full Name
                </Typography>
              )}
            </Stack>
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Stack sx={{ mx: 2, mt: { md: 4, xs: 2 } }}>
              <TextField
                placeholder=" Your Email *"
                sx={{
                  width: '100%',
                  background: 'white',
                  outline: 'none',
                  border: 'none',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-input': {
                    padding: '9px'
                  }
                }}
                InputProps={{
                  style: { fontSize: '14px' }
                }}
                fullWidth
                value={email}
                onChange={(e: any) => {
                  setEmail(e.target.value);
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  if (emailRegex.test(e.target.value)) {
                    setEmailValidation(false);
                  } else {
                    setEmailValidation(true);
                  }
                }}
              />
              {emailValidation && (
                <Typography variant="bodytext" sx={{ color: 'red', mt: 1 }}>
                  Enter Valid Email
                </Typography>
              )}
            </Stack>
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Stack direction={'column'} sx={{ mx: 2, mt: { md: 4, xs: 2 } }}>
              <TextField
                placeholder="Phone Number *"
                sx={{
                  width: '100%',
                  background: 'white',
                  outline: 'none',
                  border: 'none',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-input': {
                    padding: '9px'
                  }
                }}
                InputProps={{
                  style: { fontSize: '14px' }
                }}
                value={number}
                onChange={(e: any) => {
                  const inputValue = e.target.value;
                  const sanitizedValue = inputValue.replace(/[^0-9]/g, ''); // Remove non-digit characters
                  let formattedValue = '';
                  for (let i = 0; i < sanitizedValue.length; i++) {
                    if (i === 3 || i === 6) {
                      formattedValue += '-';
                    }
                    formattedValue += sanitizedValue[i];
                  }
                  if (e.target.value.length == 12) {
                    setNumberValidation(false);
                  } else {
                    setNumberValidation(true);
                  }
                  setNumber(formattedValue);
                }}
              />
              {numberValidation && (
                <Typography component="p" variant="bodytext" sx={{ color: 'red', mt: 1 }}>
                  Enter Valid Phone Number
                </Typography>
              )}
            </Stack>
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Stack sx={{ mx: 2, mt: { md: 4, xs: 2 } }}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  defaultValue="female"
                  name="radio-buttons-group"
                  sx={{
                    flexDirection: 'row',
                    '& .MuiFormControlLabel-label': {
                      fontSize: '14px'
                    },
                    '& .dot': {
                      backgroundColor: 'black !important'
                    },
                    '& .Mui-checked': {
                      color: 'black !important'
                    }
                  }}
                >
                  <FormControlLabel value="Parent" control={<Radio />} label="Parent" />
                  <FormControlLabel value="Provider" control={<Radio />} label="Provider" />
                </RadioGroup>
              </FormControl>
              {roleValidation && (
                <Typography component="p" variant="bodytext" sx={{ color: 'red' }}>
                  Select Value
                </Typography>
              )}
            </Stack>
          </Grid>
        </Grid>

        <Box alignItems="left" justifyContent="space-between" flexWrap={'wrap'} marginX={2}>
          <Stack direction={'column'} sx={{ mt: { md: 4, xs: 2 } }}>
            <TextField
              sx={{
                width: '100%',
                background: 'white',
                outline: 'none',
                border: 'none',
                borderRadius: 1
              }}
              InputProps={{
                style: { fontSize: '14px' }
              }}
              placeholder="Message *"
              id="text-area"
              multiline
              rows={6}
              variant="outlined"
              value={message}
              onChange={(e: any) => {
                setMessage(e.target.value);
              }}
            />

            {messageValidation && (
              <Typography component="p" variant="bodytext" sx={{ color: 'red' }}>
                Write Message
              </Typography>
            )}
          </Stack>{' '}
        </Box>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} marginX={2}>
          <Button
            variant="contained"
            type="button"
            style={{ backgroundColor: '#000', borderRadius: '50px' }}
            disabled={isDisabled}
            onClick={() => {
              submit();
            }}
          >
            {isDisabled ? (
              <CircularProgress color="inherit" style={{ height: 'auto !important', width: 'auto !important' }} />
            ) : (
              ' Send a Message '
            )}
          </Button>
        
      </Box>
      {errorMessage && (
            <Box sx={{ color: 'red', ml: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', mt: 2}}>
              {errorMessage}
            </Box>
          )}  
         </Box>
          <Snackbar
            open={successSnackbarOpen}
            autoHideDuration={3000}
            onClose={() => setSuccessSnackbarOpen(false)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <MuiAlert onClose={() => setSuccessSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
              E-Mail Sent Successfully..
            </MuiAlert>
          </Snackbar>
    </Stack>
  );
}

export default SectionThree;
