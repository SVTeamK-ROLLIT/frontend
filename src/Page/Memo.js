import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import MemoText from './MemoText';
import MemoColor from './MemoColor';

import background from '../Image/welcome1.png';

const BackBtn = styled.button`
  //상단 뒤로가기 버튼
  width: 12rem;
  height: 6rem;
  font-size: 1.6rem;
  position: absolute;
  top: 1rem;
  color: white;
  font-family: 'Cafe24Ssurround';
  text-shadow: 2px 2px 2px gray;
  -webkit-text-stroke-width: 1.1px;
  -webkit-text-stroke-color: black;
`;

const AllWrap = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-color: #fcedb0;
  position: fixed;
  display: flex;
  background-image: url(${background});
  overflow: auto;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    background-color: url(${background});
    overflow: auto;
    position: static;
  }
`;
function Memo() {
  const [rollBackColor, setRollBackColor] = useState('white');
  const [rollTypeColor, setRollTypeColor] = useState('black');
  const [pontType, setPontType] = useState('Cafe24Ssurround');
  const [memoName, setMemoName] = useState('');
  const [memoContent, setMemoContent] = useState('');
  const navigate = useNavigate();

  const navigate = useNavigate();

  return (
    <div className="mypage">
      <AllWrap src={background}>
        <MemoText
          memoContent={memoContent}
          setMemoContent={setMemoContent}
          memoName={memoName}
          setMemoName={setMemoName}
          pontType={pontType}
          rollBackColor={rollBackColor}
          rollTypeColor={rollTypeColor}
        />
        <BackBtn onClick={() => navigate(-1)}>＜뒤로가기</BackBtn>
        <MemoColor
          memoName={memoName}
          setMemoName={setMemoName}
          pontType={pontType}
          setPontType={setPontType}
          rollBackColor={rollBackColor}
          setRollBackColor={setRollBackColor}
          rollTypeColor={rollTypeColor}
          setRollTypeColor={setRollTypeColor}
        />
      </AllWrap>
    </div>
  );
}

export default Memo;
