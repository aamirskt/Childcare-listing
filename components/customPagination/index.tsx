import { Stack } from '@mui/material';
import { Box, Button, Typography } from '@mui/material';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';

interface AlertsCompProps {
  data: any;
  getNextPrev: any;
  isMobile?: any;
  handlePrePgeCount?: any;
  handleNextPgeCount?: any;
}
export const CustomPagination = ({ data, getNextPrev, isMobile, handleNextPgeCount, handlePrePgeCount }: AlertsCompProps) => {
  return (
    <>
      {isMobile ? <Stack sx={{width: '100%', direction: {xs: 'column', sm: 'row'}, justifyContent: 'center', alignItems: 'center' }} >
      <Stack direction={'row'}  >
      <Typography variant='p' sx={{mr: '5px'}}> Current page</Typography>
      <Typography variant='p1' sx={{mr: 1, border: '1px solid #343434', px: '5px', borderRadius: '5px',  }}> {data?.current_page}</Typography>
      <Typography variant='p' sx={{ mr: '5px' }}> Total pages</Typography>
      <Typography variant='p1' sx={{mr: {xs: 0, sm: 1}, border: '1px solid #343434', px: '5px', borderRadius: '5px',  }}>{data?.total}</Typography>
      </Stack>
      <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: '100%', my: {sm: 0, xs: 1}, px: 1}} >
         <ArrowLeft2 onClick={handlePrePgeCount} color='#000' size={28} style={{ border: '1px solid #343434', padding: 1, borderRadius: '5px', marginRight: "10px", cursor: 'pointer' }} />
         <ArrowRight2 onClick={handleNextPgeCount} color='#000' size={28} style={{ border: '1px solid #343434', padding: 1, borderRadius: '5px', cursor: 'pointer' }} /> </Stack></Stack> : <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  gap={1}
  component="ul"
  sx={{
    listStyle: 'none',
    padding: 0,
    marginTop: 2,
  }}
>
  {data.links?.map((link: any, index: number) => (
    <li key={index}>
      <Button
        onClick={() => getNextPrev(link)}
        variant={link.active ? 'contained' : 'outlined'}
        size="small"
        sx={{
          minWidth: 36,
          height: 36,
          padding: '4px 8px',
          textTransform: 'none',
        }}
      >
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 600,
          }}
        >
          {link.label
            .replace('&laquo;', '«')
            .replace('&raquo;', '»')
            .replace('&nbsp;', '')}
        </Typography>
      </Button>
    </li>
  ))}
</Box>}
    </>
  );
};
