import React from 'react';
import MakeRoll from './MakeRollingMypage';
import RollText from './MakeRollingText';
import Theme from './MakeRollingTheme';

function MakeRolling() {
  return (
    <div className="makerolling">
      <MakeRoll />
      <RollText />
      <Theme />
    </div>
  );
}

export default MakeRolling;
