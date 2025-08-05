'use client';


import {
  Button,
  Grid,
  Stack,
  Typography,
  CardContent,
  Box,
  Slide,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  // Divider,
  Rating,
  FormGroup,
  Checkbox,
  Divider,
  Container
  // FormControlLabel
} from '@mui/material';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import CloseIcon from '@mui/icons-material/Close';
import DirectionsIcon from '@mui/icons-material/Directions';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import { useEffect, useState } from 'react';
import axios from 'utils/axios';
import { getListOfTagsTextFromString } from 'utils/globalFuntions';
import { dispatch, useSelector } from 'store';
import EnnrollmentForm from 'sections/centerPage/EnnrollmentForm';
import SimpleBar from 'simplebar-react';
//   import MetaTags from 'react-meta-tags';
// import { Loading } from 'react-loading-dot';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
const locationPin = '/assets/images/icons/locationPin.png';
// import arrowup from 'assets/images/icons/arrowup.png';
// import arrowdown from 'assets/images/icons/arrowdown.png';
const phoneNo = '/assets/images/icons/phoneNo.png';
const MapMarker = '/assets/images/icons/map-pin.png';
const MapMarker1 = '/assets/images/icons/map-pin-1.png';
const MapMarker2 = '/assets/images/icons/locationPin.png';
import { alpha, styled, useTheme } from '@mui/material/styles';
import FilterDrawer from 'components/FilterDrawer';
//   import { userouter.push, useLocation, useParams } from 'react-router-dom';
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import mapStyles from 'components/MapStyles';
import Detailstabs from 'components/DetailsTabs';
// import NewSeoSection from 'sections/home/NewSeoSection';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import MapIcon from '@mui/icons-material/Map';
import {
  setZipCodetest, setIsParams
  , setShowMarketPlaceHeader
} from 'store/reducers/zipcode';
// import MarketPlaceSideBar from 'sections/marketplacesidebar/MarketPlaceSideBar';
import { openSnackbar } from 'store/reducers/snackbar';
// import Approval from 'assets/images/icons/Approval.png';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DetailPageMobileView from 'components/DetailPageMobileView';
import MarketPlaceWelcomePopup from 'components/MarketPlaceWelcomePopup';
import MarketPlacePopup from 'components/MarketPlacePopup';
import TellusPopup from 'components/tellus';
import {
  AddCircle,
  Edit,
  // Filter,
  // Calendar,
  Trash
  // ArrowUp2,
  // ArrowDown2
} from 'iconsax-react';
// import { format } from 'date-fns';
// import CustomTextField from './components/CustomTextField';
// import DatePicker from 'react-datepicker';
import DeleteChildrenModal from 'components/DeleteChildrenModal';
import ResetMarketPlaceConfirmation from 'components/ResetMarketPlaceConfirmation';
// import GoogleAutoComplete from 'components/GoogleAutoComplete';
// import ReactGoogleAutocomplete from 'react-google-autocomplete';
import MarketPlaceMobileComp from 'components/MarketPlaceMobileComp';
import MarketPlaceWelcomeMobileComp from 'components/MarketPlaceWelcomeMobileComp';
import MarketPlaceTellusMobileComp from 'components/MarketPlaceTellusMobileComp';
import SlickSlider from 'sections/home/SwiperSlider';
import ParentDashboard from 'sections/home/ParentDashboardForHomecopy';
import ParentDashboardForHomeMobile from 'sections/home/MobilesecForParent';
// import SectionTwo from 'sections/home/SectionTwo';
import NewHomesec7 from 'sections/home/NewHomesec7';
// import NewSectionFive from 'sections/home/NewSectionFive';
// import NewSectionSeven from 'sections/home/NewSectionSeven';
import NewSectionEight from 'sections/home/NewSectionEight';
// import MainCard from 'components/MainCard';
import { getContent } from 'utils/searchPageContent';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import LoadingComp from 'components/loaderComp';

const SimpleBarStyle = styled(SimpleBar)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.secondary.main, 0.25)
    },
    '&.simplebar-visible:before': {
      opacity: 1
    }
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 10
  },
  '& .simplebar-mask': {
    zIndex: 'inherit'
  }
}));

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}


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

