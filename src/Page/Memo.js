import React, { useState } from 'react';
import styled from 'styled-components';

import MemoText from './MemoText';
import MemoColor from './MemoColor';
import Anonymous from './anonymous';

const AllWrap = styled.div`
  display: flex;
`;

function Memo() {
  const randomName = Anonymous();
  const [rollBackColor, setRollBackColor] = useState('white');
  const [rollTypeColor, setRollTypeColor] = useState('black');
  const [pontType, setPontType] = useState('Cafe24Ssurround');
  const [memoName, setMemoName] = useState(randomName);
  const [memoContent, setMemoContent] = useState('');
  return (
    <div>
      <AllWrap>
        <MemoText
          memoContent={memoContent}
          setMemoContent={setMemoContent}
          memoName={memoName}
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
