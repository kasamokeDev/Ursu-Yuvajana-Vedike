import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';

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
    setLoading(false);
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
          <Grid container spacing={2} sx={{ pt: 2 }}>
            <Grid item xs={12}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ textAlign: 'center' }}
              >
                Become a Life-Time member.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                id="modal-modal-description"
                variant="subtitle1"
                sx={{ textAlign: 'center' }}
              >
                Gives access to seminars and yearly organized parties.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button
                sx={{
                  ...style.button,
                  bgcolor: '#FFFFFF',
                  color: theme.palette.primary.main,
                }}
                onClick={() => {
                  setLoading(false);
                  setOpenModal(false);
                }}
              >
                No, Please continue
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button
                sx={style.button}
                onClick={() => {
                  setLoading(true);
                  setOpenModal(false);
                  continuePayment();
                }}
                disabled={true}
              >
                Pay and Proceed
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default MembershipCheckModal;
