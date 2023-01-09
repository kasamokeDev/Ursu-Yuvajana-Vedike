import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

function MembershipCheckModal({
  isOpen,
  setOpenModal,
  setLoading,
  continuePayment,
}) {
  const theme = useTheme();
  const style = Styles(theme);
  const handleClose = () => {
    setOpenModal(false);
  };

  React.useEffect(() => {
    if (!isOpen) {
      handleClose();
    }
  }, [isOpen]);
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.PaymentModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button
            sx={style.button}
            onClick={() => {
              setOpenModal(false);
            }}
          >
            No, Its ok
          </Button>
          <Button
            sx={style.button}
            onClick={() => {
              setLoading(true);
              setOpenModal(false);
              continuePayment();
            }}
          >
            Yes, Proceed
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default MembershipCheckModal;
