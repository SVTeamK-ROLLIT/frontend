import React from 'react';
import styled from 'styled-components';

function MakeRollingText() {
  return (
    <Text>
      롤링페이퍼 테마를 <br />
      선택해주세요
    </Text>
  );
}

const Text = styled.div`
  width: 387px;
  height: 140px;
  font-size: 40px;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export default MakeRollingText;
