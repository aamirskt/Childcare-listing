
'use client';

import React, { useRef } from 'react';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from '@react-google-maps/api';
import {
  Box,
  Typography,
  Stack,
  Button,
  CardContent,
} from '@mui/material';
import Image from 'next/image';
import DirectionsIcon from '@mui/icons-material/Directions';
import { libraries } from 'api/allAPIs';

type MarkerType = {
  id: string | number;
  lat: string;
  lng: string;
  name: string;
  rating?: number;
  address: string;
  phone: string;
  marker?: any;
};

type CustomGoogleMapProps = {
  mapZoom: any;
  mapStyles: any;
  currentLocation: any;
  filteredData: any;
  selectedCenter: any;
  activeMarker: any;
  isInfoWindowVisible: any;
  isResetMarketPlace: any;
  open: any;
  smallScreen: any;
  windowSize: any;
  MapMarker: any;
  MapMarker1: any;
  MapMarker2: any;
  locationPin: any;
  phoneNo: any;
  googleMapsUrl: any;
  handleMarkerClick: any;
  setSelectedCenter: any;
  setactiveMarker: any;
  setIsInfoWindowVisible: any;
  setShowCenterDetails: any;
  handleZoomChange: any;
  handleDragEnd: any;
};

const CustomGoogleMap: React.FC<CustomGoogleMapProps> = ({
  mapZoom,
  mapStyles,
  currentLocation,
  filteredData,
  selectedCenter,
  activeMarker,
  isInfoWindowVisible,
  isResetMarketPlace,
  open,
  smallScreen,
  windowSize,
  MapMarker,
  MapMarker1,
  MapMarker2,
  locationPin,
  phoneNo,
  googleMapsUrl,
  handleMarkerClick,
  setSelectedCenter,
  setactiveMarker,
  setIsInfoWindowVisible,
  setShowCenterDetails,
  handleZoomChange,
  handleDragEnd,
}) => {
  const mapRef = useRef<any>(null);
  const anchorMap: any = useRef<any>(null);

  return (
    <GoogleMap
      mapContainerStyle={{
        height: windowSize.innerHeight,
        width: !open ? '100%' : 'auto',
        backgroundColor: !smallScreen ? '#fff' : '#F2F2F2',
        border: !smallScreen ? 0 : '2px solid #000',
        boxShadow: !smallScreen ? '0px' : '16px',
      }}
      options={{
        styles: mapStyles,
        zoomControl: !isResetMarketPlace,
        minZoom: 10,
        maxZoom: 14,
      }}
      onDragEnd={handleDragEnd}
      zoom={mapZoom}
      onLoad={(map: any) => (mapRef.current = map)}
      center={currentLocation}
      onZoomChanged={handleZoomChange}
    >
      {currentLocation && filteredData?.length > 0 && (
        <>
          {filteredData.map((marker: any, index: any) => (
            <Marker
              key={index}
              icon={
                selectedCenter === index
                  ? MapMarker2
                  : marker.marker === 'red'
                  ? MapMarker1
                  : MapMarker
              }
              ref={anchorMap}
              onClick={() => {
                setSelectedCenter(index);
                setactiveMarker(marker.id);
                setIsInfoWindowVisible(true);
              }}
              position={{
                lat: parseFloat(marker.lat),
                lng: parseFloat(marker.lng),
              }}
              draggable={false}
              options={{
                optimized: false,
                shape: {
                  coords: [12.5, 12.5, 12.5],
                  type: 'circle',
                },
              }}
            >
              {isInfoWindowVisible && activeMarker === marker.id && (
                <InfoWindow
                  anchor={anchorMap}
                  position={{
                    lat: parseFloat(marker.lat),
                    lng: parseFloat(marker.lng),
                  }}
                  onCloseClick={() => setIsInfoWindowVisible(false)}
                >
                  <>
                    <Box display={'flex'} sx={{ maxWidth: '320px' }}>
                      <Box
                        className="listdaycare"
                        onClick={() => handleMarkerClick(marker.id, false)}
                        sx={{ cursor: 'pointer' }}
                      >
                        <CardContent onClick={() => handleMarkerClick(marker.id, false)}>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              padding: '0px',
                            }}
                          >
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                                {marker.name}
                              </Typography>
                              <Box>
                                {marker.rating && (
                                  <Stack
                                    sx={{
                                      pr: 1,
                                      display: 'flex',
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                    }}
                                  >
                                    <Typography variant="caption" sx={{ fontWeight: 'bold', mr: 1 }}>
                                      {parseFloat(marker.rating).toFixed(1)}
                                    </Typography>
                                    <Box>
                                      ⭐{marker.rating}
                                    </Box>
                                  </Stack>
                                )}
                                <Typography variant="caption">childcare center</Typography>
                              </Box>
                            </Box>
                          </Box>
                          <Stack>
                            <Typography variant="caption" sx={{ pt: 1 }}>
                              <Image height={16} width={16} src={locationPin} alt="locationPin" />{' '}
                              {marker.address}
                            </Typography>
                            <Typography variant="caption" sx={{ pt: 1 }}>
                              <Image height={16} width={16} src={phoneNo} alt="phoneNo" /> {marker.phone}
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Box>
                      {!smallScreen && (
                        <Stack sx={{ padding: '16px 0px' }}>
                          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <DirectionsIcon
                                sx={{
                                  fontSize: 30,
                                  backgroundColor: '#000',
                                  borderRadius: '50%',
                                  padding: '5px',
                                  color: '#fff',
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
                                color: 'white',
                                fontSize: '12px',
                                fontWeight: '500',
                                borderRadius: '60px',
                                '&:hover': {
                                  background: 'rgba(0, 0, 0, 0.8)',
                                },
                              }}
                              onClick={() => {
                                setactiveMarker(marker.id);
                                handleMarkerClick(marker.id, false);
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
                      <Stack direction="row" justifyContent="space-between">
                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <DirectionsIcon
                              sx={{
                                fontSize: 30,
                                backgroundColor: '#000',
                                borderRadius: '50%',
                                padding: '5px',
                                color: '#fff',
                              }}
                            />
                            <Typography variant="h6" sx={{ fontSize: '12px', mt: 1 }}>
                              Directions
                            </Typography>
                          </Box>
                        </a>
                        <Button
                          variant="contained"
                          sx={{
                            background: '#000',
                            color: 'white',
                            fontSize: '12px',
                            fontWeight: '500',
                            borderRadius: '60px',
                            '&:hover': {
                              background: 'rgba(0, 0, 0, 0.8)',
                            },
                          }}
                          onClick={() => {
                            setactiveMarker(marker.id);
                            handleMarkerClick(marker.id, false);
                            setIsInfoWindowVisible(true);
                            setShowCenterDetails(true);
                          }}
                        >
                          View Details
                        </Button>
                      </Stack>
                    )}
                  </>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </>
      )}
    </GoogleMap>
  );
};

export default CustomGoogleMap;