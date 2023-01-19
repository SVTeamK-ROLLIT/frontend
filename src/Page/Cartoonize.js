/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';

// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const CartoonBtn = styled.button`
  width: 10rem;
  height: 10rem;
  background-color: red;
`;

function Cartoonize({ files }) {
  const [url, seturl] = useState('');

  const onSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('image', files[0].file);
      const response = await axios.post(
        'http://127.0.0.1:8080/api/v1/photos',
        formData,
      );
      //   const s3url = response.data;
      //   console.log(s3url);
      seturl(response.data.image_url);
    } catch (err) {
      console.log('Error >>', err);
    }
  };
  console.log(url); // url까지 반환 성공

  return (
    <CartoonBtn type="button" onClick={onSubmit}>
      <ToastContainer />
    </CartoonBtn>
  );
}

export default Cartoonize;
