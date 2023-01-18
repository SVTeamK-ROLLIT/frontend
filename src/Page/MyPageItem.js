import React from 'react';
import styled from 'styled-components';

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
  return (
    <div>
      <TitleItem>{dataColumn.title}</TitleItem>
      <PageItem>
        <LinkBtn onClick={() => handleCopyClipBoard(`${dataColumn.paper_url}`)}>
          링크복사
        </LinkBtn>
      </PageItem>
    </div>
  );
}

const TitleItem = styled.div`
  width: 298px;
  height: 100px;
  background: red;
  font-size: 2em;
  text-align: center;
`;

const PageItem = styled.div`
  width: 298px;
  height: 300px;
  background: #f5f5f5;
  margin: 0 2rem 2rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

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
