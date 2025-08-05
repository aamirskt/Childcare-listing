import React from 'react';
import { TextField, Typography, Stack } from '@mui/material';

interface CustomTextFieldProps {
  type?: any;
  value?: any;
  onChange?: any;
  placeholder?: string;
  validationError?: boolean;
  errorMessage?: string;
  style?: object;
  isMarketPlace?: any;
  // ... add any other props you need
  disabled?: boolean;
  font?: boolean
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  type,
  value,
  onChange,
  placeholder,
  validationError,
  errorMessage,
  style,
  isMarketPlace,
  disabled,
  font
  // ... spread other props
}) => {
  return (
    <Stack direction={'column'} sx={{ width: '100%', ...style }}>
      <TextField
        disabled={disabled || false}
        type={type ? type : 'text'}
        placeholder={placeholder}
        value={value}
        InputProps={{
          style: {
            fontSize: font ? '16px' : '14px',
            backgroundColor: '#fff', // Text color
            height: '40px'
            // ... add other input styles if needed
          },
        }}
        sx={{
          '& .css-1k2h94j:-webkit-autofill': {
            boxSizing: "border-box"
          },
          '& .css-191l734-MuiInputBase-input-MuiOutlinedInput-input': {
            boxSizing: "border-box",
          },
          '& .MuiInputBase-input::placeholder': {
            color: '#1D2630', // Placeholder text color
            fontSize: '14px',
            opacity: '0.8'
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#d3d3d3', // Border color
            },
            '&:hover fieldset': {
              borderColor: '#d3d3d3', // Hover Border Color
            },
            '&.Mui-focused fieldset': {
              borderColor: '#d3d3d3', // Focused Border Color
            },

          },
          ...style // apply additional styles
        }}
        onChange={onChange}
      />
      {validationError && (
        <Typography variant="body2" sx={{ color: 'red', fontSize: isMarketPlace ? '12px' : 'auto' }}>
          {errorMessage || 'Required Field'}
        </Typography>
      )}
    </Stack>
  );
};

export default CustomTextField;
