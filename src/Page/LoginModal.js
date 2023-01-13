import React, { useCallback } from 'react';
import Modal from '@netojose/react-modal';

function LoginModal({ isOpen, setIsOpen }) {
  const closeModal = useCallback(() => setIsOpen(false), []);
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <p>This is the modal content</p>
      <button type="button" value="Close modal" onClick={closeModal}>
        hihihi
      </button>
      <input type="button" value="Close modal" onClick={closeModal} />
      <input type="button" value="Close modal" onClick={closeModal} />
      <input type="button" value="Close modal" onClick={closeModal} />
      <input type="button" value="Close modal" onClick={closeModal} />
    </Modal>
  );
}

export default LoginModal;
