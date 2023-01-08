import React from 'react';
import styled from 'styled-components';

function MakeRollingTheme() {
  return (
    <ThemeWrap>
      <ThemeItem>
        <ThemeImg alt="1번" />
      </ThemeItem>
      <ThemeItem>
        <ThemeImg alt="2번" />
      </ThemeItem>
      <ThemeItem>
        <ThemeImg alt="3번" />
      </ThemeItem>
      <ThemeItem>
        <ThemeImg alt="4번" />
      </ThemeItem>
    </ThemeWrap>
  );
}

const ThemeWrap = styled.div`
  width: 100%;
  height: 60rem;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ThemeItem = styled.button`
  width: 396px;
  height: 265px;
  object-fit: none;
  background-color: yellow;
  margin: 4rem;
`;

const ThemeImg = styled.img``;

export default MakeRollingTheme;
