import React from 'react';
import styled from 'styled-components';

// 배경화면을 꽉 채워주기 위한 divx태그입니다
const Background = styled.div`
  width: 100vw;
  height: 100vh;
`;
// 마이페이지 버튼입니다.
const Mypagebtn = styled.button`
  width: 199px;
  height: 48px;
  font-size: 40px;
  font-weight: 700;
  text-align: left;
  color: black;
`;
// 마이페이지버튼 영역을 나눠주기
const TopWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// 제목 영역을 나눠주기
const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
`;

// 제목을 생성합니다
const RollpaperTitle = styled.div`
  width: 325px;
  height: 50px;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  color: black;
`;
// 인원수 표시
const PeopleNum = styled.div`
  width: 50px;
  height: 20px;
  font-size: 20px;
  font-weight: 700;
  /* text-align: ; */
  color: black;
  margin-bottom: 100px;
  margin-left: 500px;
`;
// 인원수 영역
const PeopleWrap = styled.div`
  display: flex;
  justify-content: right;
`;
function Rolling() {
  return (
    <Background>
      <TopWrap>
        <Mypagebtn>마이페이지</Mypagebtn>
      </TopWrap>
      <TitleWrap>
        <RollpaperTitle>TO. 모두들</RollpaperTitle>
      </TitleWrap>
      <PeopleWrap>
        <PeopleNum>13명</PeopleNum>
      </PeopleWrap>
    </Background>
  );
}

export default Rolling;
