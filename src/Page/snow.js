import React from 'react';
import Snowfall from 'react-snowfall';
import styled from 'styled-components';
import '../style/snow.css';

const Bgcolor = styled.div`
  color: white;
  z-index: 999;
`;

function Snow() {
  return (
    <div>
      <Snowfall />
    </div>
  );
}

export default Snow;
