import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
  // MenuItem,
  // Select,
  CircularProgress,
  Paper,
  Grid
} from '@mui/material';
import axios from 'utils/axios';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import { Trash } from 'iconsax-react';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
// import { FormControl } from '@mui/material';
// import { InputLabel } from '@mui/material';
// import Approval from 'assets/images/icons/Approval.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomTextField from 'components/CustomTextField';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Modal } from '@mui/material';
// import { InputLabel } from '@mui/material';
// import { OutlinedInput } from '@mui/material';

interface Field {
  name: string;
  date_of_birth: string;
  isSpecial: any;
  guardian_id: any;
  center_id: any;
}

interface MarkerProps {
  questions: any;
  centerid: any;
  dayCareslistbyId: any;
}
const EnnrollmentFormPopup: React.FC<MarkerProps> = ({ questions, centerid, dayCareslistbyId }: any) => {
  const [fields, setFields] = useState<Field[]>([{ name: '', date_of_birth: '', guardian_id: '', center_id: '', isSpecial: false }]);
  const initialFields = [{ name: '', date_of_birth: '', guardian_id: '', center_id: '', isSpecial: false }];
  const [isLoading, setisLoading] = useState<any>(false);
  const [parentFirstName, setParentFirstName] = useState<any>();
  const [parentLastName, setParentLastName] = useState<any>();
  const [parentPhone, setParentPhone] = useState<any>();
  const [parentEmail, setParentEmail] = useState<any>();
  const [ansOne, setAnsOne] = useState<any>(null);
  const [ansTwo, setAnsTwo] = useState<any>(null);
  console.log(setAnsOne, setAnsTwo);
  // const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: any }>({});

  const [parentFirstNameValidation, setParentFirstNameValidation] = useState<any>(false);
  const [parentLastNameValidation, setParentLastNameValidation] = useState<any>(false);
  //   const [parentPhoneValidation, setParentPhoneValidation] = useState<any>(false);
  const [parentEmailValidation, setParentEmailValidation] = useState<any>(false);
  const [parentAnsValidation, setParentAnsValidation] = useState<any>(false);
  const [startDate, setStartDate] = useState<any>('');
  const [startDateValidation, setStartDateValidation] = useState<any>('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isDaySelected, setIsDaysSelected] = useState(false);
  // const [isDateFieldFocused, setIsDateFieldFocused] = useState(false);
  const [numberOfChildren, setNumberOfChildren] = useState(1);
  const [preferText, setPreferText] = useState<any>(false);
  const [preferEmail, setPreferEmail] = useState<any>(false);
  const [requireTour, setRequireTour] = useState<any>(false);

  const [selectedDays, setSelectedDays] = useState<any>({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  });
  console.log(selectedDays, 'selected days');

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, type: any) => {
    switch (type) {
      case 'preferText':
        setPreferText(event.target.checked);
        break;
      case 'preferEmail':
        setPreferEmail(event.target.checked);
        break;
      case 'requireTour':
        setRequireTour(event.target.checked);
        break;
      // ... you can add more cases for other checkboxes
      default:
        break;
    }
  };

  const handleChangeNumberOfChildren = (newCount: number) => {
    if (newCount < 1) return; // Prevent it from going below 1
    setNumberOfChildren(newCount);

    const newFields = Array.from(
      { length: newCount },
      (): Field => ({
        name: '',
        date_of_birth: '',
        isSpecial: false,
        guardian_id: '',
        center_id: centerid
      })
    );
    setFields(newFields);
  };

  // const handleDateFocus = () => {
  //   setIsDateFieldFocused(true);
  // };

  // const handleDateBlur = () => {
  //   if (!startDate) {
  //     setIsDateFieldFocused(false);
  //   }
  // };
  const handleDaySelection = (day: any) => {
    setSelectedDays((prevDays: any) => ({
      ...prevDays,
      [day]: !prevDays[day]
    }));
  };
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const dayAbbreviations = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  // useEffect(() => {
  //   setIsDisabled(false);
  // }, [parentFirstName]);

  // const handleChange1 = (intem: any, index: any, answerIndex: any) => {
  //   if (index == 0) {
  //     setAnsOne(intem);
  //   }
  //   if (index == 1) {
  //     setAnsTwo(intem);
  //   }

  //   setSelectedAnswers((prevSelected) => ({
  //     ...prevSelected,
  //     [index]: answerIndex
  //   }));
  //   // console.log(intem);
  //   // console.log(index);
  // };
  // const handleDateChange = (event: any) => {
  //   setStartDate(event.target.value);
  // };
  const handleCahnge = () => {
    var count = 0;
    const isAnyFieldEmpty = fields.some((field) => !field.name || !field.date_of_birth);
    if (isAnyFieldEmpty) {
      count += 1;

      setIsFormValid(true);
    } else {
      // All fields are filled, so set isFormValid to true
      setIsFormValid(false);

      // Perform your submission logic here
      // You can submit the form since all fields are filled.
    }

    if (parentFirstName) {
      setParentFirstNameValidation(false);
    } else {
      count += 1;
      setParentFirstNameValidation(true);
    }
    if (parentLastName) {
      setParentLastNameValidation(false);
    } else {
      count += 1;
      setParentLastNameValidation(true);
    }
    // if (parentPhone?.length == 12) {
    //   setParentPhoneValidation(false);
    // } else {
    //   count += 1;
    //   setParentPhoneValidation(true);
    // }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(parentEmail)) {
      setParentEmailValidation(false);
    } else {
      count += 1;
      setParentEmailValidation(true);
    }
    if (startDate) {
      setStartDateValidation(false);
    } else {
      count += 1;
      setStartDateValidation(true);
    }
    if (!Object.keys(selectedDays).every((k) => selectedDays[k] === false)) {
      setIsDaysSelected(false);
    } else {
      count += 1;
      setIsDaysSelected(true);
    }
    // if (ansOne != null && ansTwo != null) {
    //   setParentAnsValidation(false);
    // } else {
    //   count += 1;
    //   setParentAnsValidation(true);
    // }
    console.log(setParentAnsValidation);

    if (count > 0) {
      return;
    }
    setisLoading(true);
    const data = new FormData();
    data.append('first_name', parentFirstName);
    data.append('last_name', parentLastName);
    data.append('email', parentEmail);
    data.append('phone', parentPhone);
    data.append('question1', questions[0]?.questions);
    data.append('ans1', ansOne);
    data.append('question2', questions[1]?.questions);
    data.append('ans2', ansTwo);
    const questionsPayload = {
      questions: [
        {
          question: 'When you want to start?',
          ans: startDate ? startDate.toISOString() : null
        },
        {
          question: 'Do you prefer getting text notification?',
          ans: preferText ? 'yes' : 'no'
        },
        {
          question: 'Do you prefer getting email notification?',
          ans: preferEmail ? 'yes' : 'no'
        },
        {
          question: 'Which days in a week you need service?',
          ans: JSON.stringify(selectedDays)
        },
        {
          question: 'Do you need a tour before start?',
          ans: requireTour ? 'yes' : 'no'
        }
      ]
    };
    // data.append('when_to_start', startDate);
    // data.append('prefer_text', preferText);
    // data.append('prefer_email', preferEmail);
    // data.append('selected_days', JSON.stringify(selectedDays));
    // data.append('required_tour', requireTour);
    data.append('questions_payload', JSON.stringify(questionsPayload));
    axios({
      method: 'post',
      url: 'api/search/add_guardian',
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        if (response.data.status == 'pass') {
          setisLoading(false);

          AddChild(response.data.data.id);
          dispatch(
            openSnackbar({
              open: true,
              message: 'Pre-enrollment sunmitted and we will respond soon.',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );
        }
      })
      .catch((response) => {
        setisLoading(false);

        console.log(response.message);
      });
  };
  const AddChild = (id: any) => {
    const updatedData = fields.map((item) => ({
      ...item,
      guardian_id: id,
      center_id: centerid
    }));
    console.log(updatedData);
    axios({
      method: 'post',
      url: 'api/search/add_child',
      data: updatedData,
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
        setParentFirstName('');
        setParentLastName('');
        setParentPhone('');
        setParentEmail('');
        // setAnsOne('');
        // setAnsTwo('');
        setFields(initialFields);
        // setSelectedAnswers('');
        setStartDate('');
        setSelectedDays([]);
        if (response.data.status == 'pass') {
          setFields([]);
          dispatch(
            openSnackbar({
              open: true,
              message: 'Pre-enrollment sunmitted and we will respond soon.',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );
        }
      })
      .catch((response) => {
        console.log(response.message);
      });
  };

  const handleFieldChange = (index: number, field: keyof Field, value: string | boolean) => {
    const updatedFields = [...fields];
    if (field === 'isSpecial') {
      // Directly use the boolean value for checkboxes
      updatedFields[index][field] = value as boolean;
    } else {
      // For other fields, use the value as string
      updatedFields[index][field] = value as string;
    }
    setFields(updatedFields);
  };

  // const handleAddMore = () => {
  //   setFields([
  //     ...fields,
  //     { first_name: '', last_name: '', date_of_birth: '', gender: '', status: '1', guardian_id: '', center_id: centerid }
  //   ]);
  // };
  const handleClear = (index: number) => {
    const updatedFields = fields.filter((item: any, ind: number) => {
      return index != ind;
    });
    setFields(updatedFields);
    setNumberOfChildren((prevCount) => Math.max(prevCount - 1, 1));
    setOpen(false);
  };

  // useEffect(() => {
  //   const storedFormData = localStorage.getItem('enrollmentFormData');
  //   if (storedFormData) {
  //     const parsedData = JSON.parse(storedFormData);
  //     setFields(parsedData.fields || initialFields);
  //     // ... (set other state variables accordingly)
  //   }
  // }, []);

  // // Save form data to localStorage whenever it changes
  // useEffect(() => {
  //   const formData = {
  //     fields
  //     // ... (add other state variables if needed)
  //   };
  //   localStorage.setItem('enrollmentFormData', JSON.stringify(formData));
  // }, [fields]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { md: '300px', xs: 'auto' },
    bgcolor: 'background.paper',
    boxShadow: 2,
    p: 4
  };

  return (
    <Stack mb={5} sx={{ px: 2, position: 'relative' }}>
      <Stack display={'flex'} alignItems={'left'} mt={2}>
        <Typography variant="bodytext1" sx={{ fontSize: '20px' }}>
          Welcome to Childrencare 
        </Typography>
        <Typography variant="bodytext" sx={{ mt: 1 }}>
          Please enter children ages, expected start date, days of week when service is needed.
        </Typography>
        <Typography variant="bodytext1" sx={{mt:3}}>Tell Us About Yourself</Typography>
      </Stack>
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12} md={5}>
        
          <CustomTextField
            placeholder="First Name"
            value={parentFirstName}
            onChange={(e: any) => {
              const value = e.target.value;
              setParentFirstName(value);
              if (value.length > 2) {
                setParentFirstNameValidation(false);
              }
            }}
            validationError={parentFirstNameValidation}
            errorMessage="Enter First Name"
          />
        </Grid>
        <Grid item xs={12} md={5} sx={{ ml: {md:2,xs:0}, mt:{md:0,xs:2} }}>
          <CustomTextField
            placeholder="Last Name"
            value={parentLastName}
            onChange={(e: any) => {
              setParentLastName(e.target.value);
              if (e.target.value.length > 2) {
                setParentLastNameValidation(false);
              }
            }}
            validationError={parentLastNameValidation}
            errorMessage="Enter Last Name"
          />
        </Grid>
      </Grid>
      <Grid container sx={{ mt: '10px' }}>
        <Grid item xs={12} md={5}>
          <CustomTextField
            placeholder="Email"
            value={parentEmail}
            onChange={(e: any) => {
              setParentEmail(e.target.value);
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (emailRegex.test(e.target.value)) {
                setParentEmailValidation(false);
              } else {
                setParentEmailValidation(true);
              }
            }}
            validationError={parentEmailValidation}
            errorMessage="Enter Valid Email"
          />
        </Grid>
        <Grid item xs={6} md={3.5} sx={{ ml: {md:2,xs:0}, mt:{md:0,xs:2} }}>
          <Box>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={preferText}
                    onChange={(e) => handleCheckboxChange(e, 'preferText')}
                    sx={{
                      color: '#000',
                      borderRadius: '2px',
                      '&.Mui-checked': {
                        color: '#000'
                      }
                    }}
                  />
                }
                label={<Typography variant="bodytext">Prefer to Receive Text</Typography>}
              />
            </FormGroup>
          </Box>
        </Grid>
        <Grid item xs={6} md={2.5} sx={{ ml: {md:2,xs:0}, mt:{md:0,xs:2}}}>
          <Box>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={preferEmail}
                    sx={{
                      color: '#000',
                      borderRadius: '2px',
                      '&.Mui-checked': {
                        color: '#000'
                      }
                    }}
                    onChange={(e) => handleCheckboxChange(e, 'preferEmail')}
                  />
                }
                label={<Typography variant="bodytext">Prefer Email</Typography>}
              />
            </FormGroup>
          </Box>
        </Grid>
      </Grid>

      <Stack
        sx={{
          borderTop: '1px solid #c0c0c0',
          px: 2,
          my: 3
        }}
      ></Stack>

      <Stack direction={'column'} sx={{ width: '100%' }}>
        {parentAnsValidation && (
          <Typography variant="bodytext" sx={{ color: 'red' }}>
            Please Select All the Answers
          </Typography>
        )}
      </Stack>
      <Grid container>
        <Grid item xs={12}>
          <Stack>
            <Typography variant="bodytext1">Children Information</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={5}>
          <Box display="flex" alignItems="center" justifyContent="space-between" my={2}>
            <Typography variant="bodytext">How many Children</Typography>
            <Box display="flex" alignItems="center">
              <IconButton onClick={() => handleChangeNumberOfChildren(numberOfChildren - 1)} disabled={numberOfChildren <= 1} size="small">
                <RemoveIcon />
              </IconButton>
              <TextField
                type="text" // Change to text to prevent direct editing
                value={numberOfChildren}
                sx={{
                  border: '1px solid #5A5A5A',
                  borderRadius: '8px',
                  width: '50px',
                  textAlign: 'center',
                  '& .MuiInputBase-input': {
                    height: '0px'
                  }
                }}
                InputProps={{
                  // Disable input from the keyboard
                  readOnly: true
                }}
              />
              <IconButton onClick={() => handleChangeNumberOfChildren(numberOfChildren + 1)} size="small">
                <AddIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {fields.map((field, index) => (
        <Stack>
          <Grid container sx={{ mt: '10px' }}>
            <Grid item xs={12} md={4}>
              <Stack sx={{ width: '100%', border: '1px solid #000', borderRadius: '8px' }}>
                <Paper sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '35.13px' }}>
                  <TextField
                    placeholder="Name"
                    value={field.name}
                    InputProps={{
                      style: {
                        fontSize: '14px',
                        color: '#1A1A1A' // Text color
                      }
                    }}
                    sx={{
                      width: '100%',
                      '& .css-70u81m-MuiFormControl-root-MuiTextField-root': {
                        boxShadow: 'none'
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: '#1A1A1A',
                        fontSize: '14px'
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'transparent'
                        },
                        '&:hover fieldset': {
                          borderColor: 'transparent'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'transparent',
                          boxShadow: 'none'
                        }
                      }
                    }}
                    onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                  />
                  {/* <Box sx={{ background: '#374151', p: '3px', m: '2px', fontSize: '8px', borderRadius: '10px' }}>
                    <PermIdentityIcon sx={{ color: '#fff' }} />
                  </Box> */}
                </Paper>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4} sx={{ ml: {md:2,xs:0}, mt:{md:0,xs:2} }}>
              <Stack sx={{ width: '100%', border: '1px solid #000', borderRadius: '8px' }}>
                <Paper sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',pl: 1, height: '35.13px' }}>
                  <DatePicker
                    placeholderText="Date of Birth"
                    selected={fields[index].date_of_birth ? new Date(fields[index].date_of_birth) : null}
                    onChange={(date: any) => handleFieldChange(index, 'date_of_birth', date)}
                    dateFormat="MM/dd/yyyy"
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                    isClearable
                    peekNextMonth
                    maxDate={new Date()}
                  />
                  <Box sx={{ p: '3px', m: '2px', fontSize: '8px', borderRadius: '10px' }}>
                    <CalendarTodayOutlinedIcon sx={{ color: '#000' }} />
                  </Box>
                </Paper>
              </Stack>
            </Grid>
            <Grid item xs={12} md={2.5} sx={{ ml: {md:2,xs:0}, mt:{md:0,xs:2} }}>
              <Box>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={field.isSpecial}
                        sx={{
                          color: '#000',
                          borderRadius: '2px',
                          '&.Mui-checked': {
                            color: '#000'
                          }
                        }}
                        onChange={(e) => handleFieldChange(index, 'isSpecial', e.target.checked)}
                      />
                    }
                    label={<Typography variant="bodytext">Special Need</Typography>}
                  />
                </FormGroup>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', alignItems: 'right', justifyContent: 'right' }}>
            {index != 0 && <Trash className="child-care-center" size="28" cursor={'pointer'} color="#FF8A65" onClick={handleOpen} />}
          </Box>
          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="bodytext1" component="h2">
                Are You Sure To Want To Delete This?
              </Typography>
              {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               
              </Typography> */}
              <Stack sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', mt: 2 }}>
                <Button sx={{ width: '100px', border: '1px solid #000', color: '#000' }} onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  sx={{ width: '100px', border: '1px solid #000', color: '#fff', background: '#000', ml: 2 }}
                  onClick={() => handleClear(index)}
                >
                  Yes
                </Button>
              </Stack>
            </Box>
          </Modal>
        </Stack>
      ))}
      {isFormValid && (
        <Typography variant="bodytext" sx={{ color: 'red' }}>
          Please fill all fields for child
        </Typography>
      )}

      <Grid container>
        <Grid item xs={12}>
          <Stack display={'flex'} alignItems={'left'} my={2}>
            <Typography variant="bodytext1">When do you want to start:</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack sx={{ mb: 1, width: '100%', border: '1px solid #000', borderRadius: '8px' }}>
            <Paper sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl: 1, height: '35.13px' }}>
              <DatePicker
                placeholderText="Start Date"
                selected={startDate ? new Date(startDate) : null}
                onChange={(date) => setStartDate(date)}
                dateFormat="MM/dd/yyyy"
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
                isClearable
                peekNextMonth
                className="datepicker-react"
              />
              <Box sx={{ background: '#fff', p: '3px', m: '2px', fontSize: '8px', borderRadius: '10px' }}>
                <CalendarTodayOutlinedIcon sx={{ color: '#000' }} />
              </Box>
            </Paper>
          </Stack>
          {startDateValidation && (
            <Typography variant="bodytext" sx={{ color: 'red' }}>
              Please Select a valid date.
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} md={6} sx={{ ml: {md:2,xs:0}, mt:{md:0,xs:2} }}>
          <Stack direction="row" spacing={0}>
            {days.map((day, index) => (
              <Button
                key={day}
                variant={selectedDays[day] ? 'contained' : 'outlined'}
                onClick={() => handleDaySelection(day)}
                sx={{
                  p: 0,
                  minWidth: '14.2%',
                  height: '35.13px',
                  borderRadius: 0,
                  // border: 'none',
                  border: '1px solid #707070',
                  borderRight: 'none',
                  backgroundColor: selectedDays[day] ? '#000' : '#f7f7f7',
                  color: selectedDays[day] ? '#fff' : '#000',
                  '&:first-of-type': {
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px',
                    borderRight: '1px solid #707070'
                  },
                  '&:last-of-type': {
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px',
                    borderRight: '1px solid #707070'
                  },
                  '&:hover': {
                    border: '1px solid #707070',
                    borderRight: 'none',
                    zIndex: 1,
                    backgroundColor: selectedDays[day] ? '#000' : 'transparent'
                  },
                  '&:focus': {
                    border: '1px solid #707070',
                    zIndex: 1
                  }
                }}
              >
                {dayAbbreviations[index]}
              </Button>
            ))}
          </Stack>
          {isDaySelected && (
            <Typography variant="bodytext" color="error">
              Please Select day or days need care.
            </Typography>
          )}
        </Grid>
        <Grid xs={12}>
          <Box>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={requireTour}
                    sx={{
                      color: '#000',
                      borderRadius: '2px',
                      '&.Mui-checked': {
                        color: '#000'
                      }
                    }}
                    onChange={(e) => handleCheckboxChange(e, 'requireTour')}
                  />
                }
                label={<Typography variant="bodytext">Require a Tour to schedule</Typography>}
              />
            </FormGroup>
          </Box>
        </Grid>
      </Grid>

      <Box display="flex" justifyContent="right" mt={5}>
        <Button
          disabled={centerid ? false : true}
          variant="contained"
          sx={{
            background: '#000',
            borderRadius: '20px',
            width: '133px',
            '&:hover': {
              background: 'rgba(0, 0, 0, 0.8)' // Adjust the alpha channel (0.8) as needed
            }
          }}
          onClick={handleCahnge}
        >
          {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Submit '}
        </Button>
      </Box>
    </Stack>
  );
};

export default EnnrollmentFormPopup;
