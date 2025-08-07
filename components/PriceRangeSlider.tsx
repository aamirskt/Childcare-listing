import * as React from 'react';
import { Box, Slider, 
    // Typography 
} from '@mui/material';

// Define a type for the price range prop
interface PriceRange {
  min: number;
  max: number;
  marks: { value: number; label: string }[];
}

interface PriceRangeSliderProps {
    priceRange: PriceRange;
    onValueChange: (newValue: number[]) => void;
  }
  

function PriceRangeSlider({ priceRange, onValueChange }: PriceRangeSliderProps) {
    const fixedValue = priceRange.min; // This will be your fixed first handle value
  const [value, setValue] = React.useState<number[]>([fixedValue, priceRange.marks[1].value]); // Initial values based on priceRange

  const handleChange = (event: any, newValue: number | number[]) => {
    // Prevent the first handle from moving by always using the fixed value
    setValue([fixedValue, newValue instanceof Array ? newValue[1] : newValue]);
    onValueChange([fixedValue, newValue instanceof Array ? newValue[1] : newValue]);
  };

  // Custom function to format the tooltip label
  const valueLabelFormat = (value: number) => `$${value}`;

  return (
    <Box width={'98%'} padding={'0px 20px'}>
      {/* <Typography id="range-slider" gutterBottom>
        Price range
      </Typography> */}
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        min={priceRange.min}
        max={priceRange.max}
        marks={priceRange.marks}
        sx={{
          color: '#000',
          '& .MuiSlider-thumb': {
            color: '#000',
            border: '2px solid #000',
            boxShadow: '0 0 0 2px #fff, 0 0 0 4px #000',
          },
          '& .MuiSlider-rail': {
            color: '#767676'
          },
          '& .MuiSlider-mark': {
            color: '#fff',
            border: '2px solid #000',
            backgroundColor: '#000'
          },
          '& .MuiSlider-markLabel': {
            color: '#000'
          },
          '& .MuiSlider-markLabelActive': {
            color: '#000'
          },
          width: '100%'
        }}
      />
    </Box>
  );
}

export default PriceRangeSlider;
