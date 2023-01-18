/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
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
  display: flex;
  height: 16px;
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
    display: 'flex',
    justifyContent: 'center',
    background: '#ffffe7',
    height: '70vh',
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
  const [files, setFiles] = useState();
  useEffect(() => {
    const GetStickers = async () => {
      try {
        setFiles(
          await axios.get(`http://127.0.0.1:8080/api/v1/papers/sticker_list`),
        );
        console.log(files);
        console.log('filesget');
      } catch (e) {
        console.log(e);
      }
    };
    GetStickers();
  }, []);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        ariaHideApp={false}
      >
        {files &&
          files.data.data.map(file => {
            return (
              <div key={file.default_sticker_id} height="100px" display="flex">
                <img
                  src={file.sticker_url}
                  alt=""
                  width="150px"
                  height="150px"
                  display="flex"
                />
              </div>
            );
          })}{' '}
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
