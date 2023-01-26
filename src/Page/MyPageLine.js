import React from 'react';
import styled from 'styled-components';

function MyPageLine({ myRollPageData }) {
  return (
    <Line>
      {myRollPageData?.user_data[0].nickname}
      님의 롤링페이퍼
    </Line>
  );
}

export default MyPageLine;

const Line = styled.div`
  width: 700px;
  border-radius: 30px;
  background: #fffaf0;
  margin-top: 4rem;
  margin: 4rem auto 0 auto;
  font-size: 36px;
  text-align: center;
  color: black;
  font-family: 'Cafe24Ssurround';
`;
