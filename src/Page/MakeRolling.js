import React from 'react';
import styled from 'styled-components';
import MakeRoll from './MakeRollingMypage';
import RollText from './MakeRollingText';
import Theme from './MakeRollingTheme';

const AllWrap = styled.div`
  height: 100vh;
  width: 100%;
  z-index: -1;
  background-color: #fcedb0;
  position: fixed;
`;

function MakeRolling() {
  return (
    <div className="makerolling">
      <AllWrap />
      <MakeRoll />
      <RollText />
      <Theme />
    </div>
  );
}

export default MakeRolling;
