import React from 'react';
import styled from 'styled-components';

const SignupBtn = styled.button`
  //상단 회원가입 버튼
  width: 15vh;
  height: 5.5vh;
  font-size: 3.7vh;
  font-weight: bold;
  // 스캐치북 위에 올리기
  position: absolute;
  top: 7%;
  left: 88%;
  transform: translate(-50%, -50%);
  z-index: 10;
  color: white;
  font-family: 'Cafe24Ssurround';
  text-shadow: 1.5px 1.5px 1.5px gray;
  -webkit-text-stroke-width: 1.1px;
  -webkit-text-stroke-color: black;
`;

const PencilImg = styled.img`
  width: 15vh;
  height: 8vh;
  // 스캐치북 위에 올리기
  position: absolute;
  top: 70%;
  left: 42%;
  transform: translate(-50%, -50%);
`;

const StartBtn = styled.button`
  width: 24vh;
  height: 8vh;
  border-radius: 1rem;
  font-size: 4vh;
  font-weight: 800;
  // 스캐치북 위에 올리기
  position: absolute;
  top: 70%;
  left: 51%;
  transform: translate(-50%, -50%);
  z-index: 10;
  font-family: 'Cafe24Ssurround';
  color: white;
  text-shadow: 1.5px 1.5px 1.5px gray;
  -webkit-text-stroke-width: 1.1px;
  -webkit-text-stroke-color: black;
`;
function Onlog() {
  return <div />;
}

export default Onlog;
