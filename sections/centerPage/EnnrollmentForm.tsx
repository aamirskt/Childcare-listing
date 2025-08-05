import React, { useRef, useState } from 'react';
import {
  // TextField,
  Button,
  Box,
  Typography,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
  // MenuItem,
  // Select,
  // CircularProgress,
  Paper,
  Grid,
  Dialog,
  DialogContent,
  CircularProgress
} from '@mui/material';
import axios from 'utils/axios';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import { Trash, Calendar, AddCircle } from 'iconsax-react';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
// import { FormControl } from '@mui/material';
// import { InputLabel } from '@mui/material';
// import Approval from 'assets/images/icons/Approval.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomTextField from 'components/CustomTextField';
// import { IconButton } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import { Modal } from '@mui/material';
// import { InputBase } from '@mui/material';
import { TextField } from '@mui/material';
// import { InputLabel } from '@mui/material';
// import { OutlinedInput } from '@mui/material';
import TellusPopup from 'components/tellus';
import DeleteChildrenModal from 'components/DeleteChildrenModal';
import { Divider } from '@mui/material';
import Image from 'next/image';
import PopupTransition from 'components/@extended/Transitions';
import { useRouter } from 'next/navigation';
const xcicle = '/assets/images/home/x-circle.png';
interface Field {
  name: any;
  isName: boolean;
  isDob: boolean;
  date_of_birth: any;
  is_special: any;
  is_full_week: any;
  selectedDays: any;
  isDaySelected: boolean;
  tution_fee: any;
  isTutionFee: boolean;
  start_date: any;
  isStartDate: boolean;
  isPrice: boolean;
  program_id: any;
}

