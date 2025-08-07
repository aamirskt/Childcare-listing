export const toggleBtnStyles = {
  // Track styles
  '& .MuiSwitch-track': {
    backgroundColor: 'lightgray !important', // Default background color
  },
  '& .Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#000 !important', // Background color when checked
  },
  '& .Mui-disabled + .MuiSwitch-track': {
    backgroundColor: 'rgba(0, 0, 0, 0.2) !important', // Light black background for disabled state
  },

  // Thumb styles
  '& .MuiSwitch-thumb': {
    backgroundColor: '#fff !important', // Default thumb color
  },
  '& .Mui-checked .MuiSwitch-thumb': {
    backgroundColor: '#fff !important', // Thumb color when checked
  },
  '& .Mui-disabled .MuiSwitch-thumb': {
    backgroundColor: 'lightgray !important', // Thumb color for disabled state
  },

  // Switch base styles
  '& .MuiSwitch-switchBase': {
    // Apply styles to the base of the switch
    color: '#fff !important', // Default color
  },
  '& .Mui-checked .MuiSwitch-switchBase': {
    color: '#fff !important', // Color when checked
    '& + .MuiSwitch-track': {
      backgroundColor: '#000 !important', // Ensure the track background color is black when checked
    },
  },
  '& .Mui-disabled .MuiSwitch-switchBase': {
    color: 'lightgray !important', // Color for disabled state
  },
};
