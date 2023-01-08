import React from 'react';
// import styled from 'styled-components';

import './Register.css';
import SketchBook from './MyPageSketch';
import Line from './MyPageLine';
import MyPageItems from './MyPageItems';

function MyPage() {
  return (
    <div className="mypage">
      <SketchBook />
      <Line />
      <MyPageItems />
    </div>
  );
}

export default MyPage;
