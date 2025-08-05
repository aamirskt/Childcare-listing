import { Box } from '@mui/material';
import { Backdrop, CircularProgress } from '@mui/material';

export default function LoaderComp({loading}: any){

    return(    <Backdrop
                    sx={{ color: '#fff', zIndex: 9999 }}
                    open={loading}
                  >
                     <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  color: '#fff',
                  backgroundColor: '#000',
                  opacity: '0.8',
                  width: '170px',
                  p: 1,
                  px: 2,
                  borderRadius: '50px'
                }}
              >
                Loading  <CircularProgress sx={{ml: 2}} size={20} color="inherit" />
              </Box>
                 
                  </Backdrop>
    )
} 