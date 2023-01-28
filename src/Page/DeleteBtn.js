import React from 'react';
import styled from 'styled-components';
import { ImCancelCircle } from 'react-icons/im';

const DelBtn = styled.button`
  /* background-color: red; */
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: ${props => props.right};
  top: ${props => props.top};
`;

export default function DeleteBtn({ onClick, right, top }) {
  return (
    <DelBtn right={right} top={top} onClick={onClick}>
      <ImCancelCircle />
    </DelBtn>
  );
}
