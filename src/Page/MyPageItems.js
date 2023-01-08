import React from 'react';
import styled from 'styled-components';
import MyPageItem from './MyPageItem';

function MyPageItems() {
  return (
    <ItemsWrap>
      <MyPageItem />
      <MyPageItem />
      <MyPageItem />
      <MyPageItem />
      <MyPageItem />
      <MyPageItem />
      <MyPageItem />
    </ItemsWrap>
  );
}

const ItemsWrap = styled.div`
  padding: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  //flex: 0 0 33.333333%;
`;

export default MyPageItems;
