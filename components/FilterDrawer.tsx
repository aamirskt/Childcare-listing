import React from 'react';
import {
  Drawer,
  // Button,
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem
  // Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Rating } from '@mui/material';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const drawerWidth = '80vw';

const DrawerBox = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box'
  }
}));

interface FilterDrawerProps {
  open: boolean;
  handleDrawer: () => void;
  centerCapacity: string;
  handleChangeCenterCapacity: any;
  rating: string;
  handleRating: any;
  openingTime: string;
  handleOpeningTime: any;
  closingTime: string;
  handleClosingTime: any;
  financialAid: string;
  handleFinancialAid: any;
  // resetFilters: () => void;
  // applyFilters: () => void;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({
  open,
  handleDrawer,
  centerCapacity,
  handleChangeCenterCapacity,
  rating,
  handleRating,
  openingTime,
  handleOpeningTime,
  closingTime,
  handleClosingTime,
  financialAid,
  handleFinancialAid
  //   resetFilters,
  //   applyFilters,
}) => {
  return (
    <DrawerBox variant="persistent" anchor="left" open={open}>
         <Box
          sx={{
           width: '100%',  display: 'flex', justifyContent: 'flex-end', mt: 8,  p: '16px 16px 0px 0px', 
            zIndex: 99999999999999  // Ensure it's above other content
          }}
        >
          <IconButton onClick={handleDrawer} sx={{ border: '2px solid', borderRadius: 50 }}>
            <CloseIcon />
          </IconButton>
        </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100vh',
          overflow: 'auto',
          width: '100%',
            zIndex: 99999999999999 // Ensure it's above other content
        }}
      >
     
        <Stack spacing={2} sx={{ padding: 2, width: '100%' }}>
          {/* Capacity */}
          <FormControl size="small" sx={{ background: 'white', borderRadius: '120px' }}>
            {!centerCapacity ? (
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  fontSize: 13,
                  height: 20,
                  pr: 1,
                  color: '#000'
                }}
              >
                <span>
                  <PersonOutlinedIcon sx={{ fontSize: 16, mr: '4px' }} />
                </span>
                <b>Capacity</b>
              </InputLabel>
            ) : null}
            <Select
              value={centerCapacity}
              onChange={handleChangeCenterCapacity}
              label="Capacity"
              sx={{
                '& .MuiSelect-icon': {
                  display: 'none'
                },
                '& fieldset': {
                  borderWidth: 0,
                  borderRadius: '120px',
                  boxShadow: '3px 2px 2px 2px #3C404326'
                },
                borderRadius: '120px',
                height: 32
              }}
            >
              <MenuItem sx={{ fontSize: 16 }} value={''}>
                Any Capacity
              </MenuItem>
              <MenuItem value="101-0">100+</MenuItem>
              <MenuItem value="49 - 100">50-100</MenuItem>
              <MenuItem value="0 - 50">Less than 50</MenuItem>
            </Select>
          </FormControl>

          {/* Rating */}
          <FormControl size="small" sx={{ background: 'white', borderRadius: '120px' }}>
            {!rating && (
              <InputLabel id="demo-simple-select-label" sx={{ fontSize: 13, height: 15, pr: 1, color: '#000' }}>
                <span>
                  <StarOutlineRoundedIcon sx={{ fontSize: 16, mr: '4px' }} />
                </span>
                <b>Rating</b>
              </InputLabel>
            )}
            <Select
              value={rating}
              onChange={handleRating}
              label="Rating"
              sx={{
                '& .MuiSelect-icon': {
                  display: 'none'
                },
                '& fieldset': {
                  borderWidth: 0,
                  borderRadius: '120px',
                  boxShadow: '3px 2px 2px 2px #3C404326'
                },
                borderRadius: '120px',
                height: 32
              }}
            >
             
              <MenuItem sx={{ fontSize: 16 }} value={''}>
                Any Rating
              </MenuItem>
              <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'5'}>
                            5.0
                            <Rating name="read-only" precision={0.5} value={5.0} readOnly sx={{ fontSize: '12px' }} />
                          </MenuItem>
                          <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'4'}>
                            4.0
                            <Rating name="read-only" value={4.0} readOnly sx={{ fontSize: '12px' }} />
                          </MenuItem>
                          <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'3'}>
                            3.0
                            <Rating name="read-only" value={3.0} readOnly sx={{ fontSize: '12px' }} />
                          </MenuItem>
                          <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'2'}>
                            2.0
                            <Rating name="read-only" value={2.0} readOnly sx={{ fontSize: '12px' }} />
                          </MenuItem>
                          <MenuItem sx={{ fontSize: '14px', fontWeight: 400 }} value={'1'}>
                            1.0
                            <Rating name="read-only" value={1.0} readOnly sx={{ fontSize: '12px' }} />
                          </MenuItem>
              {/* <MenuItem sx={{ fontSize: 16 }} value={'2.0'}>
                2.0
                <Rating name="read-only" value={2.0} readOnly sx={{ fontSize: '12px' }} />
              </MenuItem>
              <MenuItem sx={{ fontSize: 16 }} value={'2.5'}>
                2.5
                <Rating name="read-only" precision={0.5} value={2.5} readOnly sx={{ fontSize: '12px' }} />
              </MenuItem>
              <MenuItem sx={{ fontSize: 16 }} value={'3.0'}>
                3.0
                <Rating name="read-only" value={3.0} readOnly sx={{ fontSize: '12px' }} />
              </MenuItem>
              <MenuItem sx={{ fontSize: 16 }} value={'3.5'}>
                3.5
                <Rating name="read-only" precision={0.5} value={3.5} readOnly sx={{ fontSize: '12px' }} />
              </MenuItem>
              <MenuItem sx={{ fontSize: 16 }} value={'4.0'}>
                4.0
                <Rating name="read-only" value={4.0} readOnly sx={{ fontSize: '12px' }} />
              </MenuItem>
              <MenuItem sx={{ fontSize: 16 }} value={'4.5'}>
                4.5
                <Rating name="read-only" precision={0.5} value={4.5} readOnly sx={{ fontSize: '12px' }} />
              </MenuItem> */}
            </Select>
          </FormControl>

          {/* Opening Time */}
          <FormControl size="small" sx={{ background: 'white', borderRadius: '120px' }}>
            {!openingTime && (
              <InputLabel id="demo-simple-select-label" sx={{ fontSize: 13, height: 15, pr: 1, color: '#000' }}>
                <span>
                  <AccessTimeRoundedIcon sx={{ fontSize: 16, mr: '4px' }} />
                </span>
                <b>Opening Time</b>
              </InputLabel>
            )}
            <Select
              value={openingTime}
              onChange={handleOpeningTime}
              label="Opening Time"
              sx={{
                '& .MuiSelect-icon': {
                  display: 'none'
                },
                '& fieldset': {
                  borderWidth: 0,
                  borderRadius: '120px',
                  boxShadow: '3px 2px 2px 2px #3C404326'
                },
                borderRadius: '120px',
                height: 32
              }}
            >
              <MenuItem sx={{ fontSize: 16 }} value={''}>
                Any Timing
              </MenuItem>
              <MenuItem sx={{ fontSize: 16 }} value={'06:00'}>
                6am or earlier
              </MenuItem>
              <MenuItem sx={{ fontSize: 16 }} value={'07:00'}>
                7am or earlier
              </MenuItem>
              <MenuItem sx={{ fontSize: 16 }} value={'08:00'}>
                8am or earlier
              </MenuItem>
              <MenuItem sx={{ fontSize: 16 }} value={'09:00'}>
                9am or earlier
              </MenuItem>
              <MenuItem sx={{ fontSize: 16 }} value={'10:00'}>
                10am or earlier
              </MenuItem>
              <MenuItem sx={{ fontSize: 16 }} value={'11:00'}>
                11am or earlier
              </MenuItem>
            </Select>
          </FormControl>

          {/* Closing Time */}
          <FormControl size="small" sx={{ background: 'white', borderRadius: '120px' }}>
            {!closingTime && (
              <InputLabel id="demo-simple-select-label" sx={{ fontSize: 13, height: 15, pr: 1, color: '#000' }}>
                <span>
                  <AccessTimeRoundedIcon sx={{ fontSize: 16, mr: '4px' }} />
                </span>
                <b>Closing Time</b>
              </InputLabel>
            )}
            <Select
              value={closingTime}
              onChange={handleClosingTime}
              label="Closing Time"
              sx={{
                '& .MuiSelect-icon': {
                  display: 'none'
                },
                '& fieldset': {
                  borderWidth: 0,
                  borderRadius: '120px',
                  boxShadow: '3px 2px 2px 2px #3C404326'
                },
                borderRadius: '120px',
                height: 32
              }}
            >
              <MenuItem sx={{ fontSize: 16 }} value={''}>
                Any Timing
              </MenuItem>
              <MenuItem sx={{ fontSize: 16 }} value={'16:00'}>
                4pm or earlier
              </MenuItem>
              <MenuItem sx={{ fontSize: 16 }} value={'17:00'}>
                5pm or earlier
              </MenuItem>
              <MenuItem sx={{ fontSize: 16 }} value={'18:00'}>
                6pm or earlier
              </MenuItem>
              <MenuItem sx={{ fontSize: 16 }} value={'19:00'}>
                7pm or earlier
              </MenuItem>
              <MenuItem sx={{ fontSize: 16 }} value={'20:00'}>
                8pm or earlier
              </MenuItem>
              <MenuItem sx={{ fontSize: 16 }} value={'21:00'}>
                9pm or earlier
              </MenuItem>
            </Select>
          </FormControl>

          {/* Financial Aid */}
          <FormControl size="small" sx={{ background: 'white', borderRadius: '120px' }}>
            {!financialAid && (
              <InputLabel id="demo-simple-select-label" sx={{ fontSize: 13, height: 15, color: '#000' }}>
                <img
                  width="12"
                  height="auto"
                  style={{ marginRight: '4px' }}
                  src="https://img.icons8.com/ios/50/database--v1.png"
                  alt="database--v1"
                />
                <b>Financial Aid</b>
              </InputLabel>
            )}
            <Select
              value={financialAid}
              onChange={handleFinancialAid}
              label="Financial Aid"
              sx={{
                '& .MuiSelect-icon': {
                  display: 'none'
                },
                '& fieldset': {
                  borderWidth: 0,
                  borderRadius: '120px',
                  boxShadow: '3px 2px 2px 2px #3C404326'

                },
                borderRadius: '120px',
                height: 32
              }}
            >
              <MenuItem sx={{ fontSize: 16 }} value={''}>
                Any
              </MenuItem>
              <MenuItem value="early_head_start">Early Head Start (0-3 years)</MenuItem>
              <MenuItem value="head_start">Head Start (3-5 years)</MenuItem>
            </Select>
          </FormControl>

          {/* Action Buttons */}
          {/* <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="outlined" onClick={resetFilters}>Reset</Button>
            <Button variant="contained" onClick={applyFilters}>Apply</Button>
          </Box> */}
        </Stack>
      </Box>
    </DrawerBox>
  );
};

export default FilterDrawer;
