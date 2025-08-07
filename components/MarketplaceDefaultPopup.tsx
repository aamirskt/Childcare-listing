import {
    // Button,
    Dialog,
    DialogContent,
    Stack,
    Typography,
    Box
} from '@mui/material';
import PopupTransition from 'components/@extended/Transitions';
import { PlayCircle } from 'iconsax-react';
import { useState } from 'react';
import VideoPopup from './VideoPopup';
const xcicle = '/assets/images/home/x-circle1.svg';

// import { X } from '@mui/icons-material';
import IconButton from './@extended/IconButton';
import Image from 'next/image';

interface DeleteChildrenModalProps {
    open: boolean;
    onClose: () => void;
    index?: number;
}

const MarketPlaceDefaultPopup: React.FC<DeleteChildrenModalProps> = ({ open, onClose }) => {
    const [open1, setOpen1] = useState(false);
    const handleOpen = () => {
        setOpen1(true);
        onClose()
    };
    const handleClose = () => {
        setOpen1(false)
    }
    return (
        <Dialog
            open={open}
            onClose={onClose}
            keepMounted
            TransitionComponent={PopupTransition}
            maxWidth="xs"
            aria-labelledby="marketplace-popup-title"
            aria-describedby="marketplace-popup-description"
            sx={{
                backdropFilter: 'blur(5px)',
                        zIndex: 99999999,
                '& .MuiDialog-container': {
                    '& .MuiPaper-root': {
                        borderRadius: { xs: '10px', md: '20px' },
                        width: '100%',
                        maxWidth: { xs: '320px', md: '630px' },
                        // position: 'relative',
                        // overflow: 'visible'
                        // mt: 5
                    }
                }
            }}
            PaperProps={{
                sx: {
                    m: 0,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#fff',
                }
            }}
        >
            <DialogContent sx={{ pt: 0, pb: 2 }}>
                {/* Upward triangle attached at top center */}
                <Box
                    sx={{
                        width: 0,
                        height: 0,
                        borderLeft: '12px solid transparent',
                        borderRight: '12px solid transparent',
                        borderBottom: '12px solid white',
                        position: 'absolute',
                        top: -20,
                        left: '30px', // adjust to align with the start of the content or popup edge
                        transform: 'translateY(-100%)'
                    }}
                />


                <Stack spacing={2} mt={2} >
                    <Typography
                        variant="mainheading"
                        sx={{ fontSize: { md: '18px', xs: '20px', mt: 2, letterSpacing: '-0.7px' } }}
                    >
                        Affordable Childcare Through{' '}
                        <span style={{ color: '#ED5B09' }}>Smart Negotiation</span>
                    </Typography>

                    <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#5B6B79', }}>
                        We Help You Negotiate the Best Rates!
                    </Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: '700', color: '#000', }}>
                        Find the perfect daycare with confidence using our Smart Search.
                    </Typography>
                    <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#5B6B79', }}>

                        Designed to match parents with trusted childcare providers based on location,
                        age group, hours, programs, safety ratings, and real parent reviews.
                    </Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: '700', color: '#000', }}>
                        What sets us apart?
                    </Typography>
                    <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#5B6B79', }}>

                        Our built-in Price Selector lets you choose your ideal budget range for your area
                    </Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: '700', color: '#000', }}>
                        We’ll negotiate on your behalf to help you secure the best available rates.
                    </Typography>
                    <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#5B6B79', }}>

                        Whether you need full-time care, flexible hours, or special programs, Smart Search saves you time, stress, and money by connecting you with quality daycare that fits your needs and budget.
                    </Typography>
                    <Stack sx={{ mt: 2, mb: 4 }}>
                        <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Stack onClick={handleOpen}>
                                {/* <img src={playicon} alt="playicon" style={{ height: '40px', width: '40px', cursor: 'pointer' }} /> */}
                                <PlayCircle size="32" color="#000" />
                            </Stack>
                            <Stack onClick={handleOpen}>
                                <Typography
                                    variant="bodytext1"
                                    sx={{
                                        ml: 1,
                                        pb: '4px',
                                        borderBottom: '3px solid black',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        color: '#000'
                                    }}
                                >
                                    Watch Video
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack alignItems="center" justifyContent="center">
                        <IconButton
                            onClick={onClose}
                            sx={{
                                backgroundColor: '#000',
                                color: '#fff',
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                '&:hover': {
                                    backgroundColor: '#333'
                                }
                            }}
                        >
                            <Image
                                height={30}
                                width={30}
                                src={xcicle}
                                alt={'xcicle'}
                            />
                        </IconButton>
                    </Stack>
                </Stack>

            </DialogContent>
            <VideoPopup open={open1} handleClose={handleClose} url={'childrenkare.mp4'} />
        </Dialog>
    );
};

export default MarketPlaceDefaultPopup;
