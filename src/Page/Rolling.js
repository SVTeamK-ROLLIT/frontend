import React from 'react';
import styled from 'styled-components';
// import sketchbook from '../Image/sketchbookLogin.png';
import blackboard from '../Image/blackboard.png';
import pencilicon from '../Image/pencilicon.png';
import galleryicon from '../Image/galleryicon.png';
import memoicon from '../Image/memoicon.svg';

// import GlobalStyle from './GlobalStyle';

// 배경화면을 꽉 채워주기 위한 divx태그입니다
// const Background = styled.div`
//   width: 100vw;
//   height: 100vh;
// `;

// const BackgroundImg = styled.div`
//   /* width: 100%;
//   height: 100%; */
//   // border: 5px solid #535353;
//   background-color: #fcedb0;
//   background-size: 80rem 70rem;
//   background-image: url(${sketchbook});
//   margin: auto;
// `;

// 마이페이지 버튼입니다.
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

// // 버튼 박스 박스
// const Wrap = styled.div`
//   height: 100vh;
//   /* background-color: yellow; */
//   display: flex;
//   align-content: flex-end;
//   justify-content: flex-end;
// `;

const SketchBookImg = styled.div`
  // border: 5px solid #535353;
  height: 100%;
  /* background-color: #fcedb0; */
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-image: url(${blackboard});
  margin: 0 auto;
`;

const AllWrap = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  z-index: 90;
`;
const MyPageBtn = styled.button`
  margin: 2% 11% 0 auto;
  /* background-color: red; */
  height: 4rem;
  display: block;
  width: 12rem;
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  //텍스트 검정 태두리 주기
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  line-height: 47px;
`;
const Text = styled.div`
  /* background-color: red; */
  height: 5rem;
  width: 100%;

  text-align: center;
  font-size: 50px;
  font-weight: 700;
`;
const MemoWrap = styled.div`
  /* background-color: yellow; */
  height: 50rem;
  width: 80rem;
  margin: 0 auto;
`;

const IconBtn = styled.button`
  width: 2rem;
  height: 2rem;
  /* background-color: red; */
  /* border: 1px solid black; */
  margin: 0.5rem;
`;

const IconWrap = styled.div`
  position: fixed;
  display: flex;
  top: 77%;
  left: 85%;
  flex-direction: column;
  margin: 0 6rem 4rem auto;
`;

function Rolling() {
  return (
    <div className="rolling">
      <SketchBookImg>
        <AllWrap>
          <MyPageBtn>마이페이지</MyPageBtn>
          <Text>to.Team_k</Text>
          <MemoWrap />
          <IconWrap>
            <IconBtn>
              <img src={pencilicon} alt="" />
            </IconBtn>
            <IconBtn>
              <img src={galleryicon} alt="" />
            </IconBtn>
            <IconBtn>
              <img src={memoicon} alt="" />
            </IconBtn>
          </IconWrap>
        </AllWrap>
      </SketchBookImg>
    </div>
  );
}

export default Rolling;
