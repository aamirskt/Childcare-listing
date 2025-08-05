// import React from 'react';
import { Box, Typography } from '@mui/material';
// import DirectionsIcon from '@mui/icons-material/Directions';
// import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
const MapMarker = '/assets/images/icons/PlaceMarker.png';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
// import { useNavigate } from 'react-router-dom';
import DetailsModal from 'components/DetailsModal';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Stack } from '@mui/system';
import Map from 'components/customMap';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

interface DetailstabsProps {
  googleMapsUrl: string;
  dayCareslistbyId: {
    contact_no: string;
    license_number?: string;
    capacity?: string;
    operating_hours?: string;
    age_serving?: string;
    transport?: string;
    special_needs?: string;
    address?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    lat?: any;
    lng?: any;
    id?: any;
    center_name?: any;
   
  };
  setDetailsModalOpenSearch?: any;
  marketplace?:boolean
}

const Detailstabs: React.FC<DetailstabsProps> = ({ googleMapsUrl, dayCareslistbyId, setDetailsModalOpenSearch,marketplace }) => {
  console.log(dayCareslistbyId, 'im in details tab');
  const theme = useTheme();

  // const navigate = useNavigate();
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const handleCloseDetailsModal = () => setDetailsModalOpen(false);
  const mdScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack sx={{ py: 2 }}>
      {/* </Stack> */}
      {/* <Grid container spacing={1} sx={{ px: 2, pb: 2 }}>
        <Grid item xs={3}>
          <a href={googleMapsUrl || '#'} target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none' }}>
            <Box sx={{ textAlign: 'center' }}>
              <DirectionsIcon
                sx={{
                  fontSize: 30,
                  backgroundColor: '#000',
                  borderRadius: '50%',
                  padding: '5px',
                  color: '#fff'
                }}
              />
              <Typography variant="bodytext" sx={{ mt: 1 }}>
                Directions
              </Typography>
            </Box>
          </a>
        </Grid>
   
        <Grid item xs={4}>
          <a href={`tel:${dayCareslistbyId?.contact_no}`} style={{ color: '#000', textDecoration: 'none' }}>
            <Stack sx={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <PhoneOutlinedIcon
                sx={{
                  fontSize: 30,
                  border: '1px solid #000',
                  borderRadius: '50%',
                  padding: '5px'
                }}
              />
              <Typography variant="bodytext" sx={{ mt: 1}}>
                Phone Number
              </Typography>
            </Stack>
          </a>
        </Grid>
      </Grid> */}
      <Stack
        sx={{
          // borderTop: '1px solid #c0c0c0',
          px: 2
        }}
      >
        <Stack
          sx={{ background: '#F8F9FA', borderRadius: 30, px: 1.5, py: '4px' }}
          display={'flex'}
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          my={1}
        >
          <Typography variant="bodytext2" sx={{ mr: 2 }}>
            License number
          </Typography>
          <Typography variant="bodytext">{dayCareslistbyId?.license_number ? dayCareslistbyId?.license_number : 'N/A'}</Typography>
        </Stack>
        <Stack
          sx={{ background: '#F8F9FA', borderRadius: 30, px: 1.5, py: '4px' }}
          display={'flex'}
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          my={1}
        >
          <Typography variant="bodytext2" sx={{ mr: 2 }}>
            Capacity
          </Typography>
          <Typography variant="bodytext">{dayCareslistbyId?.capacity ? dayCareslistbyId?.capacity : 'N/A'}</Typography>
        </Stack>
        <Stack
          sx={{ background: '#F8F9FA', borderRadius: 30, px: 1.5, py: '4px' }}
          display={'flex'}
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          my={1}
        >
          <Typography variant="bodytext2" sx={{ mr: 2 }}>
            Operating Hours
          </Typography>
          <Typography variant="bodytext">{dayCareslistbyId?.operating_hours ? dayCareslistbyId?.operating_hours : 'N/A'}</Typography>
        </Stack>
        <Stack
          sx={{ background: '#F8F9FA', borderRadius: 30, px: 1.5, py: '4px' }}
          display={'flex'}
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          my={1}
        >
          <Typography variant="bodytext2" sx={{ mr: 2 }}>
            Age Served
          </Typography>
          <Typography variant="bodytext">{dayCareslistbyId?.age_serving ? dayCareslistbyId?.age_serving : 'N/A'}</Typography>
        </Stack>{' '}
        <Stack
          sx={{ background: '#F8F9FA', borderRadius: 30, px: 1.5, py: '4px' }}
          display={'flex'}
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          my={1}
        >
          <Typography variant="bodytext2" component="h5" sx={{ mr: 2 }}>
            Transportation
            {/* to nearby school for Before & After School */}
          </Typography>
          <Typography variant="bodytext">{dayCareslistbyId?.transport ? dayCareslistbyId?.transport : 'N/A'}</Typography>
        </Stack>
        {/* <Stack
sx={{ background: '#F8F9FA', borderRadius: 30, px: 1.5, py: '4px' }}
display={'flex'}
direction={'row'}
justifyContent={'flex-start'}
alignItems={'center'}
mb={2}
>
<Typography variant="h6" sx={{ mr: 2, color: '#000', fontSize: 12, fontWeight: 'bold' }}>
Avalibility
</Typography>
<Typography variant="h6" component="p">
{dayCareslistbyId?.availability}
</Typography>
</Stack>
<Stack
sx={{ background: '#F8F9FA', borderRadius: 30, px: 1.5, py: '4px' }}
display={'flex'}
direction={'row'}
justifyContent={'flex-start'}
alignItems={'center'}
mb={2}
>
<Typography variant="h6" sx={{ mr: 2, color: '#000', fontSize: 12, fontWeight: 'bold' }}>
Programs Offered
</Typography>
<Typography variant="h6" component="p">
{dayCareslistbyId?.program_offer}
</Typography>
</Stack> */}
        {/* <Stack
sx={{ background: '#F8F9FA', borderRadius: 30, px: 1.5, py: '4px' }}
display={'flex'}
direction={'row'}
justifyContent={'flex-start'}
alignItems={'center'}
my={1}
>
<Typography variant="h6" sx={{ mr: 2, color: '#000', fontSize: 12, fontWeight: 'bold' }}>
Formal Curriculum
</Typography>
<Typography variant="h6" component="p">
{dayCareslistbyId?.curriculum}
</Typography>
</Stack> */}
        {/* <Stack
sx={{ background: '#F8F9FA', borderRadius: 30, px: 1.5, py: '4px' }}
display={'flex'}
direction={'row'}
justifyContent={'flex-start'}
alignItems={'center'}
>
<Typography variant="h6" sx={{ mr: 2, color: '#000', fontSize: 12, fontWeight: 'bold' }}>
Staff Language
</Typography>
<Typography variant="h6" component="p">
{dayCareslistbyId?.language}
</Typography>
</Stack> */}
        {/* <Stack
{/* <Stack
sx={{ background: '#F8F9FA', borderRadius: 30, px: 1.5, py: '4px' }}
display={'flex'}
direction={'row'}
justifyContent={'flex-start'}
alignItems={'center'}
my={1}
>
<Typography variant="h6" sx={{ mr: 2, color: '#000', fontSize: 12, fontWeight: 'bold' }}>
Financial Aid
</Typography>
<Typography variant="h6" component="p">
{dayCareslistbyId?.financial_aid}
</Typography>
</Stack> */}
        {/* <Stack
      sx={{ background: '#F8F9FA', borderRadius: 30, px: 1.5, py: '4px' }}
      display={'flex'}
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      my={1}
    >
      <Typography variant="h6" sx={{ mr: 2, color: '#000', fontSize: 12, fontWeight: 'bold' }}>
        Web Site
      </Typography>
      {dayCareslistbyId?.website ? (
        <Button
          variant="outlined"
          component="a"
          href={
            dayCareslistbyId.website.startsWith('http://') || dayCareslistbyId.website.startsWith('https://')
              ? dayCareslistbyId.website
              : `http://${dayCareslistbyId.website}`
          }
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textTransform: 'none', fontWeight: 600, paddingY: 0 }}
        >
          Visit Website
        </Button>
      ) : (
        <Typography variant="bodytext">N/A</Typography>
      )}
    </Stack> */}
        <Stack
          sx={{ background: '#F8F9FA', borderRadius: 20, px: 1.5, py: '4px' }}
          display={'flex'}
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          my={1}
        >
          <Typography variant="bodytext2" sx={{ mr: 2 }}>
            Special Need Supported
          </Typography>
          <Typography variant="bodytext" component="p">
            {/* Missing */}
            {dayCareslistbyId?.special_needs ? dayCareslistbyId?.special_needs : 'N/A'}
          </Typography>
        </Stack>
        {/* <Stack
sx={{ background: '#F8F9FA', borderRadius: 30, px: 1.5, py: '4px' }}
display={'flex'}
direction={'row'}
justifyContent={'flex-start'}
alignItems={'center'}
my={1}
>
<Typography variant="h6" sx={{ mr: 2, color: '#000', fontSize: 12, fontWeight: 'bold' }}>
Other
</Typography>
<Typography variant="h6" component="p">

{dayCareslistbyId?.other}
</Typography>
</Stack> */}
        <Stack sx={{ px: 1.5, py: '4px', mb: 1 }} display={'flex'} direction={'column'} justifyContent={'space-between'} my={1}>
          <Typography variant="h4" sx={{ color: '#000', fontWeight: 'bold', marginRight: 4, mb: 2 }}>
            Address
          </Typography>
          <Stack sx={{ display: { md: 'block', sm: 'none' } }}>
            <Map longi={parseFloat(dayCareslistbyId.lng)} lati={parseFloat(dayCareslistbyId.lat)} height={'130px'} />
          </Stack>

          <Typography variant="bodytext" component="p" sx={{ mt: 2 }}>
            {/* <img src={MapMarker} /> */}
            <Image
              height={20}
              width={20}
              src={MapMarker}
              alt={'MapMarker'}
            />
            {dayCareslistbyId?.address ? dayCareslistbyId?.address : 'N/A'},{dayCareslistbyId?.city ? dayCareslistbyId?.city : 'N/A'},
            {dayCareslistbyId?.state ? dayCareslistbyId?.state : 'N/A'},{dayCareslistbyId?.zip_code ? dayCareslistbyId?.zip_code : 'N/A'},
          </Typography>
        </Stack>
        <Box display="flex" justifyContent="center" sx={{ background: '#fff', position: 'sticky', bottom: 0, py: 2 }}>
          <Button
            variant="contained"
            sx={{
              background: '#000',
              borderRadius: '20px',
              width: '100%',
              '&:hover': {
                background: 'rgba(0, 0, 0, 0.8)' // Adjust the alpha channel (0.8) as needed
              }
            }}
            // onClick={() => {
            //   const centerNameSlug = dayCareslistbyId?.center_name?.replace(/\s+/g, '-').toLowerCase();
            //   const id = dayCareslistbyId?.id;
            //   navigate(`/centers/${centerNameSlug}-${id}`);
            // }}
            onClick={() => {
              // setDetailsModalOpen(true)
              // setDetailsModalOpenSearch(true)
              const centerNameSlug = dayCareslistbyId?.center_name?.replace(/\s+/g, '-').toLowerCase();
              const id = dayCareslistbyId?.zip_code;
              const centerId = dayCareslistbyId?.id;
              const yourString = centerNameSlug;
              var outString = yourString.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-');
              var _outString = outString.replace('---', '-');
              var __outString = _outString.replace('--', '-');
              const url = marketplace ? `/centers/${centerId}/${__outString}-${id}`: `/centers/${centerId}/${__outString}-${id}?marketplace=true`;


              // Save the data to localStorage
              localStorage.setItem('dayCareslistbyId', JSON.stringify(dayCareslistbyId));
              window.open(url, '_blank');
            }}
          >
            View More <OpenInNewOutlinedIcon />
          </Button>
        </Box>
      </Stack>
      {!mdScreen && <DetailsModal
        open={isDetailsModalOpen}
        onClose={handleCloseDetailsModal}
        id={dayCareslistbyId?.id}
        isMarketPlace={true}
      />}
    </Stack>
  );
};

export default Detailstabs;
