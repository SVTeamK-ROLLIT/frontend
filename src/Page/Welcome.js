/* eslint-disable react/style-prop-object */
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Modal from './Login';
// import HandMotion from './handMotion';
import './welcome.css';

import OnLog from './Onlog';
import Outlog from './Outlog';

import sketchbook from '../Image/RollIT.png';
import pencil from '../Image/pencil.png';

const SketchbookImg = styled.div`
  height: 45rem;
  background-size: 40rem 30rem;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${sketchbook});
  display: flex;
  /* margin-top: 20rem; */
  background-position-y: 6rem;
`;

const AllWrap = styled.div`
  height: 100vh;
  width: 100%;
  z-index: -1;
  background-color: #fcedb0;
  position: fixed;
`;

const StartWrap = styled.div`
  display: flex;
  margin: auto auto 7rem auto;
`;
const PencilImg = styled.img`
  width: 3.6rem;
  height: 3rem;
  margin-top: 0.5rem;
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
      <AllWrap />
      {logState === null ? (
        <OnLog setLogState={setLogState} />
      ) : (
        <Outlog onClick={onClick} />
      )}

      <SketchbookImg src={sketchbook}>
        <StartWrap>
          {/* <HandMotion /> */}
          <PencilImg src={pencil} />
          <StartBtn onClick={onClick2}>만들어보기</StartBtn>
        </StartWrap>
      </SketchbookImg>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} setLogState={setLogState} />
    </div>
  );
}

export default Welcome;
