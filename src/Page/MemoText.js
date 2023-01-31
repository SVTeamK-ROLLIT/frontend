import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import anonymous from './anonymous';

import sketchbook from '../Image/Sketchbook2.png';

const Div = styled.div`
  flex-grow: 3;
  display: flex;
  justify-content: center;
`;

const InputWrap = styled.div`
  // 내용제한, 스케치북 이미지 묶음
  /* background-color: #fcedb0; */
`;
const Text = styled.div`
  //내용은 최대 40자 까지 입력가능합니다
  width: 45rem;
  /* background-color: red; */
  /* height: 1vh; */
  font-size: 2rem;
  text-align: center;
  font-family: 'Cafe24Ssurround';
  // 스캐치북 위에 올리기
  padding-left: 6rem;
  padding-top: 5rem;
  color: white;
  display: block;
  text-shadow: 2px 2px 2px gray;
  -webkit-text-stroke-width: 1.2px;
  -webkit-text-stroke-color: black;
  @media (max-width: 800px) {
    padding-left: 5rem;
    width: 60rem;
  } ;
`;

const SketchbookImg = styled.div`
  //스케치북 이미지
  width: 50rem;
  height: 29rem;
  margin-top: 0rem;
  /* background-size: 80rem 25rem; */
  background-size: 100% 100%;
  background-image: url(${sketchbook});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 43rem;
    margin: auto;
  } ;
`;

const Error = styled(ErrorMessage)`
  color: red;
  text-align: center;
  font-family: ${props => props.pontType};
`;
const InputMemo = styled(Field)`
  //메모 입력하는 곳
  width: 17rem;
  height: 15rem;
  background-color: ${props => props.bkcolor};
  color: ${props => props.tycolor};
  font-family: ${props => props.pontType};
  border-radius: 5%;
  margin: 0 auto;
  font-size: 1.5rem;
  border: 0 solid black;
  padding: 1rem;
  resize: none;
`;

const MakeBtn = styled.button`
  width: 10rem;
  height: 7rem;
  border-radius: 1rem;
  font-size: 2.5rem;
  // 스캐치북 위에 올리기
  font-family: 'Cafe24Ssurround';
  color: white;

  margin-bottom: 5rem;
`;

const BtnWrap = styled.div`
  //만들기랑 연필 이미지 버튼 감싸줌
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

function MemoText({
  // memoContent,
  // setMemoContent,
  memoName,
  pontType,
  rollBackColor,
  rollTypeColor,
}) {
  const navigate = useNavigate();

  const submit = async values => {
    const textcase = {
      content: values.text,
      nickname: memoName,
      font: pontType,
      color: rollBackColor,
      fontColor: rollTypeColor,
      password: 1,
    };
    console.log(textcase);
    if (textcase.nickname === '') {
      textcase.nickname = anonymous();
    }
    localStorage.removeItem('textcase');
    localStorage.setItem('textcase', JSON.stringify({ textcase }));
    const paperId = localStorage.getItem('paperId');
    navigate(`/rolling/${paperId}`);
  };
  // const handleInputChange = e => {
  //   setMemoContent(e.target.value);
  //   // eslint-disable-next-line
  //   console.log('작성내용: ', memoContent);
  // };
  const MemoSchema = Yup.object().shape({
    text: Yup.string().max(40, '40자가 넘었습니다!').required('비어있습니다!'),
  });

  return (
    <Div>
      <Formik
        initialValues={{
          text: '',
        }}
        validationSchema={MemoSchema}
        onSubmit={submit}
      >
        {({ values, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <InputWrap>
              <Text>내용은 최대 40자 까지 입력이 가능합니다.</Text>
              <SketchbookImg>
                <InputMemo
                  value={values.text}
                  name="text"
                  bkcolor={rollBackColor}
                  tycolor={rollTypeColor}
                  pontType={pontType}
                  onChange={handleChange}
                  component="textarea" // 안해주면 defaul #input으로 적용돼서 줄바꿈이 안됨
                  placeholder="내용을 입력해주세요"
                />
                <Error
                  component="div"
                  name="text"
                  className="invalid-feedback"
                  pontType={pontType}
                />
              </SketchbookImg>
              <BtnWrap>
                <MakeBtn type="submit" className="learn-more">
                  만들기
                </MakeBtn>
              </BtnWrap>
            </InputWrap>
          </Form>
        )}
      </Formik>
    </Div>
  );
}

export default MemoText;
