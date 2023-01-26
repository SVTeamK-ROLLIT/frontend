import React from 'react';
import styled from 'styled-components';

function MakeRollingText() {
  return <Text>롤링페이퍼 테마 선택</Text>;
}

const Text = styled.div`
  /* width: 387px; */
  height: 3rem;
  font-size: 40px;
  font-weight: 700;
  color: black;
  text-align: center;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 1.8rem;
  font-family: 'Cafe24Ssurround';
`;

export default MakeRollingText;
