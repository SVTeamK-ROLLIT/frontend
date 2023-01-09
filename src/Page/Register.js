import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './Background.css';

import ID from '../Image/ID.png';
import PW from '../Image/PW.png';

// 배경화면을 꽉 채워주기 위한 divx태그입니다
const Background = styled.div`
  width: 100vw;
  height: 100vh;
`;

// 회원가입 Text를 감싸줍니다
const TextWrap = styled.div`
  text-align: center; /*"회원가입"을 가운데 정렬시켜줍니다*/
  @media screen and (max-width: 63rem) {
    display: none; /*화면이 작아지면 "회원가입 글씨를 사라지게 합니다"*/
  }
`;

// "회원가입"div 태그입니다
const RegText = styled.div`
  display: flex;
  font-size: 2.5rem;
  font-weight: 800;
  display: inline-block;
  margin-bottom: 3rem;
`;

// 스케치북 안에 있는 모든 요소들을 감싸줍니다
const KeysWrap = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  @media screen and (max-width: 63rem) {
    top: 55%;
  }
`;

// 아이디, 패스워드, 이메일, 닉네임을 "props"로 바꿔가면서 재사용할 수 있음
const KeyWrap = styled.div`
  width: 45rem;
  height: 3.1rem;
  border-radius: ${props => props.border};
  background: #fff;
  border-width: 0.063rem;
  border-color: #000;
  box-shadow: 0rem 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25);
  display: flex;
  margin-bottom: 1rem;
  /*화면이 작아지면 크기를 작게하고 겉에 radius속성을 없애줍니다*/
  @media screen and (max-width: 63rem) {
    width: 37.5rem;
    height: 3.125rem;
    border-radius: 0;
  }
`;

// Icon 태그입니다
const IconImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  display: flex;
  margin: auto 1rem auto 1rem;
`;

// 아이디,패스워드,이메일,닉네임을 입력하는 input태그입니다
// const KeyInput = styled.input`
//   //placeholder스타일
//   width: 2.25rem;
//   height: 2.5rem;
//   font-size: 1.5rem;
//   font-weight: 500;
//   /////
//   padding-left: 0.5rem;
//   margin: auto 1rem auto 0rem;
//   width: 31.25rem;
//   &:focus {
//     outline: none;
//   }
// `;

// // 로그인, 회원가입을 감싸기 위한 div태그입니다
// const BtnWrap = styled.div`
//   text-align: center;
//   display: block;
// `;

// 회원가입 버튼
const SignupBtn = styled.button`
  width: 16.25rem;
  height: 2.813rem;
  border-radius: 0.813rem;
  background: #3a3a3a;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  display: block;
  margin: 3rem auto 1.2rem;
`;

// 로그인 버튼
const LoginBtn = styled.button`
  width: 4.438rem;
  height: 1.75rem;
  font-size: 1.125rem;
  font-weight: 700;
  margin-top: 2rem;
  display: block;
  margin: 0rem auto 0rem;
`;
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('이메일 형식을 지켜주세요')
    .required('비어있습니다!'),
  password: Yup.string()
    .min(4, '패스워드 4자 이상 입력해주세요')
    .required('비어있습니다!'),
  passwordcheck: Yup.string()
    .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다!')
    .min(4, '패스워드 4자 이상 입력해주세요')
    .required('비어있습니다!'),
  nickname: Yup.string()
    .min(3, '닉네임 3자 이상 입력해주세요')
    .required('비어있습니다!'),
});

function Register() {
  return (
    <div className="register">
      <Background>
        <KeysWrap>
          <TextWrap>
            <RegText>회원가입</RegText>
          </TextWrap>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
              alert('Form is validated! Submitting the form...');
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form>
                <KeyWrap border="0.938rem 0.938rem 0 0">
                  <IconImg src={ID} alt="" />
                  <Field type="email" name="email" placeholder="이메일" />
                </KeyWrap>
                <ErrorMessage
                  component="div"
                  name="email"
                  className="invalid-feedback"
                />
                <KeyWrap>
                  <IconImg src={PW} alt="" />
                  <Field
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    className={`form-control ${
                      touched.password && errors.password ? 'is-invalid' : ''
                    }`}
                  />
                </KeyWrap>
                <ErrorMessage
                  component="div"
                  name="password"
                  className="invalid-feedback"
                />
                <KeyWrap>
                  <IconImg src={ID} alt="" />
                  <Field
                    type="password"
                    name="passwordcheck"
                    placeholder="비밀번호 확인"
                  />
                </KeyWrap>
                <ErrorMessage
                  component="div"
                  name="passwordcheck"
                  className="invalid-feedback"
                />
                <KeyWrap border="0 0 0.938rem 0.938rem">
                  <IconImg src={ID} alt="" />
                  <Field type="password" name="nickname" placeholder="닉네임" />
                </KeyWrap>
                <ErrorMessage component="div" name="nickname" />

                <SignupBtn type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Please wait...' : '회원가입'}
                </SignupBtn>
                <LoginBtn>로그인</LoginBtn>
              </Form>
            )}
          </Formik>
        </KeysWrap>
      </Background>
    </div>
  );
}

export default Register;
