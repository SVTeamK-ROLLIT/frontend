import React from 'react';
import styled from 'styled-components';

const Mypagebtn = styled.button`
  width: 199px;
  height: 48px;
  font-size: 40px;
  font-weight: 700;
  text-align: left;
  color: black;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function MakeRollingMypage() {
  return (
    <BtnWrap>
      <Mypagebtn>마이페이지</Mypagebtn>
    </BtnWrap>
  );
}

export default MakeRollingMypage;
