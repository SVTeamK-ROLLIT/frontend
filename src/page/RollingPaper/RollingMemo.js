/* eslint-disable camelcase */
import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import DeleteBtn from '../../component/DeleteBtn';

export default function App({ list, isAdmin, HandleMemoDelete }) {
  const nodeRef = useRef(null);

  const {
    xcoor,
    ycoor,
    content,
    font,
    font_color,
    color,
    nickname,
    memo_id,
    // password,
  } = list;

  // eslint-disable-next-line no-unused-vars
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [Opacity, setOpacity] = useState(false);

  const trackPos = data => {
    setPosition({ x: data.x, y: data.y });
  };

  const handleStart = () => {
    setOpacity(true);
  };

  const handleEnd = async () => {
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
      disabled={!isAdmin}
    >
      <MemoBox
        background={color}
        ref={nodeRef}
        className="box"
        style={{
          opacity: Opacity ? '0.6' : '1',
          position: 'absolute',
        }}
      >
        <MemoText font={font} font_color={font_color}>
          {isAdmin ? (
            <DeleteBtn
              right="5%"
              onClick={() => {
                HandleMemoDelete(memo_id);
              }}
            />
          ) : (
            <div />
          )}
          {content}
        </MemoText>
        <Name color={color}>
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
  z-index: 1;
  :hover {
    z-index: 10001;
  }
`;

const MemoText = styled.div`
  width: 170px;
  word-break: break-all;
  color: ${props => props.font_color};
  font-family: ${props => props.font};
  font-size: 1.2rem;
`;

const Name = styled.div`
  text-align: right;
  align-items: end;
  color: ${props => (props.color === 'white' ? 'black' : 'white')};
`;
