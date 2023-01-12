import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import blackboard from '../Image/image2.png';
import Memo from './RollingMemo';
import pencilicon from '../Image/pencilicon.png';
import galleryicon from '../Image/galleryicon.png';
import memoicon from '../Image/memoicon.svg';
import usericon from '../Image/usericon.png';

const [items, setItems] = useState('');

const SketchBookImg = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-image: url(${blackboard});
  margin: 0 auto;
  background-size: contain;
`;

const AllWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  z-index: 90;
`;
const MyPageBtn = styled.button`
  margin: 2% 11% 0 auto;
  z-index: 100;
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
  height: 50rem;
  width: 80rem;
  margin: 0 auto;
`;

const IconBtn = styled.button`
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  z-index: 100;
`;

const IconWrap = styled.div`
  padding-right: 5rem;
  height: 2rem;
  display: flex;
  align-items: end;
  padding-bottom: 5rem;
  justify-content: flex-end;
  flex-direction: column;
`;
const Container = styled.div`
  //메모가 움직이는 영역입니다.
  height: calc(100vh - 50px);
  width: calc(100vw - 50px);
  padding: 20px;
  position: absolute;
`;

const getMemos = async () => {
  try {
    const memos = await axios.get('http://127.0.0.1:8080/api/v1/papers/1/1');
    console.log('successGet');
    setItems(memos);
  } catch (e) {
    // 서버에서 받은 에러 메시지 출력
    console.log(e);
  }
};

function Rolling() {
  getMemos();
  console.log(items);
  return (
    <div className="rolling">
      <SketchBookImg>
        <AllWrap>
          <Container>
            <Memo />
          </Container>

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
