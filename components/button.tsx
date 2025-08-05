import { styled } from '@mui/material/styles';
import { Stack, Button, Typography } from '@mui/material';
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: '#000',
  borderRadius: '50px',
  '&:hover': {
    backgroundColor: '#000'
  }
}));

interface ButtonProps {
  title?: string;
  disabled?: boolean;
  onClick?: any;
  sx?: any;
  form?: string;
}
export default function CustomButton({ title, disabled, onClick, form, sx }: ButtonProps) {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton form={form} disabled={disabled || false} type="submit" variant="contained" onClick={onClick ? onClick : null}>
        <Typography variant="h6" sx={{ ...sx, px: 2 }}>
          {title}
        </Typography>
      </ColorButton>
    </Stack>
  );
}
