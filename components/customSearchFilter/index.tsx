import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { SearchZoomIn } from 'iconsax-react';
import { useState } from 'react';
import axios1 from 'utils/axios';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CustomButton from 'components/button';
// import moment from 'moment';

interface SearchCompProps {
  columns: any;
  ApiUrl: any;
  setUpdateState: any;
  marketplace?: boolean;
  dataFormat?: boolean;
  filter?: any;
  filter1?: any;
}

const SearchComponent = ({ columns, ApiUrl, setUpdateState, dataFormat, filter, filter1 }: SearchCompProps) => {
 const _theme = useTheme();
  const matchDownxs = useMediaQuery(_theme.breakpoints.down('sm'));
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColumn, setSelectedColumn] = useState('');

  const handleSearch = () => {
    let _column: any = searchQuery;
    // if(selectedColumn?.includes('date') ){
    //    _column = moment(new Date(searchQuery)).format("YYYY-MM-DD");
    // }
    if(selectedColumn?.includes('immediate') ){
      _column = searchQuery.toLocaleLowerCase() == 'yes' ? 1 : 0;
   }
    let apiUrl = filter
      ? `${ApiUrl}&filters[${selectedColumn}]=${_column}`
      :   filter1
         ? `${ApiUrl}?filters[${selectedColumn}]=${_column}`
        :`${ApiUrl}?search=${_column}&column=${selectedColumn}`;

    // Fetch data with search parameters
    axios1
      .get(apiUrl)
      .then((response) => {
        debugger
        if (response.data.status === 'fail') {
          dispatch(
            openSnackbar({
              open: true,
              message: 'Something Went Wrong',
              variant: 'alert',
              alert: { color: 'error' },
              close: false
            })
          );
        }
        !dataFormat ? setUpdateState(response.data.data) : setUpdateState(response.data);
      })
      .catch((error) => {
        // Handle error
      });
  };

  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ my: 2 }}>
        <FormControl
          // variant="outlined"
          sx={{
            minWidth: {xs: '120px', sm: '170px'},
            '& .MuiInputBase-formControl': {
              fontSize: '14px',
              lineHeight: '14px',
              height: '44px !important'
            }
          }}
        >
          <InputLabel sx={{ fontSize: '14px' }}>Select Column</InputLabel>
          <Select value={selectedColumn} onChange={(e) => setSelectedColumn(e.target.value as string)} label="Column">
            <MenuItem value={'All'} sx={{ fontSize: '14px' }}>
              All
            </MenuItem>
            {columns
              ?.filter((column: any) => !column.id?.includes('NotInSearch'))
              ?.map((column: any) => (
                <MenuItem
                  key={column.accessor}
                  value={column.accessor === 'guardian_centers' ? column.id : column.accessor}
                  sx={{ fontSize: '14px' }}
                >
                  {column.Header}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        {/* {selectedColumn === 'status' || selectedColumn === 'is_mp' ? (
          <FormControl
            variant="outlined"
            sx={{
              minWidth: {xs: '100px', sm: '120px'},
              '& .MuiInputBase-root': {
                fontSize: '14px',
                lineHeight: '14px',
                height: '44px !important'
              }
            }}
          >
            <InputLabel>{selectedColumn === 'is_mp' ? 'MarketPlace' : 'Status'}</InputLabel>

            {selectedColumn === 'is_mp' ? (
              <>
                <Select value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} label={'MarketPlace'}>
                  <MenuItem value={'1'} sx={{ fontSize: '14px' }}>
                    Yes
                  </MenuItem>
                  <MenuItem value={'0'} sx={{ fontSize: '14px' }}>
                    No
                  </MenuItem>
                </Select>
              </>
            ) : (
              <>
                <Select value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} label={'Status'}>
                  <MenuItem value={'1'} sx={{ fontSize: '14px' }}>
                    Active
                  </MenuItem>
                  <MenuItem value={'2'} sx={{ fontSize: '14px' }}>
                    Suspend
                  </MenuItem>
                  <MenuItem value={'3'} sx={{ fontSize: '14px' }}>
                    Expire
                  </MenuItem>
                </Select>
              </>
            )}
          </FormControl>
        ) : ( */}
          <TextField
            placeholder="Search"
            value={searchQuery}
            sx={{
              width: {xs: '100px', sm: '170px'},
              '& .MuiInputBase-input': {
                padding: '12px !important',
                fontSize: '14px'
              }
            }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        {/* )} */}

        {matchDownxs ? <Stack sx={{ cursor: 'pointer' }}>
          <SearchZoomIn size="24" color="#000" onClick={handleSearch} />
        </Stack> : 
                      <CustomButton title={'Apply Filters'} onClick={handleSearch} />
                    }
      </Stack>
    </>
  );
};

export default SearchComponent;
