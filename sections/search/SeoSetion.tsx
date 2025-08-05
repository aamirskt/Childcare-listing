
import { Box, Grid, Stack } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';

interface seoProps {
    isCity?: any;
    category?: any;
    statecode?: any;
    cityname?: any;
    topCities?: any;
}
const NewSeoSection1 = ({ isCity, topCities, category, statecode, cityname }: seoProps) => {
    // const { abr } = useParams();
    //   const [topStates, setTopStates] = useState([]);
    //   const [topSearches, setTopSearches] = useState([]);
    // const location = useLocation();
    // const pathname = usePathname();


    // const handleClick = (e: any, citydata: any) => {
    //     e.preventDefault();
    //     dispatch(setIsParams(true));
    //     dispatch(setShowMarketPlaceHeader(true))
    //     // const abr = citydata?.state.toLowerCase();
    //     // const daycares = citydata?.city?.replace(/\s+/g, '-').toLowerCase();
    //     router.push(`/${citydata.replace(/\s+/g, '-')}/${statecode}/${cityname}`);
    // };
    // const handleClick1 = (e: any, citydata: any,) => {
    //     e.preventDefault();
    //     dispatch(setIsParams(true));
    //     dispatch(setShowMarketPlaceHeader(true))
    //     // const abr = citydata?.state.toLowerCase();
    //     // const daycares = citydata?.city?.replace(/\s+/g, '-').toLowerCase();
    //     router.push(`/${category.toLowerCase().replace(/\s+/g, '-')}/${citydata.state.toLowerCase()}/${citydata?.city.toLowerCase().replace(/\s+/g, '-')}`);
    // };

    // const isStateDetailPage = pathname.startsWith('/daycaredetail/') || pathname.includes(`${abr}`);
function capitalizeWords(str: any) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
    const midIndex = Math.ceil(topCities?.length / 2);
    const leftColumn = topCities?.slice(0, midIndex);
    const rightColumn = topCities?.slice(midIndex);
    const _tempCategories = [
        'infant daycares',
        'toddler daycares',
        'special needs daycares',
        'daycare centers',
        'preschools',
        'childcare',
        'daycare',

    ];
    const midIndex1 = Math.ceil(_tempCategories.length / 2);
    const leftColumn1 = _tempCategories.slice(0, midIndex1);
    const rightColumn1 = _tempCategories.slice(midIndex1);
    return (
        <>
            <Grid sx={{ display: 'flex', justifyContent: 'center', background: 'lightgrey', py: 3 }} container>
                <Container>
                      <Typography sx={{ fontSize: '32px', fontWeight: '700', textAlign: 'center', margin: 'auto' }}>Can't find what you're looking for?</Typography>
                    <Grid
                        container
                        spacing={3}
                        sx={{ mt: 3 }}
                    >
                        <Grid item xs={12} sx={{ pl: 0 }}>
                            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>


                                <Grid item md={6} xs={12} sx={{}}>
                                    <Grid sx={{ display: 'flex', flexDirection: { md: 'row', sm: 'column', xs: 'column' }, mt: { md: 0, sm: '20px', xs: '20px' } }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'center', xs: 'start' }, px: 5 }}>
                                            <Stack>
                                                <Typography
                                                    sx={{
                                                        cursor: 'pointer',
                                                        fontWeight: 'bold',
                                                        whiteSpace: 'nowrap',
                                                        color: '#000',
                                                        fontSize: { xs: '22px', md: '24px' }
                                                    }}
                                                >
                                                    {category} In Top Cities
                                                </Typography>
                                            </Stack>
                                            <Stack sx={{ mt: 2, minHeight: '124px' }}>
                                                <Grid container spacing={2}>
                                                    {/* Left Column */}
                                                    <Grid item xs={12} sm={6}>
                                                        <Stack>
                                                            {leftColumn && leftColumn?.length != 0 && leftColumn.map((citydata: any, index: number) => (
                                                                <Typography
                                                                    component={'a'}
                                                                    href={`/${category?.toLowerCase()?.replace(/\s+/g, '-')}/${citydata?.state?.toLowerCase()}/${citydata?.city?.replace(/\s+/g, '-')?.toLowerCase()}`}
                                                                    key={index}
                                                                    color="primary"
                                                                    sx={{
                                                                        fontSize: '12px',
                                                                        fontWeight: 400,
                                                                        textDecoration: 'underline',
                                                                        mt: 1,
                                                                        cursor: 'pointer',
                                                                        color: '#000'
                                                                    }}
                                                                >
                                                                    {category} In {citydata.city}, {citydata.state}
                                                                </Typography>
                                                            ))}
                                                        </Stack>
                                                    </Grid>

                                                    {/* Right Column */}
                                                    <Grid item xs={12} sm={6}>
                                                        <Stack>
                                                            {rightColumn && rightColumn?.length != 0 && rightColumn.map((citydata: any, index: number) => (
                                                                <Typography
                                                                    component={'a'}
                                                                    href={`/${category?.toLowerCase()?.replace(/\s+/g, '-')}/${citydata?.state?.toLowerCase()}/${citydata?.city?.replace(/\s+/g, '-')?.toLowerCase()}`}
                                                                    key={index + midIndex} // offset key to avoid duplication
                                                                    color="primary"
                                                                    sx={{
                                                                        fontSize: '12px',
                                                                        fontWeight: 400,
                                                                        textDecoration: 'underline',
                                                                        mt: 1,
                                                                        cursor: 'pointer',
                                                                        color: '#000', width: '400px'
                                                                    }}
                                                                // onClick={(e) => handleClick1(e, citydata)}
                                                                >
                                                                    {category} In {citydata.city}, {citydata.state}
                                                                </Typography>
                                                            ))}
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Stack>


                                        </Box>

                                    </Grid>
                                </Grid>
                                <Box>
                                    <Stack sx={{ height: '382px', width: '1px', background: '#C0BFBF', display: { md: 'block', sm: 'none', xs: 'none' } }}></Stack>
                                </Box>
                                <Grid item md={5} xs={12} sx={{}}>
                                    <Grid sx={{ display: 'flex', flexDirection: { md: 'row', sm: 'column', xs: 'column' }, mt: { md: 0, sm: '20px', xs: '20px' } }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'center', xs: 'start' }, px: 5 }}>
                                            <Stack>
                                                <Typography
                                                    sx={{
                                                        cursor: 'pointer',
                                                        fontWeight: 'bold',
                                                        whiteSpace: 'nowrap',
                                                        color: '#000',
                                                        fontSize: { xs: '22px', md: '24px' },
                                                        textTransform: 'capitalize'
                                                    }}
                                                >
                                                    Popular Searches in {cityname?.replace(/-/g, ' ')},{statecode}
                                                </Typography>
                                            </Stack>

                                            <Stack sx={{ mt: 2, minHeight: '124px' }}>
                                                <Grid container spacing={2}>
                                                    {/* Left Column */}
                                                    <Grid item xs={12} sm={6}>
                                                        <Stack>
                                                            {leftColumn1 && leftColumn1?.length != 0 && leftColumn1.map((citydata: any, index: number) => (
                                                                <Typography
                                                                    component={'a'}
                                                                    href={`/${citydata?.replace(/\s+/g, '-')?.toLowerCase()}/${statecode?.toLowerCase()?.replace(/\s+/g, '-')}/${cityname?.toLowerCase()?.replace(/\s+/g, '-')}`}
                                                                    key={index}
                                                                    color="primary"
                                                                    sx={{
                                                                        fontSize: '12px',
                                                                        fontWeight: 400,
                                                                        textDecoration: 'underline',
                                                                        mt: 1,
                                                                        cursor: 'pointer',
                                                                        color: '#000', width: { md: '500px', xs: 'auto' }
                                                                    }}
                                                                // onClick={(e) => handleClick(e, citydata)}
                                                                >
                                                                    {capitalizeWords(citydata)} In {capitalizeWords(cityname?.replace(/-/g, ' '))}
                                                                    , {statecode.toUpperCase()}
                                                                </Typography>
                                                            ))}
                                                        </Stack>
                                                    </Grid>

                                                    {/* Right Column */}
                                                    <Grid item xs={12} sm={6}>
                                                        <Stack>
                                                            {rightColumn1 && rightColumn1?.length != 0 && rightColumn1.map((citydata: any, index: number) => (
                                                                <Typography
                                                                    component={'a'}
                                                                    href={`/${citydata?.toLowerCase()}/${statecode?.toLowerCase()?.replace(/\s+/g, '-')}/${cityname?.toLowerCase()?.replace(/\s+/g, '-')}`}
                                                                    key={index + midIndex} // offset key to avoid duplication
                                                                    color="primary"
                                                                    sx={{
                                                                        fontSize: '12px',
                                                                        fontWeight: 400,
                                                                        textDecoration: 'underline',
                                                                        mt: 1,
                                                                        cursor: 'pointer',
                                                                        color: '#000', width: '400px'
                                                                    }}
                                                                // onClick={(e) => handleClick(e, citydata)}
                                                                >
                                                                    {capitalizeWords(citydata)} In {capitalizeWords(cityname?.replace(/-/g, ' '))}
                                                                    , {statecode.toUpperCase()}
                                                                </Typography>
                                                            ))}
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Stack>

                                        </Box>

                                    </Grid>
                                </Grid>



                            </Grid>
                        </Grid>

                    </Grid>
                </Container>
            </Grid>
        </>
    );
};

export default NewSeoSection1;

