/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';

// Import React FilePond

import axios from 'axios';
import { useLocation } from 'react-router-dom';
import PhotoReSizing from './PhotoReSizing';

const backBaseUrl = process.env.REACT_APP_BACKEND_URL;

const CartoonBtn = styled.button`
  width: 100px;
  height: 80px;
  border-radius: 15px;
  background: #ffd7e3;
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  display: inline;
  margin-left: 1rem;
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

    const response2 = await axios.post(
      `${backBaseUrl}/api/v1/papers/cartoons`,
      response.data,
    );

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

          if (counter >= 50 || response.data.image_url) {
            clearInterval(interval);
            setPhoto(response.data);
            setLoading(false);
            closeModal();
            setIsPhoto(true);
            setIsActive(true);
          }
        })

        .catch(error => {
          clearInterval(interval);
        });
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
    const run2Result = await run2(run1Result);
  };

  return (
    <CartoonBtn type="button" onClick={onSubmit}>
      만화필터로 <br />
      업로드
    </CartoonBtn>
  );
}

export default Cartoonize;
