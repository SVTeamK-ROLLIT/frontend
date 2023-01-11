import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export default function App() {
  const nodeRef = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [position2, setPosition2] = useState({ x: 50, y: 50 });

  const [Opacity, setOpacity] = useState(false);
  const [Opacity2, setOpacity2] = useState(false);

  const trackPos = data => {
    setPosition({ x: data.x, y: data.y });
  };

  const trackPos2 = data => {
    setPosition2({ x: data.x, y: data.y });
  };

  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };

  const handleStart2 = () => {
    setOpacity2(true);
  };
  const handleEnd2 = () => {
    setOpacity2(false);
  };
  const changePosition = async posi => {
    const { xcoor, ycoor } = posi;
    try {
      await axios.post('http://127.0.0.1:8080/api/v1/users/signup', {
        xcoor,
        ycoor,
      });
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      toast.error(`${e.response.data.message}😭`, {
        position: 'top-center',
      });
    }
  };

  return (
    <div className="App">
      <ToastContainer />
      <Draggable
        nodeRef={nodeRef}
        onDrag={(e, data) => trackPos(data)}
        onStart={handleStart}
        onStop={handleEnd}
      >
        <div
          ref={nodeRef}
          className="box"
          style={{ opacity: Opacity ? '0.6' : '1' }}
        >
          <div>BOX</div>
          <div>
            x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
          </div>
        </div>
      </Draggable>

      <Draggable
        nodeRef={nodeRef}
        onDrag={(e, data) => trackPos2(data)}
        onStart={handleStart2}
        onStop={handleEnd2}
        scale={2}
      >
        <div
          ref={nodeRef}
          className="box box2"
          style={{ opacity: Opacity2 ? '0.6' : '1' }}
        >
          <div>BOX with scale</div>
          <div>
            x: {position2.x.toFixed(0)}, y: {position2.y.toFixed(0)}
          </div>
        </div>
      </Draggable>
    </div>
  );
}
