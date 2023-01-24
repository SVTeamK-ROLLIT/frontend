import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LogoutWrap = styled.div`
  position: fixed;
  top: 7%;
  left: 88%;
  transform: translate(-50%, -50%);
  display: flex;
  z-index: 999;
`;

const MypageBtn = styled.button`
  //상단 로그인 버튼
  width: 12rem;
  height: 5.5rem;

  font-size: 2.5rem;
  font-weight: 1000;

  color: white;
  font-family: 'Cafe24Ssurround';
  text-shadow: 2px 2px 2px gray;
  -webkit-text-stroke-width: 1.1px;
  -webkit-text-stroke-color: black;
`;
const SignupBtn = styled.button`
  //상단 회원가입 버튼
  width: 12rem;
  height: 5.5rem;
  font-size: 2.5rem;
  font-weight: bold;
  // 스캐치북 위에 올리기

  clear: both;

  color: white;
  font-family: 'Cafe24Ssurround';
  text-shadow: 2px 2px 2px gray;
  -webkit-text-stroke-width: 1.1px;
  -webkit-text-stroke-color: black;
`;

function Onlog({ onClick }) {
  const navigate = useNavigate();
  return (
    <LogoutWrap>
      <SignupBtn onClick={onClick}>로그아웃</SignupBtn>
      <MypageBtn onClick={() => navigate('/mypage')}>마이페이지</MypageBtn>
    </LogoutWrap>
  );
}

export default Onlog;
