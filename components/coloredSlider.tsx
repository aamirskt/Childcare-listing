import {
  Slider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useMemo } from 'react';


interface CustomSliderProps {
  sliderProps: {
    min: number;
    position1: number;
    position2: number;
    max: number;
  };
}

const PrettoSlider = styled(Slider)<CustomSliderProps>(({ sliderProps }) => {
  // Calculate percentage positions for color stops
  const backgroundStops = useMemo(() => {
    
    const minStop = 0  ;
    const firstSalaryStop = sliderProps.position1;
    const thirdSalaryStop = sliderProps.position2;
  console.log(minStop, firstSalaryStop, thirdSalaryStop, 'sdfasdfasasddfaadsdsd')
    return {
      minStop,
      firstSalaryStop,
      thirdSalaryStop,
    };
  }, [sliderProps]);
  
  const { minStop, firstSalaryStop, thirdSalaryStop } = backgroundStops;
  return {
    height: 8,
    color: '#FF7A00',
    direction: 'rtl', // Set direction to right-to-left
    '& .css-11kjz7b-MuiSlider-rail': {
      opacity: '1 !important',
      background: `linear-gradient(90deg, 
        #FF7A00 ${minStop}%, 
        #FF7A00 ${firstSalaryStop}%, 
        #4B0082 ${firstSalaryStop}%, 
        #4B0082 ${firstSalaryStop}%, 
        #4B0082 ${thirdSalaryStop}%, 
        #53a336 ${thirdSalaryStop}%)`,
        borderRadius: '20px !important'
    },
    '& .css-6pimbr': {
      opacity: '1 !important',
      background: `linear-gradient(90deg, 
        #FF7A00 ${minStop}%, 
        #FF7A00 ${firstSalaryStop}%, 
        #4B0082 ${firstSalaryStop}%, 
        #4B0082 ${firstSalaryStop}%, 
        #4B0082 ${thirdSalaryStop}%, 
        #53a336 ${thirdSalaryStop}%)`,
        borderRadius: '20px !important'
    },
    '& .MuiSlider-track': {
      height: 8,
      borderRadius: 4,
      border: 'none',
      background: 'transparent', // Fixed gradient with three colors
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 50,
      backgroundColor: "#000", // Black background
      color: "#fff",
      fontSize: "14px",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px",
      border: "none",
      // position: "relative",
       // Left arrow
  "&::before": {
    content: '""',
    position: "absolute",
    left: "-3px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "0",
    height: "0",
    borderLeft: "5px solid transparent",
    borderRight: "5px solid white",
    borderTop: "5px solid transparent",
    borderBottom: "5px solid transparent",
  },

  // Right arrow
  "&::after": {
    content: '""',
    position: "absolute",
    right: "-3px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "0",
    height: "0",
    borderLeft: "5px solid white",
    borderRight: "5px solid transparent",
    borderTop: "5px solid transparent",
    borderBottom: "5px solid transparent",
  },
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
    },

    '& .css-1etdt5d-MuiSlider-thumb.MuiSlider-thumbColorPrimary': {
      border: 'none'
    },
   
    '& .MuiSlider-mark':{
      display: 'none !important',
    color: '#000',
    fontWeight: "bold"

    },
    '& .css-1ust5cs-MuiSlider-markLabel ': {
      color: '#000',
      fontWeight: "bold"
    },
    '& .css-gooe2d': {
      color: '#000',
      fontWeight: "bold"
    },
    '& .css-16f2ysp': {
      color: '#000',
      fontWeight: "bold"
    },
    '& .css-1odn1ui-MuiSlider-markLabel ': {
      color: '#000',
      fontWeight: "bold"
    },
    '& .css-10kxpt6.MuiSlider-thumbColorPrimary': {
      border: 'none',
    },
    '& .css-gpbttd.MuiSlider-valueLabelOpen': {
      transform: 'translate(-50%, -50%) !important;' 
   },
    '& .css-tx7mnx-MuiSlider-valueLabel.MuiSlider-valueLabelOpen': {
     transform: 'translate(-50%, -50%) !important;' 
  },
    '& .MuiSlider-valueLabelOpen': {
  transform: 'translate(-50%, -50%) !important;', // Prevent translation and scaling
},
    "& .MuiSlider-valueLabel": {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "14px",
      fontWeight: "bold",
      color: "#fff",
      background: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      
    },
   
'& .MuiSlider-markLabel[data-index="0"], & .MuiSlider-markLabel[data-index="3"]': {
  top: '30px', // Assume min = index 0, max = index 4
},

'& .MuiSlider-markLabel': {
  top: '-20px',
  color: '#000',
  fontWeight: 'bold',
},
    // ... rest of your styles
  };
});


export default  PrettoSlider;

