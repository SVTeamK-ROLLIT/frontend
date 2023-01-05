import React from 'react';
import styled from 'styled-components';

// import sketchbook from '../Image/Sketchbook2.png';
// import ID from '../Image/ID.png';
// import PW from '../Image/PW.png';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;
`;

function Login() {
  return <Circle color="blue" />;
}

export default Login;
