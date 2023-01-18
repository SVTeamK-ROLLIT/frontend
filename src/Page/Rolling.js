import React, { useCallback, useEffect, useState } from 'react';
import { FcExpand } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import PhotoModal from './FilePondTemplate';
import Memo from './RollingMemo';
import NewMemo from './newMemo';
import NewSticky from './NewSticky';
import blackboard from '../Image/image4.png';
import pencilicon from '../Image/pencilicon.png';
import galleryicon from '../Image/galleryicon.png';
import memoicon from '../Image/memoicon.svg';
import usericon from '../Image/usericon.png';
import StickerModal from './StickerModal';

const SketchBookImg = styled.div`
  background-repeat: no-repeat;
  width: 90rem;
  background-image: url(${blackboard});
  margin: 0 auto;
  background-size: cover;
  /* background-position: center; */
`;

const AllWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  width: 100%;
  z-index: 50;
`;
const MyPageBtn = styled.button`
  margin: 2% 11% 0 auto;
  z-index: 50;
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
  margin-right: 1rem;
  z-index: 100;
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
  z-index: 10000;
`;

const IconWrap = styled.div`
  position: fixed;
  background: #292c33;
  border-radius: 100px;
  padding: 0.2rem;
  margin-top: 1rem;
  /* width: 12rem; */
  text-align: center;
  height: ${props => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1000;
  right: 3%;
  bottom: 5%;
  transform: translate(0%, 0%);
`;
const Container = styled.div`
  //메모가 움직이는 영역입니다.
  height: 63rem;
  width: 90rem; // 배경과 같은 너비
  position: absolute;
`;

// const SaveWrap = styled.div`
//   padding-right: 5rem;
//   height: 2rem;
//   display: flex;
//   align-items: end;
//   padding-bottom: 5rem;
//   justify-content: flex-end;
//   flex-direction: column;
// `;
const SaveBtn = styled.button`
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  z-index: 50;
`;

function Rolling() {
  const navigate = useNavigate();

  // 모달창
  const [coor, setCoor] = useState({}); // x좌표 y좌표 저장하는 상태
  const [isPhotoOpen, setIsPhotoOpen] = useState(false); // 사진 모달창이 열려있는가?
  const [isStickyOpen, setIsStickyOpen] = useState(false); // 스티커 모달창이 열려있는가?
  const [isMemo, setIsMemo] = useState(false); // 메모지 수정중인가?
  const [isSticky, setIsSticky] = useState(false); // 스티커 수정중인가?
  const [isActive, setIsActive] = useState(false); // 스티커, 사진, 메모지가 수정중인지 확인
  const [sticky, setSticky] = useState();
  const [skickyUrl, setStickyUrl] = useState();
  console.log(setIsSticky);
  console.log(sticky);

  useEffect(() => {
    // 로컬에 메모지 내용이 들어있으면
    if (localStorage.getItem('textcase') !== null) {
      setIsMemo(true);
      setIsActive(true);
    }
  }, []);

  const openPhotoModal = useCallback(() => setIsPhotoOpen(true), []);
  const closePhotoModal = useCallback(() => setIsPhotoOpen(false), []);
  const openStickyModal = useCallback(() => setIsStickyOpen(true), []);
  const closeStickyModal = useCallback(() => setIsStickyOpen(false), []);
  const openMemo = useCallback(() => {
    navigate('/Memo');
  }, []);

  // post로 메모지 최종좌표, 위치, 색, 폰트 등을 백엔드로 보내준다
  const submitSave = async () => {
    const textcaseString = localStorage.getItem('textcase');
    const textcase = JSON.parse(textcaseString);
    textcase.textcase.xcoor = coor.x;
    textcase.textcase.ycoor = coor.y;
    try {
      await axios.post('http://127.0.0.1:8080/api/v1/papers/1/memos', {
        content: textcase.textcase.content,
        nickname: textcase.textcase.nickname,
        font: textcase.textcase.font,
        password: textcase.textcase.password,
        color: textcase.textcase.color,
        font_color: textcase.textcase.fontColor,
        xcoor: textcase.textcase.xcoor,
        ycoor: textcase.textcase.ycoor,
      });

      console.log('successSave!!!!');
      setIsMemo(false);
      setIsActive(false);
      localStorage.removeItem('textcase');
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      console.log(e);
    }
  };

  const submitSticky = async () => {
    try {
      await axios.post('http://127.0.0.1:8080/api/v1/papers/1/stickers', {
        default_sticker_id: sticky,
        password: '1',
        xcoor: 12,
        ycoor: 12,
        rotate: 30,
      });

      console.log('successSticky!!!!');
      setIsSticky(false);
      setIsActive(false);
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      console.log(e);
    }
  };

  // 모닫창
  const [items, setItems] = useState([]); // 화면에 스티커들 get으로 받아오기 위한 item
  useEffect(() => {
    const getMemos = async () => {
      try {
        const memos = await axios.get(
          'http://127.0.0.1:8080/api/v1/papers/1/1',
        );
        console.log('successGet');
        setItems(memos.data);
        console.log(memos.data);
      } catch (e) {
        // 서버에서 받은 에러 메시지 출력
        console.log('FailGet');
      }
    };
    getMemos();
  }, []);

  // 스티커?메모지?사진? 확인해주기
  function isItem() {
    // eslint-disable-next-line no-nested-ternary
    return isMemo ? (
      <NewMemo
        setCoor={setCoor}
        list={JSON.parse(localStorage.getItem('textcase')).textcase}
      />
    ) : isSticky ? (
      <NewSticky setCoor={setCoor} skickyUrl={skickyUrl} />
    ) : (
      <div />
    );
  }
  function isSubmit() {
    // eslint-disable-next-line no-nested-ternary
    return isMemo ? submitSave() : isSticky ? submitSticky() : <div />;
  }

  return (
    <SketchBookImg>
      <AllWrap>
        <Container>
          {items.memo &&
            items.memo.map(list => {
              // console.log(list);
              return <Memo list={list} key={list.id} />;
            })}
          {isItem()}
        </Container>

        <MyPageBtn>마이페이지</MyPageBtn>
        <Text>to.Team_k</Text>
        <UserWrap>
          <UserIcon src={usericon} alt="" />
          <UserNum>12</UserNum>
        </UserWrap>
        <MemoWrap />
        {isActive ? (
          <IconWrap height="5rem">
            <SaveBtn
              onClick={() => {
                isSubmit();
              }}
            >
              <FcExpand size="30" />
            </SaveBtn>
          </IconWrap>
        ) : (
          <IconWrap height="10rem">
            <IconBtn onClick={openMemo}>
              <img src={pencilicon} alt="" />
            </IconBtn>
            <PhotoModal isOpen={isPhotoOpen} closeModal={closePhotoModal} />
            <IconBtn type="button" value="Open modal" onClick={openPhotoModal}>
              <img src={galleryicon} alt="" />
            </IconBtn>
            <StickerModal
              isOpen={isStickyOpen}
              closeModal={closeStickyModal}
              setSticky={setSticky}
              setStickyUrl={setStickyUrl}
              setIsActive={setIsActive}
              setIsSticky={setIsSticky}
            />
            <IconBtn type="button" value="Open modal" onClick={openStickyModal}>
              <img src={memoicon} alt="" />
            </IconBtn>
          </IconWrap>
        )}
      </AllWrap>
    </SketchBookImg>
  );
}

export default Rolling;
