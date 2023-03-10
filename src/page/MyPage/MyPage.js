import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// import styled from 'styled-components';

import SketchBook from './MyPageSketch';
import Line from './MyPageLine';
import MyPageItems from './MyPageItems';

import background from '../../assets/image/welcome1.png';

import '../../style/Mypage.css';

const backBaseUrl = process.env.REACT_APP_BACKEND_URL;

const AllWrap = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  z-index: -1;
  background-color: #fcedb0;
  position: fixed;
  background-image: url(${background});
`;

const BackBtn = styled.button`
  //상단 뒤로가기 버튼
  width: 13rem;
  height: 5.5rem;
  font-size: 2rem;

  color: white;
  font-family: 'Cafe24Ssurround';
  text-shadow: 2px 2px 2px gray;
  -webkit-text-stroke-width: 1.1px;
  -webkit-text-stroke-color: black;
`;
const MakeBtn = styled.button`
  //상단 만들기 버튼
  width: 15rem;
  height: 5.5rem;
  float: right;
  font-size: 2rem;
  font-weight: 1000;

  color: white;
  font-family: 'Cafe24Ssurround';
  text-shadow: 2px 2px 2px gray;
  -webkit-text-stroke-width: 1.1px;
  -webkit-text-stroke-color: black;
`;

function MyPage() {
  const userId = localStorage.getItem('id');
  const [myRollPageData, setMyRollPageData] = useState();

  useEffect(() => {
    const GetPapers = async () => {
      try {
        const datas = await axios.get(`${backBaseUrl}/api/v1/users/${userId}`);
        // eslint-disable-next-line
        setMyRollPageData(datas.data);
      } catch (e) {
        // 서버에서 받은 에러 메시지 출력
        // eslint-disable-next-line
      }
    };
    GetPapers();
  }, []);
  // eslint-disable-next-line
  const navigate = useNavigate();
  return (
    <div>
      <AllWrap />
      <BackBtn onClick={() => navigate('/')}>＜뒤로가기</BackBtn>
      <MakeBtn onClick={() => navigate('/makerolling')}>만들어보기</MakeBtn>
      <SketchBook myRollPageData={myRollPageData} />
      <Line myRollPageData={myRollPageData} />
      <MyPageItems myRollPageData={myRollPageData} />
    </div>
  );
}

export default MyPage;
