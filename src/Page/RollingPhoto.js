/* eslint-disable camelcase */
import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
// import axios from 'axios';

export default function App({ list }) {
  const nodeRef = useRef(null);

  const { image_url, xcoor, ycoor, rotate } = list; // 좌표랑, 스티커주소 불러옴
  console.log(list);
  // eslint-disable-next-line no-unused-vars
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [Opacity, setOpacity] = useState(false);

  const trackPos = data => {
    setPosition({ x: data.x, y: data.y });
  };

  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    // submit();
    setOpacity(false);
  };

  return (
    <div
      style={{
        transform: `rotate(${rotate}deg)`,
        width: '160px',
        height: '160px',
      }}
    >
      <Draggable
        bounds="parent"
        nodeRef={nodeRef}
        onDrag={(e, data) => trackPos(data)}
        onStart={handleStart}
        onStop={handleEnd}
        defaultPosition={{ x: xcoor, y: ycoor }}
        disabled
      >
        <MemoBox
          ref={nodeRef}
          className="box"
          style={{
            opacity: Opacity ? '0.6' : '1',
            position: 'absolute',
          }}
          background={image_url}
          // rotate={`${rotate}deg`}
        />
      </Draggable>
    </div>
  );
}

const MemoBox = styled.div`
  //스티커 크기 지정
  width: 160px;
  height: 160px;
  background: url(${props => props.background});
  background-size: cover;
  border-radius: 15px;
  transform: translate(-50%, -50%);
`;
