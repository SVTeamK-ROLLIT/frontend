import React from 'react';
import styled from 'styled-components';
import user from '../Image/user.png';

function Profile({ myRollPageData }) {
  return (
    <Container>
      <Container1>
        <ProfileImg> </ProfileImg>
      </Container1>
      <Container2>
        <NickName margin="0rem 0rem 0rem 0rem">
          {myRollPageData?.user_data[0].nickname} 님
        </NickName>
        {/* <ChangeBtn margin="0rem 14rem 0.7rem auto">변경</ChangeBtn> */}
        <NickName margin="1.5rem 0rem 0 2rem">
          {myRollPageData?.user_data[0].email}
        </NickName>
        {/* <ChangeBtn margin="2rem 14rem 0 auto">변경</ChangeBtn> */}
      </Container2>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  text-align: center;
  z-index: 90;
  width: 30rem;
  position: relative;
  height: 34rem;
  border-radius: 5rem;
  background-color: whitesmoke;
  border: 2.8px solid skyblue;
  margin: auto;
`;

const Container1 = styled.div`
  z-index: 90;
  position: relative;
`;

const Container2 = styled.div`
  z-index: 90;
  width: 30rem;
  justify-content: center;
  margin-top: -3rem;
`;

const ProfileImg = styled.div`
  background-image: url(${user});
  height: 25rem;
  background-size: 20rem 20rem;
  background-repeat: no-repeat;
  background-position: center;
  /* margin-top: 20rem; */
  background-position-y: 1rem;
`;

const NickName = styled.div`
  font-size: 2.2rem;
  margin: ${props => props.margin};
  font-family: 'SUIT-SemiBold';
  position: relative;
  height: 2rem;
`;
