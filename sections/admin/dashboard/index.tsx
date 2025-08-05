"use client";

import {
  Button,
  Stack,
  Dialog,
  Grid,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import PopupTransition from 'components/@extended/Transitions';
import { CustomPagination } from 'components/customPagination';

import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import axios from 'utils/axios';
import ReactTable from 'components/tables/react-table/simpleTable';
import AdminNav from 'components/AdminNav';
import axiosServices from 'utils/axios';
import LoadingComp from 'components/loaderComp';
import { useRouter } from 'next/navigation';
import CustomSearchFilter from 'components/customSearchFilter';
import CityContentModal from 'components/CityContentModal';

// ==============================|| FORMS VALIDATION - ADDRESS ||============================== //
interface Props {
  data?: any;
}
function getWindowSize() {
  if (typeof window !== 'undefined') {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  return { innerWidth: 0, innerHeight: 0 }; // fallback for SSR
}
function JobsComp({ data }: Props) {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [eventType, setEventType] = useState<string>('Add');
  const [tableData, setTableData] = useState<any>([]);
  const [ctyData, setCtyData] = useState({ id: '', city: '', state: '', type: '', seo_title: '', seo_description: '', content: '', main_keyword: '', lsi_keywords: '' });
  const [windowWidth, setWindowWidth] = useState<any>(getWindowSize().innerWidth > 600 ? false : true);
  const [pageCount, setPageCount] = useState<any>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [topCities, setTopCities] = useState<any>([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    if (!storedUser) {
      router.push('/login'); // Replace with your target route
    }
  }, []);

  useEffect(() => {
    Datalist();
  }, []);

  const handleNextPgeCount = () => {
    if (tableData?.last_page > pageCount) {
      setPageCount(tableData?.current_page + 1)
      getNextPrev('', tableData?.current_page + 1)
    }
  }
  const handlePrePgeCount = () => {
    if (pageCount > 1) {
      setPageCount(tableData?.current_page - 1)
      getNextPrev('', tableData?.current_page - 1)
    }
  }
  useEffect(() => {
    if (typeof window === 'undefined') return; // ⛔ SSR safeguard

    function handleWindowResize() {
      const { innerWidth } = getWindowSize();
      setWindowWidth(innerWidth <= 600);
    }

    // Call once on mount
    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const Datalist = () => {
    setIsLoading(true)
    axios
      .get('api/city/get-content-all')
      .then((response) => {
        console.log(response.data.data);
        if (response.data.status == 'fail') {
          dispatch(
            openSnackbar({
              open: true,
              message: 'Something Went Wrong',
              variant: 'alert',
              alert: {
                color: 'error'
              },
              close: false
            })
          );
        }
        if (response.data.status === 'pass') {
          setIsLoading(false)
          setTableData(response.data.data);
          // setSearchColumns(response.data.data)
        } else {
          setIsLoading(false)

        }
      })
      .catch((error) => {
        setIsLoading(false)
        // console.log('erro uploading', jobListDatabyid);
      });
  };

  const jobsColumns: any = useMemo(
    () => [
      {
        Header: 'State',
        accessor: 'state'
      },
      {
        Header: 'City',
        accessor: 'city'
      },
      {
        Header: 'Type',
        accessor: 'type'
      },
      {
        Header: 'SEO Title',
        accessor: 'seo_title'
      },
      {
        Header: 'SEO Description',
        accessor: 'seo_description',
        Cell: (value: any) => value?.row?.original?.seo_description ? (`${value?.row?.original?.seo_description.slice(0, 100)}...`) : {}

      },

      {
        Header: 'Action',
        accessor: 'action',
        Cell: (value: any) => {
          console.log(typeof value?.row?.original?.status, '--------');

          return (
            <Stack display="flex" flexDirection="row" justifyContent={'flex-end'}>

              <Button
                variant="contained"
                color="primary"
                sx={{
                  mr: 1, borderRadius: '20px', background: '#000', fontSize: '10px', '&:hover': {
                    background: '#000'
                  }
                }}
                onClick={() => {
                  setEventType('Edit');
                  handleDialogopen(value?.row?.original?.id);
                  setCtyData(value?.row?.original)
                  console.log(value?.row?.original, 'ppppppppp');
                  handleStateDetailByStatename(value?.row?.original?.state)
                }}

              >
                Edit
              </Button>

            </Stack>
          );
        }
      }
    ],
    []
  );
  const handleDialog = () => {
    setOpen(false);
  };
  const handleDialogopen = (id: any) => {
    setOpen(true);
  };
  const handleDeleteDialog = () => {
    setOpenDelete(false);
  };
  const handleStateDetailByStatename = (selectedState: any) => {
    axios({
      method: 'get',
      url: `api/search/get_cities/${selectedState}`,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response: any) => {
        if (response.status !== 'fail') {
          setTopCities(response.data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
  const getNextPrev = (link?: any, _pageCount?: any) => {
    // debugger
    let url: any;
    if (windowWidth) {
      url = `api/city/get-content-all?page=${_pageCount}&perPage=1`
      axiosServices
        .get(url)
        .then((response) => {
          if (response.data.status === 'fail') {
            dispatch(
              openSnackbar({
                open: true,
                message: 'Something Went Wrong',
                variant: 'alert',
                alert: {
                  color: 'error'
                },
                close: false
              })
            );
          }
          if (response.data.status === 'pass') {
            // debugger
            // setInvoicesData(response?.data?.data);
            // setPaginationData(response?.data);
            setTableData(response.data.data);
            // setPageCount(link.label);

          }
        })
        .catch((error) => {
          // Handle error
        });
    } else {
      if (link?.url) {
        url = new URL(link?.url);

        axiosServices
          .get(url)
          .then((response) => {
            if (response.data.status === 'fail') {
              dispatch(
                openSnackbar({
                  open: true,
                  message: 'Something Went Wrong',
                  variant: 'alert',
                  alert: {
                    color: 'error'
                  },
                  close: false
                })
              );
            }
            if (response.data.status === 'pass') {
              setTableData(response.data.data);

              // setPageCount(link.label);

            }
          })
          .catch((error) => {
            // Handle error
          });
      }
    }
  }

  let url: any;

  if (windowWidth) {
    url = `/api/city/get-content-all?page=${pageCount}&perPage=1`
  } else {
    url = `/api/city/get-content-all`

  }

  const handleSetFilterdData = (props: any) => {
    debugger
    setTableData(props);
    // setData(props);
  }

  return (
    <>
      {isLoading && <LoadingComp loading={isLoading} />}

      <AdminNav />
      <Stack sx={{ background: '#fff' }}>

        <Stack sx={{ display: 'flex', justifyContent: 'right', flexDirection: 'row', py: 5 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              mr: 1, borderRadius: '20px', background: '#000', '&:hover': {
                background: '#000' // Adjust the alpha channel (0.8) as needed
              }
            }}
            onClick={() => {
              setEventType('Add');
              handleDialogopen(null);
              setCtyData({ id: '', city: '', state: '', seo_title: '', seo_description: '', type: '', content: '', main_keyword: '', lsi_keywords: '' })
            }}
          >
            Add New City Content
          </Button>
        </Stack>
        {jobsColumns.length != 0 && <Stack sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', my: 2 }}>
          <Stack>
            <CustomSearchFilter
              columns={jobsColumns}
              ApiUrl={url}
              // filter1={true}
              setUpdateState={handleSetFilterdData}
            />
          </Stack>
        </Stack>}
        {tableData?.data?.length > 0 && <ReactTable columns={jobsColumns} data={tableData.data} tableType={'filterable'} />}
        {tableData && (!windowWidth ? <Stack
          sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%', p: 1 }}
        >
          <CustomPagination data={tableData} getNextPrev={getNextPrev} />
        </Stack> : <Stack
          sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', py: 1 }}
        >
          <CustomPagination data={tableData} getNextPrev={getNextPrev} isMobile={windowWidth} handlePrePgeCount={handlePrePgeCount} handleNextPgeCount={handleNextPgeCount} />
        </Stack>)}

      </Stack>)
      <Dialog
        maxWidth="sm"
        TransitionComponent={PopupTransition}
        keepMounted
        fullWidth
        onClose={handleDeleteDialog}
        open={openDelete}
        sx={{ '& .MuiDialog-paper': { p: 2 }, transition: 'transform 225ms' }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Delete</DialogTitle>
        <Divider />
        <DialogContent sx={{ p: 2.5 }}>
          <Typography>Are you sure you want to delete?</Typography>
        </DialogContent>
        <DialogActions sx={{ p: 2.5 }}>
          <Grid container justifyContent="flex-end" alignItems="center">
            <Grid item>
              <Stack direction="row" spacing={2} alignItems="center">
                <Button color="error" onClick={handleDeleteDialog}>
                  Cancel
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
      <CityContentModal
        open={open}
        onClose={handleDialog}
        eventType={eventType}
        cityData={ctyData}
        onSuccess={Datalist}
        topCities={topCities}
      />
    </>
  );
}

export default JobsComp;
