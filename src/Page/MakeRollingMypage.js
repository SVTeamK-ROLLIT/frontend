import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Mypagebtn = styled.button`
  width: 170px;
  height: 40px;
  font-size: 30px;
  font-weight: 700;
  margin-top: 1vh;
  color: white;
  font-family: 'Cafe24Ssurround';
  text-shadow: 1.5px 1.5px 1.5px gray;
  -webkit-text-stroke-width: 1.3px;
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
  display: flex;
  width: 9rem;
`;

function MakeRollingMypage() {
  const navigate = useNavigate();
  return (
    <BtnWrap>
      <Mypagebtn onClick={() => navigate('/')}>＜뒤로가기</Mypagebtn>
    </BtnWrap>
  );
}

export default MakeRollingMypage;
