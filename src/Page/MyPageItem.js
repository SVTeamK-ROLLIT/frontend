import React from 'react';
import styled from 'styled-components';

function MyPageItem() {
  return (
    <div>
      <TitleItem>제목</TitleItem>
      <PageItem>
        <LinkBtn>링크복사</LinkBtn>
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
