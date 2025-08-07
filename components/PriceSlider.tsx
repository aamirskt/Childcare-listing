// import Slider fro m '@mui/material/Slider';
import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ColorSlider from 'components/coloredSlider';
import { Tooltip } from '@mui/material';
import { InfoCircle } from 'iconsax-react';
import Dot from 'components/@extended/Dot';
// import IncomeBarChart from './chart/Chart';

interface compFields {
  heading: any;
  selectedPrice: any;
  index: any;
  rateRange?: any;
  data: any;
  selectedProgram: any;
  isHeader?: any;
  defaultPrice?: any;
  field?: any;
  centersList?: any;
  sliderRatio?: any;
  filteredData?: any;
  distance?: any;
  location?: any;
  stateRates?: any;
  graphData?:any
}
const PriceSlider = ({
  heading,
  selectedPrice,
  index,
  data,
  selectedProgram,
  isHeader,
  defaultPrice,
  field,
  centersList,
  sliderRatio,
  filteredData,
  distance,
  location,
  stateRates,
  graphData

}: compFields) => {
  const [rateRangeMin, setRateRangeMin] = useState<any>(null);
  const [rateRangeMax, setRateRangeMax] = useState<any>(null);
  const [sliderData, setSliderData] = useState<any>(null);
  const [pricemarks, setPricemarks] = useState<any>([]);
  const [message] = useState<any>(`We don’t have current market rate data in your area.`);
  const [initalPrice, setInitalPrice] = useState<any>('');
  // const [toolTip, setToolTip] = useState<any>(false);

  // useEffect(() => {
  //   let _tempList: any = [];
  //   centersList.forEach((lis: any) => {
  //     if (lis.rates.length > 0) {
  //       const _tempObj = lis.rates.find((obj: any) => obj.program_id == selectedProgram?.id);
  //       _tempObj && _tempList.push(_tempObj);
  //     }
  //   });
  //   debugger
  //   if (_tempList.length > 0) {
  //     const _tempMinRate = _tempList.reduce((prev: any, curr: any) => (prev?.min_rate < curr?.min_rate ? prev : curr));
  //     const _tempMaxRate = _tempList.reduce((prev: any, curr: any) => (prev?.max_rate > curr?.max_rate ? prev : curr));
  //     let _tempMinCalc: any = '';
  //     let _tempMaxCalc: any = '';
  //     let _tempMin: any = _tempMinRate.min_rate;
  //     let _tempMax: any = _tempMaxRate.max_rate;
  //     if (field.is_full_week) {
  //       _tempMinCalc = Math.floor(_tempMin - (sliderRatio / 100) * _tempMin);
  //       _tempMaxCalc = Math.floor(_tempMax + (sliderRatio / 100) * _tempMax);
  //       setSliderData({
  //         min: parseInt(_tempMin),
  //         position1: Math.floor(( (_tempMin - _tempMinCalc) /( _tempMaxCalc - _tempMinCalc) )* 100),
  //         position2: Math.floor(( (_tempMax - _tempMinCalc) /( _tempMaxCalc - _tempMinCalc) )* 100),
  //         max: parseInt(_tempMax)
  //       });
  //     } else {
  //       _tempMin = Math.floor((_tempMin / 5) * ((sliderRatio / 100) + 1));
  //       _tempMax = Math.floor((_tempMax / 5) * ((sliderRatio / 100) + 1));
  //       _tempMinCalc = Math.floor(_tempMin - (sliderRatio / 100) * _tempMin);
  //       _tempMaxCalc = Math.floor(_tempMax + (sliderRatio / 100) * _tempMax);
  //       setSliderData({
  //         min: parseInt(_tempMin),
  //         // position1: Math.floor((_tempMin /  _tempMaxRate.max_rate) * 100),
  //         // position2: Math.floor((_tempMax / _tempMaxCalc) * 100),
  //         position1: Math.floor(( (_tempMin - _tempMinCalc) /( _tempMaxCalc - _tempMinCalc) )* 100),
  //         position2:  Math.floor(( (_tempMax - _tempMinCalc) /( _tempMaxCalc - _tempMinCalc) )* 100),
  //         max: parseInt(_tempMax)
  //       });
  //     }
  //     let _tempAverage: any = '';
  //     if (field.is_full_week) {
  //       _tempAverage = Math.floor(_tempList.reduce((total: any, next: any) => total + next.tution_rate, 0) / _tempList.length);
  //     } else {
  //       _tempAverage = Math.floor((_tempList.reduce((total: any, next: any) => total + next.tution_rate, 0) / _tempList.length / 5) * 1.2);
  //     }
  //     setInitalPrice(_tempAverage);
  //     selectedPrice(_tempAverage, index);
  //     setRateRangeMax(_tempMaxCalc);
  //     setRateRangeMin(_tempMinCalc);
  //     setPricemarks([
  //       { value: _tempMinCalc, label: `$${_tempMinCalc}` },
  //       // { value: _tempMin, label: `$${_tempMin}` },
  //       // { value: _tempMax, label: `$${_tempMax}` },
  //       { value: _tempMaxCalc, label: `$${_tempMaxCalc}` }
  //     ]);

  //     if (!_tempMin) setMessage(`We don’t have current market rate data in your area. Please quote your child's weekly price.`);
  //   }
  // }, [field.is_full_week]);

  // Getting all values from backend
  // useEffect(() => {
  //   let _tempList: any = [];
  //   centersList.forEach((lis: any) => {
  //     if (lis.rates.length > 0) {
  //       const _tempObj = lis.rates.find((obj: any) => obj.program_id == selectedProgram?.id);
  //       _tempObj && _tempList.push(_tempObj);
  //     }
  //   });
  //   debugger
  //   if (_tempList.length > 0) {
  //     const _tempMinRate = _tempList.reduce((prev: any, curr: any) => (prev?.tution_rate < curr?.tution_rate ? prev : curr));
  //     const _tempMaxRate = _tempList.reduce((prev: any, curr: any) => (prev?.tution_rate > curr?.tution_rate ? prev : curr));
  //     let _tempMinCalc: any = '';
  //     let _tempMaxCalc: any = '';
  //     let _tempMin: any = _tempMinRate.tution_rate;
  //     let _tempMax: any = _tempMaxRate.tution_rate;
  //     if (field.is_full_week) {
  //       _tempMinCalc = Math.floor( _tempMin);
  //       _tempMaxCalc = Math.floor(_tempMax);
  //       setSliderData({
  //         min: parseInt(_tempMin),
  //         position1: Math.floor(( (_tempMin - _tempMinCalc) /( _tempMaxCalc - _tempMinCalc) )* 100),
  //         position2: Math.floor(( (_tempMax - _tempMinCalc) /( _tempMaxCalc - _tempMinCalc) )* 100),
  //         max: parseInt(_tempMax)
  //       });
  //     } else {
  //       _tempMin = Math.floor((_tempMin / _tempMinRate.daily_rate_div));
  //       _tempMax = Math.floor((_tempMax / _tempMinRate.daily_rate_div));
  //       setSliderData({
  //         min: parseInt(_tempMin),
  //         // position1: Math.floor((_tempMin /  _tempMaxRate.max_rate) * 100),
  //         // position2: Math.floor((_tempMax / _tempMaxCalc) * 100),
  //         position1: Math.floor(( (_tempMin - _tempMinCalc) /( _tempMaxCalc - _tempMinCalc) )* 100),
  //         position2:  Math.floor(( (_tempMax - _tempMinCalc) /( _tempMaxCalc - _tempMinCalc) )* 100),
  //         max: parseInt(_tempMax)
  //       });
  //     }
  //     let _tempAverage: any = '';
  //     if (field.is_full_week) {
  //       _tempAverage = Math.floor(_tempList.reduce((total: any, next: any) => total + next.tution_rate, 0) / _tempList.length);
  //     } else {
  //       _tempAverage = Math.floor((_tempList.reduce((total: any, next: any) => total + next.tution_rate, 0) / _tempList.length / 5) * 1.2);
  //     }
  //     setInitalPrice(_tempAverage);
  //     selectedPrice(_tempAverage, index);
  //     setRateRangeMax(_tempMaxCalc);
  //     setRateRangeMin(_tempMinCalc);
  //     setPricemarks([
  //       { value: _tempMinCalc, label: `$${_tempMinCalc}` },
  //       // { value: _tempMin, label: `$${_tempMin}` },
  //       // { value: _tempMax, label: `$${_tempMax}` },
  //       { value: _tempMaxCalc, label: `$${_tempMaxCalc}` }
  //     ]);

  //     if (!_tempMin) setMessage(`We don’t have current market rate data in your area. Please quote your child's weekly price.`);
  //   }
  // }, [field.is_full_week]);

  useEffect(() => {
    debugger;
    let _tempList: any = [];
    centersList.forEach((lis: any) => {
      if (lis.rates.length > 0) {
        const _tempObj = lis.rates.find((obj: any) => obj.program_id == selectedProgram?.id);
        _tempObj && _tempList.push(_tempObj);
      }
    });

    let _tempAverage: any = '';
    let _tempAverageDivion: any = '';
    if (field.is_full_week) {
      _tempAverage = Math.floor(_tempList.reduce((total: any, next: any) => total + next.tution_rate, 0) / _tempList.length);
      _tempAverageDivion = Math.floor(_tempList.reduce((total: any, next: any) => total + next.daily_rate_div, 0) / _tempList.length);
    } else {
      _tempAverageDivion = Math.floor(_tempList.reduce((total: any, next: any) => total + next.daily_rate_div, 0) / _tempList.length);
      _tempAverage = Math.floor(
        _tempList.reduce((total: any, next: any) => total + next.tution_rate, 0) / _tempList.length / _tempAverageDivion
      );
    }

    if (_tempList.length > 0) {
      const _tempMinRate = _tempList.reduce((prev: any, curr: any) => (prev?.min_rate < curr?.min_rate ? prev : curr));
      const _tempMaxRate = _tempList.reduce((prev: any, curr: any) => (prev?.max_rate > curr?.max_rate ? prev : curr));
      let _tempMin: number = stateRates.min_rate;
      let _tempMax: number = stateRates.max_rate;
      
      let _tempMinCalc: number;
      let _tempMaxCalc: number;
      
      if (field.is_full_week) {
        _tempMinCalc = _tempMinRate.min_rate;
        _tempMaxCalc = _tempMaxRate.max_rate;
      } else {
         _tempMin = Math.floor(stateRates.min_rate / _tempAverageDivion);
      _tempMax = Math.floor(stateRates.max_rate / _tempAverageDivion);
        _tempMinCalc = Math.floor(_tempMinRate.min_rate / _tempAverageDivion);
        _tempMaxCalc = Math.floor(_tempMaxRate.max_rate / _tempAverageDivion);
      }
      
      const sliderRange = _tempMax - _tempMin;
      
      const position1 = Math.floor(((_tempMinCalc - _tempMin) / sliderRange) * 100);
      const position2 = Math.floor(((_tempMaxCalc - _tempMin) / sliderRange) * 100);
      
      setSliderData({
        min: _tempMin,
        position1,
        position2,
        max: _tempMax
      });

      setInitalPrice(_tempAverage);
      selectedPrice(_tempAverage, index);
      setRateRangeMax(_tempMax);
      setRateRangeMin(_tempMin);
      setPricemarks([
        { value: _tempMin, label: `$${Math.floor(_tempMin)}` },
        { value: _tempMinCalc, label: `$${Math.floor(_tempMinCalc)}` },
        { value: _tempMaxCalc , label: `$${Math.floor(_tempMaxCalc)  }` },
        { value: _tempMax, label: `$${Math.floor(_tempMax)}` }
      ]);

      // if (!_tempMin) setMessage(`We don’t have current market rate data in your area. Please quote your child's weekly price.`);
    }
  }, [field.is_full_week]);

  // useEffect(() => {
  //   debugger
  //   let _tempList: any = [];
  //   centersList.forEach((lis: any) => {
  //     if (lis.rates.length > 0) {
  //       const _tempObj = lis.rates.find((obj: any) => obj.program_id == selectedProgram?.id);
  //       _tempObj && _tempList.push(_tempObj);
  //     }
  //   });
  //   if (_tempList.length > 0) {
  //     const _tempMinRate = _tempList.reduce((prev: any, curr: any) => (prev?.min_rate < curr?.min_rate ? prev : curr));
  //     const _tempMaxRate = _tempList.reduce((prev: any, curr: any) => (prev?.max_rate > curr?.max_rate ? prev : curr));
  //     let _tempMin: any = _tempMinRate.min_rate;
  //     let _tempMax: any = _tempMaxRate.max_rate;
  //     let _tempMinCalc: any = '';
  //     let _tempMaxCalc: any = '';
  //       if (field.is_full_week) {
  //         _tempMinCalc = _tempMin;
  //       _tempMaxCalc = _tempMax;
  //         const _calcTotal = _tempMax - _tempMin
  //         const _calcPercent = Math.floor(_calcTotal * 0.80)
  //         const _calc1 = Math.floor( _tempMinCalc +  (( _calcTotal - _calcPercent)/2))
  //         const _calc2 = Math.floor(_tempMax -  (( _calcTotal - _calcPercent)/2))
  //           setSliderData({
  //             min: parseInt(_tempMin),
  //             position1: Math.floor(( (_calc1 - _tempMinCalc ) /_calcTotal)* 100),
  //             position2: Math.floor(( (_calc2 - _tempMinCalc) /_calcTotal )* 100),
  //             max: parseInt(_tempMax)
  //           });
  //             } else {
  //               _tempMinCalc = Math.floor(_tempMin / 5);
  //       _tempMaxCalc = Math.floor(_tempMax /5);
  //               const _calcTotal = _tempMaxCalc - _tempMinCalc
  //               const _calcPercent = Math.floor(_calcTotal * 0.80)
  //               const _calc1 = Math.floor( _tempMinCalc +  (( _calcTotal - _calcPercent)/2))
  //               const _calc2 = Math.floor(_tempMaxCalc -  (( _calcTotal - _calcPercent)/2))
  //                 setSliderData({
  //                   min: parseInt(_tempMin),
  //                   position1: Math.floor(( (_calc1 - _tempMinCalc ) /_calcTotal)* 100),
  //                   position2: Math.floor(( (_calc2 - _tempMinCalc) /_calcTotal )* 100),
  //                   max: parseInt(_tempMax)
  //                 });
  //             }
  //     let _tempAverage: any = '';
  //     if (field.is_full_week) {
  //       _tempAverage = Math.floor(_tempList.reduce((total: any, next: any) => total + next.tution_rate, 0) / _tempList.length);
  //     } else {
  //       _tempAverage = Math.floor((_tempList.reduce((total: any, next: any) => total + next.tution_rate, 0) / _tempList.length / 5) * 1.2);
  //     }
  //     setInitalPrice(_tempAverage);
  //     selectedPrice(_tempAverage, index);
  //     setRateRangeMax(_tempMaxCalc);
  //     setRateRangeMin(_tempMinCalc);
  //     setPricemarks([
  //       { value: _tempMinCalc, label: `$${_tempMinCalc}` },
  //       // { value: _tempMin, label: `$${_tempMin}` },
  //       // { value: _tempMax, label: `$${_tempMax}` },
  //       { value: _tempMaxCalc, label: `$${_tempMaxCalc}` }
  //     ]);

  //     if (!_tempMin) setMessage(`We don’t have current market rate data in your area. Please quote your child's weekly price.`);
  //   }
  // }, [field.is_full_week]);
  useEffect(() => {
    if (defaultPrice) {
      setInitalPrice(defaultPrice);
      selectedPrice(defaultPrice, index);
    }
  }, [defaultPrice]);
  console.log(selectedProgram?.program_name, rateRangeMin, initalPrice, 'initalPrice');
  return (
    <>
      <Typography variant="p" sx={{ py: 2, fontSize: '16px', fontWeight: 600, lineHeight: '14px' }}>
        <span style={{ color: '#ED5B09' }}>Step 2:</span> Select Price
      </Typography>
      <Stack sx={{ backgroundColor: '#EEEBEB', borderRadius: '6px', padding: 2 }}>
        {selectedProgram?.program_name ? (
          rateRangeMin ? (
            <Stack spacing={1} sx={{ display: 'flex', px: 1 }}>
              <Stack display={'flex'} flexDirection={'row'}>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#000',
                    fontSize: isHeader ? '12px' : '14px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    pr: 1
                  }}
                >
                  <span style={{ fontWeight: 400 }}>Selected Program:</span> {selectedProgram?.program_name}
                </Typography>
                <Tooltip
                  enterTouchDelay={0}
                  title={
                    <>
                      <Stack direction="row" justifyContent="center">
                        <Dot sx={{ backgroundColor: '#FF7A00', p: '5px', mt: 1 }} />
                        <Typography
                          sx={{
                            p: '2px 8px',
                            color: '#000',
                            fontSize: '12px',
                            fontStyle: 'normal'
                          }}
                        >
                          This slider range represents the weekly tution rates we can consider that we can negotiate with our preferred
                          provider in the chosen area.
                        </Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="center">
                        <Dot sx={{ backgroundColor: '#4B0082', p: '5px', mt: 1 }} />
                        <Typography
                          sx={{
                            p: '2px 8px',
                            color: '#000',
                            fontSize: '12px',
                            fontStyle: 'normal'
                          }}
                        >
                          This slider range represents the weekly tution rates we feel confident that we can negotiate with our preferred
                          providers in the chosen area.
                        </Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="center">
                        <Dot sx={{ backgroundColor: '#53a336', p: '5px', mt: 1 }} />
                        <Typography
                          sx={{
                            p: '2px 8px',
                            color: '#000',
                            fontSize: '12px',
                            fontStyle: 'normal'
                          }}
                        >
                          This slider range represents the weekly tution rates offered by providers in the selected area.
                        </Typography>
                      </Stack>
                    </>
                  }
                >
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.61773 13.75C9.66342 13.75 12.1324 10.9518 12.1324 7.5C12.1324 4.04822 9.66342 1.25 6.61773 1.25C3.57205 1.25 1.10303 4.04822 1.10303 7.5C1.10303 10.9518 3.57205 13.75 6.61773 13.75Z"
                      stroke="#19A3E0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M6.61768 5V7.5" stroke="#19A3E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.61768 10H6.62553" stroke="#19A3E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Tooltip>
                <Stack sx={{ ml: 1 }}></Stack>
              </Stack>
              <Stack>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#000',
                    fontSize: isHeader ? '12px' : '14px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    pr: 1
                  }}
                >
                  Within{' '}
                  {distance && (
                    <>
                      <span style={{ fontWeight: 'bold' }}>{distance}</span> miles of
                    </>
                  )}{' '}
                  <span style={{ fontWeight: 'bold' }}>{location}</span>
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#000',
                    fontSize: isHeader ? '12px' : '14px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    pr: 1,
                    mb: 2
                  }}
                >
                  {heading}
                </Typography>
              </Stack>
              <Box sx={{ width: '100%', mt: 5, mb: 5 }}>
                {rateRangeMin && initalPrice && (
                  <Box position="relative" width="100%">
                    {/* Labels at the Ends */}
                    {/* <Box display="flex" justifyContent="space-between" mb={'5px'}>
                      <Typography variant="p2">{'Lowest Price'}</Typography>
                      <Typography variant="p2">{'Highest Price'}</Typography>
                    </Box> */}

                    {/* Slider Component */}
                    <ColorSlider
                      sliderProps={sliderData}
                      valueLabelDisplay="on"
                      aria-label="pretto slider"
                      defaultValue={initalPrice}
                      value={initalPrice}
                      valueLabelFormat={(value: any) => (value !== undefined ? value : '')}
                      min={rateRangeMin}
                      max={rateRangeMax}
                      marks={pricemarks}
                      step={1} 
                      onChange={(_, e: any) => {
                        setTimeout(() => {
                          selectedPrice(e, index);
                          setInitalPrice(e);
                        }, 200);
                      }}
                    />
                  </Box>
                )}
              </Box>
              {/* <Stack sx={{ mb: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: '#9FA2AA', maxWidth: '320px', alignSelf: 'center', borderRadius: '5px', boxShadow: '0px 0px 20px 0px rgba(215, 215, 215, 0.30)' }}>
              <Typography
                variant='p'
                sx={{
                  color: '#000',
                  px: 2,
                  py: 1

                }}
              >
                {`Selected ${filteredData.length} of ${(data.filter((item: any) => item.rates?.length > 0)).length} Providers are available`}
              </Typography>
            </Stack> */}

              
             

              <Stack direction="row" justifyContent="center">
                <Dot sx={{ backgroundColor: '#FF7A00', p: '5px', mt: 1 }} />
                <Typography
                  sx={{
                    p: '2px 8px',
                    color: '#000',
                    fontSize: '14px',
                    fontStyle: 'normal'
                  }}
                >
                  This slider range indicates tution rates that are below the typical range for your area and may not be negotiable.
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="center">
                <Dot sx={{ backgroundColor: '#4B0082', p: '5px', mt: 1 }} />
                <Typography
                  sx={{
                    p: '2px 8px',
                    color: '#000',
                    fontSize: '14px',
                    fontStyle: 'normal'
                  }}
                >
                  This slider range reflects tution range we believe is reasonable to negotiate with providers in your choosen area.
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="center">
                <Dot sx={{ backgroundColor: '#53a336', p: '5px', mt: 1 }} />
                <Typography
                  sx={{
                    p: '2px 8px',
                    color: '#000',
                    fontSize: '14px',
                    fontStyle: 'normal'
                  }}
                >
                  This slider range reflects tution rates we're confident can be successfully negotiated with preffered providers in your choosen area.</Typography>
              </Stack>
              <Stack>
                <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>Your Area Median Income Related to Your State</Typography>
              </Stack>
              {/* <IncomeBarChart graphData={graphData}/> */}
            </Stack>
          ) : (
            <Stack direction="row" alignItems="center" justifyContent="center">
              <InfoCircle color={'red'} size={20} />
              <Typography
                variant="p1"
                sx={{
                  color: 'red',
                  ml: 1
                }}
              >
                {message}
              </Typography>
            </Stack>
          )
        ) : (
          <Typography
            variant="h5"
            sx={{
              color: '#000',
              fontSize: isHeader ? '12px' : '16px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '22px'
            }}
          >
            Not Eligible
          </Typography>
        )}
      </Stack>
    </>
  );
};

export default PriceSlider;
