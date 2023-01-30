import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import './Active.css';

export default function newMemo({ list, setCoor }) {
  const nodeRef = useRef(null);
  const { content, color, font, fontColor, nickname } = list;
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
        background={color}
        ref={nodeRef}
        className="box circle"
        style={{
          opacity: Opacity ? '0.6' : '1',
          position: 'absolute',
        }}
      >
        <MemoText font={font} color={fontColor}>
          {content}
        </MemoText>
        <Name>
          <b>from.</b>
          {nickname}{' '}
        </Name>
      </MemoBox>
    </Draggable>
  );
}

const MemoBox = styled.div`
  padding: 0.4rem;
  width: 184px;
  height: 174px;
  background: ${props => props.background};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ::after {
    border: 1px solid ${props => props.background};
  }
`;

const MemoText = styled.div`
  width: 170px;
  word-break: break-all;
  color: ${props => props.color};
  font-family: ${props => props.font};
`;

const Name = styled.div`
  text-align: right;
  align-items: end;
`;
