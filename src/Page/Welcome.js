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
import back from '../Image/welcome3.png';
import down from '../Image/down.png';

const DownBtn = styled.button`
  display: inline;
  /* margin: auto; */
`;
const DownBtnWrap = styled.div`
  margin: 0 auto 11rem auto;
`;
const SketchbookImg = styled.div`
  height: 75rem;
  background-size: 50rem 39rem;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${logo});
  display: flex;
  flex-direction: column;
  /* margin-top: 20rem; */
  background-position-y: 4rem;
`;
const BackImg = styled.div`
  height: 71rem;
  background-color: lightpink;
  background-size: 90rem 55rem;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${back});
  display: flex;
  /* margin-top: 20rem; */
  background-position-y: 12rem;
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
  margin: auto auto 5rem auto;
`;

const StartBtn = styled.button`
  width: 10rem;
  height: 9rem;
  border-radius: 1rem;
  font-size: 2.5rem;
  font-weight: 800;
  padding-bottom: 1rem;
  font-family: 'Cafe24Ssurround';
`;

function Welcome() {
  const handleTop = () => {
    window.scrollTo({
      top: 2000,
      behavior: 'smooth',
    });
  };
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

          <StartBtn onClick={onClick2} type="button" className="learn-more">
            시작하기
          </StartBtn>
          <button type="button" className="moveTopBtn">
            {' '}
          </button>

        </StartWrap>
        <DownBtnWrap>
          <DownBtn type="button" onClick={handleTop}>
            <img src={down} alt="" />
          </DownBtn>
        </DownBtnWrap>
      </SketchbookImg>
      <BackImg src={back}> </BackImg>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} setLogState={setLogState} />
    </div>
  );
}

export default Welcome;
