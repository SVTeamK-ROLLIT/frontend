import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function MyPageItem({ dataColumn }, { myRollPageData }) {
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
        {dataColumn.title}
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
                    <p>{myRollPageData}님의 롤링페이퍼입니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ButtonItem>
      <LinkBtn onClick={() => handleCopyClipBoard(`${dataColumn.id}`)}>
        링크복사
      </LinkBtn>
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
  height: 25rem;
  font-size: 2.5rem;
  text-align: center;
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

const LinkBtn = styled.button`
  width: 77px;
  height: 38px;
  border-radius: 13px;
  background: #3a3a3a;
  margin: 1rem;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;

export default MyPageItem;
