import React from 'react';
import styled from 'styled-components';

import sketchbook from '../Image/Sketchbook2.png';
// import pencil from '../Image/pencil.png';

const InputWrap = styled.div`
  // 내용제한, 스케치북 이미지 묶음
  width: 100vw;
  height: 100vh;
  background-color: #fcedb0;
`;
const Text = styled.div`
  width: 90vh;
  height: 1vh;
  font-size: 3vh;
  font-weight: 800;
  font-family: 'Cafe24Ssurround';
  // 스캐치북 위에 올리기
  padding-left: 20vh;
  padding-top: 15vh;
  color: black;
  display: block;
`;

const SketchbookImg = styled.img`
  //스케치북 이미지
  width: 115vh;
  height: 60vh;
  margin-top: 5vh;
  padding-left: 10vh;
  display: block;
`;

function MemoText() {
  return (
    <div className="memotext">
      <InputWrap>
        <Text>내용은 최대 100자 까지 입력이 가능합니다.</Text>
        <SketchbookImg src={sketchbook} />
      </InputWrap>
    </div>
  );
}

export default MemoText;
