// import styled from 'styled-components';
import React, { useState } from 'react';
import ResizableRect from 'react-resizable-rotatable-draggable';
// import img from '../Image/ID.png';

export default function NewPhoto() {
  const [width2, setWidth] = useState(200);
  const [height2, setHeight] = useState(100);
  const [top2, setTop] = useState(100);
  const [left2, setLeft] = useState(100);
  const [rotateAngle, setRotateAngle] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const handleResize = (style, isShiftKey, type) => {
    let { top, left, width, height } = style;
    top = Math.round(top);
    left = Math.round(left);
    width = Math.round(width);
    height = Math.round(height);
    setWidth(width);
    setHeight(height);
    setTop(top);
    setLeft(left);
  };
  const handleRotate = rotateAngle2 => {
    setRotateAngle(rotateAngle2);
  };

  const handleDrag = (deltaX, deltaY) => {
    setLeft(left2 + deltaX);
    setTop(top2 + deltaY);
  };

  return (
    <div className="App">
      <ResizableRect
        left={left2}
        top={top2}
        width={width2}
        height={height2}
        rotateAngle={rotateAngle}
        minWidth={100} // 최소크기
        // aspectRatio={false}
        // minWidth={10}
        // minHeight={10}
        zoomable="n, w, s, e, nw, ne, se, sw"
        // rotatable={true}
        // onRotateStart={this.handleRotateStart}
        onRotate={handleRotate}
        // onRotateEnd={this.handleRotateEnd}
        // onResizeStart={this.handleResizeStart}
        onResize={handleResize}
        // onResizeEnd={this.handleUp}
        // onDragStart={this.handleDragStart}
        onDrag={handleDrag}
        // onDragEnd={this.handleDragEnd}
        style={{ backgroundColor: 'red' }}
      />
    </div>
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
