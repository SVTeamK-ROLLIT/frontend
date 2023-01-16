import React, { useState } from 'react';
import styled from 'styled-components';

import MemoText from './MemoText';
import MemoColor from './MemoColor';

const AllWrap = styled.div`
  display: flex;
`;

function Memo() {
  const [rollBackColor, setRollBackColor] = useState('white');
  const [rollTypeColor, setRollTypeColor] = useState('black');
  const [pontType, setPontType] = useState('Cafe24Ssurround');
  // console.log('배경색: ', rollBackColor);
  // console.log('글씨색: ', rollTypeColor);
  // useEffect(setRollBackColor, [rollBackColor]);
  // useEffect(setRollTypeColor, [rollTypeColor]);
  return (
    <div>
      <AllWrap>
        <MemoText
          pontType={pontType}
          rollBackColor={rollBackColor}
          rollTypeColor={rollTypeColor}
        />
        <MemoColor
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
