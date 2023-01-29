import React, { useState } from 'react';
import styled from 'styled-components';

import MemoText from './MemoText';
import MemoColor from './MemoColor';

import background from '../Image/welcome1.png';

const AllWrap = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  z-index: -1;
  background-color: #fcedb0;
  position: fixed;
  display: flex;
  background-image: url(${background});

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    background-color: url(${background});
  }
`;

function Memo() {
  const [rollBackColor, setRollBackColor] = useState('white');
  const [rollTypeColor, setRollTypeColor] = useState('black');
  const [pontType, setPontType] = useState('Cafe24Ssurround');
  const [memoName, setMemoName] = useState('');
  const [memoContent, setMemoContent] = useState('');
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
