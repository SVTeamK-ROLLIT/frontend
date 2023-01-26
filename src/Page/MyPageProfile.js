import React from 'react';
import styled from 'styled-components';
import user from '../Image/user.png';

function Profile({ myRollPageData }) {
  return (
    <ChoiceContainer>
      <LeftWrap>
        <ProfileImg>
          <img src={user} alt="" />
        </ProfileImg>
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
  align-items: center;
  height: 100%;
  width: 81rem;
  z-index: 90;
  background-color: white;
`;

const LeftWrap = styled.div`
  //background-color: red;
  text-align: center;
  display: block;
  align-items: center;
`;
const ProfileImg = styled.div`
  width: 10rem;
  height: 11rem;
  background-color: white;
  border-radius: 50%;
  display: flex;
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
  height: 2rem;
  font-size: 2rem;
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