interface MarkerProps {
  questions: any;
  centerid: any;
  dayCareslistbyId: any;
  setFields?: any;
  fields?: any;
  programs?: any;
  notes?: any;
  setNotes?: any;
  data?: any;
  isMaketplace?: any;
}
const EnnrollmentForm: React.FC<MarkerProps> = ({
  questions,
  centerid,
  dayCareslistbyId,
  programs,
  notes,
  setNotes,
  data,
  isMaketplace
}: MarkerProps) => {
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false)
    setModalOpenMessage(false)
  }
  const [selectedChil, setSelectedChild] = useState<any>('');
  const [number, setNumber] = useState<any>(null);
  const router = useRouter();
  const [modalOpenMessage, setModalOpenMessage] = useState(false);
    const [isLoading, setIsLoading] = useState<any>(false);
  const [parentInfo, setParentInfo] = useState<any>({
    name: '',
    isName: false,
    email: '',
    isEmail: false,
    phone: '',
    isPhone: false,
    // zipCode: '',
    // isZipcode: false
  });
  const [fields, setFields] = useState<Field[]>([
    {
      name: '',
      isName: false,
      date_of_birth: '',
      isDob: false,
      is_special: false,
      is_full_week: true,
      start_date: '',
      isStartDate: false,
      tution_fee: '',
      isTutionFee: false,
      isPrice: false,
      program_id: '',
      isDaySelected: false,
      selectedDays: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true
      }
    }
  ]);

  const fieldRefs = useRef<Array<HTMLDivElement | null>>([]);
  const handleCloseModal1 = (event: any, reason: any) => {
    if (reason && reason === 'backdropClick') return;
    setModalOpen1(false);
  };
  const handleDeleteConfirm = () => {
    const updatedFields = fields.filter((item: any, ind: number) => {
      return selectedChil != ind;
    });
    setFields(updatedFields);
    // setNumberOfChildren((prevCount) => Math.max(prevCount - 1, 1));
    handleCloseModal();
  };

  const handleSubmit1 = async () => {
    setIsLoading(true);
    const _tempParentInfo: any = { ...parentInfo };
    let _tempCount = 0;

    // Validate name
    if (_tempParentInfo.name.trim() === '') {
      _tempParentInfo.isName = true;
      _tempCount++;
    } else {
      _tempParentInfo.isName = false;
    }

    const cleanedPhone = (_tempParentInfo.phone || '').replace(/[^0-9]/g, '');
    const isPhoneValid = cleanedPhone.length === 10;

    const isEmailValid =
      _tempParentInfo.email &&
      _tempParentInfo.email.toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    if (!isPhoneValid && !isEmailValid) {
      _tempParentInfo.isPhone = true;
      _tempParentInfo.isEmail = true;
      _tempCount++;
    } else {
      _tempParentInfo.isPhone = false;
      _tempParentInfo.isEmail = false;
    }


    if (_tempCount !== 0) {
      setParentInfo({ ..._tempParentInfo });
      return;
    } else {
      setParentInfo({ ..._tempParentInfo });

      const _tempPInfo: any = {
        name: parentInfo.name || '',
        phone: parentInfo.phone || '',
        email: parentInfo.email || '',
        zipCode: null // always send null
      };

      let _tempFields: any = [];
      fields.forEach((element: any) => {
        let _temp = {};
        Object.keys(element.selectedDays).forEach((key: any) => {
          if (element.selectedDays[key] === true) {
            _temp = { ..._temp, [key]: true };
          }
        });

        _tempFields.push({
          name: element.name,
          date_of_birth: element.date_of_birth,
          is_special: element.is_special,
          selectedDays: _temp,
          start_date: element.start_date,
          program_id: element.program_id
        });
      });

      let _tempData: any = [];
      if (data && data.length > 0) {
        data.forEach((item: any) => {
          if (item.isChecked) {
            _tempData.push(item.id);
          }
        });
      }

      const _data = {
        children_data: _tempFields,
        parent_data: { ..._tempPInfo },
        selected_centers: false ? _tempData : [centerid],
        notes: notes,
        is_market_place: false
      };

      await axios({
        method: 'post',
        url: 'api/search/market_place_bid',
        data: _data,
        headers: { 'Content-Type': 'application/json' }
      })
        .then(async (response) => {
          if (response.data.status === 'fail') {
            dispatch(
              openSnackbar({
                open: true,
                message: response.data.message,
                variant: 'alert',
                alert: {
                  color: 'error'
                },
                close: false
              })
            );
          }

          if (response.data.status === 'pass') {
            setIsLoading(false);
            setModalOpenMessage(true);
            setNotes('');
            setParentInfo({
              name: '',
              isName: false,
              email: '',
              isEmail: false,
              phone: '',
              isPhone: false,
              zipCode: '',
              isZipcode: false
            });
            setFields([
              {
                name: '',
                isName: false,
                date_of_birth: '',
                isDob: false,
                is_special: false,
                is_full_week: true,
                start_date: '',
                isStartDate: false,
                tution_fee: '',
                isTutionFee: false,
                isPrice: false,
                program_id: '',
                isDaySelected: false,
                selectedDays: {
                  monday: true,
                  tuesday: true,
                  wednesday: true,
                  thursday: true,
                  friday: true
                }
              }
            ]);
            dispatch(
              openSnackbar({
                open: true,
                message: 'Bid placed successfully and we will respond soon.',
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
          console.log('Error uploading:', error.message);
          dispatch(
            openSnackbar({
              open: true,
              message: Object.keys(error?.data || {}).map((_data: any) => (
                <Typography sx={{ fontSize: '14px' }}>
                  {error?.data[_data]}
                </Typography>
              )),
              variant: 'alert',
              alert: {
                color: 'error'
              },
              close: false
            })
          );
        });
    }
  };

  const handleSubmit = () => {
    debugger;
    const _tempFields = [...fields];
    let _tempCount = 0;
    fields.map((item: any, ind: any) => {
      if (item.name == '') {
        _tempFields[ind].isName = true;
        _tempCount++;
      } else {
        _tempFields[ind].isName = false;
      }
      if (!item.date_of_birth || item.date_of_birth == '') {
        _tempFields[ind].isDob = true;
        _tempCount++;
      } else {
        _tempFields[ind].isDob = false;
      }
      if (!item.start_date || item.start_date == '') {
        _tempFields[ind].isStartDate = true;
        _tempCount++;
      } else {
        _tempFields[ind].isStartDate = false;
      }
      if (item.is_full_week) {
        _tempFields[ind].isDaySelected = false;
      } else {
        if (Object.keys(item.selectedDays).every((k) => item.selectedDays[k] === false)) {
          _tempFields[ind].isDaySelected = true;
          _tempCount++;
        } else {
          _tempFields[ind].isDaySelected = false;
        }
      }

      // if (item.tution_fee == '') {
      //   _tempFields[ind].isTutionFee = true;
      //   _tempCount++;
      // } else {
      //   _tempFields[ind].isTutionFee = false;
      //   setModalOpen1(true);
      // }
    });
    //  let _tempData: any = [];
    //  if(data && data.length > 0){
    //     data.forEach((item: any) => {
    //    if(item.isChecked){
    //      _tempData.push(item.id)
    //    }
    //  });
    //  }
    //  if(_tempData.length == 0  ){
    //   dispatch(
    //     openSnackbar({
    //       open: true,
    //       message: 'Please select centers from list.',
    //       variant: 'alert',
    //       alert: {
    //         color: 'error'
    //       },
    //       close: false
    //     })
    //   );
    //   _tempCount++;
    // }
    if (_tempCount !== 0) {
      setFields([..._tempFields]);
      // setisLoading(false)
      return;
    } else {
      setFields([..._tempFields]);
      // setModalOpen1(true);
      handleSubmit1()
      // handleOpenModal1();
      // setIsShowTopMarketPlace(true);
      // setIsSimpleSearch(false);
      // onClose();
    }
  };
  // const getGroupName = (dob: any) => {
  //   const _dob = new Date(dob);
  //   const _date = new Date();
  //   const res = _date.getMonth() - _dob.getMonth() + 12 * (_date.getFullYear() - _dob.getFullYear());
  //   const _temp: any = programs.find((item: any) => parseInt(item.age_months) >= res);
  //   return _temp;
  // };
  const handleFieldChange = (index: number, field: keyof Field, value: string | boolean) => {
    const updatedFields = [...fields];
    if (field === 'is_special') {
      // Directly use the boolean value for checkboxes
      updatedFields[index][field] = value as boolean;
    } else {
      // For other fields, use the value as string

      // let _tempList: any = [];
      // data.forEach((lis: any) => {
      //   const _tempObj = lis.rates.find((obj: any) => obj.program_id == getGroupName(updatedFields[index].date_of_birth)?.id);
      //   _tempList.push(_tempObj);
      // });
      // if (_tempList.length > 0) {
      //   updatedFields[index].isPrice = true;
      // } else {
      //   updatedFields[index].isPrice = false;
      // }
      updatedFields[index].isPrice = false;
      updatedFields[index][field] = value;
      updatedFields[index].program_id = 1;
    }
    setTimeout(() => {
      setFields([...updatedFields]);
    }, 1000);
  };
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  const dayAbbreviations = ['M', 'T', 'W', 'T', 'F'];

  // useEffect(() => {
  //   if (fieldRefs.current.length > 0) {
  //     const lastRef = fieldRefs.current[fieldRefs.current.length - 1];
  //     if (lastRef) {
  //       lastRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //     }
  //   }
  // }, [fields.length]); // triggers when new child is added


  return (
    <Stack mb={5} sx={{ px: 4, position: 'relative' }}>
      <Stack display={'flex'} alignItems={'left'} mt={2}>
        <Typography variant="bodytext1">Children Information</Typography>
      </Stack>
      <Box display="flex" justifyContent={'space-between'} alignItems="center" my={2}>
        <Typography variant="bodytext" sx={{ mr: 1, fontWeight: 'bold' }}>
          Child 1
        </Typography>
        <Box
          onClick={() => {
            setFields((prevFields) => {
              const newFields = [
                ...prevFields,
                {
                  name: '',
                  isName: false,
                  date_of_birth: '',
                  isDob: false,
                  is_special: false,
                  is_full_week: true,
                  start_date: '',
                  isStartDate: false,
                  tution_fee: '',
                  isPrice: false,
                  isTutionFee: false,
                  program_id: '',
                  isDaySelected: false,
                  selectedDays: {
                    monday: true,
                    tuesday: true,
                    wednesday: true,
                    thursday: true,
                    friday: true
                  }
                }
              ];
              fieldRefs.current.push(null); // Add placeholder for the new ref
              return newFields;
            });
          }}

          display="flex"
          alignItems="center"
          sx={{ cursor: 'pointer', borderBottom: '1px solid #000' }}
        >
          <AddCircle className="child-care-center" size="14" />{' '}
          <Typography variant="bodytext" sx={{ ml: 1, fontSize: '12px', fontWeight: 'bold' }}>
            Add more Children{' '}
          </Typography>
        </Box>
      </Box>

      {fields.map((field: any, index: any) => (
        <div key={index} ref={(el: any) => (fieldRefs.current[index] = el)}>
          <Stack sx={{ mb: 2 }}>
            {index != 0 && (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 5 }}>
                <Typography mt={2} variant="bodytext" sx={{ fontWeight: 'bold' }}>
                  Child {index + 1}
                </Typography>
                <Trash
                  className="child-care-center"
                  size="28"
                  cursor={'pointer'}
                  color="#FF8A65"
                  onClick={() => {
                    setSelectedChild(index);
                    setModalOpen(true);
                  }}
                />

                {/* // <Button sx={{ my: 2 }} variant="contained" color="secondary" >
                   //   Cancel
                   // </Button> */}
              </Box>
            )}

            <Grid container alignItems={'center'} spacing={2}>
              <Grid item xs={12}>
                <CustomTextField
                  placeholder="Name"
                  value={field.name}
                  onChange={(e: any) => {
                    const updatedFields = [...fields];
                    updatedFields[index].name = e.target.value;
                    setFields(updatedFields);
                  }}
                  // validationError={field.isName}
                  errorMessage="Enter Last Name"
                  isMarketPlace={true}
                />
                {field.isName && (
                  <Typography variant="bodytext" sx={{ color: field.isName ? 'red' : '#fff' }}>
                    Enter name
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <Stack sx={{ width: '100%', border: '1px solid #d3d3d3', borderRadius: '8px' }}>
                  <Paper
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      pl: 1,
                      height: '36.13px',
                      boxShadow: 'none'
                    }}
                  >
                    <DatePicker
                      placeholderText="Date of Birth"
                      selected={field.date_of_birth ? new Date(field.date_of_birth) : null}
                      onChange={(date: any) => {
                        var today = new Date();
                        var birthDate = new Date(date);
                        var age = today.getFullYear() - birthDate.getFullYear();
                        var m = today.getMonth() - birthDate.getMonth();
                        age = age * 12 + m;
                        console.log(age, 'age');

                        handleFieldChange(index, 'date_of_birth', date);
                      }}
                      dateFormat="MM/dd/yyyy"
                      showYearDropdown
                      showMonthDropdown
                      dropdownMode="select"
                      isClearable
                      peekNextMonth
                      maxDate={new Date()}
                    />
                    <Box sx={{ p: '3px' }}>
                      <Calendar size={'18px'} />
                    </Box>
                  </Paper>
                </Stack>
                {field.isDob && (
                  <Typography variant="bodytext" sx={{ color: 'red' }}>
                    Enter date of birth
                  </Typography>
                )}
              </Grid>

              <Grid item xs={12}>
                <Stack sx={{ border: '1px solid #d3d3d3', borderRadius: '8px' }}>
                  <Paper
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      pl: 1,
                      height: '36.13px',
                      boxShadow: 'none'
                    }}
                  >
                    <DatePicker
                      placeholderText="Start Date"
                      selected={field.start_date ? new Date(field.start_date) : null}
                      onChange={(date) => {
                        const updatedFields = [...fields];
                        updatedFields[index].start_date = date;
                        setFields(updatedFields);
                      }}
                      dateFormat="MM/dd/yyyy"
                      showYearDropdown
                      showMonthDropdown
                      dropdownMode="select"
                      isClearable
                      peekNextMonth
                      minDate={new Date()}
                      className="datepicker-react"
                      popperProps={{
                        placement: 'bottom-end'
                      }}
                    />
                    <Box sx={{ p: '3px' }}>
                      <Calendar size={'18px'} />
                    </Box>
                  </Paper>
                </Stack>
                {field.isStartDate && (
                  <Typography variant="bodytext" sx={{ color: 'red', display: { xs: 'none', md: 'block', p: 0 } }}>
                    Enter start date
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sx={{ width: '100%' }}>
                <Stack direction="row" justifyContent={'center'} alignItems={'center'} spacing={0} width={'100%'}>
                  {days.map((day, i) => (
                    <Stack
                      key={day}
                      // variant={field.selectedDays[day] ? 'contained' : 'outlined'}
                      onClick={() => {
                        const updatedFields = [...fields];
                        updatedFields[index].selectedDays = {
                          ...updatedFields[index].selectedDays,
                          [day]: !updatedFields[index].selectedDays[day]
                        };
                        if (!Object.keys(updatedFields[index].selectedDays).every((k) => updatedFields[index].selectedDays[k] === true)) {
                          updatedFields[index].is_full_week = false;
                        } else {
                          updatedFields[index].is_full_week = true;
                        }
                        setFields(updatedFields);
                      }}
                      justifyContent={'center'}
                      alignItems={'center'}
                      sx={{
                        width: '100%',
                        minWidth: '14.2%',
                        height: !field.selectedDays[day] ? '34.9px' : '35.13px',
                        borderRadius: i == 0 ? '10px 0px 0px 10px' : i == 4 ? '0px 10px 10px 0px' : 0,
                        textAlign: 'center',
                        border: '1px solid #d3d3d3',
                        cursor: 'pointer',
                        backgroundColor: field.selectedDays[day] ? '#000' : '#fff',
                        color: field.selectedDays[day] ? '#fff' : '#000',
                        fontSize: '14px'
                        // '&:first-of-type': {
                        //   borderTopLeftRadius: '10px',
                        //   borderBottomLeftRadius: '10px',
                        //   borderRight: field.selectedDays[day] ? '1px solid #000':'1px solid #d3d3d3'
                        // },
                        // '&:last-of-type': {
                        //   borderTopRightRadius: '10px',
                        //   borderBottomRightRadius: '10px',
                        //   borderRight:  '1px solid #d3d3d3'
                        // },
                        // '&:hover': {
                        //   border: field.selectedDays[day] ? '1px solid #000': '1px solid #d3d3d3',
                        //   borderRight: 'none',
                        //   zIndex: 1,
                        //   backgroundColor: field.selectedDays[day] ? '#000' : 'transparent',
                        //   color: field.selectedDays[day] ? '#fff' : '#000'
                        // },
                        // '&:focus': {
                        //   border: '1px solid #707070',
                        //   zIndex: 1
                        // }
                      }}
                    >
                      {dayAbbreviations[i]}
                    </Stack>
                  ))}
                </Stack>

                {field.isDaySelected && (
                  <Typography variant="bodytext" sx={{ color: 'red', display: 'block' }}>
                    Select day or days need care.
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', px: 1 }}>

                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={field.is_full_week}
                          sx={{
                            p: 0,
                            color: '#d3d3d3',
                            borderRadius: '2px',
                            '&.Mui-checked': {
                              color: '#000'
                            }
                          }}
                          onChange={(e) => {
                            const updatedFields = [...fields];
                            updatedFields[index].is_full_week = e.target.checked;
                            if (e.target.checked) {
                              updatedFields[index].selectedDays = {
                                monday: true,
                                tuesday: true,
                                wednesday: true,
                                thursday: true,
                                friday: true
                              };
                            } else {
                              updatedFields[index].selectedDays = {
                                monday: false,
                                tuesday: false,
                                wednesday: false,
                                thursday: false,
                                friday: false
                              };
                            }
                            setFields(updatedFields);
                          }}
                        />
                      }
                      label={<Typography sx={{ fontSize: '12px', color: '#000' }}>Full Time Weekly</Typography>}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={field.is_special}
                          sx={{
                            p: 0,
                            color: '#d3d3d3',
                            borderRadius: '2px',
                            '&.Mui-checked': {
                              color: '#000'
                            }
                          }}
                          onChange={(e) => {
                            const updatedFields = [...fields];
                            updatedFields[index].is_special = e.target.checked;
                            setFields(updatedFields);
                          }}
                        />
                      }
                      label={<Typography sx={{ fontSize: '12px', color: '#000' }}>Special Need</Typography>}
                    />
                  </FormGroup>
                  {/* <FormGroup>
                               <FormControlLabel
                                 control={
                                   <Checkbox
                                     checked={field.is_full_week}
                                     sx={{
                                       p: 0,
                                       color: '#d3d3d3',
                                       borderRadius: '2px',
                                       '&.Mui-checked': {
                                         color: '#000'
                                       }
                                     }}
                                     onChange={(e) => {
                                       const updatedFields = [...fields];
                                       updatedFields[index].is_full_week = e.target.checked;
                                       if (e.target.checked) {
                                         updatedFields[index].selectedDays = {
                                           monday: true,
                                           tuesday: true,
                                           wednesday: true,
                                           thursday: true,
                                           friday: true,
                                           saturday: true,
                                           sunday: true
                                         };
                                         updatedFields[index].isDaySelected = true;
                                       } else {
                                         updatedFields[index].selectedDays = {
                                           monday: false,
                                           tuesday: false,
                                           wednesday: false,
                                           thursday: false,
                                           friday: false,
                                           saturday: false,
                                           sunday: false
                                         };
                                         updatedFields[index].isDaySelected = false;
                                       }
                                       setFields(updatedFields);
                                     }}
                                   />
                                 }
                                 label={
                                   <Typography sx={{ fontSize: '12px', color: '#000' }}>Full Time Weekly</Typography>
                                 }
                               />
                             </FormGroup> */}
                </Stack>
              </Grid>

              {/* {!field.is_full_week && (
                           <Grid item xs={12} sx={{width: '100%'}}>
                             <Stack direction="row" spacing={0} width={'100%'} >
                               {days.map((day, i) => (
                                 <Button
                                   key={day}
                                   variant={field.selectedDays[day] ? 'contained' : 'outlined'}
                                   onClick={() => {
                                     const updatedFields = [...fields];
                                     updatedFields[index].selectedDays = {
                                       ...updatedFields[index].selectedDays,
                                       [day]: !updatedFields[index].selectedDays[day]
                                     };
                                     setFields(updatedFields);
                                   }}
                                   sx={{
                                     mt: 2,
                                     p: 0,
                                     width: '100%',
                                     minWidth: '14.2%',
                                     height: '35.13px',
                                     borderRadius: 0,
                                     // border: 'none',
                                     border: '1px solid #d3d3d3',
                                     borderRight: 'none',
                                     backgroundColor: field.selectedDays[day] ? '#000' : '#fff',
                                     color: field.selectedDays[day] ? '#fff' : '#000',
                                     '&:first-of-type': {
                                       borderTopLeftRadius: '10px',
                                       borderBottomLeftRadius: '10px',
                                       borderRight: '1px solid #d3d3d3'
                                     },
                                     '&:last-of-type': {
                                       borderTopRightRadius: '10px',
                                       borderBottomRightRadius: '10px',
                                       borderRight: '1px solid #d3d3d3'
                                     },
                                     '&:hover': {
                                       border: '1px solid #d3d3d3',
                                       borderRight: 'none',
                                       zIndex: 1,
                                       backgroundColor: field.selectedDays[day] ? '#000' : 'transparent',
                                       color: field.selectedDays[day] ? '#fff' : '#000'
                                     },
                                     '&:focus': {
                                       border: '1px solid #707070',
                                       zIndex: 1
                                     }
                                   }}
                                 >
                                   {dayAbbreviations[i]}
                                 </Button>
                               ))}
                             </Stack>

                             {field.isDaySelected && (
                               <Typography variant="bodytext" sx={{ color: 'red' }}>
                                 Select day or days need care.
                               </Typography>
                             )}
                           </Grid>
                         )}
                         {!field.is_full_week && (
                           <Grid item xs={12}  >
                             <Typography sx={{ color: '#000', fontSize: '12px', maxWidth: '400px' }}>
                               Please Select Days & we will show you daily average rate in the slider below
                             </Typography>
                           </Grid>
                         )} */}
            </Grid>
            {fields.length > 1 && ((fields.length - 1) != index) && <Divider sx={{ my: 2 }} />}

          </Stack>
        </div>
      ))}
      {/* {fields.length > 1 && <Divider />} */}
      <Divider sx={{ my: 2 }} />
      <Stack>
        <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>we need either your email or phone to get back to you</Typography>
      </Stack>
      <Grid item xs={12} my={2}>
        <CustomTextField
          placeholder="Name"
          value={parentInfo.name}
          onChange={(e: any) => {
            const value = e.target.value;
            setParentInfo({ ...parentInfo, name: value });
          }}
          // validationError={parentInfo.isName}
          errorMessage="Enter Last Name"
          isMarketPlace={true}
        />
        {parentInfo.isName && (
          <Typography variant="bodytext" sx={{ color: parentInfo.isName ? 'red' : '#fff' }}>
            Enter name
          </Typography>
        )}
      </Grid>
      <CustomTextField
        placeholder="Enter Valid Email"
        value={parentInfo.email}
        onChange={(e: any) => {
          setParentInfo({ ...parentInfo, email: e.target.value });
        }}
        validationError={parentInfo.isEmail}
        isMarketPlace={true}
        errorMessage="Enter Valid Email"

      />
      <Stack pt={1} justifyContent={'center'} margin={'auto'}><Typography sx={{ fontSize: '14px', fontWeight: '400' }}>-------- OR --------</Typography></Stack>
      <TextField
        placeholder="Phone Number"
        sx={{
          width: '100%',
          background: 'white',
          outline: 'none',
          border: 'none',
          borderRadius: 1,
          mb: number ? 0 : 2,
          mt: 1,
          '& .MuiOutlinedInput-input': {
            padding: '9px',
          },
          '& .MuiInputBase-input::placeholder': {
            color: '#1D2630', // Placeholder text color
            fontSize: '14px',
            opacity: '0.8',
            pl: 0.4
          },
        }}
        InputProps={{
          style: { fontSize: '14px' }
        }}
        value={parentInfo.phone}
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
          if (e.target.value.length > 12) {
            debugger;
            setNumber(true);
          } else {
            setNumber(false);
          }
          setParentInfo({ ...parentInfo, phone: formattedValue });
          // setNumber(formattedValue);
        }}
      />
      {number && (
        <Typography sx={{ color: 'red', fontSize: '12px', mt: 0, mb: number ? 2 : 0 }} variant="p1">
          Phone Number Must Be 10 Digits
        </Typography>
      )}

      <Grid item xs={12} sx={{ my: 2 }}>
        <TextField
          fullWidth
          multiline

          rows={3}
          placeholder="Please enter additional information that will help negotiate the rates like special need and schedule etc."
          value={notes}
          onChange={(e: any) => {
            setNotes(e.target.value);
          }}
          // validationError={field.isName}
          //   errorMessage="Enter Last Name"
          InputProps={{
            style: {
              fontSize: '14px',
              color: '#5A5A5A', // Text color

              //   height:'60.13px'
              // ... add other input styles if needed
            }
          }}
          sx={{
            display: 'none',
            '& .MuiInputBase-input::placeholder': {
              color: '#5e5e5e', // Placeholder text color
              fontSize: '14px'
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#d3d3d3' // Border color
              },
              '&:hover fieldset': {
                borderColor: '#d3d3d3' // Hover Border Color
              },
              '&.Mui-focused fieldset': {
                borderColor: '#d3d3d3' // Focused Border Color
              }
            }
          }}
        />
      </Grid>

      <Box display="flex" justifyContent="center" sx={{ background: '#fff', position: 'sticky', bottom: 0, py: 2 }}>
        <Button
          disabled={centerid ? false : true}
          variant="contained"
          sx={{
            background: '#000',
            borderRadius: '20px',
            width: '100%',
            '&:hover': {
              background: 'rgba(0, 0, 0, 0.8)' // Adjust the alpha channel (0.8) as needed
            }
          }}
          onClick={handleSubmit}
        >
          {isLoading ? (
            <CircularProgress style={{ height: 'auto !important', width: 'auto !important', padding: '4px 0px' }} color="inherit" />
          ) : (
            'Submit'
          )}
        </Button>
      </Box>
      <TellusPopup
        isMarketPlace={false}
        setNotes={setNotes}
        notes={notes}
        open={isModalOpen1}
        data={[centerid]}
        fields={fields}
        setFields={setFields}
        onClose={handleCloseModal1}
      />
      <Dialog
        open={modalOpenMessage}
        onClose={handleCloseModal}
        keepMounted
        TransitionComponent={PopupTransition}
        maxWidth="xs"
        sx={{
          backdropFilter: 'blur(5px)',
          '& .MuiDialog-container': {
            '& .MuiPaper-root': {
              borderRadius: { xs: '10px', md: '50px' },
              width: '100%',
              maxWidth: { xs: '400px', md: '630px' } // Set your width here
            }
          }
        }}
         PaperProps={{
    sx: {
      m: 0,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }}
        aria-labelledby="column-delete-title"
        aria-describedby="column-delete-description"
      >
        <DialogContent sx={{ p: '20px 26px', backgroundColor: '#FFF2D6' }}>
          <Box
            onClick={() => {
              setModalOpen(false);
              router.push('/');
            }}
            sx={{ position: 'absolute', right: { xs: '10px', md: '40px' }, top: 1, cursor: 'pointer', zIndex: 1 }}
          >
            <Image
              height={20}
              width={20}
              src={xcicle}
              alt={'xcicle'}
            />
            {/* <img src={xcicle} height={'20px'} alt="xcicle" /> */}
          </Box>
          <Grid container alignItems={'center'} sx={{ alignItems: { xs: 'flex-start', md: 'center' } }}>
            <Grid item xs={2} md={1}>
              {/* <img style={{width: '100%'}} src={tellusImg}/> */}
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M33 16.62V18C32.9982 21.2346 31.9508 24.382 30.014 26.9727C28.0773 29.5635 25.3549 31.4587 22.253 32.3758C19.1511 33.293 15.8359 33.1828 12.8017 32.0619C9.76752 30.9409 7.17698 28.8691 5.41644 26.1556C3.6559 23.442 2.81969 20.2321 3.03252 17.0045C3.24534 13.7768 4.49581 10.7045 6.59742 8.2456C8.69903 5.78672 11.5392 4.07307 14.6943 3.36021C17.8494 2.64736 21.1504 2.9735 24.105 4.29"
                  stroke="#FF7A00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M33 6L18 21.015L13.5 16.515" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Grid>
            <Grid item xs={10} md={11}>
              <Typography variant="bodytext1" sx={{ fontSize: '16px', mb: { xs: 2, md: 0 } }}>
                Congratulation on submitting your  request'!
              </Typography>
              <Typography variant="subtitle2" sx={{ fontSize: '14px' }}>
                We are going to negotiate this  request on your behalf with the selected Provider.
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <DeleteChildrenModal open={isModalOpen} onClose={handleCloseModal} onDeleteConfirm={handleDeleteConfirm} />
    </Stack>
  );
};

export default EnnrollmentForm;
