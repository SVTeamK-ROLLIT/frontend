import React from 'react';
import styled from 'styled-components';

const ColorDiv = styled.div`
  flex-grow: 1;
  height: 100vh;
  background-color: #fcedb0;
`;

const ColorWrap = styled.div`
  width: 20vw;
  height: 62vh;
  margin-right: 5vw;
`;

const BgColorText = styled.div`
  width: 10vw;
  height: 6vh;
  margin-top: 15vh;
  font-size: 2.4vw;
  font-weight: 700;
  color: white;
  font-family: 'Cafe24Ssurround';
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: black;
`;
const BgColorSet = styled.button`
  //배경색
  width: 7vh;
  height: 7vh;
  border-radius: 2.4vh;
  background: ${props => props.color};
  justify-content: space-between;
  margin: 0.5rem;
`;

const FontColorText = styled.div`
  width: 10vw;
  height: 6vh;
  margin-top: 2vh;
  font-size: 2.4vw;
  font-weight: 700;
  color: white;
  font-family: 'Cafe24Ssurround';
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: black;
`;

const BgColorSet2 = styled.button`
  //배경색
  width: 7vh;
  height: 7vh;
  border-radius: 2.4vh;
  background: ${props => props.color};
  justify-content: space-between;
  margin: 0.5rem;
`;

const FontSetText = styled.div`
  width: 10vw;
  height: 7vh;
  margin-top: 1.5vh;
  font-size: 2.4vw;
  font-weight: 700;
  color: white;
  font-family: 'Cafe24Ssurround';
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: black;
`;

const FontSelect = styled.select`
  //배경색
  width: 34vh;
  height: 4.5vh;
  margin: 1vh;
  border-radius: 1vh;
  border: 1px solid #999;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
const WriterText = styled.div`
  width: 10vw;
  height: 7vh;
  margin-top: 1.5vh;
  font-size: 2.4vw;
  font-weight: 700;
  color: white;
  font-family: 'Cafe24Ssurround';
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: black;
`;

const Writer = styled.input`
  //배경색
  width: 34vh;
  height: 4.5vh;
  margin: 1vh;
  border-radius: 1vh;
  border: 1px solid #999;
`;
function MemoColor({ setRollBackColor, setRollTypeColor }) {
  // console.log(rollTypeColor);
  const onbackClick = a => {
    setRollBackColor(a);
  };
  const ontypeClick = a => {
    setRollTypeColor(a);
  };
  // useEffect(onbackClick, [rollBackColor]);
  // useEffect(ontypeClick, [rollTypeColor]);
  return (
    <ColorDiv>
      <ColorWrap>
        <BgColorText>배경색</BgColorText>
        <BgColorSet
          color="white"
          onClick={() => {
            onbackClick('white');
          }}
        />
        <BgColorSet
          color="#FF8381"
          onClick={() => {
            onbackClick('#FF8381');
          }}
        />
        <BgColorSet
          color="#FC95FC"
          onClick={() => {
            onbackClick('#FC95FC');
          }}
        />
        <BgColorSet
          color="#9BFE99"
          onClick={() => {
            onbackClick('#9BFE99');
          }}
        />
        <BgColorSet
          color="#6FA1F9"
          onClick={() => {
            onbackClick('#6FA1F9');
          }}
        />
        <BgColorSet
          color="#8086FF"
          onClick={() => {
            onbackClick('#8086FF');
          }}
        />
        <BgColorSet
          color="#B57DFD"
          onClick={() => {
            onbackClick('#B57DFD');
          }}
        />
        <BgColorSet
          color="#504E4A"
          onClick={() => {
            onbackClick('#504E4A');
          }}
        />
        <FontColorText>글자색</FontColorText>
        <BgColorSet2
          color="white"
          onClick={() => {
            ontypeClick('white');
          }}
        />
        <BgColorSet2
          color="#FF8381"
          onClick={() => {
            ontypeClick('#FF8381');
          }}
        />
        <BgColorSet2
          color="#FC95FC"
          onClick={() => {
            ontypeClick('#FC95FC');
          }}
        />
        <BgColorSet2
          color="#9BFE99"
          onClick={() => {
            ontypeClick('#9BFE99');
          }}
        />
        <BgColorSet2
          color="#6FA1F9"
          onClick={() => {
            ontypeClick('#6FA1F9');
          }}
        />
        <BgColorSet2
          color="#8086FF"
          onClick={() => {
            ontypeClick('#8086FF');
          }}
        />
        <BgColorSet2
          color="#B57DFD"
          onClick={() => {
            ontypeClick('#B57DFD');
          }}
        />
        <BgColorSet2
          color="#504E4A"
          onClick={() => {
            ontypeClick('#504E4A');
          }}
        />
        <FontSetText>폰트설정</FontSetText>
        <FontSelect>
          <option value="1">궁서체</option>
          <option value="2">돋움체</option>
          <option value="3">맑은고딕체</option>
          <option value="4">카페24 써라운드체</option>
        </FontSelect>
        <WriterText>작성자</WriterText>
        <Writer />
      </ColorWrap>
    </ColorDiv>
  );
}

export default MemoColor;
