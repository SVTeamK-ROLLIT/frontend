import React from 'react';
import styled from 'styled-components';

function MakeRollingText() {
  return <Text>제목과 테마를 선택해주세요</Text>;
}

const Text = styled.div`
  /* width: 387px; */
  height: 5rem;
  font-size: 4rem;
  font-weight: 700;
  color: whitesmoke;
  text-align: center;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 1.8rem;
  font-family: 'Cafe24Ssurround';
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: black;
  text-shadow: 2px 2px 1.5px gray;
`;

export default MakeRollingText;
