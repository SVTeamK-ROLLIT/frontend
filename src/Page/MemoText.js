import React from 'react';
import styled from 'styled-components';

import sketchbook from '../Image/Sketchbook2.png';
import pencil from '../Image/pencil.png';

const InputWrap = styled.div`
  // 내용제한, 스케치북 이미지 묶음

  height: 100vh;
  background-color: #fcedb0;
  flex-grow: 0.8;
`;
const Text = styled.div`
  width: 90vh;
  height: 1vh;
  font-size: 3vh;
  font-weight: 800;
  font-family: 'Cafe24Ssurround';
  // 스캐치북 위에 올리기
  padding-left: 10vw;
  padding-top: 15vh;
  color: black;
  display: block;
`;

const SketchbookImg = styled.div`
  //스케치북 이미지
  width: 115vh;
  height: 60vh;
  margin-top: 4vh;
  padding-left: 5vw;
  /* background-color: red; */
  /* background-size: 80rem 25rem; */
  background-size: 100% 100%;
  background-image: url(${sketchbook});
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputMemo = styled.textarea`
  width: 15vw;
  height: 30vh;
  background-color: ${props => props.bkcolor};
  color: ${props => props.tycolor};
  font-family: ${props => props.pontType};
  border-radius: 5%;
  margin-right: 10vh;
  font-size: 2rem;
  border: 0 solid black;
`;

const PencilImg = styled.img`
  width: 15vh;
  height: 8vh;
  // 스캐치북 위에 올리기
  position: absolute;
  transform: translate(-50%, -50%);
  margin-top: 10.7vh;
  margin-left: 46.5vw;
`;

const MakeBtn = styled.button`
  width: 24vh;
  height: 8vh;
  border-radius: 1rem;
  font-size: 4vh;
  font-weight: 800;
  margin-top: 7vh;
  margin-left: 45vw;
  // 스캐치북 위에 올리기
  position: absolute;
  font-family: 'Cafe24Ssurround';
  color: white;
  text-shadow: 1.5px 1.5px 1.5px gray;
  -webkit-text-stroke-width: 1.1px;
  -webkit-text-stroke-color: black;
`;

function MemoText({ pontType, rollBackColor, rollTypeColor }) {
  // console.log(pontType);

  return (
    <InputWrap>
      <Text>내용은 최대 40자 까지 입력이 가능합니다.</Text>
      <SketchbookImg>
        <InputMemo
          bkcolor={rollBackColor}
          tycolor={rollTypeColor}
          pontType={pontType}
        />
      </SketchbookImg>
      <PencilImg src={pencil} />
      <MakeBtn>만들기</MakeBtn>
    </InputWrap>
  );
}

export default MemoText;
