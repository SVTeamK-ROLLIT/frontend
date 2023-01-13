import React from 'react';
import styled from 'styled-components';

import MemoText from './MemoText';
import MemoColor from './MemoColor';

const AllWrap = styled.div`
  display: flex;
`;

function Memo() {
  return (
    <div>
      <AllWrap>
        <MemoText />
        <MemoColor />
      </AllWrap>
    </div>
  );
}

export default Memo;
