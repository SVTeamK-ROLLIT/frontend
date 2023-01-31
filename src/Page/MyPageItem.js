import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import image1 from '../Image/smallimage1.png';
import image2 from '../Image/smallimage2.png';
import image3 from '../Image/smallimage3.png';
import image4 from '../Image/smallimage4.png';
import image5 from '../Image/smallimage5.png';

const ButtonItem = styled.button`
  width: 20rem;
  height: 19rem;
  font-size: 2rem;
  text-align: center;
  font-family: 'Cafe24Ssurround';
  background-image: url(${props => props.bgimage});
`;
const ButtonTitle = styled.button`
  width: 5rem;
  height: 7rem;
  padding-left: 1.5rem;
  font-size: 0.6rem;
  display: flex;
  color: white;
  font-family: 'Cafe24Ssurround';
`;

const BgImg = styled.div`
  background: #cedce7;
  background-image: url(${props => props.bgimage});
`;

function MyPageItem({ dataColumn }) {
  // const handleCopyClipBoard = async text => {
  // try {
  //   await navigator.clipboard.execCommand('copy');

  //   alert('복사 성공!');
  // } catch (error) {
  //   alert('복사 실패!');
  // }
  // };
  const handleCopyClipBoard = () => {
    try {
      // 1. 임시 textarea 요소를 생성하고 body에 부착
      const $textarea = document.createElement('textarea');
      document.body.appendChild($textarea);
      // 2. props로 받은 text값을 textarea의 value로 대입하고 textarea 영역 내 모든 텍스트를 선택(드래그효과)
      $textarea.value = `www.rollit5.link/rolling/${dataColumn.id}`;
      $textarea.select();
      // 3. execCommand 함수를 이용해 클립보드에 복사
      document.execCommand('copy');
      // 4. 임시 textarea 요소 제거
      document.body.removeChild($textarea);
      alert('복사 성공!');
    } catch (error) {
      alert('복사 실패!');
    }
  };
  // console.log(dataColumn.title);
  // console.log(dataColumn.create_at);
  const [backgroundImg, setBackgroundImg] = useState();
  function bgimage(paperUrl) {
    if (paperUrl === '1') {
      setBackgroundImg(image1);
    } else if (paperUrl === '2') {
      setBackgroundImg(image2);
    } else if (paperUrl === '3') {
      setBackgroundImg(image3);
    } else if (paperUrl === '4') {
      setBackgroundImg(image4);
    } else if (paperUrl === '5') {
      setBackgroundImg(image5);
    }
  }
  useEffect(() => {
    bgimage(dataColumn.paper_url);
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <ButtonItem
        // bgimage={backgroundImg}
        onClick={() => navigate(`/rolling/${dataColumn.id}`)}
      >
        <div className="wrapper">
          <div className="cols">
            <div className="col" onTouchStart="this.classList.toggle('hover');">
              <div className="mypageContainer">
                <div className="front">
                  <div className="inner">
                    <p>TO. {dataColumn.title}</p>
                    <span> </span>
                  </div>
                </div>
                <BgImg bgimage={backgroundImg} className="back">
                  <div className="inner">
                    <p>작성날짜 : {dataColumn.create_at.slice(0, 10)}</p>
                  </div>
                </BgImg>
              </div>
            </div>
          </div>
        </div>
      </ButtonItem>
      <ButtonTitle
        onClick={() =>
          // handleCopyClipBoard(`www.rollit5.link/rolling/${dataColumn.id}`)
          handleCopyClipBoard()
        }
      >
        <button type="button" className="learn-more">
          {/* {dataColumn.title} */} COPY
        </button>
      </ButtonTitle>
    </div>
  );
}

// const TitleItem = styled.button`
//   width: 298px;
//   height: 100px;
//   background: red;
//   font-size: 2em;
//   text-align: center;
// `;

// const PageItem = styled.button`
//   width: 298px;
//   height: 300px;
//   background: #f5f5f5;
//   margin: 0 2rem 2rem 0;
//   display: flex;
//   justify-content: flex-end;
//   align-items: flex-end;
// `;

// const LinkBtnDiv = styled.div`
//   padding-left: 12rem;
//   margin-top: -1.5rem;
//   position: absolute;
//   z-index: 1;
// `;

// const LinkBtn = styled.button`
//   width: 2rem;
//   height: 2rem;
//   border-radius: 13px;
//   color: black;
//   font-size: 14px;
//   font-weight: 700;
//   display: block;
//   z-index: 1;
//   /* border: 1px solid gray; */
// `;

export default MyPageItem;
