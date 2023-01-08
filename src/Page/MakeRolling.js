import React from 'react';
import styled from 'styled-components';

// 배경화면을 꽉 채워주기 위한 divx태그입니다
const Background = styled.div`
  width: 100vw;
  height: 100vh;
`;

// 상단바를 나눠준 부분입니다.

// 우측 상단 마이페이지 버튼입니다.
const MypageButton = styled.button`
  position: absolute;
  width: 199px;
  height: 48px;
  left: 1200px;
  top: 33px;
`;

// // 제목 입력 칸 아이디, 패스워드, 이메일, 닉네임을 "props"로 바꿔가면서 재사용할 수 있음
// const KeyWrap = styled.div`
//   width: 45rem;
//   height: 3.1rem;
//   border-radius: ${props => props.border};
//   background: #fff;
//   border-width: 0.063rem;
//   border-color: #000;
//   box-shadow: 0rem 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25);
//   display: flex;
//   margin-bottom: 1rem;
//   /*화면이 작아지면 크기를 작게하고 겉에 radius속성을 없애줍니다*/
//   @media screen and (max-width: 63rem) {
//     width: 37.5rem;
//     height: 3.125rem;
//     border-radius: 0;
//   }
// `;

// // 제목,아이디,패스워드,이메일,닉네임을 입력하는 input태그입니다
// const KeyInput = styled.input`
//   //placeholder스타일
//   width: 2.25rem;
//   height: 2.5rem;
//   font-size: 1.5rem;
//   font-weight: 500;
//   /////
//   padding-left: 0.5rem;
//   margin: auto 1rem auto 0rem;
//   width: 31.25rem;
//   &:focus {
//     outline: none;
//   }
// `;

function MakeRolling() {
  return (
    <div className="MakeRolling">
      <Background>
        <MypageButton>마이페이지</MypageButton>
      </Background>
    </div>
  );
}

export default MakeRolling;
