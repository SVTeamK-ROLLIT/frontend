/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const backBaseUrl = process.env.REACT_APP_BACKEND_URL;

const CartoonBtn = styled.button`
  width: 10rem;
  height: 10rem;
  background-color: red;
  //
`;
// function MyComponent({ taskId }) {
//   const [result, setResult] = useState(null);
//   const [count, setCount] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);

function Cartoonize({ files }) {
  const [url, seturl] = useState('');

  async function run1() {
    const formData = new FormData();
    formData.append('image', files[0].file);
    const response = await axios.post(
      'http://127.0.0.1:8080/api/v1/photos',
      formData,
    );
    console.log(response.data);
    const response2 = await axios.post(
      `${backBaseUrl}/api/v1/papers/cartoons`,
      response.data,
    );
    console.log(response2.data);
    let count = 0;

    const interval = await setInterval(async () => {
      const result = await axios.post(
        'http://127.0.0.1:8080/api/v1/papers/cartoons/results',
        response2.data,
      );
      //   const s3url = response.data;
      //   console.log(s3url);
      seturl(response.data.image_url);
    } catch (err) {
      console.log('Error >>', err);
    }
  };
  console.log('@@@@@', imageUrl);

  return (
    <CartoonBtn type="button" onClick={onSubmit}>
      <ToastContainer />
    </CartoonBtn>
  );
}

export default Cartoonize;
