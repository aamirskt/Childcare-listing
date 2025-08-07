// import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
const PinIcon = 'assets/images/icons/pin.png';

interface mapProps {
  lati: any;
  longi: any;
  height: any;
}

function Map({ lati, longi, height }: mapProps) {
  const position = {
    lat: lati,
    lng: longi
  };
  // const markerIcon = 'assets/images/icons/pin.png'; // Replace with the actual path to the image


  const onLoad = (marker: any) => {
    console.log('marker: ', marker);
  };

  return (
    <>
      <GoogleMap
        zoom={13}
        options={{ disableDefaultUI: true }}
        center={{ lat: lati, lng: longi }}
        mapContainerStyle={{ width: '100%', height: height, borderRadius: '20px' }}
      >
        <Marker onLoad={onLoad} position={position} 
        icon={{
          url:  PinIcon,
        }} />
      </GoogleMap>
    </>
  );
}

export default Map;
