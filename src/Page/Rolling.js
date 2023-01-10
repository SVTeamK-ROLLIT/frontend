import React from 'react';
import styled from 'styled-components';
import sketchbook from '../Image/sketchbookLogin.png';

const BackgroundImg = styled.div`
  background-color: #fcedb0;
  background-size: cover;
  background: no-repeat;
  background-image: url(${sketchbook});
  margin: auto;
  width: 100vw;
  height: 100vh;
`;

// // 마이페이지 버튼입니다.
// const Mypagebtn = styled.button`
//   width: 199px;
//   height: 48px;
//   font-size: 40px;
//   font-weight: 700;
//   text-align: left;
//   color: black;
// `;

// // 마이페이지버튼 영역을 나눠주기
// const TopWrap = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;

// // 제목 영역을 나눠주기
// const TitleWrap = styled.div`
//   /* display: flex;
//   justify-content: center; */
// `;

// // 제목을 생성합니다
// const RollpaperTitle = styled.div`
//   width: 325px;
//   height: 50px;
//   font-size: 50px;
//   font-weight: 700;
//   text-align: center;
//   color: black;
//   margin: auto;
// `;
// // 인원수 표시
// const PeopleNum = styled.div`
//   width: 50px;
//   height: 20px;
//   font-size: 20px;
//   font-weight: 700;
//   /* text-align: ; */
//   color: black;
//   margin-bottom: 100px;
//   margin-left: 500px;
// `;
// // 인원수 영역
// const PeopleWrap = styled.div`
//   display: flex;
//   justify-content: right;
// `;
// //

// // 스티커, 사진, 메모 추가 버튼을 위한 영역 나눠주기 입니다.
// const BottombtnWrap = styled.div`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
// `;

// // 버튼 양식
// const Makebtn = styled.button`
//   width: 50px;
//   height: 20px;
//   background-color: red;
//   border: 1px solid black;
//   justify-content: flex-end;
//   /* position: fixed; */
// `;

// 버튼 박스 박스
// const Wrap = styled.div`
//   height: 100vh;
//   /* background-color: yellow; */
//   display: flex;
//   align-content: flex-end;
//   justify-content: flex-end;
// `;

function Rolling() {
  return (
    <div>
      <BackgroundImg />
    </div>
  );
}

export default Rolling;
