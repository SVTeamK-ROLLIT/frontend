import React from 'react';
import styled from 'styled-components';

const To = styled.div`
  width: 88px;
  height: 60px;
  font-size: 50px;
  font-weight: 700;
  color: #000;
  margin: auto;
  padding-right: 55rem;
  margin-bottom: 1rem;
`;

const TitleInput = styled.input`
  width: 867px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: auto;
  padding: 1.7rem;
  display: block;
  &:focus {
    outline: none;
  }
  font-size: 30px;
  font-weight: 700;
  ::placeholder {
    color: #d9d9d9;
  }
`;

function MakeRollingTitle() {
  return (
    <div>
      <To>To.</To>
      <TitleInput placeholder="제목을 입력주세요" />
    </div>
  );
}

export default MakeRollingTitle;
