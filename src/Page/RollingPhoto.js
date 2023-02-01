/* eslint-disable camelcase */

import React, { useState } from 'react';
import ResizableRect from 'react-resizable-rotatable-draggable';
import DeleteBtn from '../Component/DeleteBtn';

export default function NewPhoto({ list, isAdmin, HandlePhotoDelete }) {
  const { image_url, xcoor, ycoor, rotate, width, height, image_id } = list;
  // eslint-disable-next-line no-unused-vars
  const [position, setPosition] = useState({
    width2: width,
    height2: height,
    top2: xcoor,
    left2: ycoor,
    rotate2: rotate,
  });

  return (
    <div>
      {isAdmin ? (
        <>
          <img
            src={image_url}
            style={{
              width,
              height,
              left: xcoor,
              top: ycoor,
              rotate: `${rotate}deg`,
              position: 'absolute',
              zIndex: 1,
            }}
            alt=""
          />
          <div
            style={{
              width,
              height,
              left: xcoor,
              top: ycoor,
              position: 'absolute',
              rotate: `${rotate}deg`,
            }}
          >
            <DeleteBtn
              right="-1rem"
              top="-1.2rem"
              onClick={() => {
                HandlePhotoDelete(image_id);
              }}
            />
          </div>
          <ResizableRect
            left={xcoor}
            top={ycoor}
            width={width}
            height={height}
            rotateAngle={rotate}
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
      ) : (
        <>
          <img
            src={image_url}
            style={{
              width,
              height,
              left: xcoor,
              top: ycoor,
              rotate: `${rotate}deg`,
              position: 'absolute',
              zIndex: 1,
              // border: '1px solid black',
            }}
            alt=""
          />
          <ResizableRect
            left={position.xcoor}
            top={position.ycoor}
            width={position.width}
            height={position.height}
            rotateAngle={position.rotate}
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
