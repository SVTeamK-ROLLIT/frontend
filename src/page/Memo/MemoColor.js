import React, { useCallback } from 'react';
import styled from 'styled-components';

const ColorDiv = styled.div`
  flex-grow: 2;
  /* height: 100rem; */

  @media (max-width: 1100px) {
    margin: auto;
    padding-bottom: 3rem;
    flex-grow: 1;
    /* width: 60rem; */
  } ;
`;

const ColorWrap = styled.div`
  width: 20rem;
  margin-right: 3rem;
  @media (max-width: 1100px) {
    width: 37rem;
    margin: 0;
  } ;
`;

const BgColorText = styled.div`
  //##배경색##
  width: 10rem;
  height: 3rem;
  margin-top: 5rem;

  font-size: 2rem;
  font-weight: 700;
  color: white;
  font-family: 'Cafe24Ssurround';
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: black;
  @media (max-width: 1100px) {
    margin: auto;
    width: 6rem;
    margin-top: 2rem;
  } ;
`;
const BgColorSet = styled.button`
  //배경색버튼
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1.1rem;
  border: ${props => props.border};
  background: ${props => props.color};
  justify-content: space-between;
  margin: 0.5rem;
`;

const FontColorText = styled.div`
  //##글자색
  width: 10rem;
  height: 3rem;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  font-family: 'Cafe24Ssurround';
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: black;
  @media (max-width: 1100px) {
    margin: auto;
    width: 6rem;
    margin-top: 1rem;
  } ;
`;

const BgColorSet2 = styled.button`
  //글자색 버튼
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1.1rem;
  border: ${props => props.border};

  background: ${props => props.color};
  justify-content: space-between;
  margin: 0.5rem;
`;

const FontSetText = styled.div`
  //##폰트설정##//
  width: 10rem;
  height: 3rem;
  margin-top: 1.5rem;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  font-family: 'Cafe24Ssurround';
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: black;
  @media (max-width: 1100px) {
    margin: auto;
    width: 7.8rem;
    margin-top: 1rem;
  } ;
`;

const FontSelect = styled.select`
  //폰트설정 필터
  width: 17rem;
  height: 2.3rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #999;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  @media (max-width: 1100px) {
    display: block;
    margin: auto;
    width: 25rem;
    margin-top: 1rem;
  } ;
`;
const WriterText = styled.div`
  //작성자//
  width: 8rem;
  height: 3rem;
  margin-top: 1.2rem;
  font-size: 2.2rem;
  font-weight: 700;
  color: white;
  font-family: 'Cafe24Ssurround';
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: black;
  @media (max-width: 1100px) {
    margin: auto;
    width: 6.5rem;
    margin-top: 1rem;
  } ;
`;

const Writer = styled.input`
  //##작성자
  width: 17rem;
  height: 2.3rem;
  margin: 0.5rem;
  padding-left: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid #999;
  @media (max-width: 1100px) {
    display: block;
    margin: auto;
    width: 25rem;
    height: 3rem;
    margin-top: 1rem;
  } ;
`;

function MemoColor({
  memoName,
  setMemoName,
  rollBackColor,
  rollTypeColor,
  setRollBackColor,
  setRollTypeColor,
  pontType,
  setPontType,
}) {
  const onChange = useCallback(
    e => {
      setPontType(e.target.value);
    },
    [pontType],
  );
  // eslint-disable-next-line

  const onbackClick = a => {
    setRollBackColor(a);
    // eslint-disable-next-line
  };
  const ontypeClick = a => {
    setRollTypeColor(a);
    // eslint-disable-next-line
  };

  const handleInputChange = e => {
    setMemoName(e.target.value);
    // eslint-disable-next-line
  };
  useCallback(onbackClick, [rollBackColor]);
  useCallback(ontypeClick, [rollTypeColor]);
  // useCallback(handleSelect, [pontType]);
  return (
    <ColorDiv>
      <ColorWrap>
        <BgColorText>배경색</BgColorText>
        <BgColorSet
          color="white"
          border="1px solid gray"
          onClick={() => {
            onbackClick('white');
          }}
        />
        <BgColorSet
          color="#F4EBD3"
          onClick={() => {
            onbackClick('#F4EBD3');
          }}
        />
        <BgColorSet
          color="#FAE1EC"
          onClick={() => {
            onbackClick('#FAE1EC');
          }}
        />
        <BgColorSet
          color="#FBE54D"
          onClick={() => {
            onbackClick('#FBE54D');
          }}
        />
        <BgColorSet
          color="#C9E5C5"
          onClick={() => {
            onbackClick('#C9E5C5');
          }}
        />
        <BgColorSet
          color="#C0E6F3"
          onClick={() => {
            onbackClick('#C0E6F3');
          }}
        />
        <BgColorSet
          color="#D6D3EA"
          onClick={() => {
            onbackClick('#D6D3EA');
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
          border="1px solid gray"
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
          color="#B57DFD"
          onClick={() => {
            ontypeClick('#B57DFD');
          }}
        />
        <BgColorSet2
          color="#5FBB71"
          onClick={() => {
            ontypeClick('#5FBB71');
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
          color="#504E4A"
          onClick={() => {
            ontypeClick('#504E4A');
          }}
        />
        <FontSetText>폰트설정</FontSetText>
        <FontSelect onChange={onChange}>
          <option selected="selected">선택해주세요</option>
          <option value="Cafe24Ssurround">카페24서라운드</option>
          <option value="TTTtangsbudaejjigaeB">땅스부대찌개</option>
          <option value="KyoboHandwriting2021sjy">손글씨</option>
          <option value="Ansungtangmyun">안성탕면체</option>
          <option value="establishRoomNo703OTF">칠백삼체</option>
        </FontSelect>
        {/* <FontSelect onChange={onChange} value={pontType}>
          {pontList.map(item => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </FontSelect> */}
        <WriterText>작성자</WriterText>
        <Writer
          type="text"
          value={memoName}
          onChange={handleInputChange}
          placeholder="미작성시 익명으로 전달됩니다"
        />
      </ColorWrap>
    </ColorDiv>
  );
}

export default MemoColor;
