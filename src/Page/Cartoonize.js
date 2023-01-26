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
  //
`;
// function MyComponent({ taskId }) {
//   const [result, setResult] = useState(null);
//   const [count, setCount] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);

//   useEffect(() => {
//     if (intervalId === null) {
//       const id = setInterval(async () => {
//         const response = await axios.post(
//           'http://127.0.0.1:8080/api/v1/papers/cartoons/results',
//           { taskId },
//         );
//         // eslint-disable-next-line
//         const data = response.data;
//         setResult(data.status);
//         if (data.status !== 'still working' || count >= 10) {
//           clearInterval(intervalId);
//           setIntervalId(null);
//         }
//         setCount(count + 1);
//       }, 2000);
//       setIntervalId(id);
//     }
//   }, [intervalId, count, taskId]);
//   console.log('result', result);
// }
function Cartoonize({
  files,
  isOpen,
  closeModal,
  setisActivate,
  setIsPhoto,
  setPhoto,
}) {
  const [resultImage, setResultImage] = useState({});
  const [imageUrl, setImageUrl] = useState(null);

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
    // let count = 0;

    // const interval = setInterval(async () => {
    //   const result = await axios.post(
    //     'http://127.0.0.1:8080/api/v1/papers/cartoons/results',
    //     response2.data,
    //   );
    //   console.log('함수내부2', resultImage);

    //   if (result.data.message === 'still working') {
    //     count += 1;
    //   } else if (result.data.url) {
    //     await setResultImage(result.data.url);
    //     clearInterval(interval);
    //     console.log('* get result success *');
    //     console.log('함수내부1', resultImage);
    //   } else if (count <= 20) {
    //     // interval();
    //     count += 1;
    //   } else {
    //     clearInterval(interval);
    //     count += 1;
    //     console.log('* time out *');
    //   }
    // }, 1000);
    // console.log('함수외부', resultImage);
    // // ##########################################################
    // useEffect(() => {
    //   const s3Url = resultImage;
    //   axios({
    //     url: s3Url,
    //     method: 'GET',
    //     responseType: 'blob', // important
    //   }).then(response3 => {
    //     const blob = new Blob([response3.data], { type: 'image/jpeg' });
    //     const localUrl = URL.createObjectURL(blob);
    //     setImageUrl(localUrl);
    //   });
    // });
    // console.log('찍어줘', imageUrl);
    // MyComponent(response2.data);
  };

  return (
    <CartoonBtn type="button" onClick={onSubmit}>
      <ToastContainer />
    </CartoonBtn>
  );
}

export default Cartoonize;
