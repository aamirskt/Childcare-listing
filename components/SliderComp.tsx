import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const MAX = 10;
const MIN = 1;
const marks = [
  { value: MIN, label: '' },
  { value: MAX, label: '' },
];

const CustomSlider = styled(Slider)({
    height: 5,
  color: '#FF7A00',
  '& .MuiSlider-track': {
    height: 5,
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 40,
    backgroundColor: "#000", // Black background
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    border: "none",
    
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
});
interface sliderProps {
    handleDistance: any;
    distance: any;
}
export default function CustomMarks({ handleDistance, distance}: sliderProps) {
     const [val, setVal] = useState<any>(1);

      // useEffect(() => {
      //   setVal(distance)
      //  }, [distance]);
    
  const handleChange1 = (_: Event, newValue: number | number[]) => {
        // debugger
        setVal(newValue)
        handleDistance(newValue)
      };
  return (
    <Box sx={{px: 1}}>
      <CustomSlider
        marks={marks}
        step={1}
        value={val}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleChange1}
        // componentsProps={{
        //   thumb: { 'data-value': val },
        // }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '-12px'  }}>
        <Typography
          variant="p"
        >
          {MIN} <span style={{color: '#5B6B79', fontSize: '12px', fontWeight: 400}}>( Min Range)</span>
        </Typography>
        <Typography
          variant="p"
        >
          {MAX} <span style={{color: '#5B6B79', fontSize: '12px', fontWeight: 400}}>( Max Range)</span>
        </Typography>
      </Box>
    </Box>
  );
}