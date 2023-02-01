import React from 'react';
import styled from 'styled-components';

import Profile from './MyPageProfile';

const SketchBookImg = styled.div`
  width: 80rem;
  height: 25rem;

  background-size: 80rem 25rem;

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
