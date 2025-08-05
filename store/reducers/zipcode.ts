// zipCodeSlice.js

import { createSlice } from '@reduxjs/toolkit';

const zipCodeSlice = createSlice({
  name: 'zipCode',
  initialState: {searchpage: true, centerData: { center: [], center_point: { lan: '', lat: '' } }, zipCodeReducer: '', isParams: true, showMarketPlaceHeader: true },
  reducers: {
    setZipCodetest: (state, action) => {
      state.zipCodeReducer = action.payload; // Set the zip code to the payload value
    },
    setShowMarketPlaceHeader: (state, action) => {
      state.showMarketPlaceHeader = action.payload; // Set the zip code to the payload value
    },
    setCentersList: (state, action) => {
      state.centerData = action.payload; // Set the zip code to the payload value
    },
    setIsParams: (state, action) => {
      state.isParams = action.payload; // Set the zip code to the payload value
    },
     setSearchpage: (state, action) => {
      // debugger
      state.searchpage = action.payload; // Set the zip code to the payload value
    }

  }
});

export const { setZipCodetest, setCentersList, setIsParams, setShowMarketPlaceHeader, setSearchpage } = zipCodeSlice.actions;
export default zipCodeSlice.reducer;
