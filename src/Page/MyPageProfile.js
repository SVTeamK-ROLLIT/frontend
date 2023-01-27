import React from 'react';
import styled from 'styled-components';
import user from '../Image/user.png';

function Profile({ myRollPageData }) {
  return (
    <div>
      <Container>
        <Container1>
          <ProfileImg> </ProfileImg>
        </Container1>
        <Container2>
          <NickName margin="0rem 0rem 0rem 0rem">
            {myRollPageData?.user_data[0].nickname}
          </NickName>
          {/* <ChangeBtn margin="0rem 14rem 0.7rem auto">변경</ChangeBtn> */}
          <NickName margin="1.5rem 0rem 0 2rem">
            {myRollPageData?.user_data[0].email}
          </NickName>
          {/* <ChangeBtn margin="2rem 14rem 0 auto">변경</ChangeBtn> */}
        </Container2>
      </Container>
    </div>
  );
}

export default Profile;

const Container = styled.div`
  text-align: center;
  z-index: 90;
  position: absolute;
  width: 80rem;
  height: 20rem;
  justify-content: center;
  display: block;
`;

const Container1 = styled.div`
  text-align: center;
  z-index: 90;
  position: absolute;
  width: 80rem;
  justify-content: center;
  display: flex;
`;

const Container2 = styled.div`
  text-align: center;
  z-index: 90;
  position: absolute;
  width: 80rem;
  justify-content: center;
  margin-top: 15rem;
`;

const ProfileImg = styled.div`
  width: 15rem;
  height: 15rem;
  background-image: url(${user});
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const NickName = styled.div`
  font-size: 2.2rem;
  margin: ${props => props.margin};
  font-family: 'SUIT-SemiBold';
  position: relative;
`;
