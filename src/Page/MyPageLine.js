import React from 'react';
import styled from 'styled-components';

function MyPageLine() {
  return <Line>ROLLING PAPER LIST</Line>;
}

export default MyPageLine;

const Line = styled.div`
  width: 50rem;
  height: 5rem;
  border-radius: 2rem;
  margin: 4rem auto 0 auto;
  font-size: 3.5rem;
  text-align: center;
  color: white;
  position: relative;
  font-family: 'Cafe24Ssurround';
  text-shadow: 1.5px 1.5px 1.5px gray;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: gray;
`;
