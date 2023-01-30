/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';

// Import React FilePond

import axios from 'axios';
import { useLocation } from 'react-router-dom';
import PhotoReSizing from './PhotoReSizing';

const backBaseUrl = process.env.REACT_APP_BACKEND_URL;

const CartoonBtn = styled.button`
  width: 10rem;
  height: 10rem;
  background-color: red;
  //
`;

function Cartoonize({
  files,
  closeModal,
  setIsActive,
  setIsPhoto,
  setPhoto,
  setRawLog,
  setLoading,
}) {
  const location = useLocation();
  const paperId = location.pathname.slice(9);
  const [imageUrl, setImageUrl] = useState(null);

  async function run1() {
    const formData = new FormData();
    const resizeFile = await PhotoReSizing(files[0].file);
    await formData.append('image', resizeFile);

    const response = await axios.post(`${backBaseUrl}/api/v1/photos`, formData);
    console.log(response.data);
    const response2 = await axios.post(
      `${backBaseUrl}/api/v1/papers/cartoons`,
      response.data,
    );
    // console.log(response2.data);
    return response2.data;
  }
  function run2(run1Result) {
    let counter = 0;
    const interval = setInterval(() => {
      const datas = axios
        .get(
          `${backBaseUrl}/api/v1/papers/cartoons/results/${run1Result.task_id}/${paperId}`,
        )
        .then(response => {
          /* eslint-disable no-plusplus */
          counter++;
          console.log(response.data);
          if (counter >= 50 || response.data.image_url) {
            console.log('response: ', response.data);
            clearInterval(interval);
            setPhoto(response.data);
            setLoading(false);
            closeModal();
            setIsPhoto(true);
            setIsActive(true);
          }
        })

        .catch(error => {
          console.log(error);
          clearInterval(interval);
        });
      console.log('datas: ', datas);
    }, 2000);
  }

  const onSubmit = async () => {
    if (files.length === 0) {
      alert('사진을 업로드해주세요!');
      closeModal();
      return;
    }
    setLoading(true);
    const run1Result = await run1();
    console.log('2번쨰 데이터 값 ', run1Result.task_id);
    const run2Result = await run2(run1Result);
    await console.log(1111);
    await console.log(2222);
    await console.log(3333);
    await console.log(4444);

    // await closeModal();
    // await setRawLog(imageUrl);
    // await setIsPhoto(true);
    // await setIsActive(true);
  };
  // console.log('@@@@@', imageUrl);

  // const onSubmit = () => {};
  return <CartoonBtn type="button" onClick={onSubmit} />;
}

export default Cartoonize;
