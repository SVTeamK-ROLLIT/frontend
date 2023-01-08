import React from 'react';
import styled from 'styled-components';

import MemoText from './MemoText';
import MemoColor from './MemoColor';

// const PencilImg = styled.img`
//   //연필 이미지
//   width: 15vh;
//   height: 8vh;
//   position: absolute;
//   top: 89.5%;
//   left: 47.5%;
//   transform: translate(-50%, -50%);
// `;

// const InputWrap = styled.div``;

// const AllWrap = styled.div`
//   background-color: #fcedb0;
//   top: 20%;
//   left: 7%;
//   position: absolute;
// `;

// const SetWrap = styled.div`
//   //배경색
//   height: 100vh;
//   width: 20vh;
//   // 스캐치북 위에 올리기
//   position: absolute;
//   top: 50%;
//   right: 18%;
//   transform: translate(-50%, -50%);
//   z-index: 10;
//   color: white;
// `;

// const BackgroundColorText = styled.div`
//   //배경색
//   width: 20vh;
//   height: 8vh;
//   font-size: 3.6vh;
//   font-weight: 800;
//   font-family: 'Cafe24Ssurround';
//   // 스캐치북 위에 올리기
//   position: absolute;
//   top: 21%;
//   left: 9%;
//   transform: translate(-50%, -50%);
//   z-index: 10;
//   color: white;
//   -webkit-text-stroke-width: 1.3px;
//   -webkit-text-stroke-color: black;
// `;
// const FontColorText = styled.div`
//   //글자색
//   width: 20vh;
//   height: 8vh;
//   font-size: 3.6vh;
//   font-weight: 800;
//   font-family: 'Cafe24Ssurround';
//   // 스캐치북 위에 올리기
//   position: absolute;
//   top: 45%;
//   left: 10%;
//   transform: translate(-50%, -50%);
//   z-index: 10;
//   color: white;
//   -webkit-text-stroke-width: 1.3px;
//   -webkit-text-stroke-color: black;
// `;

// const FontSetText = styled.div`
//   //폰트설정
//   width: 20vh;
//   height: 8vh;
//   font-size: 3.6vh;
//   font-weight: 800;
//   font-family: 'Cafe24Ssurround';
//   // 스캐치북 위에 올리기
//   position: absolute;
//   top: 69%;
//   left: 10%;
//   transform: translate(-50%, -50%);
//   z-index: 10;
//   color: white;
//   -webkit-text-stroke-width: 1.3px;
//   -webkit-text-stroke-color: black;
// `;

// const ColorSet = styled.button`
//   //배경색
//   width: 7vh;
//   height: 7vh;
//   border-radius: 2.4vh;
//   background: ${props => props.color};
//   // 스캐치북 위에 올리기
//   position: absolute;
//   top: 26%;
//   transform: translate(-100%, -50%);
//   z-index: 10;
// `;

// const MakeText = styled.button`
//   //폰트설정
//   width: 100vh;
//   height: 8vh;
//   font-size: 4.2vh;
//   font-weight: 800;
//   font-family: 'Cafe24Ssurround';
//   // 스캐치북 위에 올리기
//   position: absolute;
//   top: 90%;
//   left: 53%;
//   transform: translate(-50%, -50%);
//   z-index: 10;
//   color: white;
//   -webkit-text-stroke-width: 1.3px;
//   -webkit-text-stroke-color: black;
// `;
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

      {/* <SetWrap>
        <BackgroundColorText>배경색</BackgroundColorText>
        <ColorSet color="white"> </ColorSet>
        <FontColorText>글자색</FontColorText>
        <FontSetText>폰트설정</FontSetText>
      </SetWrap>
      <AllWrap>
        <InputWrap>
          <SketchbookImg src={sketchbook} />
        </InputWrap>
      </AllWrap>
      <PencilImg src={pencil} />
      <MakeText>만들기</MakeText> */}
    </div>
  );
}

export default Memo;
