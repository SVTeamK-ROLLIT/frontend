// import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
// import img from '../Image/ID.png';
import { Resizable } from 're-resizable';
import { red } from '@mui/material/colors';

export default function NewPhoto({ photo, setCoor }) {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  //   const [img,setImg]=useState('');

  const [Opacity, setOpacity] = useState(false);

  console.log(Opacity);
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

  const [rawLog, setRawLog] = useState();
  const reader = new FileReader();
  reader.readAsDataURL(photo); // 파일을 읽는 메서드
  reader.onload = () => {
    setRawLog(reader.result);
    console.log(rawLog);
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
      <Resizable
        defaultSize={{
          width: 320,
          height: 200,
        }}
        style={{
          backgroundColor: red,
        }}
      >
        Sample with default size
      </Resizable>
    </Draggable>
  );
}

// const MemoBox = styled.div`
//   width: 160px;
//   height: 160px;
//   background: url(${props => props.background});
//   background-color: yellow;
//   background-size: cover;
//   border-radius: 15px;
// `;
