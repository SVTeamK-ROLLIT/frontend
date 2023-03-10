/* eslint-disable no-nested-ternary */
import React, { useCallback, useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';
import { FcExpand, FcCancel } from 'react-icons/fc';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Loading from '../../component/Loading';

import image1 from '../../assets/image/image1.png';
import image2 from '../../assets/image/image2.png';
import image3 from '../../assets/image/image3.png';
import image4 from '../../assets/image/image4.png';
import image5 from '../../assets/image/image5.png';
import PhotoModal from '../PhotoModal';
import Memo from './RollingMemo';
import Sticky from './RollingSticky';
import Photo from './RollingPhoto';
import NewMemo from './newMemo';
import NewSticky from './NewSticky';
import NewPhoto from './NewPhoto';

import pencilicon from '../../assets/image/pencilicon.png';
import galleryicon from '../../assets/image/galleryicon.png';
import memoicon from '../../assets/image/memoicon.svg';
import usericon from '../../assets/image/usericon.png';
import StickerModal from '../StickerModal';
import 'react-toastify/dist/ReactToastify.css';

import userback from '../../assets/image/userbackimg.png';

import '../../style/snow.css';

import KakaoShare from '../../component/KakaoShare';

const backBaseUrl = process.env.REACT_APP_BACKEND_URL;

const SketchBookImg = styled.div`
  background-repeat: no-repeat;
  width: 95rem;
  background-image: url(${props => props.bgimage});
  margin: 0 auto;
  background-position: center;
  background-repeat: no-repeat;
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
  margin: 2% 7% 0 auto;
  z-index: 50;
  height: 4rem;
  display: block;
  width: 12rem;
  font-size: 40px;
  font-weight: 700;
  font-family: 'Cafe24Ssurround';
  color: white;
  text-shadow: 2px 2px 1.5px gray;
  -webkit-text-stroke-width: 1.2px;
  -webkit-text-stroke-color: black;
`;
const Text = styled.div`
  margin: 0 auto;
  height: 3rem;
  margin-top: -1rem;
  color: whitesmoke;
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  font-family: 'Cafe24Ssurround';
  z-index: 999;
  text-shadow: 2px 2px 1.7px gray;
  -webkit-text-stroke-width: 1.2px;
  -webkit-text-stroke-color: black;
`;

const UserWrap = styled.div`
  margin: 1rem 5rem auto auto;
  /* height: 10rem; */
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${userback});
  background-size: 17rem;
  background-repeat: no-repeat;
  width: 9rem;
  height: 5rem;
  z-index: 10000;
  /* background-color: red; */
  background-position: center;
  /* z-index: 100; */
`;
const UserIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;
const UserNum = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 4rem;
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

const KakaoIconWrap = styled.div`
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
`;
const Container = styled.div`
  //????????? ???????????? ???????????????.
  height: 61rem;
  width: 90rem; // ????????? ?????? ??????
  position: absolute;
`;

const SaveBtn = styled.button`
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  z-index: 50;
`;

const CancelBtn = styled.button`
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  z-index: 50;
`;

const KakaoBtnWrap = styled.div`
  position: fixed;

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

const IconWrap = styled.div`
  background: #292c33;
  position: fixed;
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
  right: 3%;
  bottom: 5%;
  transform: translate(0%, 0%);
`;

//

// const [background, setBackground] = useState();

function Rolling() {
  const [rawLog, setRawLog] = useState();

  const location = useLocation();
  const navigate = useNavigate();
  const [backgroundImg, setBackgroundImg] = useState();
  function bgimage(paperUrl) {
    if (paperUrl === '1') {
      setBackgroundImg(image1);
    } else if (paperUrl === '2') {
      setBackgroundImg(image2);
    } else if (paperUrl === '3') {
      setBackgroundImg(image3);
    } else if (paperUrl === '4') {
      setBackgroundImg(image4);
    } else if (paperUrl === '5') {
      setBackgroundImg(image5);
    }
  }

  const paperId = location.pathname.slice(9); // ?????? url?????? paperId??? ?????????
  // ?????????
  const [coor, setCoor] = useState({}); // x?????? y?????? ???????????? ??????
  const [isPhotoOpen, setIsPhotoOpen] = useState(false); // ?????? ???????????? ????????????????
  const [isStickyOpen, setIsStickyOpen] = useState(false); // ????????? ???????????? ????????????????
  const [isMemo, setIsMemo] = useState(false); // ????????? ????????????????
  const [isSticky, setIsSticky] = useState(false); // ????????? ????????????????
  const [isPhoto, setIsPhoto] = useState(false); // ?????? ????????????????
  const [isActive, setIsActive] = useState(false); // ?????????, ??????, ???????????? ??????????????? ??????
  const [sticky, setSticky] = useState(); // ????????? ID??????
  const [skickyUrl, setStickyUrl] = useState(); // ????????? ?????? ??????
  const [photo, setPhoto] = useState();
  const [deleteAction, setDeleteAction] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [memoData, setMemoData] = useState({});
  const [items, setItems] = useState([]); // ????????? ???????????? get?????? ???????????? ?????? item
  const [length, setLength] = useState(); // ?????????, ??????, ????????? ????????? ????????? ????????????

  const dataApi = async () => {
    try {
      const item = await axios.get(`${backBaseUrl}/api/v1/papers/${paperId}/`);
      // ###???????????? ????????? ????????? ?????? IsAdmin?????????!#######
      if (item.data.user === localStorage.getItem('id')) {
        setIsAdmin(true);
      }
      // /###########################
      setItems(item.data);
      setLength(
        item.data.memo.length +
          item.data.image.length +
          item.data.sticker.length,
      );
    } catch (e) {
      // ???????????? ?????? ?????? ????????? ??????
    }
  };

  useEffect(() => {
    const polling = setInterval(() => {
      dataApi();
    }, 2000);

    // ???????????? ????????? ?????? polling X
    return () => {
      clearInterval(polling);
    };
  }, []);

  useEffect(() => {
    // ????????? ###?????????#### ????????? ???????????????
    if (localStorage.getItem('textcase') !== null) {
      setIsMemo(true);
      setIsActive(true);
      const textcaseString = localStorage.getItem('textcase');
      const textcase = JSON.parse(textcaseString);
      setMemoData({
        content: textcase.textcase.content,
        nickname: textcase.textcase.nickname,
        font: textcase.textcase.font,
        password: textcase.textcase.password,
        color: textcase.textcase.color,
        font_color: textcase.textcase.fontColor,
      });
      localStorage.removeItem('textcase');
    }
  }, []);

  useEffect(() => {}, [memoData]);
  const openPhotoModal = useCallback(() => setIsPhotoOpen(true), []); // ?????? ????????? ??????
  const closePhotoModal = useCallback(() => setIsPhotoOpen(false), []); // ?????? ????????? ??????
  const openStickyModal = useCallback(() => setIsStickyOpen(true), []); // ????????? ????????? ??????
  const closeStickyModal = useCallback(() => setIsStickyOpen(false), []); // ????????? ????????? ??????

  // ????????? ?????? ???????????? ??????
  const openMemo = useCallback(() => {
    localStorage.removeItem('paperId');
    localStorage.setItem('paperId', paperId);
    navigate('/Memo');
  }, []);

  const HandleMemoDelete = useCallback(id => {
    axios
      .post(`${backBaseUrl}/api/v1/papers/memos/${id}`, {
        password: '1',
      })
      .then(() => {
        setDeleteAction(true);
      });
  }, []);
  const HandleStickyDelete = useCallback(id => {
    axios
      .post(`${backBaseUrl}/api/v1/papers/stickers/${id}`, {
        password: '1',
      })
      .then(() => {
        setDeleteAction(true);
      });
  }, []);

  const HandlePhotoDelete = useCallback(id => {
    axios
      .post(`${backBaseUrl}/api/v1/papers/images/${id}`, {
        password: '1234',
      })
      .then(() => {
        setDeleteAction(true);
      });
  }, []);

  // post??? ###?????????### ????????????, ??????, ???, ?????? ?????? ???????????? ????????????
  const submitMemo = async a => {
    if (a) {
      // ?????? ????????? ????????? ??????
      setIsMemo(false); // ???????????? ????????????
      setIsActive(false); // ???????????? ????????????
      // setIsCancel(false);
      return;
    }

    try {
      await axios.post(
        `${backBaseUrl}/api/v1/papers/${paperId}/memos`,
        memoData,
      );

      setIsMemo(false); // ???????????? ????????????
      setIsActive(false); // ???????????? ????????????
    } catch (e) {
      // ???????????? ?????? ?????? ????????? ??????
    }
  };

  const submitSticky = async a => {
    try {
      if (a) {
        // ?????? ????????? ????????? ??????
        setIsSticky(false); // ??????????????? ????????????
        setIsActive(false); // ???????????? ????????????
        return;
      }
      await axios.post(`${backBaseUrl}/api/v1/papers/${paperId}/stickers`, {
        default_sticker_id: sticky,
        password: '1',
        xcoor: coor.x,
        ycoor: coor.y,
        rotate: 30,
      });

      setIsSticky(false); // ????????? ?????? ????????????
      setIsActive(false); // ?????? ?????? ????????????
    } catch (e) {
      // ???????????? ?????? ?????? ????????? ??????
    }
  };

  const submitPhoto = a => {
    if (a) {
      // ?????? ????????? ????????? ??????
      setIsPhoto(false); // ???????????? ????????????
      setIsActive(false); // ???????????? ????????????
      setPhoto('');
      HandlePhotoDelete(photo.image_id);
      return;
    }
    // if (photo === '') {
    //   setIsPhoto(false); // ???????????? ????????????
    //   setIsActive(false); // ???????????? ????????????
    // }

    setLoading(true);

    axios
      .post(`${backBaseUrl}/api/v1/papers/${paperId}/xyphotos`, {
        image_id: photo.image_id,
        password: '1234',
        xcoor: coor.left2,
        ycoor: coor.top2,
        rotate: coor.rotate2,
        width: coor.width2,
        height: coor.height2,
      })
      .then(() => {
        setIsPhoto(false); // ?????? ?????? ????????????
        setIsActive(false); // ?????? ?????? ????????????
        setPhoto('');
        setLoading(false);
      })
      .catch(() => {
        setLoading(true);
      });
  };

  useEffect(() => {
    const getMemos = async () => {
      try {
        const item = await axios.get(
          `${backBaseUrl}/api/v1/papers/${paperId}/`,
        );
        // ###???????????? ????????? ????????? ?????? IsAdmin?????????!#######
        if (item.data.user === localStorage.getItem('id')) {
          setIsAdmin(true);
        }
        // /###########################
        setItems(item.data);
        setLength(
          item.data.memo.length +
            item.data.image.length +
            item.data.sticker.length,
        );
        bgimage(item.data.paper_url);
      } catch (e) {
        // ???????????? ?????? ?????? ????????? ??????
      }
      setDeleteAction(false);
    };
    getMemos();
  }, [isActive, deleteAction]);

  const parentFunction = positon => {
    setCoor(positon);
  };

  // ??????????????????????????? ??????????????? ?????? ?????? ?????? ????????? ????????? ????????? ???????????? ??????
  function isItem() {
    return isMemo ? (
      <NewMemo setCoor={setCoor} setMemoData={setMemoData} list={memoData} />
    ) : isSticky ? (
      <NewSticky
        setCoor={setCoor}
        setMemoData={setMemoData}
        skickyUrl={skickyUrl}
      />
    ) : isPhoto ? (
      <NewPhoto
        parentFunction={parentFunction}
        photo={photo}
        rawLog={rawLog}
        setRawLog={setRawLog}
      />
    ) : (
      <div />
    );
  }

  // ??????????????????????????? ??????????????? ???????????? ?????? post??? ????????? ???????????? ??????
  function isSubmit(a) {
    return isMemo ? (
      submitMemo(a)
    ) : isSticky ? (
      submitSticky(a)
    ) : isPhoto ? (
      submitPhoto(a)
    ) : (
      <div />
    );
  }
  return (
    <SketchBookImg className="snow" bgimage={backgroundImg}>
      <Snowfall />
      {loading ? (
        <Loading />
      ) : (
        <AllWrap>
          <Container>
            {items.memo &&
              items.memo.map(list => {
                return (
                  <Memo
                    isAdmin={isAdmin}
                    list={list}
                    key={list.memo_id}
                    HandleMemoDelete={HandleMemoDelete}
                  />
                );
              })}
            {items.sticker &&
              items.sticker.map(list => {
                return (
                  <Sticky
                    isAdmin={isAdmin}
                    list={list}
                    key={list.sticker_id}
                    HandleStickyDelete={HandleStickyDelete}
                  />
                );
              })}
            {items.image &&
              items.image.map(list => {
                return (
                  <Photo
                    isAdmin={isAdmin}
                    list={list}
                    key={list.image_id}
                    HandlePhotoDelete={HandlePhotoDelete}
                  />
                );
              })}
            {isItem()}
          </Container>
          {isAdmin ? (
            <MyPageBtn onClick={() => navigate('/mypage')}>
              ???????????????
            </MyPageBtn>
          ) : (
            <MyPageBtn onClick={() => navigate('/')}>?????????</MyPageBtn>
          )}

          <Text>TO. {items.title}</Text>
          <UserWrap bgimage={userback}>
            <UserIcon src={usericon} alt="" />
            <UserNum>{length}</UserNum>
          </UserWrap>
          <MemoWrap />
          {isActive ? (
            <IconWrap height="8rem">
              <SaveBtn
                onClick={() => {
                  isSubmit();
                }}
              >
                <FcExpand size="30" />
              </SaveBtn>
              <CancelBtn
                onClick={() => {
                  isSubmit(true);
                }}
              >
                <FcCancel size="30" />
              </CancelBtn>
            </IconWrap>
          ) : (
            <KakaoBtnWrap>
              <KakaoShare />
              <KakaoIconWrap height="10rem">
                <IconBtn onClick={openMemo}>
                  <img src={pencilicon} alt="" />
                </IconBtn>
                <PhotoModal
                  isOpen={isPhotoOpen}
                  closeModal={closePhotoModal}
                  setIsActive={setIsActive}
                  setIsPhoto={setIsPhoto}
                  setPhoto={setPhoto}
                  setLoading={setLoading}
                />
                <IconBtn
                  type="button"
                  value="Open modal"
                  onClick={openPhotoModal}
                >
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
                <IconBtn
                  type="button"
                  value="Open modal"
                  onClick={openStickyModal}
                >
                  <img src={memoicon} alt="" />
                </IconBtn>
              </KakaoIconWrap>
            </KakaoBtnWrap>
          )}
        </AllWrap>
      )}
    </SketchBookImg>
  );
}

export default Rolling;
