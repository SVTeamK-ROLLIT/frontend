import React from 'react';
import styled from 'styled-components';
import blackboard from '../Image/image2.png';
import pencilicon from '../Image/pencilicon.png';
import galleryicon from '../Image/galleryicon.png';
import memoicon from '../Image/memoicon.svg';
import usericon from '../Image/usericon.png';

const SketchBookImg = styled.div`
  // border: 5px solid #535353;
  width: 100%;
  /* background-color: #fcedb0; */
  /* background-size: cover; */
  background-repeat: no-repeat;
  background-position-x: center;
  background-image: url(${blackboard});
  margin: 0 auto;
  background-size: contain;
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
  color: white;
  text-align: center;
  font-size: 50px;
  font-weight: 700;
`;

const UserWrap = styled.div`
  padding-right: 5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 4rem;
`;
const UserIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;
const UserNum = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-left: 1rem;
  text-align: center;

  color: #ffffff;
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
          <UserWrap>
            <UserIcon src={usericon} alt="" />
            <UserNum>12</UserNum>
          </UserWrap>
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
