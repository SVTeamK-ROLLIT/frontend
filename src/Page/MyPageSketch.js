import React from 'react';
import styled from 'styled-components';
import sketchbook from '../assets/image/sketchbookLogin.png';
import Profile from './MyPageProfile';

const SketchBookImg = styled.div`
  width: 80rem;
  height: 25rem;
  // border: 5px solid #535353;
  background-size: 80rem 25rem;
  /* background-image: url(${sketchbook}); */
  margin: auto;
`;

function SketchBook({ myRollPageData }) {
  return (
    <SketchBookImg>
      <Profile myRollPageData={myRollPageData} />
    </SketchBookImg>
  );
}

export default SketchBook;
