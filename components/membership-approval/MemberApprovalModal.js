import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Container } from '@mui/material';

import { useTheme } from '@mui/material/styles';
import Styles from './style';

import ModalDataRow from './ModalDataRow';

import { modalDataFormatter } from './approval.util';

function MemberApprovalModal({ openModal, setOpenModal, obj }) {
  const theme = useTheme();
  const style = Styles(theme);
  const [modalData, setModalData] = React.useState({});
  const handleClose = (e, reason) => {
    if (reason === 'backdropClick') {
      e.stopPropagation();
      return false;
    }
    setOpenModal(false);
  };

  React.useEffect(() => {
    setModalData(modalDataFormatter(obj));
  }, [obj]);
  return (
    <Container maxWidth="md">
      <Modal
        open={openModal}
        onClose={(e) => handleClose(e, 'backdropClick')}
      >
        <Box sx={style.modalContent}>
          {Object.entries(modalData).map(([key, value], i) => {
            return (
              <ModalDataRow key={i} property={key} value={modalData[key]} />
            );
          })}
          <Button
            onClick={() => setOpenModal(false)}
            sx={{ ...style.button, mt: 2 }}
          >
            Ok
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}

export default MemberApprovalModal;
