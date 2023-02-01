/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../../style/button.css';

const backBaseUrl = process.env.REACT_APP_BACKEND_URL;

const Container = styled.div`
  background-color: red;
`;

const To = styled.div`
  width: 50rem;
  font-size: 50px;
  font-weight: 700;
  color: #000;
  margin: auto;
`;

const TitleInput = styled.input`
  width: 50rem;
  height: 3.3rem;
  padding: 1rem;
  margin: auto;
  background: #ffffff;
  box-shadow: 2.5px 2.5px 2.5px 2.5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: block;
  &:focus {
    outline: none;
  }
  font-size: 24px;
  font-weight: 700;
  ::placeholder {
    color: #d9d9d9;
  }
`;

const ToTitleWrap = styled.div`
  margin: auto;
  margin-bottom: 3rem;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
    margin-bottom: 1rem;
  }
  .slick-arrow {
    display: flex;
    z-index: 1;
    height: 1vh;
    /* right: 1vw; */
    width: 60vw;
  }
  .slick-next:before {
    color: orangered;
    position: relative;
    width: 20rem;
  }
  .slick-prev:before {
    color: orangered;
    position: relative;
    width: 20rem;
  }
  .slick-dots {
    display: flex;
    justify-content: center;
    bottom: 5px;
    li button:before {
      color: orangered;
    }
  }
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 25vw;
  height: 30vh;
  margin-left: 34vw;
  z-index: 10;
`;

const Count = styled.button`
  height: 10vh;
  font-size: 2rem;
  font-weight: 1000;
  color: #fff;
  text-align: center;
  display: block;
  margin: auto;
  margin-top: 1rem;
  font-family: 'Cafe24Ssurround';
`;

// const Text = styled.button`
//   width: 30vw;
//   font-size: 40px;
//   font-weight: 700;
//   color: #fff;
//   text-align: center;
//   margin-left: 35vw;
//   font-family: 'Cafe24Ssurround';
//   text-shadow: 1.5px 1.5px 1.5px gray;
//   -webkit-text-stroke-width: 1.3px;
//   -webkit-text-stroke-color: black;
// `;

const imgUrl = require('../../assets/image/image1.png');
const imgUrl2 = require('../../assets/image/image2.png');
const imgUrl3 = require('../../assets/image/image3.png');
const imgUrl4 = require('../../assets/image/image4.png');
const imgUrl5 = require('../../assets/image/image5.png');

const items = [
  { id: 1, url: imgUrl },
  { id: 2, url: imgUrl2 },
  { id: 3, url: imgUrl3 },
  { id: 4, url: imgUrl4 },
  { id: 5, url: imgUrl5 },
];

// eslint-disable-next-line no-shadow
function withNavigation(Component) {
  return function (props) {
    return <Component {...props} navigate={useNavigate()} />;
  };
}

class SimpleSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oldSlide: 0,
      activeSlide: 0,
      activeSlide2: 0,
      value: '',
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1300,
      slidesToShow: 1,
      fade: true,
      // autoplay: true,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      beforeChange: (current, next) =>
        this.setState({ oldSlide: current, activeSlide: next }),
    };
    const submit = async () => {
      const userId = localStorage.getItem('id');

      try {
        const { data } = await axios.post(
          `${backBaseUrl}/api/v1/users/${userId}/papers`,
          {
            user_id: userId,
            paper_url: this.state.activeSlide + 1,
            title: this.state.value,
          },
        );
        this.props.navigate(`/rolling/${data.paper_id}`);
      } catch (e) {
        // 서버에서 받은 에러 메시지 출력
      }
    };

    return (
      <Container>
        <ToTitleWrap>
          <To> </To>
          <TitleInput
            type="text"
            name="message"
            placeholder="제목을 입력해주세요"
            onChange={e => {
              this.setState({ value: e.target.value });
            }}
          />
        </ToTitleWrap>

        <StyledSlider {...settings}>
          {items.map(item => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image src={item.url} />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
        <Count type="submit" onClick={submit}>
          <button type="button" className="learn-more">
            테마 {this.state.activeSlide + 1}
            <br /> SELECT
          </button>
        </Count>
      </Container>
    );
  }
}

export default withNavigation(SimpleSlider);
