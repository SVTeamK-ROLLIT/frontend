import React from 'react';
import MakeRoll from './MakeRollingMypage';
import RollTitle from './MakeRollingTitle';
import RollText from './MakeRollingText';
import Theme from './MakeRollingTheme';

function MakeRolling() {
  return (
    <div className="makerolling">
      <MakeRoll />
      <RollTitle />
      <RollText />
      <Theme />
    </div>
  );
}

export default MakeRolling;
