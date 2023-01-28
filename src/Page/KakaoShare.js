import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

// const kakaoJSKey = process.env.REACT_APP_KAKAO_KEY;

const KakaoShareBtn = styled.button`
  width: 10rem;
  height: 10rem;
  background-color: red;
  z-index: 10000;
`;

function KakaoShare() {
  // console.log('@@@@@@@@@@@@@@@@@@@', kakaoJSKey);
  const location = useLocation();
  useEffect(() => {
    // 카카오톡 sdk 추가
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);
  useEffect(() => {
    console.log(location);
  }, [location]);

  const shareToKatalk = () => {
    // kakao sdk script 부른 후 window.Kakao로 접근
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      // 카카오에서 제공하는 javascript key를 이용하여 initialize
      if (!kakao.isInitialized()) {
        kakao.init('932d42a6d9c967d3266939228757275f');
      }

      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '당신의 말을 익명으로 전달하세요',
          description: '버튼을 누르면 사이트로 이동합니다',
          imageUrl:
            'https://sangwon-bucket.s3.ap-northeast-1.amazonaws.com/rollit',
          link: {
            mobileWebUrl: `http://www.rollit5.link`,
            webUrl: `http://www.rollit5.link`,
            // mobileWebUrl: `http://localhost:3000`,
            // webUrl: `http://localhost:3000`,
          },
        },
        buttons: [
          {
            title: '작성하러가기',
            link: {
              mobileWebUrl: `http://www.rollit5.link${location.pathname}`,
              webUrl: `http://www.rollit5.link${location.pathname}`,
            },
          },
        ],
      });
    }
  };

  return <KakaoShareBtn onClick={shareToKatalk} />;
}

export default KakaoShare;
