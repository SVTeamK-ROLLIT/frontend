import React from 'react';
import styled from 'styled-components';

function MyPageLine() {
  return <Line>Teamk님의 롤링페이지 목록입니다</Line>;
}

export default MyPageLine;

const Line = styled.div`
  width: 1353px;
  height: 61px;
  border-radius: 10px;
  background: #fffaf0;
  margin-top: 4rem;
  margin: 4rem auto 0 auto;
  font-size: 36px;
  text-align: center;
  color: #000;
`;
