import React from 'react';
import styled from 'styled-components';

import sketchbook from '../Image/sketchbook.png';
import ID from '../Image/ID.png';
import PW from '../Image/PW.png';

const SketchbookImg = styled.img`
  width: 90rem;
  height: 50rem;
`;

const ImgWrap = styled.div`
  position: relative;
  text-align: center;
`;

const AllWrap = styled.div`
  background-color: #fcedb0;
  height: 100vh;
  position: absolute; //absolute 추가(세로 중앙정렬)
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  margin: 0 auto; //세로 중앙정렬을 위한 margin 값
`;

const IdWrap = styled.div`
  width: 635px;
  height: 64px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: #fff;
  border-width: 1px;
  border-color: #000;
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  // 스캐치북 위에 올리기
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const IdImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  display: flex;
  margin: auto 1rem auto 1rem;
`;

const IdInput = styled.input`
  //placeholder스타일
  width: 36px;
  height: 41px;
  font-size: 25px;
  font-weight: 500;
  /////
  padding-left: 0.5rem;
  margin: auto 1rem auto 0rem;
  width: 500px;
  &:focus {
    outline: none;
  }
`;

const BoxWrap = styled.div`
  position: relative;
`;

const PwWrap = styled.div`
  width: 635px;
  height: 64px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #fff;
  border-width: 1px;
  border-color: #000;
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  // 스캐치북 위에 올리기
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const PwImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  display: flex;
  margin: auto 1rem auto 1rem;
`;

const PwInput = styled.input`
  padding-left: 0.5rem;
  margin-left: 1rem;
  width: 500px;
  &:focus {
    outline: none;
  }
  //placeholder스타일
  height: 41px;
  font-size: 25px;
  font-weight: 500;
  margin: auto 1rem auto 0rem;
  /////
`;

const LoginText = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 141px;
  height: 63px;
  font-size: 50px;
  font-weight: 700;
`;

const LoginBtn = styled.button`
  width: 283px;
  height: 56px;
  border-radius: 13px;
  background: #3a3a3a;
  font-size: 28px;
  font-weight: 700;
  // 스캐치북 위에 올리기
  position: absolute;
  top: 73%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  color: #fff;
`;
const SignUpBtn = styled.button`
  // 스캐치북 위에 올리기
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  //글씨 스타일
  width: 71px;
  height: 28px;
  font-size: 18px;
  font-weight: 700;
`;

function Login() {
  return (
    <AllWrap>
      <BoxWrap>
        <LoginText>로그인</LoginText>
        <ImgWrap>
          <SketchbookImg src={sketchbook} />
        </ImgWrap>
        <IdWrap>
          <IdImg src={ID} alt="" />
          <IdInput type="id" placeholder="ID" />
        </IdWrap>
        <PwWrap>
          <PwImg src={PW} alt="" />
          <PwInput type="password" placeholder="PW" />
        </PwWrap>
        <LoginBtn>로그인</LoginBtn>
        <SignUpBtn>회원가입</SignUpBtn>
      </BoxWrap>
    </AllWrap>
  );
}

export default Login;
