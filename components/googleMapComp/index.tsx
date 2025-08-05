import { Box } from '@mui/material';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
  import { Loading } from 'react-loading-dot';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function MyMap() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAWfuNoyVahS2oLLE3AqfP7hSRN8n2ZYAM', // Make sure this is defined
    libraries: ['places'],
  });

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  if (!isLoaded) {
    return <Box
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
                      Loading <Loading background="#fff" size="10px" margin="2px"></Loading>
                      </Box>
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {/* Children like markers go here */}
    </GoogleMap>
  );
}