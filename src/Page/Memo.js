import React, { useState } from 'react';
import styled from 'styled-components';

import MemoText from './MemoText';
import MemoColor from './MemoColor';

const AllWrap = styled.div`
  display: flex;

  margin: auto;
`;

function Memo() {
  const [rollBackColor, setRollBackColor] = useState('white');
  const [rollTypeColor, setRollTypeColor] = useState('black');
  const [pontType, setPontType] = useState('Cafe24Ssurround');
  const [memoName, setMemoName] = useState('');
  const [memoContent, setMemoContent] = useState('');
  return (
    <div className="mypage">
      <AllWrap>
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
