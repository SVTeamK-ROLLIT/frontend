// import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import axios from 'axios';

export default function App() {
  const nodeRef = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [Opacity, setOpacity] = useState(false);

  const trackPos = data => {
    setPosition({ x: data.x, y: data.y });
  };

  const submit = async () => {
    try {
      await axios.post('http://127.0.0.1:8080/api/v1/papers/1/memos', {
        content: '다음에 또 가자',
        nickname: '익명',
        font: '안성탕면체',
        password: '1234',
        color: 'red',
        xcoor: position.x,
        ycoor: position.y,
        rotate: 0,
      });

      console.log('success');
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      console.log(e);
    }
  };

  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    submit();
    setOpacity(false);
  };

  return (
    <Draggable
      bounds="parent"
      nodeRef={nodeRef}
      onDrag={(e, data) => trackPos(data)}
      onStart={handleStart}
      onStop={handleEnd}
    >
      <div
        ref={nodeRef}
        className="box"
        style={{
          opacity: Opacity ? '0.6' : '1',
          width: 30,
          display: 'inline-block',
          position: 'absolute',
        }}
      >
        <div>BOX</div>
        <div>
          x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
        </div>
      </div>
    </Draggable>
  );
}
