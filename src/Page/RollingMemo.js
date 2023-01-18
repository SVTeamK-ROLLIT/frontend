/* eslint-disable camelcase */
import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
// import axios from 'axios';

export default function App({ list }) {
  const nodeRef = useRef(null);

  const { xcoor, ycoor, content, font, font_color, color } = list;
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
        background={color}
        font={font}
        color={font_color}
        ref={nodeRef}
        className="box"
        style={{
          opacity: Opacity ? '0.6' : '1',
          position: 'absolute',
        }}
      >
        <div>{content}</div>
      </MemoBox>
    </Draggable>
  );
}

const MemoBox = styled.div`
  width: 184px;
  height: 174px;
  background-color: ${props => props.background};
  border-radius: 15px;
  font-family: ${props => props.font};
  color: ${props => props.color};
`;
