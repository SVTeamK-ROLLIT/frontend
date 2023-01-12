import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';

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

  return (
    <Container>
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
            width: 300,
            display: 'inline-block',
          }}
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
            width: 50,
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
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 50px);
  width: calc(100vw - 50px);
  padding: 20px;
  position: absolute;
`;
