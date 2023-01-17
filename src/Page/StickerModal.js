/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './Background.css';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import axios from 'axios';

import { BsX } from 'react-icons/bs';

const CloseBtn = styled.button`
  background-color: red;
  margin: 0 0 1rem auto;
  padding-top: 0;
  display: block;
`;

// 모달 스타일
const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    zIndex: 9998,
  },
  content: {
    // display: 'flex',
    justifyContent: 'center',
    // background: '#ffffe7',
    overflow: 'auto',
    top: '16vh',
    left: '16vw',
    right: '20vw',
    bottom: '20vh',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '14px',
    outline: 'none',
    zIndex: 9999,
  },
};

function StickerModal({ isOpen, closeModal }) {
  const GetStickers = async () => {
    try {
      const files = await axios.get(
        `http://127.0.0.1:8080/api/v1/papers/sticker_list`,
      );
      console.log(files);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        ariaHideApp={false}
      >
        <CloseBtn
          type="button"
          onClick={() => {
            closeModal();
          }}
        >
          <BsX />
        </CloseBtn>
        <ToastContainer />
      </Modal>
    </div>
  );
}

export default StickerModal;
