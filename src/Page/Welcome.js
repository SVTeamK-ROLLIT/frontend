import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import OnLog from './Onlog';
import Outlog from './Outlog';

import sketchbook from '../Image/sketchbookWelcome.png';
import pencil from '../Image/pencil.png';

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

function Welcome() {
  const [logState, setLogState] = useState();
  useEffect(() => {
    setLogState(localStorage.getItem('id'));
    console.log(logState);
  }, [logState]);

  const onClick = () => {
    localStorage.clear();
    setLogState(null);
  };

  return (
    <div className="welcome">
      <AllWrap>
        {logState === null ? <OnLog /> : <Outlog onClick={onClick} />}
        <BoxWrap>
          <ImgWrap>
            <SketchbookImg src={sketchbook} />
          </ImgWrap>
          <PencilImg src={pencil} />
          <StartBtn>만들어보기</StartBtn>
        </BoxWrap>
      </AllWrap>
    </div>
  );
}

export default Welcome;
