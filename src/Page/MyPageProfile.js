import React from 'react';
import styled from 'styled-components';
import user from '../Image/user.png';
import profile from '../Image/profile.png';

function Profile({ myRollPageData }) {
  return (
    <ChoiceContainer>
      <img src={profile} alt="" />
      <LeftWrap>
        <ProfileImg>
          <img src={user} alt="" />
        </ProfileImg>
      </LeftWrap>
      <RightWrap>
        <RightUpWrap>
          <NickName margin="0rem 0rem 0rem 2rem">
            {myRollPageData?.user_data[0].nickname}
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
  height: 20rem;
  width: 81rem;
  z-index: 90;
  position: relative;
`;

const LeftWrap = styled.div`
  //background-color: red;
  text-align: center;
  display: block;
  position: absolute;
`;
const ProfileImg = styled.div`
  width: 15rem;
  height: 12rem;
  border-radius: 50%;
  margin-left: 10rem;

  display: flex;
`;

const RightWrap = styled.div`
  //background-color: yellow;
  flex: 2;
  //text-align: center;
  flex-direction: column;
  display: flex;
  align-items: stretch;
  position: absolute;
  width: 100%;
`;

const RightUpWrap = styled.div`
  //background-color: green;
  position: absolute;
  margin-left: 22rem;
  margin-top: -3rem;
`;

const NickName = styled.div`
  width: 26rem;
  height: 2rem;
  font-size: 2.2rem;
  margin: ${props => props.margin};
  font-family: 'SUIT-SemiBold';
  position: absolute;
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
  margin-left: 22rem;
`;
