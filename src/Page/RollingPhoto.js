/* eslint-disable camelcase */
// import styled from 'styled-components';
import React, { useState } from 'react';
import ResizableRect from 'react-resizable-rotatable-draggable';
// import img from '../Image/ID.png';

export default function NewPhoto({ list }) {
  //   const [width2, setWidth] = useState(200);
  //   const [height2, setHeight] = useState(100);
  //   const [top2, setTop] = useState(100);
  //   const [left2, setLeft] = useState(100);
  //   const [rotateAngle, setRotateAngle] = useState(0);
  const { image_url, xcoor, ycoor, rotate } = list;
  console.log(list);
  const [position, setPosition] = useState({
    width2: 200,
    height2: 100,
    top2: 100,
    left2: 100,
    rotate2: 0,
  });
  console.log(setPosition);

  // eslint-disable-next-line no-unused-vars
  //   const handleResize = (style, isShiftKey, type) => {
  //     let { top, left, width, height } = style;
  //     top = Math.round(top);
  //     left = Math.round(left);
  //     width = Math.round(width);
  //     height = Math.round(height);
  //     setPosition(prevState => ({
  //       ...prevState,
  //       width2: width,
  //       top2: top,
  //       height2: height,
  //       left2: left,
  //     }));
  //     // console.log(position);
  //   };
  //   const handleRotate = rotateAngle2 => {
  //     setPosition(prevState => ({
  //       ...prevState,
  //       rotate2: rotateAngle2,
  //     }));
  //     // console.log(position);
  //   };

  //   const handleDrag = (deltaX, deltaY) => {
  //     setPosition(prevState => ({
  //       ...prevState,
  //       top2: position.top2 + deltaY,
  //       left2: position.left2 + deltaX,
  //     }));
  //     // console.log(position);
  //   };
  //   parentFunction(position);

  return (
    <div>
      <img
        src={image_url}
        style={{
          width: position.width2,
          height: position.height2,
          left: xcoor + 1,
          top: ycoor + 1,
          rotate: `${rotate}deg`,
          position: 'absolute',
        }}
        alt=""
      />
      <ResizableRect
        left={xcoor + 1}
        top={ycoor + 1}
        width={position.width2}
        height={position.height2}
        rotateAngle={rotate}
        minWidth={100} // 최소크기
        // aspectRatio={false}
        // minWidth={10}
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
    </div>
  );
}

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
