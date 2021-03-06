import ModalButton from "components/Buttons/ModalButton";
import Modal from "react-modal";
import { CUSTOM_STYLES_MODAL } from "utils/constants";

Modal.setAppElement(document.body);

const ErrorModal = ({
  contentLabel,
  closeModal,
  modalIsOpen,
  title,
  description,
}) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        contentLabel={contentLabel}
        style={CUSTOM_STYLES_MODAL}
      >
        <div className="content">
          <h1>{title}</h1>
          <p>{description}</p>
          <ModalButton onClick={closeModal} type="button" border="black">
            Cerrar
          </ModalButton>
        </div>
      </Modal>
      <style jsx>{`
        h1 {
          font-size: 24px;
          margin-bottom: 44px;
        }

        p {
          font-weight: 400;
          line-height: 24px;
          font-size: 17px;
          margin-bottom: 44px;
        }
      `}</style>
    </>
  );
};

export default ErrorModal;
