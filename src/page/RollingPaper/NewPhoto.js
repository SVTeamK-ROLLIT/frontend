// import styled from 'styled-components';
import React, { useState } from 'react';

import ResizableRect from 'react-resizable-rotatable-draggable';

export default function NewPhoto({ parentFunction, photo }) {
  const [position, setPosition] = useState({
    width2: 100,
    height2: 100,
    top2: 100,
    left2: 100,
    rotate2: 0,
  });

  // eslint-disable-next-line no-unused-vars
  const handleResize = (style, isShiftKey, type) => {
    let { top, left, width, height } = style;
    top = Math.round(top);
    left = Math.round(left);
    width = Math.round(width);
    height = Math.round(height);
    setPosition(prevState => ({
      ...prevState,
      width2: width,
      top2: top,
      height2: height,
      left2: left,
    }));
  };
  const handleRotate = rotateAngle2 => {
    setPosition(prevState => ({
      ...prevState,
      rotate2: rotateAngle2,
    }));
  };

  const handleDrag = (deltaX, deltaY) => {
    setPosition(prevState => ({
      ...prevState,
      top2: position.top2 + deltaY,
      left2: position.left2 + deltaX,
    }));
  };
  parentFunction(position);

  return (
    <div
      style={{
        width: position.width2,
        height: position.height2,
        position: 'absolute',
        zIndex: 1,
      }}
    >
      <img
        src={photo?.image_url}
        style={{
          width: position.width2,
          height: position.height2,
          left: position.left2 + 1,
          top: position.top2 + 1,
          rotate: `${position.rotate2}deg`,
          position: 'absolute',
        }}
        alt=""
      />
      <ResizableRect
        left={position.left2}
        top={position.top2}
        width={position.width2}
        height={position.height2}
        rotateAngle={position.rotate2}
        minWidth={100} // 최소크기
        // aspectRatio={false}
        minHeight={100}
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
      />
    </div>
  );
}
