// material-ui
import {
  Box,
  Button,
  // CircularProgress,
  // Divider,
  FormGroup,
  InputBase,
  // IconButton,
  Stack
} from '@mui/material';
import { Paper } from '@mui/material';
import { Grid, Typography } from '@mui/material';
// import { Dialog, DialogContent } from '@mui/material';
// const  tellusImg = '/assets/images/icons/marketplaceVid.png';
// const tellusImg1 = '/assets/images/icons/smmp.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// project-imports
// import { PopupTransition } from 'components/@extended/Transitions';
import React, { useEffect, useState } from 'react';
import CustomTextField from 'components/CustomTextField';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import { Calendar, Trash, AddCircle } from 'iconsax-react';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
import PriceSlider from 'components/PriceSlider';
import DeleteChildrenModal from 'components/DeleteChildrenModal';
import TellusPopup from 'components/tellus';
import AddressComp from 'components/AddressPopup';
// import { dispatch } from 'store';
// import { openSnackbar } from 'store/reducers/snackbar';
// import SimpleBar from 'simplebar-react';
// import startsimg from 'assets/images/icons/play.png';
const xcicle = '/assets/images/home/x-circle.png';
import { Divider } from '@mui/material';
// import VideoPopup from './VideoPopup';
// import { TextField } from '@mui/material';
import Image from 'next/image';

import { dispatch } from 'store';
import { setShowMarketPlaceHeader } from 'store/reducers/zipcode';
import MarketPlaceDefaultPopup from './MarketplaceDefaultPopup';
// ==============================|| CUSTOMER - DELETE ||============================== //
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

