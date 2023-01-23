import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import anonymous from './anonymous';

import sketchbook from '../Image/Sketchbook2.png';
import pencil from '../Image/pencil.png';

const InputWrap = styled.div`
  // 내용제한, 스케치북 이미지 묶음

  /* height: 60rem; */
  background-color: #fcedb0;
  flex-grow: 0.8;
`;
const Text = styled.div`
  //내용은 최대 40자 까지 입력가능합니다
  width: 55rem;
  /* background-color: red; */
  /* height: 1vh; */
  font-size: 3vh;
  font-weight: 800;
  font-family: 'Cafe24Ssurround';
  // 스캐치북 위에 올리기
  padding-left: 7rem;
  padding-top: 8rem;
  color: black;
  display: block;
`;

const SketchbookImg = styled.div`
  //스케치북 이미지
  width: 60rem;
  height: 33rem;
  margin-top: 2rem;
  /* background-size: 80rem 25rem; */
  background-size: 100% 100%;
  background-image: url(${sketchbook});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Error = styled(ErrorMessage)`
  color: red;
  text-align: center;
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

const PencilImg = styled.img`
  width: 5rem;
  height: 5rem;

  // 스캐치북 위에 올리기
  /* position: absolute; */
  /* transform: translate(-50%, -50%); */
  /* padding-top: 7rem; */
  /* margin-left: 46.5vw; */
`;

const MakeBtn = styled.button`
  width: 8rem;
  border-radius: 1rem;
  font-size: 2.5rem;
  font-weight: 800;
  // 스캐치북 위에 올리기
  font-family: 'Cafe24Ssurround';
  color: white;
  text-shadow: 1.5px 1.5px 1.5px gray;
  -webkit-text-stroke-width: 1.1px;
  -webkit-text-stroke-color: black;
`;

const BtnWrap = styled.div`
  //만들기랑 연필 이미지 버튼 감싸줌
  display: flex;
  justify-content: center;
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
              <Error component="div" name="text" className="invalid-feedback" />
            </SketchbookImg>
            <BtnWrap>
              <PencilImg src={pencil} />
              <MakeBtn type="submit">만들기</MakeBtn>
            </BtnWrap>
          </InputWrap>
        </Form>
      )}
    </Formik>
  );
}

export default MemoText;
