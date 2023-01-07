import React from 'react';
import styled from 'styled-components';

import './Register.css';
import SketchBook from './SketchBook';

// import sketchbook from '../Image/sketchbook.png';

// const Background = styled.div`
//   width: 100vw;
//   height: 100vh;
// `;
const LeftWrap = styled.div``;
const RightWrap = styled.div``;

function MyPage() {
  return (
    <div className="mypage">
      <SketchBook />
      <LeftWrap />
      <RightWrap />
    </div>
  );
}

export default MyPage;
