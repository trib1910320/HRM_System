import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { toast } from 'react-toastify';
import CreateQRCodeForm from './CreateQRCodeForm';
import QRCodeTimekeeper from './QRCodeTimekeeper';

ModalTimekeeper.propTypes = {
  openModal: PropTypes.bool,
  toggleShowModal: PropTypes.func,
  refreshAttendanceList: PropTypes.func,
};

ModalTimekeeper.defaultProps = {
  openModal: false,
  toggleShowModal: null,
  refreshAttendanceList: null,
};

function ModalTimekeeper(props) {
  const { openModal, toggleShowModal, refreshAttendanceList } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [shiftSelected, setShiftSelected] = useState(null);

  const handleCreateQRCode = async (values) => {
    try {
      setConfirmLoading(true);
      setShiftSelected(values.shiftId);
      setConfirmLoading(false);
    } catch (error) {
      toast.error(error);
      setConfirmLoading(false);
    }
  };

  const handleStopCreateQRCode = () => {
    toggleShowModal();
  };

  return (
    <>
      <Modal
        title={'QR Code Timekeeper'}
        open={openModal}
        onCancel={handleStopCreateQRCode}
        footer={null}
        maskClosable={false}
      >
        {shiftSelected ? (
          <QRCodeTimekeeper
            onClose={handleStopCreateQRCode}
            shiftId={shiftSelected}
            refreshAttendanceList={refreshAttendanceList}
          />
        ) : (
          <CreateQRCodeForm
            onSubmit={handleCreateQRCode}
            loading={confirmLoading}
          />
        )}
      </Modal>
    </>
  );
}
export default ModalTimekeeper;
