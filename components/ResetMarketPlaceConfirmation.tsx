



// material-ui
import { Button, Dialog, DialogContent, Stack, Typography } from '@mui/material';

// project-imports
import PopupTransition from 'components/@extended/Transitions';



// ==============================|| CUSTOMER - DELETE ||============================== //


interface DeleteChildrenModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm?: any;
}
const DeleteChildrenModal: React.FC<DeleteChildrenModalProps> = ({ open, onClose, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm();
    onClose(); // Close the modal after confirming
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      keepMounted
      TransitionComponent={PopupTransition}
      maxWidth="xs"
      aria-labelledby="column-delete-title"
      aria-describedby="column-delete-description"
      PaperProps={{
        sx: {
          m: 0,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <DialogContent sx={{ mt: 2, my: 1 }}>
        <Stack alignItems="center" spacing={3.5}>
          <Stack spacing={2}>
            <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }} align="center">
              Changing the ZIP code or city will reset the marketplace form.
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ width: 1 }}>
            <Button fullWidth onClick={onClose} color="secondary" variant="outlined">
              Cancel
            </Button>
            <Button fullWidth color="error" variant="contained" onClick={handleConfirm} autoFocus>
              Confirm
            </Button>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
export default DeleteChildrenModal;