import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import styled from 'styled-components';

import './Background.css';
import SketchBook from './MyPageSketch';
import Line from './MyPageLine';
import MyPageItems from './MyPageItems';

function MyPage() {
  const userId = localStorage.getItem('id');
  const [myRollPageData, setMyRollPageData] = useState();

  useEffect(() => {
    const GetPapers = async () => {
      try {
        const datas = await axios.get(
          `http://127.0.0.1:8080/api/v1/users/${userId}`,
        );
        // eslint-disable-next-line
        console.log('successGet');
        setMyRollPageData(datas.data);
      } catch (e) {
        // 서버에서 받은 에러 메시지 출력
        // eslint-disable-next-line
        console.log(e);
      }
    };
    GetPapers();
  }, []);
  // eslint-disable-next-line
  // console.log(myRollPageData);
  return (
    <div className="mypage">
      <SketchBook myRollPageData={myRollPageData} />
      <Line myRollPageData={myRollPageData} />
      <MyPageItems />
    </div>
  );
}

export default MyPage;
