/* eslint-disable react/style-prop-object */
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Modal from './Login';
// import HandMotion from './handMotion';
import './welcome.css';
import './button.css';

import OnLog from './Onlog';
import Outlog from './Outlog';

import background from '../Image/welcome1.png';
import logo from '../Image/newlogo.png';

const SketchbookImg = styled.div`
  height: 67rem;
  background-size: 50rem 40rem;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${logo});
  display: flex;
  /* margin-top: 20rem; */
  background-position-y: 15rem;
`;

const AllWrap = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  z-index: -1;
  background-color: #fcedb0;
  position: fixed;
  background-image: url(${background});
`;

const StartWrap = styled.div`
  display: flex;
  margin: auto auto 7rem auto;
`;
// const PencilImg = styled.img`
//   width: 3.6rem;
//   height: 3rem;
//   margin-top: 0.5rem;
//   // 스캐치북 위에 올리기
// `;

const StartBtn = styled.button`
  width: 30rem;
  height: 3.5rem;
  border-radius: 1rem;
  font-size: 2.5rem;
  font-weight: 800;

  font-family: 'Cafe24Ssurround';
  text-shadow: 2px 2px 1.5px gray;
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

      <SketchbookImg src={logo}>
        <StartWrap>
          {/* <HandMotion /> */}
          <StartBtn onClick={onClick2}>
            <button type="button" className="learn-more">
              만들어보기
            </button>
          </StartBtn>
        </StartWrap>
      </SketchbookImg>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} setLogState={setLogState} />
    </div>
  );
}

export default Welcome;
