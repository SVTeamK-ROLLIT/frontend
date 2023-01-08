import React from 'react';
import styled from 'styled-components';

import './Welcome.css';

import sketchbook from '../Image/sketchbook.png';

const SketchbookImg = styled.img`
  //뒷 배경
  width: 150vh;
  height: 85vh;

  @media screen and (max-width: 70vh) {
    top: 55%;
  }
`;

const ImgWrap = styled.div`
  position: relative;
  text-align: center;
`;

const AllWrap = styled.div`
  background-color: #fcedb0;
  position: absolute; //absolute 추가(세로 중앙정렬)
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const BoxWrap = styled.div`
  position: relative;
`;

const LoginBtn = styled.button`
  //상단 로그인 버튼
  width: 12vh;
  height: 5.5vh;
  font-size: 3.7vh;
  font-weight: 1000;
  position: absolute;
  top: 7%;
  left: 80%;
  transform: translate(-50%, -50%);
  z-index: 10;
  color: white;
  font-family: 'Cafe24Ssurround';
  -webkit-text-stroke-width: 1.1px;
  -webkit-text-stroke-color: black;
`;

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
  -webkit-text-stroke-width: 1.1px;
  -webkit-text-stroke-color: black;
`;

const StartBtn = styled.button`
  width: 24vh;
  height: 8vh;
  border-radius: 1rem;
  background: #3a3a3a;
  font-size: 3.6vh;
  font-weight: 800;
  // 스캐치북 위에 올리기
  position: absolute;
  top: 70%;
  left: 51%;
  transform: translate(-50%, -50%);
  z-index: 10;
  color: #fff;
`;

function Login() {
  return (
    <AllWrap>
      <LoginBtn>로그인</LoginBtn>
      <SignupBtn>회원가입</SignupBtn>
      <BoxWrap>
        <ImgWrap>
          <SketchbookImg src={sketchbook} />
        </ImgWrap>
        <StartBtn>만들어보기</StartBtn>
      </BoxWrap>
    </AllWrap>
  );
}

export default Login;
