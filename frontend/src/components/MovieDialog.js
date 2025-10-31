import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useSelector, useDispatch } from 'react-redux';
import { setOpen } from '../redux/movieSlice';
import VideoBackground from './VideoBackground';

export default function MovieDialog() {
  const { open, id } = useSelector((store) => store.movie);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  // Prevent rendering VideoBackground when movieId is missing
  if (!id) return null;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="movie-dialog-title"
      aria-describedby="movie-dialog-description"
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: '#1a1a1a',
          color: 'white',
          borderRadius: 2,
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        <VideoBackground movieId={id} bool={true} />
      </DialogContent>

      <DialogActions sx={{ backgroundColor: '#1a1a1a', p: 2 }}>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{
            backgroundColor: '#E50914',
            color: 'white',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#f40612',
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
