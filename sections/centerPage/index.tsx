"use client";


import { Card, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import DayCareSecone from './DayCareSecone';
import DayCareSecTwo from './DayCareSecTwo';
import DayCareSecThree from './DayCareSecThree';
import EnnrollmentForm from './EnnrollmentForm';
import axios from 'utils/axios';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
const MapMarker = '/assets/images/icons/address-pin.png';
import Map from 'components/customMap';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Box } from '@mui/material';
import { useJsApiLoader } from '@react-google-maps/api';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
// import axios from 'utils/axios';
interface DetailData {
    id?: number;
    lng?: any;
    lat?: any;
    address?: any;
    city?: string;
    state?: string;
    zip_code?: string;
}
interface DetailData {
    id?: number;
    lng?: any;
    lat?: any;
    address?: any;
    city?: string;
    state?: string;
    zip_code?: string;
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
const DayCareDetail = ({ centerid }: any) => {
    const pathname = usePathname();
    const [detailData, setDetailData] = useState<DetailData | any>(null);
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
    const [notes, setNotes] = useState('');
    const [apiId, setApiId] = useState<any>(null);
    console.log('apiId', apiId);
    // const location = useLocation();
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
        // Scroll to top on route/path change
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);


    useEffect(() => {
        if (apiId) {
            handleDayCareDetail(apiId);
        }
    }, [apiId]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (centerid) {
            // const parsedData = JSON.parse(storedData);
            setApiId(centerid);
        } else {
            console.error('dayCareslistbyId not found in localStorage');
        }
    }, []);

    const googleMapsUrlBase = 'https://www.google.com/maps/dir/';
    const encodedAddress = encodeURIComponent(detailData?.address);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyAWfuNoyVahS2oLLE3AqfP7hSRN8n2ZYAM'
    });
    const googleMapsUrl = `${googleMapsUrlBase}${encodedAddress}`;
    const searchParams = useSearchParams();
    const isMarketplace = searchParams.get('marketplace') === 'true';


    return (
        <Grid container sx={{ mt: 7, overflowX: 'hidden', background: '#fff' }}>
            <Grid item xs={12} sm={12} md={12} lg={8} sx={{ pl: { lg: 12, md: 4, xs: 2 }, px: 2 }}>
                <DayCareSecone detailData={detailData} />
                <DayCareSecTwo detailData={detailData} />
                <DayCareSecThree detailData={detailData} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} sx={{ px: 5, py: 5 }}>
                {!isMarketplace && (
                    <Card>

                        <EnnrollmentForm
                            data={[]}
                            notes={notes}
                            setNotes={setNotes}
                            fields={fields}
                            setFields={setFields}
                            programs=""
                            questions={(detailData as any)?.ques}
                            centerid={(detailData as any)?.id}
                            dayCareslistbyId={detailData as any}
                        />
                    </Card>
                )}
                <Stack sx={{ py: '4px', mb: 1 }} display={'flex'} direction={'column'} justifyContent={'space-between'} my={1}>
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
                            {/* <img alt="Map Marker" src={MapMarker} width={'32px'} height={'32px'} /> */}
                            <Image
                                height={32}
                                width={32}
                                src={MapMarker}
                                alt={'Map Marker'}
                            />
                            <Typography
                                sx={{
                                    color: '#292929',
                                    fontSize: '14px',
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

export default DayCareDetail;
