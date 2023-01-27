import React from 'react';
import styled from 'styled-components';
import MakeRoll from './MakeRollingMypage';
import RollText from './MakeRollingText';
import Theme from './MakeRollingTheme';

import background from '../Image/welcome1.png';

const AllWrap = styled.div`
  height: 100vh;
  width: 100%;
  z-index: -1;
  position: fixed;
  background-repeat: no-repeat;
  background-image: url(${background});
  background-size: cover;
`;

function MakeRolling() {
  return (
    <div className="makerolling">
      <AllWrap src={background} />
      <MakeRoll />
      <RollText />
      <Theme />
    </div>
  );
}

export default MakeRolling;
