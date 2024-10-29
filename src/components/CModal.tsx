import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

interface CModal{
    open: boolean,
    children: React.ReactNode,

    onClose: ()=> void
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '8px',
  p: 4,
};

const CModal: React.FC<CModal> = ({open, onClose, children}) => {

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>{children}</Box>
        </Modal>
    );
}

export default CModal;