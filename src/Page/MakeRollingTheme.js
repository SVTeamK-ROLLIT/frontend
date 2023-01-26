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

const backBaseUrl = process.env.REACT_APP_BACKEND_URL;

const Container = styled.div``;

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
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    margin-bottom: 0.3rem;
    /* margin-left: -0.7rem; */
  }
  .slick-arrow {
    display: flex;
    z-index: 1;
    height: 1vw;
    /* right: 1vw; */
    position: absolute;
    width: 60vw;
  }
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 27vw;
  height: 30vh;
  margin-left: 33vw;
  z-index: 10;
`;

const Count = styled.button`
  height: 20vh;
  font-size: 40px;
  font-weight: 1000;
  color: #fff;
  text-align: center;
  display: block;
  margin: auto;
  margin-top: 2rem;
  font-family: 'Cafe24Ssurround';
  text-shadow: 1.5px 1.5px 1.5px gray;
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: black;
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

const imgUrl = require('../Image/image1.png');
const imgUrl2 = require('../Image/image2.png');
const imgUrl3 = require('../Image/image3.png');
const imgUrl4 = require('../Image/image4.png');
const imgUrl5 = require('../Image/image5.png');

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
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      beforeChange: (current, next) =>
        this.setState({ oldSlide: current, activeSlide: next }),
    };
    const submit = async () => {
      const userId = localStorage.getItem('id');
      console.log(userId);

      try {
        const { data } = await axios.post(
          `${backBaseUrl}/api/v1/users/${userId}/papers`,
          {
            user_id: userId,
            paper_url: this.state.activeSlide + 1,
            title: this.state.value,
          },
        );
        console.log('success');
        console.log(data.paper_id);
        this.props.navigate(`/rolling/${data.paper_id}`);
      } catch (e) {
        // 서버에서 받은 에러 메시지 출력
        console.log('fail');
      }
    };

    return (
      <Container>
        {console.log(this.state.value)}
        <ToTitleWrap>
          <To>To.</To>
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
          <strong>테마 {this.state.activeSlide + 1}</strong>
          <br />
          만들어보기
        </Count>
        {console.log(this.state.activeSlide + 1)}
      </Container>
    );
  }
}

export default withNavigation(SimpleSlider);
