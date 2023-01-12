import React from 'react';
import styled from 'styled-components';

const MypageBtn = styled.button`
  //상단 로그인 버튼
  width: 20vh;
  height: 5.5vh;
  font-size: 3.7vh;
  font-weight: 1000;
  position: absolute;
  top: 7%;
  left: 78%;
  transform: translate(-50%, -50%);
  z-index: 10;
  color: white;
  font-family: 'Cafe24Ssurround';
  text-shadow: 1.5px 1.5px 1.5px gray;
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
  text-shadow: 1.5px 1.5px 1.5px gray;
  -webkit-text-stroke-width: 1.1px;
  -webkit-text-stroke-color: black;
`;

function Onlog({ onClick }) {
  return (
    <div>
      <MypageBtn>마이페이지</MypageBtn>
      <SignupBtn onClick={onClick}>로그아웃</SignupBtn>
    </div>
  );
}

export default Onlog;
