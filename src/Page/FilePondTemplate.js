/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './Background.css';
import styled from 'styled-components';

// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import axios from 'axios';

const SumbitBtn = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 15px;
  background: #9f8772;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin: 1rem auto 0 auto;
  display: block;
  :active {
    // 버튼 클릭시 효과
    box-shadow: inset -0.1rem -0.1rem 0.1rem #fbfbfb,
      inset 0.1rem 0.1rem 0.1rem #bec5d0;
    cursor: pointer;
  }
`;

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// 모달 스타일
const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    zIndex: 10,
  },
  content: {
    // display: 'flex',
    justifyContent: 'center',
    // background: '#ffffe7',
    overflow: 'auto',
    top: '19vh',
    left: '19vw',
    right: '20vw',
    bottom: '20vh',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '14px',
    outline: 'none',
    zIndex: 10,
  },
};
function FilePondTemplate({ isOpen, setIsOpen }) {
  const closeModal = useCallback(() => setIsOpen(false), []);

  const [files, setFiles] = useState([]);
  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', files[0].file);
    formData.append('password', '1234');
    formData.append('xcoor', '12');
    formData.append('ycoor', '12');
    formData.append('rotate', '20');
    axios
      .post('http://127.0.0.1:8080/api/v1/papers/1/photos', formData)
      .then(res => {
        console.log(formData);
        console.log(res);
        closeModal();
      })
      .catch(err => {
        console.log('fail');
      });
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={modalStyle}
      ariaHideApp={false}
    >
      <FilePond
        files={files}
        allowMultiple={false}
        onupdatefiles={setFiles} // 파일을 업로드하면 files에 저장해줌
        imagePreviewHeight={400}
        labelIdle=""
      />

      <SumbitBtn
        type="button"
        onClick={onSubmit}
        variant="contained"
        component="label"
      >
        업로드
      </SumbitBtn>
    </Modal>
  );
}

export default FilePondTemplate;
