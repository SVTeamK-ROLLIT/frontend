import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from './Login';

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

  color: white;
  font-family: 'Cafe24Ssurround';
  text-shadow: 1.5px 1.5px 1.5px gray;
  -webkit-text-stroke-width: 1.1px;
  -webkit-text-stroke-color: black;
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
    <div>
      <LoginBtn type="button" value="Open modal" onClick={openModal}>
        로그인
      </LoginBtn>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} setLogState={setLogState} />
      <SignupBtn onClick={() => navigate('/register')}>회원가입</SignupBtn>
    </div>
  );
}

export default Onlog;
