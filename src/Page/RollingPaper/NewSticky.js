import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import '../../style/Active.css';

export default function NewSticky({ skickyUrl, setCoor }) {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [Opacity, setOpacity] = useState(false);

  const trackPos = data => {
    setPosition({ x: data.x, y: data.y });
  };

  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
    setCoor(position);
  };

  return (
    <Draggable
      bounds="parent"
      nodeRef={nodeRef}
      onDrag={(e, data) => trackPos(data)}
      onStart={handleStart}
      onStop={handleEnd}
      defaultPosition={{ x: position.x, y: position.y }}
    >
      <MemoBox
        ref={nodeRef}
        className="box circle"
        style={{
          opacity: Opacity ? '0.6' : '1',
          position: 'absolute',
        }}
        background={skickyUrl}
      />
    </Draggable>
  );
}

const MemoBox = styled.div`
  width: 80px;
  height: 80px;
  background: url(${props => props.background});
  background-size: cover;
  border-radius: 15px;
  ::after {
    border: 1px solid tomato;
    border-radius: 2rem;
  }
`;
