import React, { useState } from 'react';
import styled from 'styled-components';

import MemoText from './MemoText';
import MemoColor from './MemoColor';

const AllWrap = styled.div`
  display: flex;
`;

function Memo() {
  const [rollBackColor, setRollBackColor] = useState('white');
  // console.log(rollBackColor);
  return (
    <div>
      <AllWrap>
        <MemoText rollBackColor={rollBackColor} />
        <MemoColor
          rollBackColor={rollBackColor}
          setRollBackColor={setRollBackColor}
        />
      </AllWrap>
    </div>
  );
}

export default Memo;
