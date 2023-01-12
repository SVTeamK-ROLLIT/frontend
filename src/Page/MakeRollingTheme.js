/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
  .slick-arrow {
    display: flex;
    z-index: 1;
    height: 1vw;
    position: absolute;
    right: 1vw;
    width: 60vw;
  }
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 27vw;
  height: 30vh;
  margin-left: 33vw;
`;

const Text = styled.button`
  width: 30vw;
  height: 10vh;
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-top: 5vh;
  margin-left: 35vw;
  font-family: 'Cafe24Ssurround';
  text-shadow: 1.5px 1.5px 1.5px gray;
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: black;
`;

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

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
    };
    return (
      <Container>
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
        <Text>생성하기</Text>
      </Container>
    );
  }
}
