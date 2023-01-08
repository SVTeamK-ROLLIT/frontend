import React from 'react';
import styled from 'styled-components';

function MyPageItem() {
  return (
    <PageItem>
      <LinkBtn>링크복사</LinkBtn>
    </PageItem>
  );
}

const PageItem = styled.div`
  width: 298px;
  height: 343px;
  background: #f5f5f5;
  margin: 2rem;
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
