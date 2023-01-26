import React from 'react';
import styled from 'styled-components';

function Profile({ myRollPageData }) {
  return (
    <ChoiceContainer>
      <LeftWrap>
        <ProfileImg />
      </LeftWrap>
      <RightWrap>
        <RightUpWrap>
          <NickName margin="0rem 0rem 0rem 2rem">
            {myRollPageData?.user_data[0].nickname} 님
          </NickName>
          {/* <ChangeBtn margin="0rem 14rem 0.7rem auto">변경</ChangeBtn> */}
        </RightUpWrap>
        <RightDownWrap>
          <NickName margin="1.5rem 0rem 0 2rem">
            {myRollPageData?.user_data[0].email}
          </NickName>
          {/* <ChangeBtn margin="2rem 14rem 0 auto">변경</ChangeBtn> */}
        </RightDownWrap>
      </RightWrap>
    </ChoiceContainer>
  );
}

export default Profile;

const ChoiceContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  z-index: 90;
`;

const LeftWrap = styled.div`
  //background-color: red;
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
`;
const ProfileImg = styled.div`
  background-color: #d9d9d9;
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  margin: auto 0 auto 14rem;
`;

const RightWrap = styled.div`
  //background-color: yellow;
  flex: 2;
  //text-align: center;
  flex-direction: column;
  display: flex;
  align-items: stretch;
  width: 100%;
`;

const RightUpWrap = styled.div`
  //background-color: green;
  flex: 1;
  align-items: flex-end;
  display: flex;
`;

const NickName = styled.div`
  width: 20rem;
  height: 4rem;
  font-size: 42px;
  font-weight: 700;
  margin: ${props => props.margin};
  font-family: 'Cafe24Ssurround';
`;

// const ChangeBtn = styled.button`
//   width: 100px;
//   height: 56px;
//   border-radius: 13px;
//   background: #3a3a3a;
//   font-size: 28px;
//   font-weight: 700;
//   margin: ${props => props.margin};
//   color: #fff;
//   justify-content: flex-end;
// `;

const RightDownWrap = styled.div`
  //background-color: tomato;
  flex: 1;
  display: flex;
`;
