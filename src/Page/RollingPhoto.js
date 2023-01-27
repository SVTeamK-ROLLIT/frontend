/* eslint-disable camelcase */
import styled from 'styled-components';

import React, { useState } from 'react';
import ResizableRect from 'react-resizable-rotatable-draggable';
// import img from '../Image/ID.png';

export default function NewPhoto({ list, isAdmin }) {
  const { image_url, xcoor, ycoor, rotate, width, height } = list;
  // console.log(list);
  const [position, setPosition] = useState({
    width2: width,
    height2: height,
    top2: xcoor,
    left2: ycoor,
    rotate2: rotate,
  });
  // console.log(position);
  // console.log(setPosition);

  const handleDrag = (deltaX, deltaY) => {
    setPosition(prevState => ({
      ...prevState,
      top2: position.top2 + deltaY,
      left2: position.left2 + deltaX,
    }));
    // console.log(position);
  };

  const handleResize = style => {
    // eslint-disable-next-line no-shadow
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
    // console.log(position);
  };
  const handleRotate = rotateAngle2 => {
    setPosition(prevState => ({
      ...prevState,
      rotate2: rotateAngle2,
    }));
    // console.log(position);
  };
  return (
    <div>
      {isAdmin ? (
        <>
          <img
            src={image_url}
            style={{
              width: position.width2,
              height: position.height2,
              left: position.left2,
              top: position.top2,
              rotate: `${position.rotate2}deg`,
              position: 'absolute',
              // border: '1px solid black',
            }}
            alt=""
          />
          <div
            style={{
              width: position.width2,
              height: position.height2,
              left: position.left2 + 1,
              top: position.top2 + 1,
              position: 'absolute',
              // border: '1px solid black',
              rotate: `${position.rotate2}deg`,
              // zIndex: 0,
            }}
          >
            <DeleteBtn />
          </div>
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
        </>
      ) : (
        <>
          <img
            src={image_url}
            style={{
              width: position.width2,
              height: position.height2,
              left: position.left2,
              top: position.top2,
              rotate: `${position.rotate2}deg`,
              position: 'absolute',
              zIndex: 1,
              // border: '1px solid black',
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
            // zoomable="n, w, s, e, nw, ne, se, sw"
            // rotatable={true}
            // onRotateStart={this.handleRotateStart}
            // onRotate={handleRotate}
            // onRotateEnd={this.handleRotateEnd}
            // onResizeStart={this.handleResizeStart}
            // onResize={handleResize}
            // onResizeEnd={this.handleUp}
            // onDragStart={this.handleDragStart}
            // onDrag={handleDrag}
            // onDragEnd={this.handleDragEnd}
          />
        </>
      )}
    </div>
  );
}

const DeleteBtn = styled.button`
  background-color: red;
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 0;
  top: -1rem;
  z-index: 10;
`;

// const Image = styled.div`
//   width: 100%;
//   height: 100%;
//   background-image: url(https://vignette.wikia.nocookie.net/blogclan-2/images/b/b9/Random-image-15.jpg/revision/latest?cb=20160706220047);
//   background-size: 100% 100%;
// `;
// const MemoBox = styled.div`
//   width: 160px;
//   height: 160px;
//   background-color: yellow;
//   border-radius: 15px;
// `;
