import React from 'react';
import styled from 'styled-components';

const Mypagebtn = styled.button`
  width: 170px;
  height: 40px;
  font-size: 30px;
  font-weight: 700;
  margin-top: 1vh;
  margin-right: 2vw;
  text-align: center;
  color: white;
  font-family: 'Cafe24Ssurround';
  text-shadow: 1.5px 1.5px 1.5px gray;
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: black;
`;

// const Createbtn = styled`
//   width: 199px;
//   height: 48px;
//   font-size: 40px;
//   font-weight: 700;
//   text-align: left;
//   color: black;
// `

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
