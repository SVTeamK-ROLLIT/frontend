import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from './Login';

const LoginWrap = styled.div`
  position: fixed;
  top: 7%;
  left: 90%;
  transform: translate(-50%, -50%);
  display: flex;
  z-index: 999;
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
  text-shadow: 1.5px 1.5px 1.5px gray;
  -webkit-text-stroke-width: 1.1px;
  -webkit-text-stroke-color: black;
`;
const LoginBtn = styled.button`
  //상단 로그인 버튼
  width: 8rem;
  height: 5.5rem;

  font-size: 2.5rem;
  font-weight: 1000;

  color: white;
  font-family: 'Cafe24Ssurround';
  text-shadow: 1.5px 1.5px 1.5px gray;
  -webkit-text-stroke-width: 1.1px;
  -webkit-text-stroke-color: black;
`;
function Onlog({ setLogState }) {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  return (
    <LoginWrap>
      <LoginBtn type="button" value="Open modal" onClick={openModal}>
        로그인
      </LoginBtn>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} setLogState={setLogState} />
      <SignupBtn onClick={() => navigate('/register')}>회원가입</SignupBtn>
    </LoginWrap>
  );
}

export default Onlog;
