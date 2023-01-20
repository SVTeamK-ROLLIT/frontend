/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
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
  const [resultImage, setResultImage] = useState({});

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append('image', files[0].file);
    const response = await axios.post(
      'http://127.0.0.1:8080/api/v1/photos',
      formData,
    );
    console.log(response.data);
    const response2 = await axios.post(
      'http://127.0.0.1:8080/api/v1/papers/cartoons',
      response.data,
    );
    console.log(response2.data);
    let count = 0;

    const interval = await setInterval(async () => {
      const result = await axios.post(
        'http://127.0.0.1:8080/api/v1/papers/cartoons/results',
        response2.data,
      );
      console.log('함수내부2', resultImage);

      if (result.data.message === 'still working') {
        count += 1;
      } else if (result.data.url) {
        setResultImage(result.data.url);
        clearInterval(interval);
        console.log('* get result success *');
        console.log('함수내부1', resultImage);
      } else if (count <= 20) {
        // interval();
        count += 1;
      } else {
        clearInterval(interval);
        count += 1;
        console.log('* time out *');
      }
    }, 1000);
    console.log('함수외부', resultImage);
  };

  return (
    <CartoonBtn type="button" onClick={onSubmit}>
      <ToastContainer />
    </CartoonBtn>
  );
}

export default Cartoonize;