interface MarketplacenModalProps {
  open?: boolean;
  onClose: any;
  programs?: any;
  data?: any;
  selectedPrice?: any;
  setFields: any;
  fields: any;
  setIsSimpleSearch: any;
  isSimpleSearch: any;
  // setIsShowTopMarketPlace: any;
  notes: any;
  setNotes: any;
  // setShowTopFrom?: any;
  daycareList?: any;
  setFilteredData?: any;
  sliderRatio?: any;
  setEditMarketPlacePopup?: any;
  editMarketPlacePopup?: any;
  filteredData: any;
  searchInput: any;
  distance: any;
  setDistance: any;
  handlesearch: any;
  location: any;
  handleAddressSearchInput: any;
  currentLocation: any;
  stateRates: any;
  graphData: any,
      setRemoveBlur?: any
}
const MarketplacenModal: React.FC<MarketplacenModalProps> = ({
  open,
  onClose,
  programs,
  data,
  selectedPrice,
  fields,
  setFields,
  setIsSimpleSearch,
  // setIsShowTopMarketPlace,
  notes,
  setNotes,
  // setShowTopFrom,
  daycareList,
  setFilteredData,
  sliderRatio,
  setEditMarketPlacePopup,
  editMarketPlacePopup,
  filteredData,
  searchInput,
  distance,
  setDistance,
  handlesearch,
  location,
  handleAddressSearchInput,
  currentLocation,
  stateRates,
  graphData,
    setRemoveBlur,

}) => {
  const [numberOfChildren, setNumberOfChildren] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpenDefault, setModalOpenDefault] = useState(true);
  const [isValidation, setValidation] = useState(false);
  const [openAddressPopup, setOpenAddressPopup] = useState(false);
  const closeAddressPopup = (event: any, reason: any) => {
    if (reason && reason === 'backdropClick') return;
    setOpenAddressPopup(!openAddressPopup);
  };
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [selectedChil, setSelectedChild] = useState<any>('');
  const handleCloseModal1 = () => setModalOpen1(false);

  // const [open1, setOpen1] = useState(false);
  // const handleOpen = () => {
  //   setOpen1(true);
  // };

  // const handleClose = () => {
  //   setOpen1(false);
  // };

  const handleDefalutClosePopup = () => {
    setModalOpenDefault(false)
  }
  const handleDeleteConfirm = () => {
    const updatedFields = fields.filter((item: any, ind: number) => {
      return selectedChil != ind;
    });
    setFields(updatedFields);
    setNumberOfChildren((prevCount) => Math.max(prevCount - 1, 1));
    handleCloseModal();
  };
  const getGroupName = (dob: any) => {
    const _dob = new Date(dob);
    const _date = new Date();
    const res = _date.getMonth() - _dob.getMonth() + 12 * (_date.getFullYear() - _dob.getFullYear());
    const _temp: any = programs.find((item: any) => parseInt(item.age_months) >= res);
    return _temp;
  };

  const handleFieldChange = (index: number, field: keyof Field, value: string | boolean) => {
    const updatedFields = [...fields];
    if (field === 'is_special') {
      // Directly use the boolean value for checkboxes
      updatedFields[index][field] = value as boolean;
    } else {
      // For other fields, use the value as string
      let _tempList: any = [];
      data.forEach((lis: any) => {
        const _tempObj = lis.rates.find((obj: any) => obj.program_id == getGroupName(updatedFields[index].date_of_birth)?.id);
        _tempList.push(_tempObj);
      });
      if (_tempList.length > 0) {
        updatedFields[index].isPrice = true;
      } else {
        updatedFields[index].isPrice = false;
      }
      updatedFields[index][field] = value;
      updatedFields[index].program_id = getGroupName(updatedFields[index].date_of_birth)?.id;
    }
    setTimeout(() => {
      setFields([...updatedFields]);
    }, 1000);
  };

  const handleSubmit = () => {
    const _tempFields = [...fields];
    let _tempCount = 0;
    fields.map((item: any, ind: any) => {
      if (item.name == '') {
        _tempFields[ind].isName = true;
        _tempCount++;
      } else {
        _tempFields[ind].isName = false;
      }
      if (item.date_of_birth == '') {
        _tempFields[ind].isDob = true;
        _tempCount++;
      } else {
        _tempFields[ind].isDob = false;
      }
      if (item.start_date == '') {
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

      if (item.tution_fee == '') {
        _tempFields[ind].isTutionFee = true;
        _tempCount++;
      } else {
        _tempFields[ind].isTutionFee = false;
      }
    });

    if (_tempCount !== 0) {
      setFields([..._tempFields]);
      setValidation(true);
      return;
    } else {
      setRemoveBlur(false);
      setFields([..._tempFields]);
      setValidation(false);
      // setIsShowTopMarketPlace(true);
      setIsSimpleSearch(false);
      onClose();
    }
  };
  const handleSelectedPrice = (_temp: any, index: any) => {
    const updatedFields = [...fields];
    selectedPrice(_temp, getGroupName(updatedFields[index].date_of_birth)?.id, index);
    updatedFields[index].tution_fee = _temp;
    setFields(updatedFields);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  const dayAbbreviations = ['M', 'T', 'W', 'T', 'F'];
  const CustomInput = React.forwardRef(({ value, onClick, placeholder }: any, ref) => (
    <Box
      onClick={onClick}
      ref={ref}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        width: '100%',
        px: 1,
        py: 0.5,
        borderRadius: '6px',
        border: 'none',
        outline: 'none',
        background: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent'
        }
      }}
    >
      <InputBase
        value={value}
        placeholder={placeholder}
        sx={{
          fontSize: '14px',
          width: '100%',
          border: 'none',
          outline: 'none',
          padding: 0,
          margin: 0,
          background: 'transparent',
          cursor: 'pointer',
          '& input': {
            pointerEvents: 'none'
          }
        }}
        inputProps={{ readOnly: true }}
      />
      <Calendar size={18} color="#000" />
    </Box>
  ));

  return (
    <>
      <Box
          tabIndex={-1}
          onClick={() => {
                    dispatch(setShowMarketPlaceHeader(false));
                    setIsSimpleSearch(true);
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
                    ]);
                    setFilteredData(daycareList);
                    onClose();
          }}
          sx={{ width: '100%',  display: 'flex', justifyContent: 'flex-end', p: '16px 16px 0px 0px', cursor: 'pointer'}}
        >
          <Image
            height={20}
            width={20}
            src={xcicle}
            alt={'xcicle'}
          />
          {/* <img src={xcicle} height={'20px'} alt="xcicle" /> */}
        </Box>
      <Grid container justifyContent={'center'} alignItems={'center'} sx={{ bgcolor: '#fff' }}>
        {/* <Grid
          item
          xs={12}
          md={5}
          sx={{
            p: 0,
            backgroundImage: { xs: `url(${tellusImg1})`, md: `url(${tellusImg})` },
            m: { xs: 2, md: 0 },
            borderRadius: { xs: '20px', md: 0 },
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: { xs: '180px', md: '545px' },
            minHeight: { xs: '180px', md: '500px' },
            position: 'relative'
          }}
        >
          <Stack sx={{ mt: 2, position: 'absolute', bottom: '10px', right: '10px' }}>
            <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Stack onClick={handleOpen}>
                <Play size="32" color="#fff" />
              </Stack>
              
            </Stack>
          </Stack>
        </Grid> */}
        <Grid item xs={12} md={7} sx={{ px: { md: 2 }, pb: 2 }}>
          <Stack>
            <Typography variant="p" sx={{ px: 2 }}>
              Welcome to Childrencare Marketplace!
            </Typography>
            <Grid container spacing={2} display="flex" justifyContent="center" alignItems={'center'} sx={{ px: 2 }}  >

              <Grid item xs={12} textAlign={'center'} > <Typography
                variant='p1'
              >
                <Typography
                  component={'span'}
                  variant='subheading1'
                > {location && /^\d+$/.test(location) ? (data.filter((item: any) => item.zip_code == location)).length : data.length}  </Typography>providers found in <span style={{ fontWeight: 'bold' }}>{location}</span>

              </Typography>
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="p2" sx={{ maxWidth: '400px', px: 2, py: 1 }}>
                Please enter children ages, expected start date, days of week when service is needed.
              </Typography>
              {/* <Stack sx={{ bgcolor: '#F2F2F2', mx: 2, border: '0.5px solid #DADBDD', borderRadius: '6px',mb:2 }}>
                <Stack>
                  <Stack
                    sx={{
                      zIndex: 888,
                      px: 2,
                      my: 1
                    }}
                  >
                    <Typography variant="p" sx={{ py: 2, lineHeight: '14px' }}>
                      <span style={{ color: '#ED5B09' }}>Step 1:</span> Select Location
                    </Typography>
                    <Typography variant="p1" sx={{ maxWidth: '400px' }}>
                      We are using <span style={{ color: '#000', fontWeight: 'bold' }}>{location}</span> as location to find nearest
                      childcare providers.
                    </Typography>
                    <Typography variant="p1" sx={{ maxWidth: '400px', py: 2 }}>
                      If you want to further enhance your search then please enter your exact location
                    </Typography>
                    <Grid container spacing={2} display="flex" justifyContent="center" alignItems={'center'} sx={{}}>
                      <Grid item xs={12}>
                        <Box display="flex" justifyContent="center">
                          <Button
                            variant="contained"
                            sx={{
                              // border: '1px solid #000',
                              minWidth: '120px',
                              background: '#FF7A00',
                              borderRadius: '20px',
                              zIndex: 0,
                              '&:hover': {
                                background: '#FF7A00' // Adjust the alpha channel (0.8) as needed
                              }
                            }}
                            onClick={() => {
                              setOpenAddressPopup(true);
                              // handleAddressSearchInput(address, selectedMiles)
                              // setSeachAddress(address?.address)
                              // setDistance(selectedMiles)
                              // }else{
                              // handlesearch();
                              // }
                            }}
                          >
                            Enter Your Address
                          </Button>
                        </Box>
                      </Grid>

                      <Grid item xs={12} textAlign={'center'}>
                        {' '}
                        <Typography variant="p1">
                          <Typography component={'span'} variant="subheading1">
                            {' '}
                            {data.length}{' '}
                          </Typography>{' '}
                          {data.length > 1 ? 'Providers' : 'Provider'} Found.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Stack>
                </Stack>
              </Stack> */}

              <Stack sx={{ bgcolor: '#F2F2F2', mx: 2, border: '0.5px solid #DADBDD', borderRadius: '6px' }}>
                <Stack>
                  <Stack
                    sx={{
                      zIndex: 888,
                      px: 2,
                      my: 1
                    }}
                  >
                    <Box display="flex" flexDirection="column" my={2}>
                      <Typography variant="p" sx={{ py: 2, lineHeight: '14px' }}>
                        <span style={{ color: '#ED5B09' }}>Step 1:</span> Enter Child Detail
                      </Typography>

                      {/* {fields.length > 1 && <Divider />} */}
                      <Box display="flex" justifyContent="space-between" sx={{ mt: 2, }}>
                        <Box>
                          <Typography variant="bodytext" sx={{ mr: 1, fontWeight: 'bold' }}>
                            Child 1
                          </Typography>
                        </Box>
                        <Box
                          onClick={() => {
                            setFields([
                              ...fields,
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
                            ]);

                            setNumberOfChildren(numberOfChildren + 1);
                          }}
                          display="flex"
                          alignItems="center"
                          sx={{ cursor: 'pointer', borderBottom: '2px solid #000' }}
                        >
                          <AddCircle className="child-care-center" color="#000" size="20" />{' '}
                          <Typography variant="bodytext" sx={{ ml: 1, fontSize: '12px', fontWeight: 'bold' }}>
                            Add More Children{' '}
                          </Typography>
                        </Box>
                      </Box>
                      {/* <Box
                  onClick={() => {
                    setFields([
                      ...fields,
                      {
                        name: '',
                        isName: false,
                        date_of_birth: '',
                        isDob: false,
                        is_special: false,
                        is_full_week: false,
                        start_date: '',
                        isStartDate: false,
                        tution_fee: '',
                        isPrice: false,
                        isTutionFee: false,
                        program_id: '',
                        isDaySelected: false,
                        selectedDays: {
                          monday: false,
                          tuesday: false,
                          wednesday: false,
                          thursday: false,
                          friday: false
                        }
                      }
                    ]);

                    setNumberOfChildren(numberOfChildren + 1);
                  }}
                  display="flex"
                  alignItems="center"
                  sx={{ cursor: 'pointer', borderBottom: '1px solid #000' }}
                >
                  <AddCircle className="child-care-center" size="14" />{' '}
                  <Typography variant="bodytext" sx={{ ml: 1, fontSize: '12px', fontWeight: 'bold' }}>
                    Add more Children{' '}
                  </Typography>
                </Box> */}
                    </Box>
                    {fields.map((field: any, index: any) => {
                      console.log(getGroupName(field.date_of_birth)?.program_name);
                      return (
                        <Stack>
                          {index != 0 && (
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 5 }}>
                              <Typography mt={2} variant="bodytext" sx={{ fontWeight: 'bold' }}>
                                Child {index + 1}
                              </Typography>
                              <Trash
                                className="child-care-center"
                                size="20"
                                cursor={'pointer'}
                                color="#FF8A65"
                                onClick={() => {
                                  setSelectedChild(index);
                                  handleOpenModal();
                                }}
                              />
                            </Box>
                          )}

                          <Grid container spacing={2} alignItems={'center'}>
                            <Grid item xs={6} md={6}>
                              <CustomTextField
                                placeholder="Name*"
                                value={field.name}
                                onChange={(e: any) => {
                                  const updatedFields = [...fields];
                                  updatedFields[index].name = e.target.value;
                                  setFields(updatedFields);
                                }}
                                font={true}
                                style={{ backgroundColor: '#fff', borderRadius: '10px', fontSize: '16px' }}
                                errorMessage="Enter Last Name"
                                isMarketPlace={true}
                              />
                              {field.isName && (
                                <Typography
                                  variant="bodytext"
                                  sx={{ color: field.isName ? 'red' : '#fff', mb: 0.5, display: { xs: 'block', md: 'none' } }}
                                >
                                  Enter name
                                </Typography>
                              )}
                            </Grid>
                            <Grid item xs={6} md={5.7}>
                              <Stack sx={{ width: '100%', border: '1px solid #d3d3d3', borderRadius: '8px', ml: { xs: 0, md: 1 } }}>
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
                                    placeholderText="Date of Birth*"
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
                                    customInput={<CustomInput />}
                                    dateFormat="MM/dd/yyyy"
                                    showYearDropdown
                                    showMonthDropdown
                                    dropdownMode="select"
                                    isClearable
                                    peekNextMonth
                                    maxDate={new Date()}
                                  />
                                  {/* <Box sx={{ p: '3px', mr: 1 }}>
                                    <Calendar size={'18px'} />
                                  </Box> */}
                                </Paper>
                              </Stack>
                              {field.isDob && (
                                <Typography variant="bodytext" sx={{ color: 'red', display: { xs: 'block', md: 'none' }, mb: 1 }}>
                                  Enter date of birth
                                </Typography>
                              )}
                            </Grid>
                            {(!field.isDob || !field.isName) && (
                              <Stack sx={{ display: { xs: 'none', md: 'block' } }}>
                                {' '}
                                <Grid item xs={6}>
                                  <Typography variant="bodytext" sx={{ color: field.isName ? 'red' : '#fff' }}>
                                    Enter name
                                  </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                  <Typography variant="bodytext" sx={{ color: field.isDob ? 'red' : '#fff', ml: { xs: 0, md: 1 } }}>
                                    Enter date of birth
                                  </Typography>
                                </Grid>{' '}
                              </Stack>
                            )}

                            <Grid item xs={12} md={6}>
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
                                    placeholderText="Start Date*"
                                    selected={field.start_date ? new Date(field.start_date) : null}
                                    onChange={(date) => {
                                      const updatedFields = [...fields];
                                      updatedFields[index].start_date = date;
                                      setFields(updatedFields);
                                    }}
                                    dateFormat="MM/dd/yyyy"
                                    showYearDropdown
                                    showMonthDropdown
                                    customInput={<CustomInput />}
                                    dropdownMode="select"
                                    isClearable
                                    peekNextMonth
                                    minDate={new Date()}
                                    className="datepicker-react"
                                    popperProps={{
                                      placement: 'bottom-end'
                                    }}
                                  />
                                  {/* <Box sx={{ p: '3px', mr: 1 }}>
                                    <Calendar size={'18px'} />
                                  </Box> */}
                                </Paper>
                              </Stack>
                              {field.isStartDate && (
                                <Typography variant="bodytext" sx={{ color: 'red', display: { xs: 'block', md: 'none' }, mb: 1 }}>
                                  Enter start date
                                </Typography>
                              )}
                            </Grid>

                            <Grid item xs={12} md={6} sx={{ width: '100%' }}>
                              <Stack
                                direction="row"
                                justifyContent={'center'}
                                alignItems={'center'}
                                spacing={0}
                                width={'100%'}
                                sx={{ mb: 1.5 }}
                              >
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
                                      if (
                                        !Object.keys(updatedFields[index].selectedDays).every(
                                          (k) => updatedFields[index].selectedDays[k] === true
                                        )
                                      ) {
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
                                <Typography variant="p1" sx={{ color: 'red', display: { xs: 'block', md: 'none' } }}>
                                  Select day or days need care.
                                </Typography>
                              )}
                            </Grid>
                            <Grid item xs={6} sx={{ mb: { xs: 2, md: 0 } }}>
                              <Stack sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, ml: 1 }}>
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
                                    label={<Typography variant="p1">Full Time Weekly</Typography>}
                                  />
                                </FormGroup>
                              </Stack>
                            </Grid>
                            <Grid item xs={6} sx={{ mb: { xs: 2, md: 0 } }}>
                              <Stack sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, ml: 2 }}>
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
                                    label={<Typography variant="p1">Special Need</Typography>}
                                  />
                                </FormGroup>
                              </Stack>
                            </Grid>
                          </Grid>

                          {field.date_of_birth && field.isPrice && getGroupName(field.date_of_birth)?.program_name ? (
                            <>
                              <Divider sx={{ my: 2 }} />
                              <Stack>
                                {field.date_of_birth && (
                                  <PriceSlider
                                    sliderRatio={sliderRatio}
                                    graphData={graphData}
                                    centersList={daycareList}
                                    filteredData={filteredData}
                                    data={data}
                                    field={field}
                                    selectedPrice={handleSelectedPrice}
                                    index={index}
                                    heading={
                                      field.is_full_week
                                        ? `Range of Average Weekly Rate in this Area:`
                                        : `Range of Average Daily Rate in this Area`
                                    }
                                    selectedProgram={getGroupName(field.date_of_birth)}
                                    distance={distance}
                                    location={location}
                                    stateRates={stateRates}
                                  />
                                )}
                              </Stack>

                              <TellusPopup
                                notes={notes}
                                setNotes={setNotes}
                                open={isModalOpen1}
                                data={data}
                                fields={fields}
                                onClose={handleCloseModal1}
                              />
                              {field.isTutionFee && (
                                <Typography variant="bodytext" sx={{ color: 'red' }}>
                                  Select tution fee
                                </Typography>
                              )}
                            </>
                          ) : (
                            field.date_of_birth && (
                              <Typography
                                variant="h5"
                                sx={{
                                  color: '#000',
                                  fontSize: '12px',
                                  fontStyle: 'normal',
                                  fontWeight: 600,
                                  lineHeight: '22px'
                                }}
                              >
                                Not Eligible
                              </Typography>
                            )
                          )}
                          {fields.length > 1 && fields.length - 1 != index && <Divider sx={{ my: 2 }} />}
                        </Stack>
                      );
                    })}

                  </Stack>
                </Stack>
              </Stack>
              <Box display="flex" justifyContent="center" sx={{ py: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    background: '#FF7A00',
                    borderRadius: '20px',
                    width: '100%',
                    zIndex: 0,
                    maxWidth: '249px',
                    '&:hover': {
                      background: '#FF7A00' // Adjust the alpha channel (0.8) as needed
                    }
                  }}
                  onClick={handleSubmit}
                >
                  Show Results
                </Button>
              </Box>
              <Box display="flex" justifyContent="center" sx={{ pb: 2 }}>
                {isValidation && (
                  <Typography variant="bodytext" sx={{ color: 'red', display: { xs: 'none', md: 'block', p: 0 } }}>
                    Please fill all the required fields
                  </Typography>
                )}
              </Box>

              <Box display="flex" justifyContent="center" sx={{ fontSize: '14px', mb: { xs: 5, md: 0 }, zIndex: 0 }}>
                For Simple Search{' '}
                <Typography
                  sx={{
                    ml: 1,
                    color: '#FF7A00',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    dispatch(setShowMarketPlaceHeader(false));
                    setIsSimpleSearch(true);
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
                    ]);
                    setFilteredData(daycareList);
                    onClose();
                  }}
                >
                  click here
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <DeleteChildrenModal open={isModalOpen} onClose={handleCloseModal} onDeleteConfirm={handleDeleteConfirm} />
      <MarketPlaceDefaultPopup open={isModalOpenDefault} onClose={handleDefalutClosePopup} />
      {/* <VideoPopup open={open1} handleClose={handleClose} url={'childrenkare.mp4'} /> */}
      {openAddressPopup && <AddressComp
        open={openAddressPopup}
        onClose={closeAddressPopup}
        setDistance={setDistance}
        distance={distance}
        location={location}
        handleAddressSearchInput={handleAddressSearchInput}
        searchInput={searchInput}
        currentLocation={currentLocation}
        data={data}
      />}
    </>
  );
};
export default MarketplacenModal;
