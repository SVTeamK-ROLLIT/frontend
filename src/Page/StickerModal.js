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

const backBaseUrl = process.env.REACT_APP_BACKEND_URL;

const CloseBtn = styled.button`
  display: flex;
  height: 16px;
  background-color: pink;
  border-radius: 10px;
  color: white;
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
    flexWrap: 'wrap',
    background: '#fff',
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

function StickerModal({
  isOpen,
  closeModal,
  setSticky,
  setStickyUrl,
  setIsSticky,
  setIsActive,
}) {
  const [files, setFiles] = useState();

  useEffect(() => {
    const GetStickers = async () => {
      try {
        setFiles(await axios.get(`${backBaseUrl}/api/v1/papers/sticker_list`));
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
        <CloseBtn
          type="button"
          onClick={() => {
            closeModal();
          }}
        >
          <BsX />
        </CloseBtn>
        {files &&
          files.data.data.map(file => {
            return (
              <button
                type="button"
                key={file.default_sticker_id}
                onClick={() => {
                  setSticky(file.default_sticker_id);
                  setStickyUrl(file.sticker_url);
                  closeModal();
                  setIsSticky(true);
                  setIsActive(true);
                }}
              >
                <img src={file.sticker_url} alt="" width="100vw" />
              </button>
            );
          })}{' '}
        <ToastContainer />
      </Modal>
    </div>
  );
}

export default StickerModal;
