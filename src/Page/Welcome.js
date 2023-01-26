import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Modal from './Login';

import OnLog from './Onlog';
import Outlog from './Outlog';

import logo from '../Image/logo.png';
import pencil from '../Image/pencil.png';

const SketchbookImg = styled.div`
  width: 60rem;
  height: 30rem;
  // border: 5px solid #535353;
  background-image: url(${logo});
  background-size: 60rem;
`;

// const SketchbookImg = styled.img`
//   //뒷 배경
//   width: 150vh;
//   height: 85vh;

//   @media screen and (max-width: 70vh) {
//     top: 55%;
//   }
// `;

const ImgWrap = styled.div`
  position: relative;
`;

const AllWrap = styled.div`
  background-color: #ffeca8;
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

// const LoginBtn = styled.button`
//   //상단 로그인 버튼
//   width: 12vh;
//   height: 5.5vh;
//   font-size: 3.7vh;
//   font-weight: 1000;
//   position: absolute;
//   top: 7%;
//   left: 80%;
//   transform: translate(-50%, -50%);
//   z-index: 10;
//   color: white;
//   font-family: 'Cafe24Ssurround';
//   text-shadow: 1.5px 1.5px 1.5px gray;
//   -webkit-text-stroke-width: 1.1px;
//   -webkit-text-stroke-color: black;
// `;

// const MypageBtn = styled.button`
//   //상단 로그인 버튼
//   width: 12vh;
//   height: 5.5vh;
//   font-size: 3.7vh;
//   font-weight: 1000;
//   position: absolute;
//   top: 7%;
//   left: 72%;
//   transform: translate(-50%, -50%);
//   z-index: 10;
//   color: white;
//   font-family: 'Cafe24Ssurround';
//   text-shadow: 1.5px 1.5px 1.5px gray;
//   -webkit-text-stroke-width: 1.1px;
//   -webkit-text-stroke-color: black;
// `;

// const SignupBtn = styled.button`
//   //상단 회원가입 버튼
//   width: 15vh;
//   height: 5.5vh;
//   font-size: 3.7vh;
//   font-weight: bold;
//   // 스캐치북 위에 올리기
//   position: absolute;
//   top: 7%;
//   left: 88%;
//   transform: translate(-50%, -50%);
//   z-index: 10;
//   color: white;
//   font-family: 'Cafe24Ssurround';
//   text-shadow: 1.5px 1.5px 1.5px gray;
//   -webkit-text-stroke-width: 1.1px;
//   -webkit-text-stroke-color: black;
// `;
const StartWrap = styled.div`
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;
const PencilImg = styled.img`
  width: 3.6rem;
  height: 3rem;
  margin-top: 3%;
  // 스캐치북 위에 올리기
`;

const StartBtn = styled.button`
  width: 15rem;
  height: 3.5rem;
  border-radius: 1rem;
  font-size: 3rem;
  font-weight: 800;

  font-family: 'Cafe24Ssurround';
  color: white;
  text-shadow: 1.5px 1.5px 1.5px gray;
  opacity: 0.8;
  -webkit-text-stroke-width: 1.1px;
  -webkit-text-stroke-color: black;
`;

function Welcome() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const [logState, setLogState] = useState();
  useEffect(() => {
    setLogState(localStorage.getItem('id'));
  }, [logState]);

  const onClick = () => {
    localStorage.clear();
    setLogState(null);
  };

  const onClick2 = () => {
    if (localStorage.getItem('id') === null) {
      openModal();
      return;
    }
    navigate('../makeRolling');
  };

  return (
    <div className="welcome">
      <AllWrap>
        {logState === null ? (
          <OnLog setLogState={setLogState} />
        ) : (
          <Outlog onClick={onClick} />
        )}
        <BoxWrap>
          <ImgWrap>
            <SketchbookImg src={logo} />
          </ImgWrap>
          <StartWrap>
            <PencilImg src={pencil} />
            <StartBtn onClick={onClick2}>만들어보기</StartBtn>
          </StartWrap>
        </BoxWrap>
      </AllWrap>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} setLogState={setLogState} />
    </div>
  );
}

export default Welcome;
