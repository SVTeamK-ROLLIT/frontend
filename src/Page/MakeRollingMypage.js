import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BackBtn = styled.button`
  width: 170px;
  height: 40px;
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 1vh;
  color: white;
  font-family: 'Cafe24Ssurround';
  text-shadow: 1.5px 1.5px 1.5px gray;
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: black;
`;

const MypageBtn = styled.button`
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

// const Createbtn = styled`
//   width: 199px;
//   height: 48px;
//   font-size: 40px;
//   font-weight: 700;
//   text-align: left;
//   color: black;
// `

const BtnWrap = styled.div`
  display: block;
`;

function MakeRollingMypage() {
  const navigate = useNavigate();
  return (
    <BtnWrap>
      <BackBtn onClick={() => navigate('/')}>＜뒤로가기</BackBtn>
      <MypageBtn onClick={() => navigate('/mypage')}>마이페이지</MypageBtn>
    </BtnWrap>
  );
}

export default MakeRollingMypage;
