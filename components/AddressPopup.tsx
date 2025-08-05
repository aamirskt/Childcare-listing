// material-ui
import {
  Box,
  Button,
  Stack
} from '@mui/material';
import { Grid, Typography } from '@mui/material';
import { Dialog, DialogContent } from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';
// project-imports
import PopupTransition from 'components/@extended/Transitions';
import {
  useEffect,
  useState
} from 'react';
import CustomTextField from 'components/CustomTextField';
import SliderComp from 'components/SliderComp';
const xcicle = '/assets/images/home/x-circle.png';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
// import { InputBase } from '@mui/material';
// import GoogleAutoComplete from 'components/GoogleAutoCompleteLonglat';
// import { SearchNormal } from 'iconsax-react';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'utils/axios';
import Image from 'next/image';

interface MarketplacenModalProps {
  open: boolean;
  onClose: any;
  setDistance?: any;
  distance?: any;
  location?: any
  handleAddressSearchInput?: any
  currentLocation?: any;
  data?: any;
  searchInput?: any
}
const MarketplacenModal: React.FC<MarketplacenModalProps> = ({
  open,
  onClose,
  distance,
  setDistance,
  location,
  handleAddressSearchInput,
  currentLocation,
  data,
  searchInput
}) => {
  // const theme = useTheme();
  // const matches = useMediaQuery (theme.breakpoints.up('sm'));

  const [city, setCity] = useState<any>('');
  const [state, setState] = useState<any>('');
  const [address, setAddress] = useState<any>('');
  const [selectedMiles, setSelectedMiles] = useState<any>(1);
  const [seachAddress, setSeachAddress] = useState<any>('');
  const [zipcode, setZipcode] = useState<any>();
  const [topStates, setStates] = useState<any>([]);
  const [topCities, setTopCities] = useState<any>([]);
  // const [radius, setradius] = useState<any>(5);
  // const [zipCodeValidation, setZipCodeValidation] = useState<any>(null);
  // const [enterZip, setEnterZip] = useState(false);

  const handleAllStates = () => {
    // debugger
    axios({
      method: 'get',
      url: 'api/search/all_states',
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        setStates(response.data?.data);
        // setTopSearches(response.data?.data?.popularSearches);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
  useEffect(() => {
    handleAllStates()
  }, []);
  const handleDistance = (val: any) => {
    setSelectedMiles(val)
  };

  // const handleAddress = (_inputVal: any) => {
  //   debugger
  //   setAddress(_inputVal);
  //   setCity(_inputVal.city)
  //   setState(_inputVal.state)
  //   setZipcode(_inputVal.zip)
  // }
  // const handleChangeSearchInput = (e: any) => {
  //   setAddress(e.target.value)
  // };
  const getCitiesbyStatename = (_state: any) => {
    axios({
      method: 'get',
      url: `api/search/get_cities/${_state}`,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response: any) => {
        setTopCities(response.data.data);

      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
  const handleStateSelect = (event: any) => {
    getCitiesbyStatename(event.target.value)
    setState(event.target.value);
  };
  const handleCitySelect = (event: any) => {
    setCity(event.target.value);
    // searchInput(event)
    // setZipcode('')
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      keepMounted
      TransitionComponent={PopupTransition}
      maxWidth="lg"
      sx={{
        backdropFilter: 'blur(5px)',
        scrollbarWidth: '1px !important',
        zIndex: 999,

        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            borderRadius: '20px',
            maxWidth: { xs: '341px', md: '500px' },
            height: '100%',
            maxHeight: { xs: '350px', md: '450px' }
          }
        }
      }}
      aria-labelledby="column-delete-title"
      aria-describedby="column-delete-description"
    >
      <DialogContent sx={{ p: 0 }}>
        <Box
          onClick={() => {
            onClose();
          }}
          sx={{
            position: 'absolute', top: 10, right: '25px', cursor: 'pointer', zIndex: 9
          }}
        >
          <Image
            height={20}
            width={20}
            src={xcicle}
            alt={'xcicle'}
          />
          {/* <img src={xcicle} height={'20px'} alt="xcicle" /> */}
        </Box>
        <Stack>
          <Grid container justifyContent={'center'} alignItems={'center'} sx={{}}>

            <Grid
              item
              xs={12}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{ color: '#252B42', height: '100%' }}
            >
              <Stack
                sx={{
                  justifyContent: 'center',
                  p: 2,
                  // backgroundColor: 'linear-gradient(121deg, rgba(255, 255, 255, 0.65) 0.76%, rgba(255, 255, 255, 0.55) 97.98%)',
                }}
              >

                <Typography variant='p' sx={{ py: 2, pl: 2, lineHeight: '14px', }}>
                  <span style={{ color: '#ED5B09' }}>Step 1:</span> Select Location
                </Typography>
                <Typography variant='p1' sx={{ px: 2 }}>
                  We are using <span style={{ color: '#000', fontWeight: 'bold' }}>{seachAddress ? seachAddress : location}</span> as location to find nearest childcare providers.
                </Typography>
                <Typography variant='p1' sx={{ maxWidth: '400px', p: 2 }}>
                  If you want to further enhance your search then please enter your exact location
                </Typography>

                <Grid container spacing={2} sx={{ p: '12px 12px 0px 12px' }} alignItems={'center'}   >
                  <Grid item xs={12} >


                    <CustomTextField
                      placeholder="Address"
                      value={address}
                      onChange={(e: any) => {
                        setAddress(e.target.value)
                      }}
                      style={{ mb: { xs: 0.5, md: 'auto' } }}
                      isMarketPlace={true}
                    />
                  </Grid>
                  <Grid item xs={12} md={4} >
                    <Select
                      sx={{ width: '100%', fontSize: '14px', height: '36.13px', background: 'white', outline: 'none', border: 'none', borderRadius: 1 }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={state}
                      onChange={handleStateSelect}
                    >
                      {topStates.length != 0 && topStates.sort((a: any, b: any) => a.state.localeCompare(b.state)).map((option: any) => (
                        <MenuItem key={option} value={option.state}>
                          {option.state}
                        </MenuItem>
                      ))}
                    </Select>
                    {/* <CustomTextField
                        placeholder="City"
                        disabled
                        value={city}
                        // onChange={(e: any) => {
                        //   searchInput(e)
                        //   setZipcode(null)
                        //   setCity(e.target.value)
                        // }}
                        style={{
                          mb: {
                            xs: 0.5, md: 'auto', '& .MuiInputBase-input.Mui-disabled': {
                              color: '#000 !important',
                              WebkitTextFillColor: '#000 !important', // Ensures text remains black in WebKit browsers
                            },
                          }
                        }}
                        isMarketPlace={true}
                      /> */}
                  </Grid>
                  <Grid item xs={12} md={4} >
                    <Select
                      sx={{ width: '100%', fontSize: '14px', height: '36.13px', background: 'white', outline: 'none', border: 'none', borderRadius: 1 }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={city}
                      onChange={handleCitySelect}
                    >
                      {topCities.length != 0 && topCities.sort((a: any, b: any) => a.city.localeCompare(b.city)).map((option: any) => (
                        <MenuItem key={option} value={option.city}>
                          {option.city}
                        </MenuItem>
                      ))}
                    </Select>
                    {/* <CustomTextField
                        placeholder="State"
                        disabled
                        value={state}
                        // onChange={(e: any) => {
                        //   searchInput(e)
                        //   setZipcode(null)
                        //   setCity(e.target.value)
                        // }}
                        style={{
                          mb: { xs: 0.5, md: 'auto' }, '& .MuiInputBase-input.Mui-disabled': {
                            color: '#000 !important',
                            WebkitTextFillColor: '#000 !important', // Ensures text remains black in WebKit browsers
                          },
                        }}
                        isMarketPlace={true}
                      /> */}
                  </Grid>
                  <Grid item xs={12} md={1} >
                    <Typography variant='p' sx={{ pl: -10 }}>
                      OR
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <CustomTextField
                      placeholder="Zipcode"
                      type='number'
                      value={zipcode}
                      onChange={(e: any) => {
                        // searchInput(e)
                        setZipcode(e.target.value)
                        // setCity('')
                      }}
                      style={{
                        mb: { xs: 0.5, md: 'auto' }, '& .MuiInputBase-input.Mui-disabled': {
                          color: '#000 !important',
                          WebkitTextFillColor: '#000 !important', // Ensures text remains black in WebKit browsers
                        },
                      }}
                      isMarketPlace={true}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ p: '12px 12px 0px 12px' }} alignItems={'center'}  >
                  <Grid item xs={12}>
                    <Typography variant='p1'>
                      Select a distance (in miles) from your location:
                    </Typography>
                  </Grid>
                  <Grid item xs={12} >

                    <SliderComp handleDistance={handleDistance} distance={distance} />
                  </Grid>
                </Grid>
                <Grid container spacing={2} display="flex" justifyContent="center" alignItems={'center'} sx={{ mt: 1 }}  >
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end">

                      <Button
                        variant="contained"
                        disabled={!city || !zipcode}
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
                          handleAddressSearchInput(zipcode ? zipcode : city, selectedMiles)
                          const _address = zipcode ? address + ' ' + zipcode : address + ' ' + city + '. ' + state
                          setSeachAddress(_address)
                          setDistance(selectedMiles)
                        }
                        }
                      >
                        Apply
                      </Button>
                      {/* <Button onClick={onClose} sx={{
                                             ml: 1,
                                             maxWidth: '147px',  background: '#000', color: 'white', borderRadius: '50px', p: '9px 20px', fontSize: '16px', fontWeight: '500', '&:hover': {
                                             background: '#000',
                                             color: 'white',
                                           }
                                         }}>
                                            Continue
                                         </Button>  */}
                    </Box>
                  </Grid>



                </Grid>
                <Grid >
                  <Grid item xs={12} textAlign={'center'} mt={1} >  <Typography
                    component={'span'}
                    variant='subheading1'
                  > {location && /^\d+$/.test(location) ? (data.filter((item: any) => item.zip_code == location)).length : data.length} </Typography>Providers found.



                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>

        </Stack>
      </DialogContent>
    </Dialog>
  );
};
export default MarketplacenModal;
