import React from 'react';
import styled from 'styled-components';

const BackgroundColor = styled.style`
  width: 19px;
  height: 10px;
  font-size: 40px;
  font-weight: 700;
  text-align: left;
  color: black;
`;

const ColorWrap = styled.div`
  display: flex;
  width: 100rem;
  height: 100rem;
  background-color: red;
`;

function MemoColor() {
  return (
    <ColorWrap>
      <BackgroundColor>배경색</BackgroundColor>
    </ColorWrap>
  );
}

export default MemoColor;
