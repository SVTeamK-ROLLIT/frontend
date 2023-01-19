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
  const [taskId, setTaskId] = useState('');

  const onSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('image', files[0].file);
      const response = await axios.post(
        'http://127.0.0.1:8080/api/v1/photos',
        formData,
      );
      seturl(response.data);
      console.log(response.data);
    } catch (err) {
      console.log('Error >>', err);
    }
    try {
      const response2 = await axios.post(
        'http://127.0.0.1:8080/api/v1/papers/cartoons',
        url,
      );
      console.log(response2.data);
      setTaskId(response2.data);
      console.log('taskId: ', taskId);
    } catch (err) {
      console.log('Error >>', err);
    }
    try {
      const response3 = await axios.post(
        'http://127.0.0.1:8080/api/v1/papers/cartoons/results',
        taskId,
      );
      console.log(response3.data);
    } catch (err) {
      console.log('Error >>', err);
    }
  };

  //   console.log(response.data.url);

  return (
    <CartoonBtn type="button" onClick={onSubmit}>
      <ToastContainer />
    </CartoonBtn>
  );
}

export default Cartoonize;
