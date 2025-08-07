'use client';

import { Box, Typography, Card, CardContent, IconButton, Container, Stack } from '@mui/material';
import {  useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Slider from 'react-slick';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

function BlogsSectionSeo({ abr, allblogs }: any) {
    const router = useRouter();
    const sliderRef = useRef<any>(null);

   
    const truncateText = (text: string, maxWords: number) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length <= maxWords) return text;
        return `${words.slice(0, maxWords).join(' ')} .......`;
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, // We’ll use custom arrows instead
        dots: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <Container >
            <Box sx={{  my: 4, position: 'relative' }}>
                {/* <Typography sx={{ fontSize: { md: '32px', xs: '22px' }, fontWeight: { md: 700, xs: 600 }, ml: { md: 2, xs: 0 } }}>{abr} Articles</Typography> */}
                {/* Top Right Arrows */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        px: { md: 2, xs: 1 },
                        mb: 2
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { md: '32px', xs: '22px' },
                            fontWeight: { md: 700, xs: 600 },
                            textTransform: 'capitalize'
                        }}
                    >
                        {abr} Articles
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton
                            onClick={() => sliderRef.current?.slickPrev()}
                            sx={{
                                backgroundColor: '#eee',
                                '&:hover': { backgroundColor: '#ccc' },
                                borderRadius: 1,
                                width: 36,
                                height: 36
                            }}
                        >
                            <ArrowBackIosNew fontSize="small" />
                        </IconButton>
                        <IconButton
                            onClick={() => sliderRef.current?.slickNext()}
                            sx={{
                                backgroundColor: '#eee',
                                '&:hover': { backgroundColor: '#ccc' },
                                borderRadius: 1,
                                width: 36,
                                height: 36
                            }}
                        >
                            <ArrowForwardIos fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>


                <Slider ref={sliderRef} {...settings}>
                    {allblogs.map((item: any) => (
                        <Box key={item.id} px={1}>
                            <Card
                            component='a'
                                href={`/blogsDetail/${item?.id}/${item?.slug}`}
                                sx={{ maxWidth: 450, minHeight: 380, cursor: 'pointer', mx: 'auto' }}
                            >
                                <Box sx={{ position: 'relative', width: '100%', height: 140 }}>
                                    <Image
                                        src={`${process.env.NEXT_APP_API_URL}${item?.blog_img}`}
                                        alt={item?.title}
                                        fill
                                        style={{ objectFit: 'cover', borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
                                    />
                                </Box>
                                <CardContent>
                                    <Typography gutterBottom sx={{ fontSize: '16px', color: '#000', fontWeight: '600' }}>
                                        {item?.title}
                                    </Typography>
                                    <Typography variant="body2" mt={2}>
                                        {truncateText(item?.short_description, 19)}
                                    </Typography>
                                </CardContent>
                                 <Stack 
                                              //   component='a'
                                              // href={`/blogsDetail/${item?.id}/${item?.slug}`}
                                               alignItems={'flex-end'} justifyContent={'flex-end'} display={'flex'} pr={2} >
                                                  <Typography sx={{fontSize:'14px',color:'blue'}}>Read More</Typography>
                                                </Stack>
                            </Card>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Container>
    );
}

export default BlogsSectionSeo;
