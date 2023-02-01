/* eslint-disable react/style-prop-object */
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Modal from '../Login';
// import HandMotion from './handMotion';
import '../../style/welcome.css';
import '../../style/button.css';

import OnLog from './Onlog';
import Outlog from './Outlog';

import background from '../../assets/image/welcome1.png';
import logo from '../../assets/image/newlogo.png';
import back from '../../assets/image/welcomedown.png';
import down from '../../assets/image/down.png';

const UpBtn = styled.button`
  display: inline;
  position: fixed;
  bottom: 5rem;
  right: 1rem;
  width: 4rem;
  transform: rotate(180deg);
  /* margin: auto; */
`;

const DownBtn = styled.button`
  display: inline;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 4rem;

  /* margin: auto; */
`;

const RollITLogo = styled.div`
  height: 40rem;
  width: 40rem;
  background-size: 40rem 33rem;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: -7rem;
  background-image: url(${logo});

  /* margin-top: 20rem; */
  background-position-y: 4rem;
`;
const BackImg = styled.div`
  height: 100vh;
  background-color: #ffd7e9;
  background-size: 53rem 38rem;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${back});
  display: flex;
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto auto 0 auto;
`;

const StartBtn = styled.button`
  border-radius: 1rem;
  font-size: 2.4rem;
  font-weight: 800;
  padding-bottom: 1rem;
  font-family: 'Cafe24Ssurround';
`;

function Welcome() {
  const handleBottom = () => {
    window.scrollTo({
      top: 2000,
      behavior: 'smooth',
    });
  };
  const handleTop = () => {
    window.scrollTo({
      top: 0,
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

      <StartWrap>
        <RollITLogo />

        {/* <HandMotion /> */}

        <StartBtn onClick={onClick2} type="button" className="learn-more2">
          시작하기
        </StartBtn>
        <DownBtn type="button" onClick={handleBottom}>
          <img src={down} alt="" />
        </DownBtn>
      </StartWrap>

      <BackImg src={back}>
        <UpBtn type="button" onClick={handleTop}>
          <img src={down} alt="" />
        </UpBtn>
      </BackImg>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} setLogState={setLogState} />
    </div>
  );
}

export default Welcome;
