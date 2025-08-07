
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import DayCareSecone from 'sections/daycaredetail/DayCareSecone';
import DayCareSecTwo from 'sections/daycaredetail/DayCareSecTwo';
import DayCareSecThree from 'sections/daycaredetail/DayCareSecThree';
import axios from 'utils/axios';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
const MapMarker = '/assets/images/icons/address-pin.png';
import Map from './customMap';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Box } from '@mui/material';
import { useJsApiLoader } from '@react-google-maps/api';
const xcicle = '/assets/images/home/x-circle.png';
import Image from 'next/image';

// ==============================|| CUSTOMER - DELETE ||============================== //

interface MarketplacenModalProps {
  open?: boolean;
  onClose: () => void;
  id?: any;
  isMarketPlace: any;
}
interface DetailData {
  id?: number;
  lng?: any;
  lat?: any;
  address?: any;
  city?: string;
  state?: string;
  zip_code?: string;
  isMarketPlace: any;
}
const MarketplacenModal: React.FC<MarketplacenModalProps> = ({
  open,
  onClose,
  id
}) => {
  const [detailData, setDetailData] = useState<DetailData | any>(null);
  // const [openMaketplacePopup, setOpenMaketplacePopup] = useState(false);

  // const handleOpenMarketplacePopup = () => {
  //   setOpenMaketplacePopup(true);
  // };

  // const handleCloseMarketplacePopup = () => {
  //   setOpenMaketplacePopup(false);
  // };
  const handleDayCareDetail = (idFromParam: any) => {
    axios
      .get(`api/search/get_center_detail/${idFromParam}`)
      .then((response) => {
        console.log('response.handleMarkerClick', response.data.data);
        setDetailData(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  useEffect(() => {
    if (id) {
      handleDayCareDetail(id);
    }

  }, [id]);

  const googleMapsUrlBase = 'https://www.google.com/maps/dir/';
  const encodedAddress = encodeURIComponent(detailData?.address);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAWfuNoyVahS2oLLE3AqfP7hSRN8n2ZYAM'
  });
  const googleMapsUrl = `${googleMapsUrlBase}${encodedAddress}`;
  console.log(detailData, '000000000');
  return (
    <Grid container>
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
          onClick={onClose}
          sx={{
            marginRight: '20px',
            marginTop: '20px',
            cursor: 'pointer',
            '& svg': {
              transition: 'fill 0.3s', // Smooth transition for the hover effect
              fill: '#219EBC', // Initial color of the icon
              '&:hover': {
                fill: 'black' // Change the color on hover
              }
            }
          }}
        >
           <Image
              height={20}
              width={20}
              src={xcicle}
              alt={'xcicle'}
            />
          {/* <img src={xcicle} height={"20px"} alt="xcicle" /> */}
        </Stack>
      </Stack>
      <Grid xs={12} sx={{ background: '#fff', px: 2 }}>
        <DayCareSecone detailData={detailData} />
        <DayCareSecTwo detailData={detailData} />
        <DayCareSecThree detailData={detailData} />
        <Stack sx={{ py: '4px', mb: 1, mt: '33px' }} display={'flex'} direction={'column'} justifyContent={'space-between'} my={1}>
          <Typography variant="h4" sx={{ color: '#000', fontWeight: 'bold', marginRight: 4, mb: 2 }}>
            Address
          </Typography>
          <Stack sx={{ display: { md: 'block', sm: 'none' } }}>
            {isLoaded && detailData && Object.keys(detailData).length > 0 && (
              <Map longi={parseFloat(detailData?.lng)} lati={parseFloat(detailData?.lat)} height={'130px'} />
            )}
          </Stack>
          <Box justifyContent={'space-between'} alignItems={'center'} sx={{ display: { xs: 'block', sm: 'flex' }, mt: 2 }}>
            <span style={{ display: 'flex', alignItems: 'center', paddingRight: 2 }}>
              {/* <img src={MapMarker} height={'30px'} /> */}
              <Image
              height={30}
              width={30}
              src={MapMarker}
              alt={'MapMarker'}
            />
              <Typography
                sx={{
                  color: '#292929',
                  fontSize: '16px',
                  fontWeight: 400,
                  // maxWidth: '200px',
                  mt: 1,
                  ml: 2
                }}
              >
                {detailData?.address ? detailData?.address : 'N/A'} <br />
                {detailData?.city ? detailData?.city : 'N/A'},{detailData?.state ? detailData?.state : 'N/A'}, <br />
                {detailData?.zip_code ? detailData?.zip_code : 'N/A'}
              </Typography>
            </span>
            <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
              <a href={googleMapsUrl || '#'} target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'row', sm: 'column' },
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <DirectionsIcon
                    sx={{ fontSize: 30, backgroundColor: '#000', borderRadius: '50%', padding: '5px', color: '#fff', mr: { xs: 3 } }}
                  />
                  <Typography variant="h6" sx={{ fontSize: '16px', mt: 1 }}>
                    Directions
                  </Typography>
                </Box>
              </a>
            </Stack>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};
export default MarketplacenModal;
