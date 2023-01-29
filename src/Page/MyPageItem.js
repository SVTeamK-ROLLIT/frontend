import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function MyPageItem({ dataColumn }) {
  const handleCopyClipBoard = async text => {
    try {
      await navigator.clipboard.writeText(text);

      alert('복사 성공!');
    } catch (error) {
      alert('복사 실패!');
    }
  };
  console.log(dataColumn.title);
  const navigate = useNavigate();
  return (
    <div>
      <ButtonItem onClick={() => navigate(`/rolling/${dataColumn.id}`)}>
        <div className="wrapper">
          <div className="cols">
            <div className="col" onTouchStart="this.classList.toggle('hover');">
              <div className="container">
                <div className="front">
                  <div className="inner">
                    <p>TO. {dataColumn.title}</p>
                    <span> </span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>작성된 메모 수 :</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ButtonItem>
      <ButtonTitle
        onClick={() =>
          handleCopyClipBoard(`www.rollit5.link/rolling/${dataColumn.id}`)
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

const ButtonItem = styled.button`
  width: 25rem;
  height: 20rem;
  font-size: 2rem;
  text-align: center;
  font-family: 'Cafe24Ssurround';
`;
const ButtonTitle = styled.button`
  width: 6rem;
  height: 7rem;
  padding-left: 2rem;
  font-size: 1rem;
  display: flex;
  color: white;
  font-family: 'Cafe24Ssurround';
`;
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