// // 👇 SSR-friendly data fetcher
// async function getStateData(id: number) {
//     try {
//       const response = await axios.get('api/blog/get_blog_content/' + id);
//       return response.data.data ;
//     } catch (error) {
//       console.error('Failed to fetch state data:', error);
//       return [];
//     }
//   }
interface SearchProps {
  zipcode?: any;
  daycares?: any;
  abr?: any;
}
// 👇 Optional dynamic meta
const SearchDayCares = ({ abr, daycares, zipcode }: SearchProps) => {
  // const { zipcode, daycares, abr } = useParams();
  const router = useRouter();

  let zip = zipcode?.split('-')[0];
  let zipcod = zip;
  // const router.push = userouter.push();
  // const location = useLocation();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
  // const lgScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const mapRef = React.useRef<google.maps.Map>();
  // const scrollRef = React.useRef<any>([]);
  const libraries: ("places")[] = ['places'];

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAWfuNoyVahS2oLLE3AqfP7hSRN8n2ZYAM',
    libraries, // must be constant
  });

  const matches = useMediaQuery(theme.breakpoints.up('md'));
  // const onLoad = useCallback(function callback(map: any) {
  //   mapRef.current = map;
  //   const usBounds = new window.google.maps.LatLngBounds(
  //     new window.google.maps.LatLng(24.396308, -125.0), // Southwest corner
  //     new window.google.maps.LatLng(49.384358, -66.93457) // Northeast corner
  //   );

  //   map.fitBounds(usBounds); // Fit the map to the defined bounds
  //   // map.setZoom(1); // Set an initial zoom level
  // }, []);
  const [dayCareslistbyId, setDayCareslistbyId] = useState<any>([]);
  const googleMapsUrlBase = 'https://www.google.com/maps/dir/';
  const encodedAddress = encodeURIComponent(dayCareslistbyId?.address);
  const googleMapsUrl = `${googleMapsUrlBase}${encodedAddress}`;
  const [abrv] = useState<any>(abr);
  const formattedCity = daycares?.replace('daycares-in-', '').replace(/\-+/g, ' ');
  const capitalizedCity = formattedCity ? formattedCity.replace(/\b\w/g, (char: any) => char.toUpperCase()) : '';
  const cityNameInitial = `${capitalizedCity}, ${abrv.toUpperCase()}`;
  const [categoryContent, setCategoryContent] = useState<any>(null);
  const [stateRates, setStateRates] = useState<any>(null);

  const [currentLocation, setCurrentLocation] = useState<any>({ lat: 37.0902, lng: -95.7129 });
  const [zipCode, setZipCode] = useState<any>(null);
  const [zipCodeValidation, setZipCodeValidation] = useState<any>(null);
  const [isMapView, setIsMapView] = useState<any>(true);
  const [radiusvalidation] = useState<any>(false);
  const [selectedCenter, setSelectedCenter] = useState<any>(null);
  const [mapZoom, setMapZoom] = useState(12);
  const [selectedMiles, setSelectedMiles] = useState<any>(null);
  const [ShowCenterDetails, setShowCenterDetails] = useState<any>(false);
  const [Detailstab, setDetailstab] = useState<any>(true);
  const [EnrollemntTab, setEnrollemntTab] = useState<any>(false);
  const [activeMarker, setactiveMarker] = useState<any>(null);
  const [isInfoWindowVisible, setIsInfoWindowVisible] = useState(false);
  const [filteredData, setfilteredData] = useState<any>([]);
  const [centersList, setCentersList] = useState<any>([]);
  // const [cityInfo, setCityInfo] = useState<any>([]);
  // const [city, setCity] = useState<any>('');
  const [state, setState] = useState<any>('');
  const [open, setOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [centerCapacity, setCenterCapacity] = React.useState('');
  const [closingTime, setClosingTime] = React.useState('');
  const [openingTime, setOpeningTime] = React.useState('');
  const [rating, setRating] = React.useState('');
  const [financialAid, setFinancialAid] = React.useState('');
  const [daycareList, setdaycareList] = React.useState(true)
  const [category, setCategory] = useState<any>(null);
  // const [seoTitle, setSeoTitle] = useState<any>(null);
  // const [seoDescription, setSeoDescription] = useState<any>(null);
  // const [seoKeywords, setSeoKeywords] = useState<any>(null);

  const [aiContent, setAIContent] = useState<any>(null);
  const [aiAboutCity, setAIAboutCity] = useState<any>('');
  const [cityName, setCityName] = useState<any>(cityNameInitial);
  const [isLoading, setIsLoading] = useState(true);
  const [isMaploaded, setIsMapLoaded] = useState(false);
  const [mapPreZoomVal, setMapPreZoomVal] = useState(11);
  // const [showAllFilters, setShowAllFilters] = useState<any>(true);
  const isParams = useSelector((state) => state.zipcodereducer.isParams);
  const showMarketPlaceHeader = useSelector((state) => state.zipcodereducer.showMarketPlaceHeader);
  const [anchorMap, setAnchorMap] = useState<any>(); /** No single type can cater for all elements */
  // const [showTopForm, setShowTopFrom] = useState(false);
  // const [isTopMarketPlace, setIsTopMarketPlace] = useState(false);
  // const [isShowTopMarketPlace, setIsShowTopMarketPlace] = useState(false);
  const [programs, setPrograms] = useState([]);
  const [marketPlaceFilteredData, setMarketPlaceFilteredData] = useState<any>([]);
  const [isSubmit, setIsSubmit] = useState(true);
  // const [fieldsLength, setFieldsLength] = useState(2);
  const [graphData, setGraphData] = useState<any>()
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
  const [isResetMarketPlace, setIsResetMarketPlace] = useState(false);
  const [notes, setNotes] = useState('');
  const [isSimpleSearch, setIsSimpleSearch] = useState(true);
  const [welcomePopup, setWelcomePopup] = useState(false);
  const [marketPlacePopup, setMarketPlacePopup] = useState(false);
  const handleWelcomePopup = (event: any, reason: any) => {
    if (reason && reason === 'backdropClick') return;
    setWelcomePopup(!welcomePopup);
  };
  const handleMarketPlacePopup = (event: any, reason: any) => {
    if (reason && reason === 'backdropClick') return;
    setMarketPlacePopup(!marketPlacePopup);
  };

  // () => setMarketPlacePopup(!marketPlacePopup);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const handleCloseModal1 = (event: any, reason: any) => {
    if (reason && reason === 'backdropClick') return;
    setModalOpen1(false);
  };
  const [editMarketPlacePopup, setEditMarketPlacePopup] = useState<any>(false);
  const [sliderRatio, setSliderRatio] = useState<any>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => setModalOpen(false);
  const [resetMarketPlace, setResetMarketPlace] = useState(false);
  const CloseResetMarketPlace = () => setResetMarketPlace(false);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  // console.log(isDetailsModalOpen);
  const handleCloseDetailsModal = () => setDetailsModalOpen(false);
  // console.log(handleCloseDetailsModal);
  const [selectedChil, setSelectedChild] = useState<any>('');
  // console.log(city, process.env.PUBLIC_URL + location.pathname, 'parseInt');
  const handleConfirm = () => {
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
    handlesearch();
    setSelectedCenter(null);
    setIsSimpleSearch(false);
  };
  const handleDeleteConfirm = () => {
    const updatedFields = fields.filter((item: any, ind: number) => {
      return selectedChil != ind;
    });
    if (updatedFields.length == 0) {
      // setIsShowTopMarketPlace(false);
      // setShowTopFrom(true);
      setIsSimpleSearch(false);
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
    } else {
      setFields([...updatedFields]);
    }
    handleCloseModal();
  };
  const handleCloseAnchorMap = () => {
    setAnchorMap(null);
  };
  // const handleChangeSearchInput = (e: any) => {
  //   const input = e.target.value;
  //   if (/^\d+$/.test(input)) {
  //     setZipCode(input);
  //     setCityName(''); // Clear any previously set city name
  //     localStorage.setItem('searchType', 'zipCode'); // Store search type as zip code in localStorage
  //   } else {
  //     setCityName(input);
  //     setZipCode(''); // Clear any previously set zip code
  //     localStorage.setItem('searchType', 'city');
  //   }
  // };
  const handleChangeSearchInput = (e: any) => {
    // debugger
    const input = e.target.value;
    if (/^\d+$/.test(input)) {
      setZipCode(input);
      setCityName(''); // Clear any previously set city name
      localStorage.setItem('searchType', 'zipCode'); // Store search type as zip code in localStorage
    } else {
      setCityName(input);
      setZipCode(''); // Clear any previously set zip code
      localStorage.setItem('searchType', 'city');
    }
  };

  const handleAddressSearchInput = (e: any, _miles?: any) => {
    // debugger
    const input = e;
    if (/^\d+$/.test(input)) {
      setZipCode(input);
      setCityName(''); // Clear any previously set city name
      localStorage.setItem('searchType', 'zipCode'); // Store search type as zip code in localStorage
      handlesearchByAddress(input, '');
    } else {
      setCityName(input);
      setZipCode(''); // Clear any previously set zip code
      localStorage.setItem('searchType', 'city');
      handlesearchByAddress('', input);
    }
    // handlesearch1(input.zip, input.city+ ', '+ input.state);
  };
  // const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  // const dayAbbreviations = ['M', 'T', 'W', 'T', 'F'];
  // const handleFieldChange = (index: number, field: keyof Field, value: string | boolean) => {
  //   const updatedFields = [...fields];
  //   if (field === 'is_special') {
  //     // Directly use the boolean value for checkboxes
  //     updatedFields[index][field] = value as boolean;
  //   } else {
  //     // For other fields, use the value as string
  //     let _tempList: any = [];
  //     filteredData.forEach((lis: any) => {
  //       const _tempObj = lis.rates.find((obj: any) => obj.program_id == getGroupName(updatedFields[index].date_of_birth)?.id);
  //       _tempList.push(_tempObj);
  //     });
  //     if (_tempList.length > 0) {
  //       updatedFields[index].isPrice = true;
  //     } else {
  //       updatedFields[index].isPrice = false;
  //     }
  //     updatedFields[index][field] = value;
  //     updatedFields[index].program_id = getGroupName(updatedFields[index].date_of_birth)?.id;
  //   }
  //   setTimeout(() => {
  //     setFields([...updatedFields]);
  //   }, 1000);
  // };

  const handleClose = () => {
    setdaycareList(true);
    setSelectedCenter(null);
    setactiveMarker(null);
    setIsInfoWindowVisible(false);
    handleCloseAnchorMap();
    const element = document.getElementById('slideComponent');
    if (element) {
      element.style.transition = 'transform 100ms ease-in-out';
      element.style.transform = 'translateX(50px)';
      // setTimeout(() => {
      element.style.transition = 'transform 300ms ease-in-out';
      element.style.transform = 'translateX(-800px)';
      // }, 150);
      // setTimeout(() => {
      setShowCenterDetails(false);
      // }, 650);
    }
  };

  const handleZoomChange = () => {
    if (mapRef.current && !isResetMarketPlace) {
      const newZoom = mapRef.current.getZoom();
      if (typeof newZoom === 'number') {
        setMapZoom(newZoom); // Assuming setMapZoom updates mapZoom state
      }
    }
  };

  const handleDragEnd = async () => {
    if (mapRef.current && !isResetMarketPlace) {
      // setZipCode('');
      // setCityName('');
      const newCenter: any = mapRef.current.getCenter();
      if (newCenter) {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: newCenter }, (results, status) => {
          if (status === google.maps.GeocoderStatus.OK && results) {
            const firstResult = results[0];
            if (firstResult) {
              //   for(var i=0;i<results.length;i++) {
              //     var adress = results[i].formatted_address;
              //     console.log(adress)

              // }
              // console.log(firstResult);
              let _tmepZipCode: any = '';
              let _tmepCity: any = '';
              let _tmepState: any = '';
              _tmepZipCode = firstResult.address_components.find((component: google.maps.GeocoderAddressComponent) =>
                component.types.includes('postal_code')
              );
              if (!_tmepZipCode) {
                _tmepCity = firstResult.address_components.find(
                  (component: google.maps.GeocoderAddressComponent) => component.types.includes('locality')
                  // component.types.includes('postal_code') || component.types.includes('locality')
                );
                _tmepState = firstResult.address_components.find(
                  (component: google.maps.GeocoderAddressComponent) => component.types.includes('administrative_area_level_1')
                  // component.types.includes('postal_code') || component.types.includes('locality')
                );
              }

              const _tempLocation: any = _tmepZipCode
                ? _tmepZipCode.long_name
                : _tmepCity
                  ? _tmepCity.long_name + ', ' + _tmepState.short_name
                  : 'No results';
              // debugger
              setfilteredData([]);
              if (/^\d+$/.test(_tempLocation)) {
                setZipCode(_tempLocation);
                setCityName('');
                dispatch(setZipCodetest(_tempLocation));
              } else {
                setZipCode('');
                setCityName(_tempLocation);
              }
              if (_tempLocation !== 'No results') {
                searchByDrag(_tempLocation);
              } else {
                setCityName('');
                setZipCode('');
              }
            } else {
              setCityName('');
              setZipCode('');
              // console.log('No results found');
            }
          } else {
            console.log('Geocoder failed due to:', status);
          }
        });
      } else {
        console.log('New center is undefined.');
      }
    }
  };
  const toggleDaycareList = () => {
    setdaycareList(!daycareList);
  };

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleInfoCloseClick = () => { };
  const DetailTabHandle = () => {
    setDetailstab(true);
    setEnrollemntTab(false);
  };
  const EnrollmentTabHandle = () => {
    setDetailstab(false);
    setEnrollemntTab(true);
  };

  const handleChangeCenterCapacity = (event: any) => {
    setCenterCapacity(event.target.value as string);
  };

  const handleClosingTime = (event: any) => {
    setClosingTime(event.target.value as string);
  };

  const handleFinancialAid = (event: any) => {
    setFinancialAid(event.target.value as string);
  };
  const handleOpeningTime = (event: any) => {
    setOpeningTime(event.target.value as string);
  };
  const handleRating = (event: any) => {
    setRating(event.target.value as string);
  };
  // const handleRedirection = async (_zipCode: any) => {
  //   const data = new FormData();
  //   data.append('zip_code', _zipCode);

  //   await axios({
  //     method: 'post',
  //     url: 'api/search/get_center',
  //     data: data,
  //     headers: { 'Content-Type': 'multipart/form-data' }
  //   })
  //     .then(async (response) => {
  //       if (response.data.status == 'fail') {
  //       }
  //       if (response.data.status == 'pass') {
  //         const _resData: any = response?.data?.data;
  //         router.push(`/${_resData?.geo_location?.state_code}/daycares-in-${_resData?.geo_location?.city}`);
  //         // setState(_resData?.geo_location?.state_code);
  //         // _resData?.geo_location?.city
  //       }
  //     })
  //     .catch((error) => {
  //       console.log('erro uploading', error.message);
  //       setIsLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   // Check if the current URL has a trailing slash
  //   // console.log(location.pathname, 'location.pathname');
  //   if (location.pathname) {
  //     const handleRating = location.pathname.split('/');
  //     if (/^\d+$/.test(handleRating[1])) {
  //       // dispatch(setIsParams(false));
  //       handleRedirection(handleRating[1]);
  //     }
  //     // Navigate to the URL without the trailing slash
  //   }
  // }, [location.pathname, navigate]);

  useEffect(() => {
    const _tmpParamsData = isParams;
    if (!_tmpParamsData && isMaploaded && isSimpleSearch) {
      handlesearchByFilters();
    }
    if (!isSimpleSearch) {
      handlesearchMarketPlaceByFilters();
    }
  }, [centerCapacity, rating, openingTime, closingTime, financialAid]);

  useEffect(() => {
    fields.forEach((item: any) => {
      if (item.date_of_birth) {
        setIsResetMarketPlace(true);
      } else {
        setIsResetMarketPlace(false);
      }
    });
  }, [fields]);

  useEffect(() => {
    let _tempData: any = [];
    if (filteredData && filteredData.length > 0) {
      filteredData.forEach((item: any) => {
        if (item.isChecked) {
          _tempData.push(item.id);
        }
      });
    }
    if (_tempData.length > 0) {
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }
  }, [filteredData]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      dispatch(setIsParams(true));
      // localStorage.removeItem('Market_place');
    };
  }, []);

  useEffect(() => {
    if (isMaploaded) {
      dispatch(setIsParams(true));
      if (mapZoom > mapPreZoomVal) {
        if (selectedMiles > 4) {
          if (selectedMiles - 7 >= 7) {
            setSelectedMiles(selectedMiles - 7);
            setMapPreZoomVal(mapZoom);
          } else {
            setSelectedMiles(7);
            setMapPreZoomVal(mapZoom);
          }
        } else {
          setMapPreZoomVal(mapZoom);
          setIsMapLoaded(true);
        }
      } else {
        setSelectedMiles(selectedMiles + 7);
        setMapPreZoomVal(mapZoom);
      }
    }
  }, [mapZoom]);

  useEffect(() => {
    const _tmpParamsData = isParams;
    if (_tmpParamsData && isMaploaded) {
      handleSearchByZoom();
    }
  }, [selectedMiles]);

  // useEffect(() => {
  //   const _tmpParamsData = isParams;
  //   if (_tmpParamsData && !/^\d+$/.test(`${abr}`)) {
  //     debugger
  //     setZipCode(zipcod);
  //     let _temp = daycares && daycares.replace('daycares-in-', '');
  //     setCityName(_temp + ', ' + abr);
  //     handlesearchByParams(zipcod, daycares);
  //   }
  // }, [zipcod, daycares]);
  function titleCase(_str: any) {
    return _str.replace(/(^\w|\s\w)/g, (m: any) => m.toUpperCase());
  }
  useEffect(() => {
    debugger
    const _tmpParamsData = isParams;
    if (!location.pathname.includes('nearby')) {
      if (_tmpParamsData && !/^\d+$/.test(`${abr}`)) {
        // debugger
        {
          /* SEO ( Categories and stop indexing pages ) */
        }
        if (zipcod && !/^\d+$/.test(`${zipcod}`)) {
          const _tempCategories = [
            'infant daycares',
            'toddler daycares',
            'in home daycares',
            'special needs daycares',
            'daycare centers',
            'preschools',
            'childcare',
            'daycare'
          ];
          let _temp: any = zipcode && zipcode.replace(/-/g, ' ');
          let _tempAbr: any = abr && abr.replace(/-/g, ' ');
          // console.log(_tempCategories, _tempAbr, 'fdsfsdf')
          if (_tempCategories.includes(_tempAbr)) {
            setCityName(_temp + ', ' + daycares);
            handlesearchByParams('', _temp + ', ' + daycares, titleCase(_tempAbr));
            setCategory(titleCase(_tempAbr));
          } else {
            if (location.pathname.includes('nearby')) {
              //   setCityName(_temp + ', ' + daycares);
              //   handlesearchByParams('', _temp + ', ' + daycares, titleCase(_tempAbr));
              //   setCategory(titleCase(_tempAbr))
              // } else {
              router.push(`/404`);
            }
            // if (_tempAbr == 'daycares' && location.pathname.includes('nearby')) {
            //   setCityName(_temp + ', ' + daycares);
            //   handlesearchByParams('', _temp + ', ' + daycares, titleCase(_tempAbr));
            //   setCategory(titleCase(_tempAbr))
            // } else {
            //   router.push(`/404`)
            // }
          }
        } else {

          if (/^\d+$/.test(`${zipcod}`)) {
            setZipCode(zipcod);
            handlesearchByParams(zipcod, '');
          } else {
            if (/^\d+$/.test(`${abr}`)){
              router.push(`/404`);
            } else {
              let _temp: any = daycares && daycares.replace('daycares-in-', '');
              setCityName(_temp.replace('-', ' ') + ', ' + abr);
              handlesearchByParams('', daycares);
            }

          }
        }
      }
    } else {
      router.push(`/404`);
    }
  }, [zipcod, daycares]);

  useEffect(() => {
    // To show marketplace on specific state like in (colorado)
    // if (state == 'co' || state == 'CO' || ((state == 'co' || state == 'CO') && showMarketPlaceHeader)) {
    //   setWelcomePopup(true);
    // } 
    if (showMarketPlaceHeader && !marketPlacePopup) {
      setWelcomePopup(true);
    }
    // if (!marketPlacePopup) {
    //   setWelcomePopup(true);
    // }
    if (!showMarketPlaceHeader) {
      setWelcomePopup(false);
      setMarketPlacePopup(false);
    }
  }, [state, showMarketPlaceHeader]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [marketPlacePopup]);

  const wrapContentInDiv = (_htmlTag: any) => {
    return _htmlTag.replace(
      /(<h[2-4]>.*?<\/h[2-4]>)([\s\S]*?)(?=<h[2-4]>|$)/g,
      (match: any, heading: any, content: any) => {
        let fontSize =
          heading.startsWith("<h2>")
            ? "18px"
            : heading.startsWith("<h3>")
              ? "16px"
              : "inherit";

        return heading.replace(
          /<h(\d)>/,
          `<h$1 style='font-size: ${fontSize}; font-weight: bold;'>`
        ) + `<div style='font-size: 14px; color: #1D2630; padding: 0 0 18px 0;'>${content}</div>`;
      }
    );
  }

  const getAIContent = async (_cityName: any, _state: any, _category?: any) => {
    const types = ['childcare', 'daycare-centers', 'city', 'infant-care', 'preschools', 'special-needs', 'toddler'];
    let _tempCategory = _category.split('-')[0];

    // Check if the first word exists in the array
    _tempCategory = types.find((_type) => _type.startsWith(_tempCategory));

    await axios({
      method: 'get',
      url: `/api/city/get-content/${_tempCategory}?state=${_state}&city=${_cityName}`
    })
      .then(async (response) => {
        // debugger
        if (response.data.status == 'pass') {
          const _tempAIContent: any = response?.data?.data;


          // Example Usage
          const _aiContent = wrapContentInDiv(_tempAIContent.content);
          const _aboutCity = wrapContentInDiv(_tempAIContent.about_city);
          // console.log(updatedHtml, 'updatedHtml');
          setAIContent(_aiContent)
          setAIAboutCity(_aboutCity)
          // setSeoTitle(_tempAIContent?.seo_title)
          // setSeoDescription(_tempAIContent?.seo_description)
          // setSeoKeywords(_tempAIContent?.lsi_keywords)
        }


      })
      .catch((error) => {
        console.log(error.message)
      });

  };
  // console.log(aiContent, 'updatedHtml');

  const emptyFeilds = () => {
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
  }

  const handlesearchByAddress = async (_zipCode: any, _cityName: any) => {
    debugger;
    emptyFeilds();
    setIsLoading(true);
    dispatch(setIsParams(false));
    const data = new FormData();
    let _temp = _cityName && _cityName.replace('daycares-in-', '');
    let _url = '';
    if (_zipCode && /^\d+$/.test(`${_zipCode}`)) {
      setSelectedMiles(20);
      data.append('zip_code', _zipCode);
      if (centerCapacity) {
        data.append('capacity', `${centerCapacity}`);
      }
      // data.append('miles', `${selectedMiles}`);
      if (openingTime) {
        data.append('opening_time', `${openingTime}`);
      }
      if (closingTime) {
        data.append('closing_time', `${closingTime}`);
      }
      if (rating) {
        data.append('rating', `${rating}`);
      }
      if (financialAid) {
        data.append('financial_aid', `${financialAid}`);
      }
      data.append('miles', `${selectedMiles ? selectedMiles : 10}`);
      _url = 'api/search/get_center';
    } else {
      setSelectedMiles(null);
      let queryParams = new URLSearchParams();

      if (_temp) queryParams.append('city_name', _temp);
      // if (selectedMiles) queryParams.append('miles', `${selectedMiles}`);
      if (centerCapacity) queryParams.append('capacity', centerCapacity);
      if (openingTime) queryParams.append('opening_time', openingTime);
      if (closingTime) queryParams.append('closing_time', closingTime);
      if (rating) queryParams.append('rating', rating);
      if (financialAid) queryParams.append('financial_aid', financialAid);
      _url = `api/search/get_content?${queryParams}`;
    }

    await axios({
      method: _zipCode ? 'post' : 'get',
      url: _url,
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(async (response) => {
        if (response.data.status == 'fail') {
          setIsLoading(false);
          setfilteredData([]);
          setIsMapLoaded(true);
        }
        if (response.data.status == 'pass') {
          setIsLoading(false);
          const _resData: any = response?.data?.data;
          setPrograms(_resData?.programs);
          setSliderRatio(_resData?.slider_ratio);
          setGraphData(_resData?.median_income)
          setStateRates(_resData?.state_rates)
          // const tempLocation = location.pathname.split('/');
          if (!_zipCode) {
            let cityurl = _resData?.geo_location?.city;
            const formattedCity = cityurl ? cityurl.replace(/\s+/g, '-').toLowerCase() : '';
            const cityAbr = _resData?.geo_location?.state_code.toLowerCase();
            getAIContent(formattedCity, cityAbr, 'city')
          } else {
            setAIContent(null)
            setAIAboutCity(null)
          }
          if (_resData?.center?.length > 0) {
            setdaycareList(true);
            setShowCenterDetails(false);
            setMarketPlaceFilteredData(_resData?.center);
            if (_zipCode && /^\d+$/.test(_zipCode)) {
              const _tempSortedCenters = _resData?.center.sort((a: any, b: any) => (a.zip_code === _zipCode ? -1 : b.zip_code === _zipCode ? 1 : 0))
              setfilteredData(_tempSortedCenters);
              setCentersList(_tempSortedCenters);
            } else {
              setfilteredData(_resData?.center);
              setCentersList(_resData?.center);
            }

            // setCityInfo([_resData?.CityContent]);
            // const _tempCityState = _resData?.geo_location?.city + ', ' + _resData?.geo_location?.state_code;

            setState(_resData?.geo_location?.state_code);
            if (_resData?.geo_location?.city && _resData?.geo_location?.state_code) {
              setCityName(_resData?.geo_location?.city + ', ' + _resData?.geo_location?.state_code);
              // setCity(_resData?.geo_location?.city);
            }
            let cityurl = _resData?.geo_location?.city;
            const formattedCity = cityurl ? cityurl.replace(/\s+/g, '-').toLowerCase() : '';
            const cityAbr: any = _resData?.geo_location?.state_code.toLowerCase();
            if (_resData?.geo_location?.city) {
              if (!_zipCode) {
                const tempLocation = location.pathname.split('/');
                let url = location.pathname;
                let decodedUrl = decodeURIComponent(url); // Decode the URL to get spaces back
                let formattedUrl = decodedUrl.replace(/ /g, '-'); // Replace spaces with dashes
                if (tempLocation.length > 3) {
                  router.push(`${formattedUrl.toLowerCase()}`);
                } else {
                  router.push(`/${cityAbr}/daycares-in-${formattedCity}`);
                }
              } else {
                router.push(`/${cityAbr}/${formattedCity}/${_zipCode}`);
              }
            } else {
              router.push(`/${_zipCode}/daycares-in-cityNotFound`);
            }
            if (_resData?.center_point) {
              const firstMarker = _resData?.center_point;
              setTimeout(() => {
                if (zipcode) {
                  smallScreen ? setMapZoom(13) : setMapZoom(12);
                  setMapPreZoomVal(13);
                } else {
                  setMapZoom(12);
                  setMapPreZoomVal(12);
                }
                setIsLoading(false);
                setCurrentLocation({ lat: parseFloat(firstMarker.lat), lng: parseFloat(firstMarker.lan) });
                setTimeout(() => {
                  setIsMapLoaded(true);
                }, 2000);
              }, 3000);
            }
          } else {
            setCityName(_resData?.geo_location?.city + ',' + _resData?.geo_location?.state_code);
            setIsLoading(false);
          }
        }
      })
      .catch((error) => {
        console.log('erro uploading', error.message);
        setIsLoading(false);
      });
  };

  const handlesearchByParams = async (_zipCode: any, _cityName: any, _category?: any) => {
    // debugger;
    emptyFeilds();
    // setIsLoading(true);
    dispatch(setIsParams(false));
    const data = new FormData();
    let _temp = _cityName && _cityName.replace('daycares-in-', '');
    let _url = '';
    if (_zipCode && /^\d+$/.test(`${_zipCode}`)) {
      setSelectedMiles(10);
      data.append('zip_code', _zipCode);
      if (centerCapacity) {
        data.append('capacity', `${centerCapacity}`);
      }
      // data.append('miles', `${selectedMiles}`);
      if (openingTime) {
        data.append('opening_time', `${openingTime}`);
      }
      if (closingTime) {
        data.append('closing_time', `${closingTime}`);
      }
      if (rating) {
        data.append('rating', `${rating}`);
      }
      if (financialAid) {
        data.append('financial_aid', `${financialAid}`);
      }
      data.append('miles', `${selectedMiles ? selectedMiles : 10}`);
      _url = 'api/search/get_center';
    } else {
      setSelectedMiles(null);
      let queryParams = new URLSearchParams();

      if (_temp) queryParams.append('city_name', `${_temp + ', ' + abr}`);
      // if (selectedMiles) queryParams.append('miles', `${selectedMiles}`);
      if (centerCapacity) queryParams.append('capacity', centerCapacity);
      if (openingTime) queryParams.append('opening_time', openingTime);
      if (closingTime) queryParams.append('closing_time', closingTime);
      if (rating) queryParams.append('rating', rating);
      if (financialAid) queryParams.append('financial_aid', financialAid);
      _url = `api/search/get_content?${queryParams}`;
    }

    await axios({
      method: _zipCode ? 'post' : 'get',
      url: _url,
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(async (response) => {
        if (response.data.status == 'fail') {
          setIsLoading(false);
          setfilteredData([]);
          setIsMapLoaded(true);
        }
        if (response.data.status == 'pass') {
          const _resData: any = response?.data?.data;
          setPrograms(_resData?.programs);
          setSliderRatio(_resData?.slider_ratio);
          setGraphData(_resData?.median_income)
          setStateRates(_resData?.state_rates)
          const tempLocation = location.pathname.split('/');
          if (!_zipCode) {
            let cityurl = _resData?.geo_location?.city;
            const formattedCity = cityurl ? cityurl.replace(/\s+/g, '-').toLowerCase() : '';
            const cityAbr = _resData?.geo_location?.state_code.toLowerCase();

            if (tempLocation.length > 3) {

              getAIContent(formattedCity, cityAbr, _category.replace(/ /g, '-').toLowerCase())
            } else {
              getAIContent(formattedCity, cityAbr, 'city')
            }
          } else {
            setAIContent(null)
            setAIAboutCity(null)
          }
          const _tempCityState = _resData?.geo_location?.city + ', ' + _resData?.geo_location?.state_code;
          const _tempContent = _category
            ? getContent(
              _category,
              _cityName.replace(/-/g, ' '),
              location.pathname,
              _resData?.geo_location?.city,
              _resData?.geo_location?.state,
              _resData?.geo_location?.state_code
            )
            : _zipCode
              ? getContent(
                _zipCode,
                _tempCityState.replace(/-/g, ' '),
                location.pathname,
                _resData?.geo_location?.city,
                _resData?.geo_location?.state,
                _resData?.geo_location?.state_code
              )
              : getContent(
                cityName,
                _tempCityState.replace(/-/g, ' '),
                location.pathname,
                _resData?.geo_location?.city,
                _resData?.geo_location?.state,
                _resData?.geo_location?.state_code
              );
          setCategoryContent(_tempContent);
          if (_resData?.center?.length > 0) {
            setdaycareList(true);
            setShowCenterDetails(false);
            setMarketPlaceFilteredData(_resData?.center);
            if (_zipCode && /^\d+$/.test(_zipCode)) {
              const _tempSortedCenters = _resData?.center.sort((a: any, b: any) => (a.zip_code === _zipCode ? -1 : b.zip_code === _zipCode ? 1 : 0))
              setfilteredData(_tempSortedCenters);
              setCentersList(_tempSortedCenters);
            } else {
              setfilteredData(_resData?.center);
              setCentersList(_resData?.center);
            }

            // setCityInfo([_resData?.CityContent]);
            // const _tempCityState = _resData?.geo_location?.city + ', ' + _resData?.geo_location?.state_code;

            setState(_resData?.geo_location?.state_code);
            if (_resData?.geo_location?.city && _resData?.geo_location?.state_code) {
              setCityName(_resData?.geo_location?.city + ', ' + _resData?.geo_location?.state_code);
              // setCity(_resData?.geo_location?.city);
            }
            // let cityurl = _resData?.geo_location?.city;
            // const formattedCity = cityurl ? cityurl.replace(/\s+/g, '-').toLowerCase() : '';
            // const cityAbr: any = _resData?.geo_location?.state_code.toLowerCase();
            // if (_resData?.geo_location?.city) {
            //   if (!_zipCode) {
            //     const tempLocation = location.pathname.split('/');
            //     let url = location.pathname;
            //     let decodedUrl = decodeURIComponent(url); // Decode the URL to get spaces back
            //     let formattedUrl = decodedUrl.replace(/ /g, '-'); // Replace spaces with dashes
            //     if (tempLocation.length > 3) {
            //       router.push(`${formattedUrl.toLowerCase()}`);
            //     } else {
            //       router.push(`/${cityAbr}/daycares-in-${formattedCity}`);
            //     }
            //   } else {
            //     router.push(`/${cityAbr}/${formattedCity}/${_zipCode}`);
            //   }
            // } else {
            //   router.push(`/${_zipCode}/daycares-in-cityNotFound`);
            // }
            if (_resData?.center_point) {
              const firstMarker = _resData?.center_point;
              setTimeout(() => {
                if (zipcode) {
                  smallScreen ? setMapZoom(13) : setMapZoom(12);
                  setMapPreZoomVal(13);
                } else {
                  setMapZoom(12);
                  setMapPreZoomVal(12);
                }
                setIsLoading(false);
                setCurrentLocation({ lat: parseFloat(firstMarker.lat), lng: parseFloat(firstMarker.lan) });
                setTimeout(() => {
                  setIsMapLoaded(true);
                  // setWelcomePopup(true);
                }, 2000);
              }, 3000);
            }
          } else {
            setCityName(_resData?.geo_location?.city + ',' + _resData?.geo_location?.state_code);
            dispatch(setShowMarketPlaceHeader(true));
            setIsLoading(false);
          }
        }
      })
      .catch((error) => {
        console.log('erro uploading', error.message);
        setIsLoading(false);
      });
  };
  const handlesearch = async () => {
    emptyFeilds();
    setCategory(null);
    setIsLoading(true); // Start loading
    var count = 0;
    dispatch(setZipCodetest(zipCode));
    const data = new FormData();
    if ((zipCode == null || zipCode === '') && (cityName == null || cityName === '')) {
      setZipCodeValidation('Enter Zip Code or city name');
      setIsLoading(false);
      count += 1;
    } else {
      setZipCodeValidation(null);
    }
    setfilteredData('');
    setState('');

    if (count > 0) {
      return;
    }
    if (centerCapacity) {
      data.append('capacity', `${centerCapacity}`);
    }
    data.append('zip_code', zipCode);
    data.append('miles', `${selectedMiles ? selectedMiles : 10}`);
    if (openingTime) {
      data.append('opening_time', `${openingTime}`);
    }
    if (closingTime) {
      data.append('closing_time', `${closingTime}`);
    }
    if (rating) {
      data.append('rating', `${rating}`);
    }
    if (financialAid) {
      data.append('financial_aid', `${financialAid}`);
    }
    let queryParams = new URLSearchParams();

    if (cityName) queryParams.append('city_name', cityName);
    // if (selectedMiles) queryParams.append('miles', `${selectedMiles}`);
    if (centerCapacity) queryParams.append('capacity', centerCapacity);
    if (openingTime) queryParams.append('opening_time', openingTime);
    if (closingTime) queryParams.append('closing_time', closingTime);
    if (rating) queryParams.append('rating', rating);
    if (financialAid) queryParams.append('financial_aid', financialAid);
    if (zipCode && /^\d+$/.test(`${zipCode}`)) {
      setSelectedMiles(10);
    } else {
      setSelectedMiles(null);
    }
    axios({
      method: zipCode ? 'post' : 'get',
      url: zipCode ? 'api/search/get_center' : `api/search/get_content?${queryParams}`,
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(async (response) => {
        if (response.data.status == 'fail') {
          setIsLoading(false);
          setfilteredData([]);
          setIsMapLoaded(true);
        }
        if (response.data.status == 'pass') {
          // setIsLoading(false);
          const _resData: any = response?.data?.data;
          // setPrograms(_resData?.programs);
          // setSliderRatio(_resData?.slider_ratio);
          // setGraphData(_resData?.median_income)
          // setStateRates(_resData?.state_rates)
          // if (!zipCode) {
          //   let cityurl = _resData?.geo_location?.city;
          //   const formattedCity = cityurl ? cityurl.replace(/\s+/g, '-').toLowerCase() : '';
          //   const cityAbr = _resData?.geo_location?.state_code.toLowerCase();
          //   getAIContent(formattedCity, cityAbr, 'city')
          // } else {
          //   setAIContent(null)
          //   setAIAboutCity(null)
          // }
          // const _tempCityState = _resData?.geo_location?.city + ', ' + _resData?.geo_location?.state_code;
          // const _tempContent = zipCode
          //   ? getContent(
          //     zipCode,
          //     _tempCityState.replace(/-/g, ' '),
          //     location.pathname,
          //     _resData?.geo_location?.city,
          //     _resData?.geo_location?.state,
          //     _resData?.geo_location?.state_code
          //   )
          //   : getContent(
          //     cityName,
          //     _tempCityState.replace(/-/g, ' '),
          //     location.pathname,
          //     _resData?.geo_location?.city,
          //     _resData?.geo_location?.state,
          //     _resData?.geo_location?.state_code
          //   );
          // setCategoryContent(_tempContent);
          if (_resData?.center?.length > 0) {
            dispatch(setIsParams(true));
            // setIsMapView(true);
            // setShowCenterDetails(false);
            // setMarketPlaceFilteredData(_resData?.center);
            // if (zipCode && /^\d+$/.test(zipCode)) {
            //   const _tempSortedCenters = _resData?.center.sort((a: any, b: any) => (a.zip_code === zipCode ? -1 : b.zip_code === zipCode ? 1 : 0))
            //   setfilteredData(_tempSortedCenters);
            //   setCentersList(_tempSortedCenters);
            // } else {
            //   setfilteredData(_resData?.center);
            //   setCentersList(_resData?.center);
            // }
            // setCityInfo([_resData?.CityContent]);
            // const _tempCityState = _resData?.geo_location?.city + ', ' + _resData?.geo_location?.state_code;

            // setState(_resData?.geo_location?.state_code);
            // if (_resData?.geo_location?.city && _resData?.geo_location?.state_code) {
            //   setCityName(_resData?.geo_location?.city + ', ' + _resData?.geo_location?.state_code);
            //   // setCity(_resData?.geo_location?.city);
            // }
            let cityurl = _resData?.center[0]?.city;
            const formattedCity = cityurl ? cityurl.replace(/\s+/g, '-').toLowerCase() : '';
            const cityAbr = _resData?.geo_location?.state_code.toLowerCase();
            if (_resData?.center[0]?.city) {
              if (!zipCode) {
                router.push(`/${cityAbr}/daycares-in-${_resData?.geo_location?.city.split(',')[0].replace(/\s+/g, '-').toLowerCase()}`);
              } else {
                router.push(`/${cityAbr}/${formattedCity}/${zipCode}`);
              }
            } else {
              router.push(`/${zipCode}/daycares-in-cityNotFound`);
            }
            // if (_resData?.center_point) {
            //   const firstMarker = _resData?.center_point;
            //   // setTimeout(() => {
            //   //   if (zipCode) {
            //   //     smallScreen ? mapZoom !== 13 ? setMapZoom(13) :  setMapZoom(13) : setMapZoom(12);
            //   //   } else {
            //   //     setMapZoom(12);
            //   //   }
            //   setIsLoading(false);
            //   setCurrentLocation({ lat: parseFloat(firstMarker.lat), lng: parseFloat(firstMarker.lan) });
            //   setTimeout(() => {
            //     setIsMapLoaded(true);
            //   }, 3000);
            //   // }, 2000);
            // }
          } else {
            // setCityName(_resData?.geo_location?.city + ',' + _resData?.geo_location?.state_code);
            setIsLoading(false);
            // setIsMapLoaded(true);
          }
        }
      })
      .catch((error) => {
        console.log('erro uploading', error.message);
        setIsLoading(false);
      });
  };
  // const handlesearch1 = async (_zip: any, _city: any) => {
  //   setIsLoading(true); // Start loading
  //   var count = 0;
  //   dispatch(setZipCodetest(_zip));
  //   const data = new FormData();
  //   if ((_zip == null || _zip === '') && (_city == null || _city === '')) {
  //     setZipCodeValidation('Enter Zip Code or city name');
  //     setIsLoading(false);
  //     count += 1;
  //   } else {
  //     setZipCodeValidation(null);
  //   }
  //   setfilteredData('');
  //   setState('');

  //   if (count > 0) {
  //     return;
  //   }
  //   if (centerCapacity) {
  //     data.append('capacity', `${centerCapacity}`);
  //   }
  //   data.append('zip_code', _zip);
  //   data.append('miles', `${selectedMiles}`);
  //   if (openingTime) {
  //     data.append('opening_time', `${openingTime}`);
  //   }
  //   if (closingTime) {
  //     data.append('closing_time', `${closingTime}`);
  //   }
  //   if (rating) {
  //     data.append('rating', `${rating}`);
  //   }
  //   if (financialAid) {
  //     data.append('financial_aid', `${financialAid}`);
  //   }
  //   let queryParams = new URLSearchParams();

  //   if (cityName) queryParams.append('city_name', _city);
  //   queryParams.append('miles', `${selectedMiles}`);
  //   if (centerCapacity) queryParams.append('capacity', centerCapacity);
  //   if (openingTime) queryParams.append('opening_time', openingTime);
  //   if (closingTime) queryParams.append('closing_time', closingTime);
  //   if (rating) queryParams.append('rating', rating);
  //   if (financialAid) queryParams.append('financial_aid', financialAid);
  //   axios({
  //     method: _zip ? 'post' : 'get',
  //     url: _zip ? 'api/search/get_center' : `api/search/get_content?${queryParams}`,
  //     data: data,
  //     headers: { 'Content-Type': 'multipart/form-data' }
  //   })
  //     .then(async (response) => {
  //       if (response.data.status == 'fail') {
  //         setIsLoading(false);
  //         setfilteredData([]);
  //         setIsMapLoaded(true);
  //       }
  //       if (response.data.status == 'pass') {
  //         setIsLoading(false);
  //         const _resData: any = response?.data?.data;
  //         setPrograms(_resData?.programs);
  //         setSliderRatio(_resData?.slider_ratio);

  //         if (_resData?.center?.length > 0) {
  //           setIsMapView(true);
  //           setShowCenterDetails(false);
  //           setMarketPlaceFilteredData(_resData?.center);            
  //           setfilteredData(_resData?.center);
  //           setCentersList(_resData?.center);
  //           setCityInfo([_resData?.CityContent]);
  //           setState(_resData?.geo_location?.state_code);
  //           if (_resData?.geo_location?.city && _resData?.geo_location?.state_code) {
  //             setCityName(_resData?.geo_location?.city + ', ' + _resData?.geo_location?.state_code);
  // setCity(_resData?.geo_location?.city);
  //           }
  //           let cityurl = _resData?.center[0]?.city;
  //           const formattedCity = cityurl ? cityurl.replace(/\s+/g, '-').toLowerCase() : '';
  //           const cityAbr = _resData?.geo_location?.state_code.toLowerCase();
  //           if (_resData?.center[0]?.city) {
  //             if (!_zip) {
  //               router.push(`/${cityAbr}/daycares-in-${_resData?.geo_location?.city.split(',')[0].replace(/\s+/g, '-').toLowerCase()}`);
  //             } else {
  //               router.push(`/${cityAbr}/${formattedCity}/${_zip}`);
  //             }
  //           } else {
  //             router.push(`/${_zip}/daycares-in-cityNotFound`);
  //           }
  //           if (_resData?.center_point) {
  //             const firstMarker = _resData?.center_point;
  //             // setTimeout(() => {
  //             //   if (zipCode) {
  //             //     smallScreen ? mapZoom !== 13 ? setMapZoom(13) :  setMapZoom(13) : setMapZoom(12);
  //             //   } else {
  //             //     setMapZoom(12);
  //             //   }
  //             setIsLoading(false);
  //             setCurrentLocation({ lat: parseFloat(firstMarker.lat), lng: parseFloat(firstMarker.lan) });
  //             setTimeout(() => {
  //               setIsMapLoaded(true);
  //             }, 3000);
  //             // }, 2000);
  //           }
  //         } else {
  //           setCityName(_resData?.geo_location?.city + ',' + _resData?.geo_location?.state_code);
  //           setIsMapLoaded(true);
  //         }
  //       }
  //     })
  //     .catch((error) => {
  //       console.log('erro uploading', error.message);
  //       setIsLoading(false);
  //     });
  // };
  // const handleSearchbyLongLat = async (_input: any, _miles: any) => {
  //   debugger
  //   setIsLoading(true); // Start loading    emptyFeilds();
  //   emptyFeilds();

  //   // const data = new FormData();
  //   let queryParams = new URLSearchParams();

  //   queryParams.append('lat', _input.lat)
  //   queryParams.append('lng', _input.lng);
  //   queryParams.append('miles', `${_miles}`);
  //   _input.city && queryParams.append('city', `${_input.city}`);
  //   _input.state && queryParams.append('state', `${_input.state}`);
  //   _input.state_code && queryParams.append('state_code', `${_input.state_code}`);
  //   _input.zip && queryParams.append('zip_code', `${_input.zip}`);
  //   axios({
  //     method: 'get',
  //     url: `api/search/provider-centers?${queryParams}`
  //   })
  //     .then(async (response) => {
  //       if (response.data.status == 'fail') {
  //         setIsLoading(false);
  //         setfilteredData([]);
  //         setIsMapLoaded(true);
  //       }
  //       if (response.data.status == 'pass') {
  //         setIsLoading(false);
  //         const _resData: any = response?.data?.data;
  //         setPrograms(_resData?.programs);
  //         setSliderRatio(_resData?.slider_ratio);

  //         if (!zipCode) {
  //           let cityurl = _resData?.geo_location?.city;
  //           const formattedCity = cityurl ? cityurl.replace(/\s+/g, '-').toLowerCase() : '';
  //           const cityAbr = _resData?.geo_location?.state_code.toLowerCase();
  //           const tempLocation = location.pathname.split('/');
  //           if (tempLocation.length > 3) {
  //             getAIContent(formattedCity, cityAbr.toLowerCase(), category.replace(/ /g, '-').toLowerCase())
  //           } else {
  //             getAIContent(formattedCity, cityAbr, 'city')
  //           }
  //         } else {
  //           setAIContent(null)
  //           setAIAboutCity(null)
  //         }
  //         const _tempCityState = _resData?.geo_location?.city + ', ' + _resData?.geo_location?.state_code;
  //         const _tempContent = zipCode
  //           ? getContent(
  //             zipCode,
  //             _tempCityState.replace(/-/g, ' '),
  //             location.pathname,
  //             _resData?.geo_location?.city,
  //             _resData?.geo_location?.state,
  //             _resData?.geo_location?.state_code
  //           )
  //           : getContent(
  //             cityName,
  //             _tempCityState.replace(/-/g, ' '),
  //             location.pathname,
  //             _resData?.geo_location?.city,
  //             _resData?.geo_location?.state,
  //             _resData?.geo_location?.state_code
  //           );
  //         setCategoryContent(_tempContent);
  //         if (_resData?.center?.length > 0) {
  //           setIsMapView(true);
  //           setShowCenterDetails(false);
  //           setMarketPlaceFilteredData(_resData?.center);
  //           setfilteredData(_resData?.center);
  //           setCentersList(_resData?.center);
  //           // setCityInfo([_resData?.CityContent]);
  //           setState(_resData?.geo_location?.state_code);

  //           if (_resData?.center_point) {
  //             const firstMarker = _resData?.center_point;
  //             // setTimeout(() => {
  //             //   if (zipCode) {
  //             //     smallScreen ? mapZoom !== 13 ? setMapZoom(13) :  setMapZoom(13) : setMapZoom(12);
  //             //   } else {
  //             //     setMapZoom(12);
  //             //   }
  //             setIsLoading(false);
  //             setCurrentLocation({ lat: parseFloat(firstMarker.lat), lng: parseFloat(firstMarker.lan) });
  //             setTimeout(() => {
  //               setIsMapLoaded(true);
  //             }, 3000);
  //             // }, 2000);
  //           }
  //         } else {
  //           // setCityName(_resData?.geo_location?.city + ',' + _resData?.geo_location?.state_code);
  //           setIsMapLoaded(true);
  //         }
  //       }
  //     })
  //     .catch((error) => {
  //       console.log('erro uploading', error.message);
  //       setIsLoading(false);
  //     });
  // };
  const handlesearchByFilters = () => {
    emptyFeilds();
    setIsLoading(true); // Start loading
    const data = new FormData();
    if (centerCapacity) {
      data.append('capacity', `${centerCapacity}`);
    }
    data.append('zip_code', zipCode);

    data.append('miles', `${selectedMiles}`);
    if (openingTime) {
      data.append('opening_time', `${openingTime}`);
    }
    if (closingTime) {
      data.append('closing_time', `${closingTime}`);
    }
    if (rating) {
      data.append('rating', `${rating}`);
    }
    if (financialAid) {
      data.append('financial_aid', `${financialAid}`);
    }
    let queryParams = new URLSearchParams();

    if (cityName) queryParams.append('city_name', cityName);
    if (zipCode) queryParams.append('zip_code', zipCode);
    if (centerCapacity) queryParams.append('capacity', centerCapacity);
    if (mapZoom && selectedMiles) queryParams.append('miles', `${selectedMiles}`);
    if (openingTime) queryParams.append('opening_time', openingTime);
    if (closingTime) queryParams.append('closing_time', closingTime);
    if (rating) queryParams.append('rating', rating);
    if (financialAid) queryParams.append('financial_aid', financialAid);
    axios({
      method: zipCode ? 'post' : 'get',
      url: zipCode ? 'api/search/get_center' : `api/search/get_content?${queryParams}`,
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(async (response) => {
        if (response.data.status == 'fail') {
          setIsLoading(false);
          setfilteredData([]);
          setIsMapLoaded(true);
        }
        if (response.data.status == 'pass') {
          setIsLoading(false);
          const _resData: any = response?.data?.data;
          setPrograms(_resData?.programs);
          setSliderRatio(_resData?.slider_ratio);
          setGraphData(_resData?.median_income)
          setStateRates(_resData?.state_rates)
          if (!zipCode) {
            let cityurl = _resData?.geo_location?.city;
            const formattedCity = cityurl ? cityurl.replace(/\s+/g, '-').toLowerCase() : '';
            const cityAbr = _resData?.geo_location?.state_code.toLowerCase();
            const tempLocation = location.pathname.split('/');
            if (tempLocation.length > 3) {
              getAIContent(formattedCity, cityAbr.toLowerCase(), category.replace(/ /g, '-').toLowerCase())
            } else {
              getAIContent(formattedCity, cityAbr, 'city')
            }
          } else {
            setAIContent(null)
            setAIAboutCity(null)
          }
          const _tempCityState = _resData?.geo_location?.city + ', ' + _resData?.geo_location?.state_code;
          const _tempContent = zipCode
            ? getContent(
              zipCode,
              _tempCityState.replace(/-/g, ' '),
              location.pathname,
              _resData?.geo_location?.city,
              _resData?.geo_location?.state,
              _resData?.geo_location?.state_code
            )
            : getContent(
              cityName,
              _tempCityState.replace(/-/g, ' '),
              location.pathname,
              _resData?.geo_location?.city,
              _resData?.geo_location?.state,
              _resData?.geo_location?.state_code
            );
          setCategoryContent(_tempContent);
          if (_resData?.center?.length > 0) {
            setShowCenterDetails(false);
            setMarketPlaceFilteredData(_resData?.center);
            if (zipCode && /^\d+$/.test(zipCode)) {
              const _tempSortedCenters = _resData?.center.sort((a: any, b: any) => (a.zip_code === zipCode ? -1 : b.zip_code === zipCode ? 1 : 0))
              setfilteredData(_tempSortedCenters);
              setCentersList(_tempSortedCenters);
            } else {
              setfilteredData(_resData?.center);
              setCentersList(_resData?.center);
            }
            // const _tempCityState = _resData?.geo_location?.city + ', ' + _resData?.geo_location?.state_code;

            setState(_resData?.geo_location?.state_code);
            if (_resData?.geo_location?.city && _resData?.geo_location?.state_code) {
              setCityName(_resData?.geo_location?.city + ', ' + _resData?.geo_location?.state_code);
              // setCity(_resData?.geo_location?.city);
            }
            // let cityurl = s= _resData?.geo_location?.state_code.toLowerCase();
            // if (_resData?.center[0]?.city) {
            //   if (!zipCode) {
            //     const tempLocation = location.pathname.split('/');
            //     let url = location.pathname;
            //     let decodedUrl = decodeURIComponent(url); // Decode the URL to get spaces back
            //     let formattedUrl = decodedUrl.replace(/ /g, '-'); // Replace spaces with dashes
            //     if (tempLocation.length > 3) {
            //       router.push(`${formattedUrl.toLowerCase()}`);
            //     } else {
            //       router.push(`/${cityAbr}/daycares-in-${formattedCity}`);
            //     }
            //   } else {
            //     router.push(`/${cityAbr}/${formattedCity}/${zipCode}`);
            //   }
            // } else {
            //   router.push(`/${zipCode}/daycares-in-cityNotFound`);
            // }
            if (_resData?.center_point) {
              const firstMarker = _resData?.center_point;
              setIsLoading(false);
              setCurrentLocation({ lat: parseFloat(firstMarker.lat), lng: parseFloat(firstMarker.lan) });
              setTimeout(() => {
                setIsMapLoaded(true);
              }, 2000);
            }
          } else {
            setCityName(_resData?.geo_location?.city + ',' + _resData?.geo_location?.state_code);
            setIsLoading(false);
            setfilteredData([]);
            setIsMapLoaded(true);

            setIsMapLoaded(true);
          }
        }
      })
      .catch((error) => {
        console.log('erro uploading', error.message);
        setIsLoading(false);
      });
  };
  // console.log(showMarketPlaceHeader, 'closingTime');
  const handlesearchMarketPlaceByFilters = () => {
    // let _tempList: any = [...marketPlaceFilteredData];
    let _tempFilteredArr: any = [...marketPlaceFilteredData];
    if ((_tempFilteredArr.length > 0 && centerCapacity) || rating || openingTime || closingTime || financialAid) {
      if (centerCapacity) {
        let _tempCapacity: any = [];
        _tempFilteredArr.forEach((item: any) => {
          const _tempCap = centerCapacity.split('-');
          if ((parseInt(_tempCap[0]) == 100 && parseInt(_tempCap[1]) == 0) || !item.capacity) {
            item.capacity > 100 && _tempCapacity.push(item);
          } else {
            if ((parseInt(item.capacity) > parseInt(_tempCap[0]) && parseInt(item.capacity) < parseInt(_tempCap[1])) || !item.capacity) {
              _tempCapacity.push(item);
            }
          }
        });
        _tempFilteredArr = [..._tempCapacity];
      }
      if (rating) {
        const _tempRating = _tempFilteredArr.filter((item: any) => parseFloat(item.rating) <= parseFloat(rating) || item.rating == '');
        _tempFilteredArr = [..._tempRating];
      }
      if (openingTime) {
        const _tempTime = _tempFilteredArr.filter((item: any) => item.opening_time <= openingTime || item.opening_time == '');
        _tempFilteredArr = [..._tempTime];
      }
      if (financialAid) {
        if (financialAid == 'early_head_start') {
          const _tempClosingTime = _tempFilteredArr.filter(
            (item: any) => item.early_head_start.toLowerCase() == 'yes' || item.early_head_start == ''
          );
          _tempFilteredArr = [..._tempClosingTime];
        } else {
          const _tempClosingTime = _tempFilteredArr.filter((item: any) => item.head_start.toLowerCase() == 'yes' || item.head_start == '');
          _tempFilteredArr = [..._tempClosingTime];
        }
      }
      setfilteredData([..._tempFilteredArr]);
    } else {
      setfilteredData([...marketPlaceFilteredData]);
    }
  };

  const searchByDrag = (_param: any) => {
    emptyFeilds();
    // setIsLoading(true);
    setIsMapLoaded(false);
    const data = new FormData();

    data.append('zip_code', _param);
    // data.append('miles', `${selectedMiles}`);
    if (centerCapacity) {
      data.append('capacity', `${centerCapacity}`);
    }
    data.append('miles', `${selectedMiles ? selectedMiles : 10}`);
    if (openingTime) {
      data.append('opening_time', `${openingTime}`);
    }
    if (closingTime) {
      data.append('closing_time', `${closingTime}`);
    }
    if (rating) {
      data.append('rating', `${rating}`);
    }
    if (financialAid) {
      data.append('financial_aid', `${financialAid}`);
    }
    const _tmpParamsData = true;
    if (_tmpParamsData) {
      let _url = '';
      if (/^\d+$/.test(_param)) {
        _url = 'api/search/get_center';
      } else {
        let queryParams = new URLSearchParams();
        queryParams.append('miles', `${selectedMiles}`);
        if (centerCapacity) queryParams.append('capacity', centerCapacity);
        if (openingTime) queryParams.append('opening_time', openingTime);
        if (closingTime) queryParams.append('closing_time', closingTime);
        if (rating) queryParams.append('rating', rating);
        if (financialAid) queryParams.append('financial_aid', financialAid);
        queryParams.append('city_name', `${_param}`);
        _url = `api/search/get_content?${queryParams}`;
      }

      axios({
        // method: 'get',
        method: /^\d+$/.test(_param) ? 'post' : 'get',
        url: _url,
        data: data,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then(async (response) => {
          if (response.data.status == 'fail') {
            setIsLoading(false);
            setfilteredData([]);
            setIsMapLoaded(true);
          }
          if (response.data.status == 'pass') {
            // setIsLoading(false);
            const _resData: any = response?.data?.data;
            // setPrograms(_resData?.programs);
            // setSliderRatio(_resData?.slider_ratio);
            // setGraphData(_resData?.median_income)
            // setStateRates(_resData?.state_rates)
            if (_resData?.center?.length > 0) {
              dispatch(setIsParams(true));
              // setShowCenterDetails(false);
              // setMarketPlaceFilteredData(_resData?.center);
              // if (_param && /^\d+$/.test(_param)) {
              //   const _tempSortedCenters = _resData?.center.sort((a: any, b: any) => (a.zip_code === _param ? -1 : b.zip_code === _param ? 1 : 0))
              //   setfilteredData(_tempSortedCenters);
              //   setCentersList(_tempSortedCenters);
              // } else {
              //   setfilteredData(_resData?.center);
              //   setCentersList(_resData?.center);
              // }
              // const _tempCityState = _resData?.geo_location?.city + ', ' + _resData?.geo_location?.state_code;
              // const _tempContent = category
              //   ? getContent(
              //     category,
              //     cityName.replace(/-/g, ' '),
              //     location.pathname,
              //     _resData?.geo_location?.city,
              //     _resData?.geo_location?.state,
              //     _resData?.geo_location?.state_code
              //   )
              //   : /^\d+$/.test(_param)
              //     ? getContent(
              //       _param,
              //       _tempCityState.replace(/-/g, ' '),
              //       location.pathname,
              //       _resData?.geo_location?.city,
              //       _resData?.geo_location?.state,
              //       _resData?.geo_location?.state_code
              //     )
              //     : getContent(
              //       _param,
              //       _tempCityState.replace(/-/g, ' '),
              //       location.pathname,
              //       _resData?.geo_location?.city,
              //       _resData?.geo_location?.state,
              //       _resData?.geo_location?.state_code
              //     );
              // setCategoryContent(_tempContent);
              // setState(_resData?.geo_location?.state_code);
              // if (_resData?.geo_location?.city && _resData?.geo_location?.state_code) {
              //   setCityName(_resData?.geo_location?.city + ', ' + _resData?.geo_location?.state_code);
              //   // setCity(_resData?.geo_location?.city);
              // }
              let cityurl = _resData?.center[0]?.city;
              const formattedCity = cityurl ? cityurl.replace(/\s+/g, '-').toLowerCase() : '';
              const cityAbr = _resData?.geo_location?.state_code.toLowerCase();
              if (/^\d+$/.test(_param)) {
                router.push(`/${cityAbr}/${formattedCity}/${_param}`);
              } else {
                router.push(`/${cityAbr}/daycares-in-${_resData?.geo_location?.city.split(',')[0].replace(/\s+/g, '-').toLowerCase()}`);
              }
              // if (_resData?.center_point) {
              //   // const firstMarker = _resData?.center_point;
              //   setTimeout(() => {
              //     setIsLoading(false);
              //     // setCurrentLocation({ lat: parseFloat(firstMarker.lat), lng: parseFloat(firstMarker.lan) });
              //     setTimeout(() => {
              //       setIsMapLoaded(true);
              //     }, 2000);
              //   }, 2000);
              // }
            } else {
              // setCityName(_resData?.geo_location?.city + ',' + _resData?.geo_location?.state_code);
              // setIsLoading(false);
              setfilteredData([]);
            }
          }
        })
        .catch((error) => {
          console.log('erro uploading', error.message);
          setIsLoading(false);
          setfilteredData([]);
          setIsMapLoaded(true);
        });
    } else {
      setIsLoading(false);
    }
  };

  const handleSearchByZoom = async () => {
    emptyFeilds();
    setIsLoading(true);
    dispatch(setIsParams(false));
    const data = new FormData();
    let _temp = daycares && daycares.replace('daycares-in-', '');
    let _url = '';
    if (zipcod) {
      if (centerCapacity) {
        data.append('capacity', `${centerCapacity}`);
      }
      data.append('zip_code', zipCode);
      data.append('miles', `${selectedMiles ? selectedMiles : 10}`);
      if (openingTime) {
        data.append('opening_time', `${openingTime}`);
      }
      if (closingTime) {
        data.append('closing_time', `${closingTime}`);
      }
      if (rating) {
        data.append('rating', `${rating}`);
      }
      if (financialAid) {
        data.append('financial_aid', `${financialAid}`);
      }
      _url = 'api/search/get_center';
    } else {
      _temp && data.append('city_name', _temp);
      let queryParams = new URLSearchParams();
      queryParams.append('miles', `${selectedMiles}`);
      if (centerCapacity) queryParams.append('capacity', centerCapacity);
      if (openingTime) queryParams.append('opening_time', openingTime);
      if (closingTime) queryParams.append('closing_time', closingTime);
      if (rating) queryParams.append('rating', rating);
      if (financialAid) queryParams.append('financial_aid', financialAid);
      if (cityName) queryParams.append('city_name', `${_temp + ', ' + abr}`);
      _url = `api/search/get_content?${queryParams}`;
    }
    data.append('miles', `${selectedMiles}`);

    await axios({
      method: zipcod ? 'post' : 'get',
      url: _url,
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(async (response) => {
        if (response.data.status == 'fail') {
          setIsLoading(false);
          setfilteredData([]);
          setIsMapLoaded(true);
        }
        if (response.data.status == 'pass') {
          // setIsLoading(false);
          const _resData: any = response?.data?.data;
          // setPrograms(_resData?.programs);
          // setSliderRatio(_resData?.slider_ratio);
          // setGraphData(_resData?.median_income)
          // setStateRates(_resData?.state_rates)
          if (_resData?.center?.length > 0) {
            dispatch(setIsParams(true));
            // setShowCenterDetails(false);
            // setMarketPlaceFilteredData(_resData?.center);
            // if (zipCode && /^\d+$/.test(zipCode)) {
            //   const _tempSortedCenters = _resData?.center.sort((a: any, b: any) => (a.zip_code === zipCode ? -1 : b.zip_code === zipCode ? 1 : 0))
            //   setfilteredData(_tempSortedCenters);
            //   setCentersList(_tempSortedCenters);
            // } else {
            //   setfilteredData(_resData?.center);
            //   setCentersList(_resData?.center);
            // }
            // const _tempCityState = _resData?.geo_location?.city + ', ' + _resData?.geo_location?.state_code;
            // const _tempContent = category
            //   ? getContent(
            //     category,
            //     cityName.replace(/-/g, ' '),
            //     location.pathname,
            //     _resData?.geo_location?.city,
            //     _resData?.geo_location?.state,
            //     _resData?.geo_location?.state_code
            //   )
            //   : zipCode
            //     ? getContent(
            //       zipCode,
            //       _tempCityState.replace(/-/g, ' '),
            //       location.pathname,
            //       _resData?.geo_location?.city,
            //       _resData?.geo_location?.state,
            //       _resData?.geo_location?.state_code
            //     )
            //     : getContent(
            //       cityName,
            //       _tempCityState.replace(/-/g, ' '),
            //       location.pathname,
            //       _resData?.geo_location?.city,
            //       _resData?.geo_location?.state,
            //       _resData?.geo_location?.state_code
            //     );
            // setCategoryContent(_tempContent);
            // setState(_resData?.geo_location?.state_code);
            if (_resData?.geo_location?.city && _resData?.geo_location?.state_code) {
              setCityName(_resData?.geo_location?.city + ', ' + _resData?.geo_location?.state_code);
              // setCity(_resData?.geo_location?.city);
            }
            let cityurl = _resData?.center[0]?.city;
            const formattedCity = cityurl ? cityurl.replace(/\s+/g, '-').toLowerCase() : '';
            const cityAbr: any = _resData?.geo_location?.state_code.toLowerCase();
            if (_resData?.center[0]?.city) {
              if (zipCode) {
                router.push(`/${cityAbr}/${formattedCity}/${zipCode}`);
              }
            } else {
              router.push(`/${zipCode}/daycares-in-cityNotFound`);
            }
            // if (_resData?.center_point) {
            //   // const firstMarker = _resData?.center_point;
            //   setTimeout(() => {
            //     setIsLoading(false);
            //     // setCurrentLocation({ lat: parseFloat(firstMarker.lat), lng: parseFloat(firstMarker.lan) });
            //     setTimeout(() => {
            //       smallScreen && setIsMapView(true);
            //       setIsMapLoaded(true);
            //     }, 2000);
            //   }, 3000);
            // }
          } else {
            // setCityName(_resData?.geo_location?.city + ',' + _resData?.geo_location?.state_code);
            // setIsLoading(false);
            setfilteredData([]);
          }
        }
      })
      .catch((error) => {
        console.log('erro uploading', error.message);
        setIsLoading(false);
      });
  };
  const handleMarkerClick = (id: any, ismarker: any) => {
    axios('api/search/get_center_detail/' + id)
      .then((response) => {
        if (response.data.status == 'fail') {
          setIsLoading(false);
        }
        if (response.data.status == 'pass') {
          setDayCareslistbyId(response.data.data);
          if (!smallScreen) {
            setShowCenterDetails(true);
          }
        }
      })
      .catch((error) => {
        setIsLoading(false);

        console.log('erro uploading', error.message);
      });
  };

  // const handleSelectedPrice = (tempPrice: any, tempProgram: any, index: any) => {
  //   let _tempFilterdData: any = [];
  //   let _tempArr: any = [];
  //   centersList.map((item: any) => {
  //     let _price = parseInt(tempPrice);
  //     if (item.rates?.length > 0) {
  //       const _tempObj: any = item.rates.find((it: any) => it.program_id == tempProgram);

  //       if (_tempObj) {
  //         _tempArr.push(item);
  //         if (!fields[index].is_full_week) {
  //           const _tempMin = Math.floor((_tempObj.min_rate / 5) * (sliderRatio / 100 + 1));
  //           const _tempMax = Math.floor((_tempObj.max_rate / 5) * (sliderRatio / 100 + 1));
  //           if (_tempObj && _tempMin <= _price && _tempMax >= _price) {
  //             _tempFilterdData.push(item);
  //           }
  //         } else {
  //           if (_tempObj && _tempObj.min_rate <= _price && _tempObj.max_rate >= _price) {
  //             _tempFilterdData.push(item);
  //           }
  //         }
  //       }
  //     }
  //   });
  //   if (_tempFilterdData.length > 0) {
  //     setfilteredData(_tempFilterdData);
  //     setMarketPlaceFilteredData([..._tempFilterdData]);
  //   } else {
  //     setfilteredData([..._tempArr]);
  //     setMarketPlaceFilteredData([..._tempArr]);
  //   }
  // };
  //   const handleSelectedPrice = (tempPrice: any, tempProgram: any, index: any) => {
  //     debugger;
  //     // const _tempCenters: any = centersList.rates.filter((it: any) => it.program_id == tempProgram);

  //     let _tempFilterdData: any = [];
  //     let _tempArr: any = [];
  //     // const rateList: any = item.rates.filter((it: any) => it.program_id == _it.program_id);


  //     let _tempList: any = [];
  //     centersList.forEach((lis: any) => {
  //       if (lis.rates.length > 0) {
  //         const _tempObj = lis.rates.find((obj: any) => obj.program_id == tempProgram);
  //         _tempObj && _tempList.push(_tempObj);
  //       }
  //     });

  // const _tempMinRate = _tempList.reduce((prev: any, curr: any) => (prev?.tution_rate < curr?.tution_rate ? prev : curr));
  //     const _tempMaxRate = _tempList.reduce((prev: any, curr: any) => (prev?.tution_rate > curr?.tution_rate ? prev : curr));
  //     centersList.map((item: any) => {
  //       // let _price = parseInt(tempPrice);
  //       if (item.rates?.length > 0) {
  //         // if (_tempObj) {
  //         _tempArr.push(item);
  //         fields.forEach((_it: any) => {
  //           if (!_it.is_full_week) {
  //             const _tempObj: any = item.rates.find((it: any) => it.program_id == _it.program_id);

  //             if (_tempObj) {
  //               const _tempMin = Math.floor((_tempMinRate.tution_rate / 5) * (_tempObj?.min_rate / 100 + 1));
  //               const _tempMax = Math.floor((_tempMaxRate.tution_rate / 5) * (_tempObj?.max_rate / 100 + 1));
  //               if (_tempObj && _tempMin <= _it.tution_fee && _tempMax >= _it.tution_fee) {
  //                 const _tempCenters = _tempFilterdData.find((_centr: any) => _centr.id == item.id);
  //                 !_tempCenters && _tempFilterdData.push(item);
  //                 //  const _tempCenters =  centersList.filter((_centr: any) => (_tempMin <= _price && _tempMax >= _price));
  //                 //  _tempFilterdData = [..._tempCenters]
  //               }
  //             }
  //           }

  //           if (_it.is_full_week) {
  //             const _tempObj: any = item.rates.find((it: any) => it.program_id == _it.program_id);
  //             if (_tempObj) {
  //             if (_tempObj && _tempMinRate.tution_rate <= _it.tution_fee && _tempMaxRate.tution_rate >= _it.tution_fee) {
  //               const _tempCenters = _tempFilterdData.find((_centr: any) => _centr.id == item.id);
  //               !_tempCenters && _tempFilterdData.push(item);
  //               // const _tempCenters =  _tempFilterdData.filter((_centr: any) => (_tempObj.min_rate <= _price && _tempObj.max_rate >= _price));
  //               // _tempFilterdData = [..._tempCenters]
  //             }
  //           }
  //           }
  //         });
  //         // }
  //       }
  //     });
  //     if (_tempFilterdData.length > 0) {
  //       setfilteredData(_tempFilterdData);
  //       setMarketPlaceFilteredData([..._tempFilterdData]);
  //     } else {
  //       setfilteredData([..._tempArr]);
  //       setMarketPlaceFilteredData([..._tempArr]);
  //     }
  //   };

  const handleSelectedPrice = (tempPrice: any, tempProgram: any, index: any) => {
    // debugger;
    // const _tempCenters: any = centersList.rates.filter((it: any) => it.program_id == tempProgram);
    let _tempList: any = [];

    centersList.forEach((lis: any) => {
      if (lis.rates.length > 0) {
        const _tempObj = lis.rates.find((obj: any) => obj.program_id == tempProgram);
        _tempObj && _tempList.push(_tempObj);
      }
    });

    let _tempAverageDivion: any = '';

    let _tempFilterdData: any = [];
    let _tempArr: any = [];
    centersList.map((item: any) => {
      // let _price = parseInt(tempPrice);
      if (item.rates?.length > 0) {
        // if (_tempObj) {
        _tempArr.push(item);
        // fields.forEach((_it: any) => {
        if (!fields[index].is_full_week) {
          const _tempObj: any = item.rates.find((it: any) => it.program_id == fields[index].program_id);
          _tempAverageDivion = Math.floor((_tempList.reduce((total: any, next: any) => total + next.daily_rate_div, 0) / _tempList.length));

          if (_tempObj) {
            const _tempMin = Math.floor((_tempObj?.min_rate / _tempAverageDivion));
            // const _tempMax = Math.floor((_tempObj?.max_rate / _tempAverageDivion) );
            if (_tempObj && _tempMin <= tempPrice) {
              const _tempCenters = _tempFilterdData.find((_centr: any) => _centr.id == item.id);
              !_tempCenters && _tempFilterdData.push(item);
              //  const _tempCenters =  centersList.filter((_centr: any) => (_tempMin <= _price && _tempMax >= _price));
              //  _tempFilterdData = [..._tempCenters]
            }
          }
        }

        if (fields[index].is_full_week) {
          const _tempObj: any = item.rates.find((it: any) => it.program_id == fields[index].program_id);
          if (_tempObj) {
            if (_tempObj && _tempObj.min_rate <= tempPrice) {
              const _tempCenters = _tempFilterdData.find((_centr: any) => _centr.id == item.id);
              !_tempCenters && _tempFilterdData.push(item);
              // const _tempCenters =  _tempFilterdData.filter((_centr: any) => (_tempObj.min_rate <= _price && _tempObj.max_rate >= _price));
              // _tempFilterdData = [..._tempCenters]
            }
          }
        }
        // });
        // }
      }
    });
    // if (_tempFilterdData.length > 0) {
    //   setfilteredData(_tempFilterdData);
    //   setMarketPlaceFilteredData([..._tempFilterdData]);
    // } else {
    //   setfilteredData([..._tempArr]);
    //   setMarketPlaceFilteredData([..._tempArr]);
    // }
  };

  // const handleSelectedPrice = (tempPrice: any, tempProgram: any, index: any) => {
  //   // debugger;
  //   // const _tempCenters: any = centersList.rates.filter((it: any) => it.program_id == tempProgram);
  //   let _tempList: any = [];

  //   centersList.forEach((lis: any) => {
  //     if (lis.rates.length > 0) {
  //       const _tempObj = lis.rates.find((obj: any) => obj.program_id == tempProgram);
  //       _tempObj && _tempList.push(_tempObj);
  //     }
  //   });

  //   let _tempAverageDivion: any = '';

  //   let _tempFilterdData: any = [];
  //   let _tempArr: any = [];
  //   centersList.map((item: any) => {
  //     // let _price = parseInt(tempPrice);
  //     if (item.rates?.length > 0) {
  //       // if (_tempObj) {
  //       _tempArr.push(item);
  //       fields.forEach((_it: any) => {
  //         if (!_it.is_full_week) {
  //           const _tempObj: any = item.rates.find((it: any) => it.program_id == _it.program_id);
  //           _tempAverageDivion = Math.floor((_tempList.reduce((total: any, next: any) => total + next.daily_rate_div, 0) / _tempList.length));

  //           if (_tempObj) {
  //             const _tempMin = Math.floor((_tempObj?.min_rate / _tempAverageDivion) );
  //             const _tempMax = Math.floor((_tempObj?.max_rate / _tempAverageDivion) );
  //             if (_tempObj && _tempMin <= _it.tution_fee && _tempMax >= _it.tution_fee) {
  //               const _tempCenters = _tempFilterdData.find((_centr: any) => _centr.id == item.id);
  //               !_tempCenters && _tempFilterdData.push(item);
  //               //  const _tempCenters =  centersList.filter((_centr: any) => (_tempMin <= _price && _tempMax >= _price));
  //               //  _tempFilterdData = [..._tempCenters]
  //             }
  //           }
  //         }

  //         if (_it.is_full_week) {
  //           const _tempObj: any = item.rates.find((it: any) => it.program_id == _it.program_id);
  //           if (_tempObj) {
  //           if (_tempObj && _tempObj.min_rate <= _it.tution_fee && _tempObj.max_rate >= _it.tution_fee) {
  //             const _tempCenters = _tempFilterdData.find((_centr: any) => _centr.id == item.id);
  //             !_tempCenters && _tempFilterdData.push(item);
  //             // const _tempCenters =  _tempFilterdData.filter((_centr: any) => (_tempObj.min_rate <= _price && _tempObj.max_rate >= _price));
  //             // _tempFilterdData = [..._tempCenters]
  //           }
  //         }
  //         }
  //       });
  //       // }
  //     }
  //   });
  //   if (_tempFilterdData.length > 0) {
  //     setfilteredData(_tempFilterdData);
  //     setMarketPlaceFilteredData([..._tempFilterdData]);
  //   } else {
  //     setfilteredData([..._tempArr]);
  //     setMarketPlaceFilteredData([..._tempArr]);
  //   }
  // };
  // const handleSelectedPrice1 = (tempPrice: any, tempProgram: any) => {
  //   let _tempFilterdData: any = [];
  //   centersList.map((item: any) => {
  //     const _price = parseInt(tempPrice);
  //     if (item.rates?.length > 0) {
  //       const _tempObj: any = item.rates.find((it: any) => it.program_id == getGroupName(fields[tempProgram].date_of_birth)?.id);
  //       if (_tempObj && _tempObj.min_rate < _price) {
  //         _tempFilterdData.push(item);
  //       } else if (_tempObj && _tempObj.max_rate > _price) {
  //         _tempFilterdData.push(item);
  //       } else if (_tempObj && _tempObj.min_rate <= _price && _tempObj.max_rate >= _price) {
  //         _tempFilterdData.push(item);
  //       }
  //     }
  //   });
  //   const updatedFields = [...fields];
  //   updatedFields[tempProgram].tution_fee = tempPrice;
  //   setFields([...updatedFields]);
  //   setfilteredData(_tempFilterdData);
  // };
  const getGroupName = (dob: any) => {
    const _dob = new Date(dob);
    const _date = new Date();
    const res = _date.getMonth() - _dob.getMonth() + 12 * (_date.getFullYear() - _dob.getFullYear());
    const _temp: any = programs.find((item: any) => parseInt(item.age_months) >= res);
    return _temp;
  };

  // const ogUrl = process.env.PUBLIC_URL + location.pathname;
  return (
    <Stack>
      {isLoading && <LoadingComp loading={isLoading} />}
      {/* <MetaTags>
          <title>{zipcode && /^\d+$/.test(zipcode) ? `Best Daycares, Childcare & Preschools in ${zipcode}` : seoTitle ? seoTitle : `Best ${category ? (category == 'Childcare' ? 'Child Care' : category + (abr == 'daycare' ? ' Centers' : '')) : 'Daycares'} ${!location.pathname.includes('nearby') ? '' : 'Near Me'
            } in ${cityName}`}</title>
          <meta
            name="description"
            content={
              zipcode && /^\d+$/.test(zipcode)
                ? `Find daycares near me in ${zipcode} for your children. Explore trusted child care services, preschools and best daycares in ${zipcode},${abr}; at affordable cost.`
                : seoDescription ? seoDescription : category
                  ? `Find best ${category ? (category == 'Childcare' ? 'Child Care' : category + (abr == 'daycare' ? ' Centers' : '')) : 'Daycares'
                  } ${!location.pathname.includes('nearby') ? '' : 'Near Me'} in ${cityName}. Explore ${category
                    ? category == 'Childcare'
                      ? 'Child Care'
                      : category.slice(0, -1) + (abr == 'daycare' ? ' Centers' : '')
                    : 'Daycares'
                  } ${!location.pathname.includes('nearby') ? '' : 'Near Me'
                  } ${cityName}; its operating hours, contact info, age served, ratings and financial aid.`
                  : `Find daycares in ${cityName}. Explore trusted child care and preschool services,
  and explore best daycares in${cityName}; at affordable cost.`
            }
          />
          <meta property="og:title" content={zipcode && /^\d+$/.test(zipcode) ? `Best Daycares, Childcare & Preschools in ${zipcode}` : seoTitle ? seoTitle : `Best ${category ? (category == 'Childcare' ? 'Child Care' : category + (abr == 'daycare' ? ' Centers' : '')) : 'Daycares'} ${!location.pathname.includes('nearby') ? '' : 'Near Me'
            } in ${cityName}`} />
  
          <meta property="og:url" content={ogUrl} />
          <meta
            property="og:description"
            content={
              zipcode && /^\d+$/.test(zipcode)
                ? `Find daycares near me in ${zipcode} for your children. Explore trusted child care services, preschools and best daycares in ${zipcode},${abr}; at affordable cost.`
                : seoDescription ? seoDescription : category
                  ? `Find best ${category ? (category == 'Childcare' ? 'Child Care' : category + (abr == 'daycare' ? ' Centers' : '')) : 'Daycares'
                  } ${!location.pathname.includes('nearby') ? '' : 'Near Me'} in ${cityName}. Explore ${category
                    ? category == 'Childcare'
                      ? 'Child Care'
                      : category.slice(0, -1) + (abr == 'daycare' ? ' Centers' : '')
                    : 'Daycares'
                  } ${!location.pathname.includes('nearby') ? '' : 'Near Me'
                  } ${cityName}; its operating hours, contact info, age served, ratings and financial aid.`
                  : `Find daycares in ${cityName}. Explore trusted child care and preschool services,
  and explore best daycares in${cityName}; at affordable cost.`
            }
          />
          <meta
            name="keywords"
            content={zipcode && /^\d+$/.test(zipcode) ? `Best Daycares In ${zipcode}, Top Daycares In ${zipcode
              }, Best Daycares Near Me, Daycares Near Me, Best Daycare Centers in My Area, High Quality Daycare Services, Daycares In ${zipcode
              }, Daycares, Daycare Services, Best Daycare Centers, Daycare Centers in ${zipcode
              }, Affordable Childcare Centers, Children care centers, Find Best Daycares, Quality Daycare Providers, Affordable Childcare near me, Top Daycare Centers in the ${zipcode
              }, ChildrenKARE` : seoKeywords}
          />
          <meta name="robots" content="nosnippet" />*/}
      {/* {/centers|center|in-home/.test(location.pathname)  && <meta name="robots" content="noindex" />} */}
      {/* {(/centers|center|in-home/.test(location.pathname) || (zipcode &&  /^\d+$/.test(zipcode)) ) && <meta name="robots" content="noindex" />} */}
      {/* <link
            rel="canonical"
            href={ogUrl}
          /> 
        </MetaTags> */}

      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#ffff',
          // zIndex: 9999
          mt: '61px'
        }}
      >
        {/* <Header /> */}
      </Stack>
      {mdScreen && marketPlacePopup ? (
        <MarketPlaceMobileComp
          onClose={handleMarketPlacePopup}
          sliderRatio={sliderRatio}
          graphData={graphData}
          setEditMarketPlacePopup={setEditMarketPlacePopup}
          editMarketPlacePopup={editMarketPlacePopup}
          isSimpleSearch={isSimpleSearch}
          setIsSimpleSearch={setIsSimpleSearch}
          fields={fields}
          setFields={setFields}
          programs={programs}
          selectedPrice={handleSelectedPrice}
          data={centersList}
          notes={notes}
          setNotes={setNotes}
          setFilteredData={setfilteredData}
          daycareList={centersList}
          filteredData={filteredData}
          searchInput={handleChangeSearchInput}
          setDistance={setSelectedMiles}
          distance={selectedMiles}
          handlesearch={handlesearch}
          handleAddressSearchInput={handleAddressSearchInput}
          location={zipCode ? zipCode : cityName}
          currentLocation={currentLocation}
          stateRates={stateRates}

        />
      ) : mdScreen && welcomePopup ? (
        <MarketPlaceWelcomeMobileComp
          setFilteredData={setfilteredData}
          daycareList={centersList}
          setIsSimpleSearch={setIsSimpleSearch}
          onClose={handleWelcomePopup}
          setMarketPlacePopup={setMarketPlacePopup}
        />
      ) : mdScreen && isModalOpen1 ? (
        <MarketPlaceTellusMobileComp
          // setShowTopFrom={setShowTopFrom}
          isMarketPlace={true}
          daycareList={centersList}
          setFilteredData={setfilteredData}
          notes={notes}
          setNotes={setNotes}
          data={filteredData}
          fields={fields}
          setFields={setFields}
          onClose={handleCloseModal1}
        />
      ) : mdScreen && isDetailsModalOpen ? (
        <DetailPageMobileView onClose={handleCloseDetailsModal} id={dayCareslistbyId?.id} isMarketPlace={true} />
      ) : (
        <>
          {/* <Stack>
            {isLoading && (
              <Box
                display="block"
                justifyContent="center"
                alignItems="center"
                sx={{
                  position: 'absolute',
                  top: { xs: '47%', md: '47%', lg: '46%' },
                  right: { xs: '40%', md: '47%' },
                  zIndex: '22',
                  color: '#fff',
                  backgroundColor: '#000',
                  opacity: '0.8',
                  width: '170px',
                  p: 1,
                  px: 2,
                  borderRadius: '50px'
                }}
              >
                <LoadingComp loading={isLoading} />
              </Box>
            )}
            <Grid>
              <Grid container sx={{ position: 'absolute', marginTop: '8px', width: 'auto', zIndex: { xs: '11' } }}></Grid>
            </Grid>
          </Stack> */}
          <Grid container sx={{ position: 'relative' }}>
            {!isLoading && daycareList && (
              <Grid item>
                <Stack
                  sx={{
                    display: 'flex',
                    borderRadius: '10px 10px 10px 10px',
                    position: 'absolute',
                    left: { md: '8px', sm: '0px' },
                    width: { sm: '300px', xs: '100%' },
                    minWidth: { md: '371px', xs: '100vw' },
                    zIndex: 1,
                    height: { xs: windowSize.innerHeight - 200, md: fields[0].date_of_birth ? windowSize.innerHeight - 200 : windowSize.innerHeight - 140 },   //here for mobile screen heigh
                    maxHeight: { md: fields[0].date_of_birth ? '100%' : '100%', xs: '100%' },
                    background: '#fff',
                    marginTop: { md: !fields[0].date_of_birth ? '68px' : '130px', xs: '0px' },
                    paddingTop: { xs: fields[0].date_of_birth ? '150px' : '140px', md: '0px' },
                    px: 1
                  }}
                >
                  {(zipCode && zipCode != 'No results') || (cityName && cityName != 'No results') ? (
                    <Stack
                      sx={{
                        padding: '5px 10px',
                        width: '100%',
                        paddingTop: { xs: fields[0].date_of_birth ? '45px' : '5px', md: '0px' }
                      }}
                    >
                      <Typography mt={0} variant="bodytext1" sx={{ maxWidth: '270px' }}>
                        <Typography variant="bodytext1" component="h1">
                          {`${category ? (category == 'Childcare' ? 'Child Care' : category + (abr == 'daycare' ? ' Centers' : '')) : 'Daycares'
                            }  ${!location.pathname.includes('nearby') ? (/^\d+$/.test(`${zipcod}`) ? 'Near Me' : '') : 'Near Me'} in ${zipCode ? zipCode + (state ? ', ' + state : '') : cityName
                            }`}
                        </Typography>
                      </Typography>
                      {filteredData?.length == 0 && (
                        <div style={{ justifyContent: 'space-between', alignItems: 'center', padding: '5px 10px' }}>
                          <Typography mt={2} sx={{ fontSize: '12px', fontWeight: 'bold' }}>
                            No Daycare Center is Found.
                          </Typography>
                        </div>
                      )}
                    </Stack>
                  ) : !zipCode && !cityName ? (
                    <div style={{ justifyContent: 'space-between', alignItems: 'center', padding: '15px 10px' }}>
                      <Typography mt={2} variant="h5">
                        No results
                      </Typography>
                      <Typography mt={2} sx={{ fontSize: '12px', fontWeight: 'bold' }}>
                        Move the map to search a different area, or try again with a different search term.
                      </Typography>
                    </div>
                  ) : (
                    <div style={{ justifyContent: 'space-between', alignItems: 'center', padding: '15px 10px' }}>
                      <Typography mt={2} variant="h5">
                        Location Too Broad
                      </Typography>
                      <Typography mt={2} sx={{ fontSize: '12px', fontWeight: 'bold' }}>
                        Please zoom in or enter a more specific location to help us find the best results for you.
                      </Typography>
                    </div>
                  )}
                  <SimpleBarStyle
                    clickOnTrack={false}
                    sx={{
                      height: {
                        xs: !fields[0].date_of_birth ? '90%' : '90%',
                        md: !fields[0].date_of_birth ? windowSize.innerHeight - 218 : windowSize.innerHeight - 288
                      },
                      background: 'white',
                      width: '100%',
                      borderRadius: '0px'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: { xs: '100%', md: windowSize.innerHeight - 218, }, mb: '50px'
                      }}
                    >
                      <Stack sx={{ mb: 2 }}>
                        {Array.isArray(filteredData) &&
                          filteredData?.map((item: any, ind: any) => (
                            <Stack key={ind}>
                              <Box

                                display={'flex'}
                                justifyContent={'space-between'}
                                sx={{
                                  backgroundColor: selectedCenter == ind ? '#F8F9FA' : '#fff',
                                  border: selectedCenter == ind ? '1px solid #000' : 'auto',
                                  pt: 2
                                }}
                              >
                                {!isSimpleSearch && item?.market_place == 1 && fields[0].date_of_birth && (
                                  <FormGroup>
                                    <Checkbox
                                      checked={item?.isChecked == true}
                                      sx={{
                                        color: '#d3d3d3',
                                        padding: '0px',
                                        pl: 1,
                                        borderRadius: '2px',
                                        '&.Mui-checked': {
                                          color: '#000'
                                        }
                                      }}
                                      onChange={(e) => {
                                        const updatedFields = [...filteredData];
                                        const _temp = updatedFields.filter((it: any) => it.isChecked == true);
                                        // debugger
                                        if (e.target.checked) {
                                          if (_temp.length < 4) {
                                            updatedFields[ind].isChecked = e.target.checked;
                                            setfilteredData(updatedFields);
                                          } else {
                                            dispatch(
                                              openSnackbar({
                                                open: true,
                                                message: 'You reached to the maximum limit.',
                                                variant: 'alert',
                                                alert: {
                                                  color: 'error'
                                                },
                                                close: false
                                              })
                                            );
                                          }
                                        } else {
                                          updatedFields[ind].isChecked = e.target.checked;
                                          setfilteredData(updatedFields);
                                        }
                                      }}
                                    />
                                  </FormGroup>
                                )}
                                <Box
                                  className="listdaycare"
                                  onClick={(e: any) => {
                                    // setCity(item?.city);
                                    handleMarkerClick(item?.id, false);
                                    setactiveMarker(item.id);
                                    setIsInfoWindowVisible(false);
                                    setShowCenterDetails(true);
                                    setSelectedCenter(ind);
                                    mdScreen && setdaycareList(false);
                                  }}
                                  key={item.id}
                                  sx={{ minWidth: item?.market_place == 1 ? '60%' : '75%', mx: '10px', cursor: 'pointer' }}
                                >
                                  <Stack
                                    sx={{ pb: 1 }}
                                    onClick={() => {
                                      // setCity(item?.city);
                                      handleMarkerClick(item?.id, false);
                                    }}
                                  >
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <Typography variant="bodytext2" sx={{ maxWidth: '200px' }}>
                                          {item.name}
                                        </Typography>

                                        {/* <img src={Approval} height={10} /> */}
                                        <Box
                                          sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'flex-start' }}
                                        >
                                          {item?.rating && (
                                            <Stack sx={{ pr: 1, display: 'flex', flexDirection: 'row' }}>
                                              <Typography variant="h6" sx={{ fontSize: '12px', fontWeight: 'bold', mr: '5px' }}>
                                                {parseFloat(item?.rating).toFixed(1)}
                                              </Typography>
                                              <Rating
                                                name="read-only"
                                                precision={0.5}
                                                value={parseFloat(item?.rating)}
                                                readOnly
                                                sx={{ fontSize: '16px' }}
                                              />
                                            </Stack>
                                          )}
                                          <Typography variant="caption">childcare center</Typography>
                                        </Box>
                                      </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                      <Image
                                        height={23}
                                        width={23}
                                        src={locationPin}
                                        alt={'location image'}
                                      />
                                      <Typography variant="bodytext" sx={{ pl: 1 }}>
                                        {item?.address}
                                      </Typography>
                                    </Box>
                                  </Stack>
                                </Box>
                                <Stack sx={{ display: 'flex', flexDirection: 'row', m: 2 }}>
                                  <a
                                    href={googleMapsUrl || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#000', textDecoration: 'none' }}
                                  >
                                    <Box
                                      sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                      }}
                                    >
                                      <DirectionsIcon
                                        sx={{ fontSize: 30, backgroundColor: '#000', borderRadius: '50%', padding: '5px', color: '#fff' }}
                                      />
                                      <Typography variant="h6" sx={{ fontSize: '12px', mt: 1 }}>
                                        Directions
                                      </Typography>
                                    </Box>
                                  </a>
                                </Stack>
                              </Box>
                              <Stack
                                sx={{
                                  borderTop: '1px solid #80808065'
                                }}
                              ></Stack>{' '}
                            </Stack>
                          ))}
                      </Stack>

                    </Box>
                  </SimpleBarStyle>
                  {!isSimpleSearch && (
                    // sx={{ position: 'sticky', bottom: 0, mx: 2 }}
                    <Stack display="flex" justifyContent="center" sx={{ position: 'sticky', bottom: 0, mx: 2, mt: '10px' }}>
                      <Button
                        // disabled={isSubmit}
                        variant="contained"
                        sx={{
                          backgroundColor: isSubmit ? '#ccc' : '#3A3D42',
                          borderRadius: '8px',
                          mb: 1,
                          width: '100%',
                          '&:hover': {
                            backgroundColor: isSubmit ? '#ccc' : '#3A3D42'
                          }
                        }}
                        onClick={() => {
                          !isSubmit && setModalOpen1(true);
                        }}
                      >
                        <Typography
                          sx={{ backgroundColor: isSubmit ? '#ccc' : '#FF7A00', borderRadius: '20px', fontSize: '14px', p: '2px 40px' }}
                        >
                          Submit
                        </Typography>
                      </Button>
                      {/* {mdScreen && !ShowCenterDetails && isMapView && (
                          <Button
                            endIcon={<MapIcon />}
                            variant="contained"
                            sx={{
                              background: '#000',
                              borderRadius: '20px',
                              width: '100%',
                              mb: 1,
                              '&:hover': {
                                backgroundColor: '#000'
                              }
                            }}
                            onClick={() => {
                              setIsMapView(false);
                              setShowCenterDetails(false);
                              setdaycareList(false);
                            }}
                          >
                            Map View
                          </Button>
                        )} */}
                    </Stack>
                  )}
                </Stack>
              </Grid>
              // </Slide>
            )}
            {/* Desktop Map */}
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Stack sx={{ position: 'relative' }}>
                <div>
                  {/* <LoadScript
  googleMapsApiKey="AIzaSyAWfuNoyVahS2oLLE3AqfP7hSRN8n2ZYAM"
  loadingElement={
    <Stack sx={{ height: !smallScreen ? window.innerHeight - 60 : window.innerHeight - 200,  //here for mobile screen heigh
                        width: !open ? '100%' : 'auto',
                        opacity: isLoading ? '0.8' : '1'}}>
    
    <div
      style={{
        position: 'absolute',
        top: '47%',
        right: '40%',
        zIndex: 22,
        color: '#fff',
        backgroundColor: '#000',
        opacity: 0.8,
        width: '170px',
        padding: '8px 16px',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      Loading...
    </div>
    </Stack>
  }
  libraries={['places']}
> */}
                  {!isLoaded ? <div
                    style={{
                      display: 'none'
                    }}
                  >
                    Loading...
                  </div> : <GoogleMap
                    mapContainerStyle={{
                      height: !smallScreen ? window.innerHeight - 60 : window.innerHeight - 200,  //here for mobile screen heigh
                      width: !open ? '100%' : 'auto',
                      opacity: isLoading ? '0.8' : '1'
                    }}
                    options={{
                      styles: mapStyles,
                      zoomControl: !isResetMarketPlace,
                      minZoom: 10,
                      maxZoom: 14
                    }}
                    onDragEnd={handleDragEnd}
                    zoom={mapZoom}
                    onLoad={(map: any) => (mapRef.current = map)}
                    center={currentLocation}
                    onZoomChanged={handleZoomChange}
                  >
                    {currentLocation && filteredData?.length > 0 && (
                      <>
                        {filteredData?.map((marker: any, index: any) => (
                          <Marker
                            key={index}
                            icon={selectedCenter == index ? MapMarker2 : marker?.marker == 'red' ? MapMarker1 : MapMarker}
                            ref={anchorMap}
                            onMouseOver={() => {
                              setTimeout(() => { }, 1000);
                            }}
                            onClick={() => {
                              setSelectedCenter(index);
                              setactiveMarker(marker.id);
                              setIsInfoWindowVisible(true);
                            }}
                            position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }}
                            draggable={false}
                            options={{
                              optimized: false, // This prevents the image from being optimized, preserving the rounded shape
                              shape: {
                                coords: [12.5, 12.5, 12.5], // Make it circular
                                type: 'circle'
                              }
                            }}
                          >
                            {/* Desktop marker tooltip */}
                            {isInfoWindowVisible && activeMarker === marker?.id ? (
                              <InfoWindow
                                anchor={anchorMap}
                                position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }}
                                // onDomReady={() => setInfoDomReady(true)}
                                // onUnmount={() => setInfoDomReady(false)}
                                onCloseClick={handleInfoCloseClick}
                              >
                                <>
                                  <Box display={'flex'} sx={{ maxWidth: '320px' }}>
                                    <Box
                                      className="listdaycare"
                                      onClick={() => {
                                        // setCity(marker?.city);
                                        handleMarkerClick(marker?.id, false);
                                      }}
                                      key={marker.id}
                                      sx={{ cursor: 'pointer' }}
                                    >
                                      <CardContent
                                        // sx={{ padding: '16px 0px' }}
                                        onClick={() => {
                                          // setCity(marker?.city);
                                          handleMarkerClick(marker?.id, false);
                                        }}
                                      >
                                        <Box
                                          sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0px' }}
                                        >
                                          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                                              {marker.name}
                                            </Typography>

                                            {/* <img src={Approval} height={10} /> */}
                                            <Box sx={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                              {marker?.rating && (
                                                <Stack sx={{ pr: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                  <Typography variant="caption" sx={{ fontWeight: 'bold', mr: '5px' }}>
                                                    {parseFloat(marker?.rating).toFixed(1)}
                                                  </Typography>
                                                  <Rating
                                                    name="read-only"
                                                    precision={0.5}
                                                    value={parseFloat(marker?.rating)}
                                                    readOnly
                                                    sx={{ fontSize: '12px' }}
                                                  />
                                                </Stack>
                                              )}
                                              <Typography variant="caption">childcare center</Typography>
                                            </Box>
                                          </Box>
                                        </Box>
                                        <Stack>
                                          <Typography variant="caption" sx={{ pt: 1 }}>
                                            {' '}
                                            <span style={{ fontWeight: 600 }}>
                                              {' '}
                                              <Image
                                                height={16}
                                                width={16}
                                                src={locationPin}
                                                alt={'locationPin'}
                                              />
                                              {/* <img style={{ width: '16px', height: '16px' }} src={locationPin} />{' '} */}
                                            </span>{' '}
                                            {marker?.address}
                                          </Typography>
                                          <Typography variant="caption" sx={{ pt: 1 }}>
                                            {' '}
                                            <span style={{ fontWeight: 600 }}>
                                              {' '}
                                              <Image
                                                height={16}
                                                width={16}
                                                src={phoneNo}
                                                alt={'phoneNo'}
                                              />
                                              {/* <img style={{ width: '16px', height: '16px' }} src={phoneNo} />{' '} */}
                                            </span>{' '}
                                            {marker?.phone}
                                          </Typography>
                                        </Stack>
                                      </CardContent>
                                    </Box>
                                    {!smallScreen && (
                                      <Stack sx={{ padding: '16px 0px', justifyContent: 'space-between' }}>
                                        <a
                                          href={googleMapsUrl || '#'}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          style={{ color: '#000', textDecoration: 'none' }}
                                        >
                                          <Box
                                            sx={{
                                              display: 'flex',
                                              flexDirection: 'column',
                                              alignItems: 'center',
                                              justifyContent: 'center'
                                            }}
                                          >
                                            <DirectionsIcon
                                              sx={{
                                                fontSize: 30,
                                                backgroundColor: '#000',
                                                borderRadius: '50%',
                                                padding: '5px',
                                                color: '#fff'
                                              }}
                                            />
                                            <Typography variant="h6" sx={{ fontSize: '12px', mt: 1 }}>
                                              Directions
                                            </Typography>
                                          </Box>
                                        </a>
                                        <Stack sx={{ mt: { sm: 2, xs: '-20px' } }}>
                                          <Button
                                            variant="contained"
                                            sx={{
                                              background: '#000',
                                              width: { sm: '113px', xs: '100px' },
                                              ml: { sm: 0, xs: 2 },

                                              color: 'white',
                                              fontSize: { sm: '12px', xs: '11px' },
                                              fontWeight: '500',
                                              borderRadius: '60px',
                                              '&:hover': {
                                                background: 'rgba(0, 0, 0, 0.8)' // Adjust the alpha channel (0.8) as needed
                                              }
                                            }}
                                            onClick={() => {
                                              setactiveMarker(marker.id);
                                              handleMarkerClick(marker?.id, false);
                                              setIsInfoWindowVisible(true);
                                              setShowCenterDetails(true);
                                            }}
                                          >
                                            View Details
                                          </Button>
                                        </Stack>
                                      </Stack>
                                    )}
                                  </Box>
                                  {smallScreen && (
                                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                      <a
                                        href={googleMapsUrl || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#000', textDecoration: 'none' }}
                                      >
                                        <Box
                                          sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                          }}
                                        >
                                          <DirectionsIcon
                                            sx={{
                                              fontSize: 30,
                                              backgroundColor: '#000',
                                              borderRadius: '50%',
                                              padding: '5px',
                                              color: '#fff'
                                            }}
                                          />
                                          <Typography variant="h6" sx={{ fontSize: '12px', mt: 1 }}>
                                            Directions
                                          </Typography>
                                        </Box>
                                      </a>
                                      <Stack sx={{ mt: 2 }}>
                                        <Button
                                          variant="contained"
                                          sx={{
                                            background: '#000',
                                            width: '113px',
                                            color: 'white',
                                            fontSize: '12px',
                                            fontWeight: '500',
                                            borderRadius: '60px',
                                            '&:hover': {
                                              background: 'rgba(0, 0, 0, 0.8)' // Adjust the alpha channel (0.8) as needed
                                            }
                                          }}
                                          onClick={() => {
                                            setactiveMarker(marker.id);
                                            handleMarkerClick(marker?.id, false);
                                            setIsInfoWindowVisible(true);
                                            setShowCenterDetails(true);
                                          }}
                                        >
                                          View Details
                                        </Button>
                                      </Stack>
                                    </Stack>
                                  )}
                                </>
                              </InfoWindow>
                            ) : null}
                          </Marker>
                        ))}
                      </>
                    )}
                  </GoogleMap>}
                  {/* </LoadScript> */}
                </div>
              </Stack>
            </Grid>
            {/* Desktop Modal box */}
            {!isLoading && ShowCenterDetails && (
              <Slide
                direction={smallScreen ? 'up' : 'right'}
                in={ShowCenterDetails}
                mountOnEnter
                unmountOnExit
                timeout={500}
                id="slideComponent"
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    background: '#fff',
                    height: { xs: '100%', md: fields[0].date_of_birth ? windowSize.innerHeight - 200 : windowSize.innerHeight - 140 },
                    borderRadius: '10px 10px 10px 10px',
                    width: { md: '350px', xs: '100%' },
                    position: 'absolute',
                    zIndex: 3,
                    left: { xs: 'auto', md: '390px' },
                    marginTop: { md: fields[0].date_of_birth ? '130px' : '68px', xs: 'auto' }
                  }}
                >
                  <Grid sx={{ marginLeft: !daycareList ? '0px' : { lg: '16%', md: '23%', sm: '31%', sx: '30%' } }}>
                    <button
                      onClick={handleClose}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        right: '-26px',
                        zIndex: 10,
                        background: '#fff',
                        border: 'none',
                        borderTopRightRadius: '5px',
                        borderBottomRightRadius: '5px',
                        padding: '10px 1px 10px 1px',
                        cursor: 'pointer'
                      }}
                    >
                      {daycareList ? <ArrowLeftOutlinedIcon /> : <ArrowRightOutlinedIcon />}
                    </button>
                  </Grid>
                  <SimpleBarStyle clickOnTrack={false} sx={{ borderRadius: '20px !important' }}>
                    <Stack>
                      <Stack
                        sx={{
                          justifyContent: 'flex-end',
                          alignItems: 'flex-end',
                          pb: 1,
                          position: 'absolute',
                          right: 0,
                          borderRadius: '20px'
                        }}
                      >
                        <Stack
                          onClick={handleClose}
                          sx={{
                            marginRight: '20px',
                            marginTop: '20px',
                            '& svg': {
                              transition: 'fill 0.3s', // Smooth transition for the hover effect
                              fill: '#219EBC', // Initial color of the icon
                              '&:hover': {
                                fill: 'black' // Change the color on hover
                              }
                            }
                          }}
                        >
                          <CloseIcon />
                        </Stack>
                      </Stack>
                      <Stack>
                        <img
                          style={{ height: 200, width: '100%', marginTop: '20px' }}
                          src="https://devian.amwaus.com/emailTempPic/e9dbeb966e.jpeg"
                        />
                      </Stack>
                    </Stack>
                    <Stack sx={{ px: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Stack>
                        <Stack sx={{ pr: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', my: 1 }}>
                          <Typography variant="bodytext2">{dayCareslistbyId?.center_name}</Typography>
                          {/* <img src={Approval} height={10} /> */}
                        </Stack>
                        {dayCareslistbyId?.ratings && (
                          <Stack sx={{ pr: 1, display: 'flex', flexDirection: 'row' }}>
                            <Typography variant="h6" sx={{ fontSize: '12px', mr: '5px' }}>
                              {dayCareslistbyId?.ratings}
                            </Typography>
                            <Rating
                              name="read-only"
                              precision={0.5}
                              value={parseFloat(dayCareslistbyId?.ratings)}
                              readOnly
                              sx={{ fontSize: '16px' }}
                            />
                          </Stack>
                        )}

                        <Stack sx={{ pr: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="bodytext">
                            {dayCareslistbyId?.city}, {dayCareslistbyId?.state}, USA
                          </Typography>
                        </Stack>
                      </Stack>
                      <a
                        href={googleMapsUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#000', textDecoration: 'none' }}
                      >
                        <Box sx={{ textAlign: 'center', flexDirection: 'column' }}>
                          <Stack alignItems={'center'}>
                            <DirectionsIcon
                              sx={{
                                fontSize: 25,
                                backgroundColor: '#000',
                                borderRadius: '50%',
                                padding: '5px',
                                color: '#fff'
                              }}
                            />
                          </Stack>
                          <Typography variant="bodytext" sx={{ mt: 1 }}>
                            Directions
                          </Typography>
                        </Box>
                      </a>
                    </Stack>

                    <Stack
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: isSimpleSearch ? 'space-around' : 'flex-start',
                        pt: 2,
                        px: 1,
                        borderBottom: '1px solid #c0c0c0'
                      }}
                    >
                      <Button
                        variant="text"
                        sx={{
                          width: 120,
                          borderRadius: 0,
                          color: Detailstab ? '#000' : '#c0c0c0',
                          borderBottom: Detailstab ? '2px solid #000' : '2px solid transparent',
                          marginBottom: '-1px',
                          '&:hover': {
                            borderColor: '#000',
                            color: '#000',
                            borderWidth: 2,
                            backgroundColor: 'transparent'
                          }
                        }}
                        onClick={DetailTabHandle}
                      >
                        Details
                      </Button>
                      {isSimpleSearch && (
                        <Button
                          variant="text"
                          sx={{
                            width: 120,
                            borderRadius: 1,
                            color: EnrollemntTab ? '#fff' : '#fff',
                            background: EnrollemntTab ? '#000' : '#000',

                            borderBottom: EnrollemntTab ? '2px solid #000' : '2px solid transparent',
                            marginBottom: '-1px',
                            '&:hover': {
                              borderColor: '#000',
                              color: '#fff',
                              borderWidth: 2,
                              backgroundColor: '#1D1D1D'
                            }
                          }}
                          onClick={EnrollmentTabHandle}
                        >
                          Pre-Enrollment
                        </Button>
                      )}
                    </Stack>

                    {Detailstab && (
                      <Detailstabs
                        setDetailsModalOpenSearch={setDetailsModalOpen}
                        googleMapsUrl={googleMapsUrl}
                        dayCareslistbyId={dayCareslistbyId}
                        marketplace={isSimpleSearch}
                      />
                    )}
                    {EnrollemntTab && (
                      <EnnrollmentForm
                        data={centersList}
                        notes={notes}
                        setNotes={setNotes}
                        fields={fields}
                        setFields={setFields}
                        programs={programs}
                        questions={dayCareslistbyId?.ques}
                        centerid={dayCareslistbyId?.id}
                        dayCareslistbyId={dayCareslistbyId}
                      />
                    )}
                  </SimpleBarStyle>
                </Grid>
              </Slide>
            )}
            {/* Filters */}
            {mdScreen && (
              <FilterDrawer
                open={open}
                handleDrawer={handleDrawer}
                centerCapacity={centerCapacity}
                handleChangeCenterCapacity={handleChangeCenterCapacity}
                rating={rating}
                handleRating={handleRating}
                openingTime={openingTime}
                handleOpeningTime={handleOpeningTime}
                closingTime={closingTime}
                handleClosingTime={handleClosingTime}
                financialAid={financialAid}
                handleFinancialAid={handleFinancialAid}
              // resetFilters={resetFilters} // Define this method to reset filter states
              // applyFilters={applyFilters} // Define this method to apply filter states
              />
            )}
            <Stack sx={{ width: '100%', position: 'absolute', zIndex: 2, p: { xs: '20px 12px', md: 0 } }}>
              <Grid
                container
                // spacing={2}
                sx={{
                  // left: { md: '580px', xs: '0' },
                  py: 1,
                  border: { xs: '0.5px solid #DADBDD', md: '0px' },
                  borderRadius: { xs: '6px', md: '0px' },
                  backgroundColor: { xs: '#F2F2F2', md: 'rgba(0, 0, 0, 0.25)' }
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3.2}
                  lg={2.9}
                  sx={{ display: 'flex', marginLeft: '8px', alignItems: 'center', width: { xs: '100%' }, maxWidth: '371px !important' }}
                >
                  <Stack
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: { xs: '2px', md: '0px' },
                      width: '100%',
                      m: { xs: 1, md: 'auto' }
                    }}
                  >

                    <Paper
                      component="form"
                      sx={{
                        p: { xs: '0', sm: '4px' },
                        display: 'flex',
                        alignItems: 'center',
                        width: { xs: '100%' },
                        zIndex: 2,
                        // width: { xs: '950vw', sm: '562px' },
                        border: { xs: '1px solid #D2D2D2', md: 'none' },
                        borderRadius: { xs: '30px', md: '8px' },
                        position: 'relative'
                      }}
                    >
                      <IconButton onClick={toggleDaycareList} sx={{ p: '10px' }} aria-label="menu">
                        <MenuIcon />
                      </IconButton>
                      {/* <GoogleAutoComplete
                        defaultValue={zipcod ? zipcod : cityName}
                        placeholder={'Search city or zip code'}
                        handleChangeSearchInput={handleChangeSearchInput}
                        sx={{  background: 'white',
                        outline: 'none',
                        border: 'none', }}
                       
                      /> */}

                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        id="outlined-basic"
                        placeholder="Search city or zip code"
                        inputProps={{ 'aria-label': 'search zipCode' }}
                        value={zipCode ? zipCode : cityName}
                        onChange={handleChangeSearchInput}
                        onKeyDown={(e) => {
                          if (e.key == 'Enter') {
                            e.preventDefault(); // Prevent default behavior of the Enter key
                            if (isResetMarketPlace) {
                              setResetMarketPlace(true);
                            } else {
                              handlesearch();
                              setSelectedCenter(null);
                            }
                          }
                        }} // Ensure this line is present and properly binds the event
                      />
                      {zipCodeValidation && (
                        <Typography
                          component="p"
                          sx={{
                            color: 'red',
                            height: '21px',
                            position: 'absolute',
                            top: '-9px',
                            left: '56px',
                            fontSize: '14px',
                            lineHeight: '1.57',
                            fontWeight: '400',
                            backgroundColor: '#f9d3d3',
                            padding: '0px 7px',
                            borderRadius: '7px'
                          }}
                        >
                          Enter city or zip code
                        </Typography>
                      )}

                      <IconButton
                        onClick={() => {
                          zipcod = zipCode;
                          if (isResetMarketPlace) {
                            setResetMarketPlace(true);
                          } else {
                            handlesearch();
                            setSelectedCenter(null);
                          }
                        }}
                        type="button"
                        sx={{
                          p: { xs: '10px 25px', sm: '10px' },
                          borderRadius: { xs: '20px', sm: '0px' },
                          background: { xs: '#000', sm: 'transparent' },
                          // ml: { xl: 8, lg: 1, xs: 0 },
                          color: { xs: '#fff', sm: 'inherit' },
                          position: 'absolute',
                          right: { xs: '0px', sm: '10px' },
                          '&:focus': {
                            backgroundColor: 'transparent',
                            color: 'inherit'
                          }
                        }}
                        aria-label="search"
                      >
                        <SearchIcon />
                      </IconButton>

                      {/* {daycareList && !smallScreen && (
                          <>
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <IconButton
                              onClick={() => {
                                setdaycareList(false);
                              }}
                              color="primary"
                              sx={{ p: '12px' }}
                              aria-label="directions"
                            >
                              <CloseIcon />
                            </IconButton>
                          </>
                        )} */}
                    </Paper>

                    <Stack pl={2} sx={{ display: { md: 'none', sm: 'block' } }}><FilterAltIcon onClick={() => setOpen(!open)} /></Stack>
                    <Stack>
                      {radiusvalidation && (
                        <Typography component="p" sx={{ color: 'red' }}>
                          Radius must be greater than 5
                        </Typography>
                      )}
                    </Stack>
                  </Stack>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={8}
                  sx={{
                    // ml: { sm: 10, md: 0 },
                    px: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    '& > .css-11lq3yg-MuiGrid-root': {
                      flexWrap: 'nowrap'
                    },
                    overflowX: { xs: 'scroll' },
                    '&::-webkit-scrollbar': {
                      display: { xs: 'none' }
                    }
                  }}
                >
                  {!mdScreen && (
                    <Grid container sx={{ py: { xs: '10px', md: '0px' }, pl: { xs: '10px', md: '0' } }}>
                      <Grid
                        item
                        md={2.4}
                        sm={2}
                        sx={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          zIndex: 2,
                          pr: 1,
                          display: { xs: 'inline-block', md: 'flex' },
                          minWidth: { xs: '33%', sm: '20%' }
                        }}
                      >
                        <FormControl fullWidth size="small" sx={{ background: 'white', borderRadius: '120px' }}>
                          {centerCapacity == '' ? (
                            <InputLabel
                              id="demo-simple-select-label"
                              sx={{
                                display: 'flex', justifyContent: 'center',
                                fontSize: 14,
                                height: 20,
                                pr: 1,
                                color: '#000'
                              }}
                            >
                              <span>
                                <PersonOutlinedIcon sx={{ fontSize: '16px', fontWeight: 500, mr: '4px' }} />
                              </span>
                              Capacity
                            </InputLabel>
                          ) : null}
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={centerCapacity}
                            //   placeholder="Center Capacity"
                            onChange={handleChangeCenterCapacity}
                            onClick={(e) => e.stopPropagation()}
                            endAdornment={
                              <IconButton sx={{ visibility: centerCapacity ? 'visible' : 'hidden' }} onClick={() => setCenterCapacity('')}>
                                <CloseIcon />
                              </IconButton>
                            }
                            sx={{
                              '& .MuiSelect-icon': {
                                display: 'none'
                              },
                              '& fieldset': {
                                borderWidth: 0,
                                borderRadius: '120px',
                                boxShadow: '0px 1px 3px 1px rgba(60, 64, 67, 0.15)'
                              },
                              borderRadius: '120px',
                              height: 32,
                              pr: 0
                            }}
                          >
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'101 - 0'}>
                              Capacity 100+
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'50 - 100'}>
                              Capacity 50-100
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'0 - 49'}>
                              Capacity Less than 50
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        md={2.4}
                        sm={2}
                        sx={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          zIndex: 2,
                          pr: 0.5,
                          display: { xs: 'inline-block', md: 'flex' },
                          minWidth: { xs: '33%', sm: '20%' }
                        }}
                      >
                        <FormControl fullWidth size="small" sx={{ background: 'white', borderRadius: '120px' }}>
                          {!rating && (
                            <InputLabel id="demo-simple-select-label" sx={{ display: 'flex', justifyContent: 'center', fontSize: 14, height: 15, pr: 1, color: '#000' }}>
                              <span>
                                <StarOutlineRoundedIcon sx={{ fontSize: '16px', fontWeight: 500, mr: '4px' }} />
                              </span>
                              Rating
                            </InputLabel>
                          )}
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={rating}
                            onChange={handleRating}
                            endAdornment={
                              <IconButton
                                sx={{ visibility: rating ? 'visible' : 'hidden' }}
                                onClick={() => {
                                  setRating('');
                                }}
                              >
                                <CloseIcon />
                              </IconButton>
                            }
                            sx={{
                              '& .MuiSelect-icon': {
                                display: 'none'
                              },
                              '& fieldset': {
                                borderWidth: 0,
                                borderRadius: '120px',
                                boxShadow: '0px 1px 3px 1px rgba(60, 64, 67, 0.15)'
                              },
                              borderRadius: '120px',

                              height: 32,
                              pr: 0
                            }}
                          >
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'5'}>
                              5.0
                              <Rating name="read-only" precision={0.5} value={5.0} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'4'}>
                              4.0
                              <Rating name="read-only" value={4.0} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'3'}>
                              3.0
                              <Rating name="read-only" value={3.0} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'2'}>
                              2.0
                              <Rating name="read-only" value={2.0} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'1'}>
                              1.0
                              <Rating name="read-only" value={1.0} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem>
                            {/* <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'2.5'}>
                              2.5
                              <Rating name="read-only" precision={0.5} value={2.5} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem> */}

                            {/* <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'3.5'}>
                              3.5
                              <Rating name="read-only" precision={0.5} value={3.5} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem> */}

                            {/* <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'4.5'}>
                              4.5
                              <Rating name="read-only" precision={0.5} value={4.5} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem> */}
                          </Select>
                        </FormControl>
                      </Grid>
                      {!smallScreen && (
                        <>
                          <Grid
                            item
                            md={2.4}
                            sx={{
                              display: { xs: 'inline-block', md: 'flex' },
                              minWidth: { xs: '33%', sm: '20%' },
                              justifyContent: 'center',
                              alignItems: 'center',
                              zIndex: 2,
                              pr: 0.5,
                              my: { md: 1 }
                            }}
                          >
                            <FormControl fullWidth size="small" sx={{ background: 'white', borderRadius: '120px' }}>
                              {!openingTime && (
                                <InputLabel id="demo-simple-select-label" sx={{ display: 'flex', justifyContent: 'center', fontSize: 14, height: 15, pr: 1, color: '#000' }}>
                                  <span>
                                    <AccessTimeRoundedIcon sx={{ fontSize: '16px', fontWeight: 500, mr: '4px' }} />
                                  </span>
                                  Opening Time
                                </InputLabel>
                              )}
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={openingTime}
                                onChange={handleOpeningTime}
                                endAdornment={
                                  <IconButton sx={{ visibility: openingTime ? 'visible' : 'hidden' }} onClick={() => setOpeningTime('')}>
                                    <CloseIcon />
                                  </IconButton>
                                }
                                sx={{
                                  '& .MuiSelect-icon': {
                                    display: 'none'
                                  },
                                  '& fieldset': {
                                    borderWidth: 0,
                                    borderRadius: '120px',
                                    boxShadow: '0px 1px 3px 1px rgba(60, 64, 67, 0.15)'
                                  },
                                  borderRadius: '120px',

                                  height: 32,
                                  pr: 0
                                }}
                              >
                                <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'06:00'}>
                                  6am or earlier
                                </MenuItem>
                                <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'07:00'}>
                                  7am or earlier
                                </MenuItem>
                                <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'08:00'}>
                                  8am or earlier
                                </MenuItem>
                                <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'09:00'}>
                                  9am or earlier
                                </MenuItem>
                                <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'10:00'}>
                                  10am or earlier
                                </MenuItem>
                                <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'11:00'}>
                                  11am or earlier
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid
                            item
                            md={2.4}
                            sx={{
                              display: { xs: 'inline-block', md: 'flex' },
                              minWidth: { xs: '33%', sm: '20%' },
                              justifyContent: 'center',
                              alignItems: 'center',
                              zIndex: 2,
                              pr: 0.5
                            }}
                          >
                            <FormControl fullWidth size="small" sx={{ background: 'white', borderRadius: '120px', height: 32 }}>
                              {!closingTime && (
                                <InputLabel id="demo-simple-select-label" sx={{ display: 'flex', justifyContent: 'center', fontSize: 14, height: 15, pr: 1, color: '#000' }}>
                                  <AccessTimeRoundedIcon sx={{ fontSize: '16px', fontWeight: 500, mr: '4px' }} />
                                  Closing Time
                                </InputLabel>
                              )}
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={closingTime}
                                onChange={handleClosingTime}
                                endAdornment={
                                  <IconButton sx={{ visibility: closingTime ? 'visible' : 'hidden' }} onClick={() => setClosingTime('')}>
                                    <CloseIcon />
                                  </IconButton>
                                }
                                sx={{
                                  '& .MuiSelect-icon': {
                                    display: 'none'
                                  },
                                  '& fieldset': {
                                    borderWidth: 0,
                                    borderRadius: '120px',
                                    boxShadow: '0px 1px 3px 1px rgba(60, 64, 67, 0.15)'
                                  },
                                  borderRadius: '120px',

                                  height: 32,
                                  pr: 0
                                }}
                              >
                                <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'16:00'}>
                                  4pm or earlier
                                </MenuItem>
                                <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'17:00'}>
                                  5pm or earlier
                                </MenuItem>
                                <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'18:00'}>
                                  6pm or earlier
                                </MenuItem>
                                <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'19:00'}>
                                  7pm or earlier
                                </MenuItem>
                                <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'20:00'}>
                                  8pm or earlier
                                </MenuItem>
                                <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'21:00'}>
                                  9pm or earlier
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid
                            item
                            md={2.4}
                            sx={{
                              display: { xs: 'inline-block', md: 'flex' },
                              minWidth: { xs: '33%', sm: '20%' },
                              justifyContent: 'center',
                              alignItems: 'center',
                              zIndex: 2,
                              pr: 0.5
                            }}
                          >
                            <FormControl fullWidth size="small" sx={{ background: 'white', borderRadius: '120px' }}>
                              {!financialAid && (
                                <InputLabel id="demo-simple-select-label" sx={{ fontSize: 14, height: 15, color: '#000' }}>
                                  <img
                                    width="12"
                                    height="auto"
                                    style={{ marginRight: '4px' }}
                                    src="https://img.icons8.com/ios/50/database--v1.png"
                                    alt="database--v1"
                                  />
                                  Financial Aid
                                </InputLabel>
                              )}
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={financialAid}
                                onChange={handleFinancialAid}
                                endAdornment={
                                  <IconButton sx={{ visibility: financialAid ? 'visible' : 'hidden' }} onClick={() => setFinancialAid('')}>
                                    <CloseIcon />
                                  </IconButton>
                                }
                                sx={{
                                  '& .MuiSelect-icon': {
                                    display: 'none'
                                  },
                                  '& fieldset': {
                                    borderWidth: 0,
                                    borderRadius: '120px',
                                    boxShadow: '0px 1px 3px 1px rgba(60, 64, 67, 0.15)',
                                    pr: 0
                                  },
                                  borderRadius: '120px',
                                  height: 32,
                                  pr: 0
                                }}
                              >
                                <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'early_head_start'}>
                                  Early Head Start (0-3 years)
                                </MenuItem>
                                <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'head_start'}>
                                  Head Start (3-5 years)
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </>
                      )}
                      {smallScreen && (
                        <Grid
                          sx={{
                            display: { xs: 'inline-block', md: 'flex' },
                            zIndex: 9,
                            pr: 0.5
                          }}
                        >
                          <Button
                            onClick={() => setOpen(!open)}
                            variant="contained"
                            sx={{
                              background: 'white',
                              borderRadius: '120px',
                              boxShadow: '0px 1px 3px 1px rgba(60, 64, 67, 0.15)',
                              height: 32,
                              minWidth: 100,
                              '&:hover': {
                                background: 'white',
                                boxShadow: '0px 2px 4px 2px rgba(60, 64, 67, 0.2)'
                              },
                              textTransform: 'none',
                              fontSize: 14,
                              fontWeight: 'bold',
                              color: '#000'
                            }}
                          >
                            All Filters
                          </Button>
                        </Grid>
                      )}
                    </Grid>
                  )}
                  {mdScreen && (
                    <SimpleBarStyle sx={{ display: 'none', px: 2, maxWidth: { xs: '100%', sm: '95%' }, width: '100%' }}>
                      <Stack
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center'
                        }}
                      >
                        <FormControl
                          fullWidth
                          size="small"
                          sx={{
                            display: 'flex',
                            backgroundColor: 'white',
                            borderRadius: '120px',
                            minWidth: centerCapacity ? (centerCapacity.length > 15 ? '200px' : '170px') : '120px',
                            mr: 1
                          }}
                        >
                          {centerCapacity == '' ? (
                            <InputLabel
                              id="demo-simple-select-label"
                              sx={{
                                fontSize: 14,
                                height: 20,
                                pr: 1,
                                color: '#000',
                                width: '100%'
                              }}
                            >
                              <span>
                                <PersonOutlinedIcon sx={{ fontSize: '16px', fontWeight: 500, mr: '4px' }} />
                              </span>
                              Capacity
                            </InputLabel>
                          ) : null}
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={centerCapacity}
                            //   placeholder="Center Capacity"
                            onChange={handleChangeCenterCapacity}
                            onClick={(e) => e.stopPropagation()}
                            endAdornment={
                              <IconButton
                                sx={{ visibility: centerCapacity ? 'visible' : 'hidden' }}
                                onClick={() => {
                                  debugger;
                                  setfilteredData([...marketPlaceFilteredData]);
                                  setCenterCapacity('');
                                }}
                              >
                                <CloseIcon />
                              </IconButton>
                            }
                            sx={{
                              '& .MuiSelect-icon': {
                                display: 'none'
                              },
                              '& fieldset': {
                                borderWidth: 0,
                                borderRadius: '120px',
                                boxShadow: '0px 1px 3px 1px rgba(60, 64, 67, 0.15)'
                              },
                              borderRadius: '120px',
                              height: 32,
                              pr: 0
                            }}
                          >
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'101 - 0'}>
                              Capacity 100+
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'50 - 100'}>
                              Capacity 50-100
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'0 - 49'}>
                              Capacity Less than 50
                            </MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl
                          fullWidth
                          size="small"
                          sx={{ background: 'white', borderRadius: '120px', minWidth: rating ? '160px' : '120px', m: 1 }}
                        >
                          {!rating && (
                            <InputLabel id="demo-simple-select-label" sx={{ fontSize: 14, height: 15, pr: 1, color: '#000' }}>
                              <span>
                                <StarOutlineRoundedIcon sx={{ fontSize: '16px', fontWeight: 500, mr: '4px' }} />
                              </span>
                              Rating
                            </InputLabel>
                          )}
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={rating}
                            onChange={handleRating}
                            endAdornment={
                              <IconButton sx={{ visibility: rating ? 'visible' : 'hidden' }} onClick={() => setRating('')}>
                                <CloseIcon />
                              </IconButton>
                            }
                            sx={{
                              '& .MuiSelect-icon': {
                                display: 'none'
                              },
                              '& fieldset': {
                                borderWidth: 0,
                                borderRadius: '120px',
                                boxShadow: '0px 1px 3px 1px rgba(60, 64, 67, 0.15)'
                              },
                              borderRadius: '120px',

                              height: 32,
                              pr: 0
                            }}
                          >
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'5'}>
                              5.0
                              <Rating name="read-only" precision={0.5} value={5.0} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'4'}>
                              4.0
                              <Rating name="read-only" value={4.0} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'3'}>
                              3.0
                              <Rating name="read-only" value={3.0} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'2'}>
                              2.0
                              <Rating name="read-only" value={2.0} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'1'}>
                              1.0
                              <Rating name="read-only" value={1.0} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem>
                            {/* <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'2.0'}>
                              2.0
                              <Rating name="read-only" value={2.0} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'2.5'}>
                              2.5
                              <Rating name="read-only" precision={0.5} value={2.5} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'3.0'}>
                              3.0
                              <Rating name="read-only" value={3.0} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'3.5'}>
                              3.5
                              <Rating name="read-only" precision={0.5} value={3.5} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'4.0'}>
                              4.0
                              <Rating name="read-only" value={4.0} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'4.5'}>
                              4.5
                              <Rating name="read-only" precision={0.5} value={4.5} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'5.0'}>
                              5.0
                              <Rating name="read-only" precision={0.5} value={5.0} readOnly sx={{ fontSize: '12px' }} />
                            </MenuItem> */}
                          </Select>
                        </FormControl>
                        <Button
                          onClick={() => setOpen(!open)}
                          variant="contained"
                          sx={{
                            background: 'white',
                            borderRadius: '120px',
                            boxShadow: '0px 1px 3px 1px rgba(60, 64, 67, 0.15)',
                            height: 32,
                            minWidth: 100,
                            '&:hover': {
                              background: 'white',
                              boxShadow: '0px 2px 4px 2px rgba(60, 64, 67, 0.2)'
                            },
                            textTransform: 'none',
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000'
                          }}
                        >
                          All Filters
                        </Button>
                      </Stack>
                    </SimpleBarStyle>
                  )}
                </Grid>

                {fields[0].date_of_birth && !isSimpleSearch && (
                  <Grid item xs={12} sx={{ my: { xs: 1, md: 0 } }}>
                    <SimpleBarStyle sx={{ px: 2, maxWidth: { xs: '100%', sm: '95%' }, width: '100%' }}>
                      <Stack
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          pr: 2
                        }}
                      >
                        {fields.map((field, index) => {
                          return (
                            <Stack
                              key={index}
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                background: '#3A3D42',
                                borderRadius: '10px',

                                p: 1,
                                m: { sm: 1, xs: 0.5 }
                              }}
                            >
                              <Stack
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  pr: 2,
                                  minWidth: '105px',
                                  overflow: 'hidden',
                                  whiteSpace: 'nowrap'
                                }}
                              >
                                <Typography sx={{ fontSize: '14px', color: '#fff', ml: 1 }}>
                                  {field?.name.length >= 10 ? field.name.substring(0, 10) + '...' : field.name}
                                </Typography>
                              </Stack>
                              <Stack
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  minWidth: '140px',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  mr: 1
                                }}
                              >
                                <Typography sx={{ fontSize: '14px', color: '#fff', ml: 1 }}>
                                  {getGroupName(field.date_of_birth) && (getGroupName(field.date_of_birth)?.program_name).length > 18
                                    ? getGroupName(field.date_of_birth)?.program_name.substring(0, 18) + '...'
                                    : getGroupName(field.date_of_birth)?.program_name}
                                </Typography>
                              </Stack>
                              <Stack
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center'
                                }}
                              >
                                <Typography sx={{ fontSize: '14px', color: '#fff', mr: 2 }}>${field.tution_fee}</Typography>
                              </Stack>
                              <Stack
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  justifyContent: 'flex-end',
                                  ml: 2,
                                  width: '100%'
                                }}
                              >
                                <Trash
                                  className="child-care-center"
                                  size="18"
                                  cursor={'pointer'}
                                  color="#fff"
                                  onClick={() => {
                                    setSelectedChild(index);
                                    setModalOpen(true);
                                  }}
                                />
                                <Button
                                  sx={{
                                    background: '#FF7A00',
                                    color: '#fff',
                                    borderRadius: '20px',
                                    border: '1px solid #000',
                                    p: 0,
                                    ml: 2,
                                    width: '100%',
                                    maxWidth: '60px',
                                    fontSize: '12px',
                                    '&:hover': {
                                      backgroundColor: '#FF7A00',
                                      color: '#fff'
                                    }
                                  }}
                                  onClick={() => {
                                    setMarketPlacePopup(true);
                                    setEditMarketPlacePopup(true);
                                  }}
                                >
                                  {!mdScreen ? 'Edit' : <Edit />}
                                </Button>
                              </Stack>
                            </Stack>
                          );
                        })}
                        {!mdScreen && (
                          <AddCircle
                            className="child-care-center"
                            size="30"
                            cursor={'pointer'}
                            color="#fff"
                            onClick={() => {
                              setMarketPlacePopup(true);
                            }}
                          />
                        )}
                      </Stack>
                    </SimpleBarStyle>
                  </Grid>
                )}
                {mdScreen && (
                  <Grid container>
                    <Grid item xs={12}>
                      <Box display="flex" justifyContent="center">
                        <Button
                          startIcon={<LayersOutlinedIcon />}
                          variant="contained"
                          sx={{
                            background: isMapView ? '#19A3E0' : '#fff',
                            color: isMapView ? '#fff' : '#000',
                            borderRadius: '20px 0px 0px 20px',
                            '&:hover': {
                              backgroundColor: isMapView ? '#19A3E0' : '#fff',
                              color: isMapView ? '#fff' : '#000'
                            }
                          }}
                          onClick={() => {
                            setIsMapView(true);
                            setdaycareList(true);
                          }}
                        >
                          List View
                        </Button>
                        <Button
                          startIcon={<MapIcon />}
                          variant="contained"
                          sx={{
                            color: !isMapView ? '#fff' : '#000',
                            background: !isMapView ? '#19A3E0' : '#fff',
                            borderRadius: '0px 20px 20px 0px',
                            '&:hover': {
                              backgroundColor: !isMapView ? '#19A3E0' : '#fff',
                              color: !isMapView ? '#fff' : '#000'
                            }
                          }}
                          onClick={() => {
                            setIsMapView(false);
                            setShowCenterDetails(false);
                            setdaycareList(false);
                          }}
                        >
                          Map View
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                )}
              </Grid>{' '}
            </Stack>
          </Grid>

          {/* {mdScreen && !ShowCenterDetails && isSimpleSearch && (
              <Grid container sx={{ zIndex: 10 }}>
                <Grid xs={12}>
                  <Box display="flex" justifyContent="center" sx={{ position: 'sticky', backgroundColor: 'white', bottom: 0, pt: 3, px: 2 }}>
                    {isMapView ? (
                      <Button
                        endIcon={<MapIcon />}
                        variant="contained"
                        sx={{
                          background: '#000',
                          borderRadius: '20px',
                          width: '100%',
                          '&:hover': {
                            backgroundColor: '#000'
                          }
                        }}
                        onClick={() => {
                          setIsMapView(false);
                          setShowCenterDetails(false);
                          setdaycareList(false);
                        }}
                      >
                        Map View
                      </Button>
                    ) : (
                      <Button
                        endIcon={<LayersOutlinedIcon />}
                        variant="contained"
                        sx={{
                          background: '#000',
                          borderRadius: '20px',
                          width: '100%',
                          '&:hover': {
                            backgroundColor: '#000'
                          }
                        }}
                        onClick={() => {
                          setIsMapView(true);
                          setdaycareList(true);
                        }}
                      >
                        List View
                      </Button>
                    )}
                  </Box>
                </Grid>
              </Grid>
            )} */}

          {mdScreen && !ShowCenterDetails && !isSimpleSearch && !isMapView && (
            <Grid container sx={{ zIndex: 10 }}>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center" sx={{ position: 'sticky', backgroundColor: 'white', bottom: 0, pt: 3, px: 2 }}>
                  <Button
                    endIcon={<LayersOutlinedIcon />}
                    variant="contained"
                    sx={{
                      background: '#000',
                      borderRadius: '20px',
                      width: '100%',
                      '&:hover': {
                        backgroundColor: '#000'
                      }
                    }}
                    onClick={() => {
                      setIsMapView(true);
                      setdaycareList(true);
                    }}
                  >
                    List View
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}


          <Stack
            sx={{
              // p: 5,
              pt: { md: 0, xs: isSimpleSearch ? 0 : 10 }
              // background: '#fff'
            }}
          >
            <Divider sx={{ mt: 2 }} />
            {/* <Grid conatiner>
                <Grid item lg={6}>
  
                </Grid>
                <Grid item lg={6}>
                  
                </Grid>
              </Grid> */}
            <SlickSlider />
            {matches ? <ParentDashboard /> : <ParentDashboardForHomeMobile />}

            {/* <SectionTwo /> */}
            {/* <NewSection2 /> */}
            <NewHomesec7 />
            {/* <SectionThree /> */}
            {/* <NewSectionFive /> */}
            {/* <NewSectionSeven /> */}
            <NewSectionEight />
            {!/^\d+$/.test(`${zipcod}`) && <Container sx={{ my: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={aiAboutCity ? 6 : 12}>


                  <Stack sx={{ background: '#fff' }}>
                    {/* <MainCard title="UseFul Information" variant="sectiontitle"> */}
                      <Stack sx={{ height: '300px', overflowY: 'auto', }}>
                        {/* {Array.isArray(cityInfo) &&
                          cityInfo?.length !== 0 &&
                          cityInfo.map((item: any) => (
                            item?.seo_content &&
                            getListOfTagsTextFromString(item?.seo_content, /<(h[2-4])>([^<>]+)<\/\1>/g, /<\/?h2>/g).map(
                              (_item: any, index: any) => (
                                <Stack sx={{ my: 2 }}>
                                  <h2>
                                    {' '}
                                    <Typography sx={{ fontSize: '16px', fontWeight: 600, my: 1 }} dangerouslySetInnerHTML={{ __html: _item }} />
                                  </h2>
                                  {item?.seo_content && (
                                    <Typography
                                      sx={{ fontSize: '14px' }}
                                      dangerouslySetInnerHTML={{
                                        __html: getListOfTagsTextFromString(item?.seo_content, /<div[^>]*?>([\s\S]*?)<\/div>/g, /<\/?div>/g)[index]
                                      }}
                                    />
                                  )}
                                </Stack>
                              )
                            )))} */}
                        {categoryContent && (
                          <Stack>
                            {categoryContent &&
                              getListOfTagsTextFromString(categoryContent, /<(h[2-4])>([^<>]+)<\/\1>/g, /<\/?h2>/g).map((_item: any, index: any) => {
                                // debugger
                                return (
                                  <Stack>
                                    <h2>
                                      {' '}
                                      <Typography sx={{ fontSize: '16px', fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: _item }} />
                                    </h2>
                                    {categoryContent && (
                                      <Typography
                                        sx={{ fontSize: '14px' }}
                                        dangerouslySetInnerHTML={{
                                          __html: getListOfTagsTextFromString(categoryContent, /<div[^>]*?>([\s\S]*?)<\/div>/g, /<\/?div>/g)[index]
                                        }}
                                      />
                                    )}
                                  </Stack>
                                );
                              })}
                          </Stack>
                        )}

                        {aiContent && <Typography
                          sx={{ fontSize: '14px', mt: 5 }}
                          dangerouslySetInnerHTML={{
                            __html: aiContent

                          }}
                        />}


                      </Stack>
                    {/* </MainCard> */}
                  </Stack>

                </Grid>
                {aiAboutCity && <Grid item xs={12} md={6}>

                  <Stack sx={{ background: '#fff' }}>
                    {/* <MainCard title="About City" variant="sectiontitle"> */}
                      <Stack sx={{ height: '300px', overflowY: 'auto', }}>

                        {aiAboutCity &&
                          <Typography
                            sx={{ mt: 1 }}
                            dangerouslySetInnerHTML={{
                              __html: aiAboutCity

                            }}
                          />}
                      </Stack>
                    {/* </MainCard> */}
                  </Stack>

                </Grid>}
              </Grid>
            </Container>}



            {!mdScreen && (
              <>
                <MarketPlaceWelcomePopup open={welcomePopup} onClose={handleWelcomePopup} setMarketPlacePopup={setMarketPlacePopup} setWelcomePopup={setWelcomePopup} />
                <MarketPlacePopup
                  sliderRatio={sliderRatio}
                  graphData={graphData}
                  setEditMarketPlacePopup={setEditMarketPlacePopup}
                  editMarketPlacePopup={editMarketPlacePopup}
                  setWelcomePopup={setWelcomePopup}
                  // setShowTopFrom={setShowTopFrom}
                  // setIsShowTopMarketPlace={setIsShowTopMarketPlace}
                  isSimpleSearch={isSimpleSearch}
                  setIsSimpleSearch={setIsSimpleSearch}
                  fields={fields}
                  setFields={setFields}
                  programs={programs}
                  selectedPrice={handleSelectedPrice}
                  data={centersList}
                  open={marketPlacePopup}
                  onClose={handleMarketPlacePopup}
                  notes={notes}
                  setNotes={setNotes}
                  setFilteredData={setfilteredData}
                  daycareList={centersList}
                  filteredData={filteredData}
                  searchInput={handleChangeSearchInput}
                  setDistance={setSelectedMiles}
                  distance={selectedMiles}
                  handlesearch={handlesearch}
                  handleAddressSearchInput={handleAddressSearchInput}
                  location={zipCode ? zipCode : cityName}
                  currentLocation={currentLocation}
                  stateRates={stateRates}
                />
              </>
            )}
            <TellusPopup
              // setShowTopFrom={setShowTopFrom}
              isMarketPlace={true}
              daycareList={centersList}
              setFilteredData={setfilteredData}
              notes={notes}
              setNotes={setNotes}
              open={isModalOpen1}
              data={filteredData}
              fields={fields}
              setFields={setFields}
              onClose={handleCloseModal1}
            />
            <DeleteChildrenModal open={isModalOpen} onClose={handleCloseModal} onDeleteConfirm={handleDeleteConfirm} />
            <ResetMarketPlaceConfirmation open={resetMarketPlace} onClose={CloseResetMarketPlace} onConfirm={handleConfirm} />
          </Stack>
        </>
      )}
      {/* <Grid container>
          <Grid item xs={12}>
            <NewSeoSection isCity={zipcod} />
          </Grid>
        </Grid> */}
    </Stack>
  );
};
export default SearchDayCares;
