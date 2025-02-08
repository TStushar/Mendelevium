import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import HoverCard from '../card/HoverCard';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function KeepMountedModal() {
  const handleClose = () => setOpen(false);
//   handleOpen()
  return (
    <div>
      <Modal
        keepMounted
        open={true}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <HoverCard/>
        </Box>
      </Modal>
    </div>
  );
}
