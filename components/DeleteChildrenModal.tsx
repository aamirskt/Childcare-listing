



// material-ui
import { Button, Dialog, DialogContent, Stack, Typography } from '@mui/material';

// project-imports
import PopupTransition  from 'components/@extended/Transitions';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';



// ==============================|| CUSTOMER - DELETE ||============================== //


interface DeleteChildrenModalProps {
    open: boolean;
    onClose: () => void;
    onDeleteConfirm?: any;
    index?: number; // Optional, depending on your use case
  }
const DeleteChildrenModal: React.FC<DeleteChildrenModalProps> = ({ open, onClose, onDeleteConfirm }) => {
  const handleDelete = () => {
    dispatch(
      openSnackbar({
        open: true,
        message: 'Child information deleted successfully',
        variant: 'alert',
        alert: {
          color: 'success'
        },
        close: false
      })
    );
    onDeleteConfirm();
    onClose(); // Close the modal after confirming
  };
console.log(open, 'open')
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
            <Typography sx={{fontSize: '14px', fontWeight:'bold'}}  align="center">
              Are you sure you want to delete?
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ width: 1 }}>
            <Button fullWidth onClick={onClose} color="secondary" variant="outlined">
              Cancel
            </Button>
            <Button fullWidth color="error" variant="contained" onClick={handleDelete} autoFocus>
              Delete
            </Button>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
export default DeleteChildrenModal;