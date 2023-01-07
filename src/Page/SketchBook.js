import React from 'react';
import styled from 'styled-components';
import sketchbook from '../Image/sketchbook.png';

const AllWrap = styled.div`
  background-color: #fcedb0;
  width: 100vw;
  height: 100vh;
`;

const SketchBookImg = styled.div`
  background-image: url(${sketchbook});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 70rem;
  height: 30rem;
  object-fit: contain;
`;

function SketchBook() {
  return (
    <AllWrap>
      <SketchBookImg />;
    </AllWrap>
  );
}

export default SketchBook;
