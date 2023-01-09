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
// 마이페이지 영역을 나눠주기
const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function Rolling() {
  return (
    <Background>
      <BtnWrap>
        <Mypagebtn>마이페이지</Mypagebtn>
      </BtnWrap>
    </Background>
  );
}

export default Rolling;
