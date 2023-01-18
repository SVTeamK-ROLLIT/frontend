import React from 'react';
import styled from 'styled-components';
import MyPageItem from './MyPageItem';

function MyPageItems({ myRollPageData }) {
  // console.log(myRollPageData?.paper_data);
  // const [isLoading, setIsLoading] = useState(false);
  const a = myRollPageData?.paper_data;
  // console.log(a);
  // console.log(typeof a);
  const paperList =
    a && a.map(dataColumn => <MyPageItem dataColumn={dataColumn} />);
  // setIsLoading(true);
  // if (isLoading) <div>Loading</div>;
  return (
    <ItemsWrap>
      {/* <MyPageItem /> */}
      {paperList}
    </ItemsWrap>
  );
}

const ItemsWrap = styled.div`
  padding: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  //flex: 0 0 33.333333%;
`;

export default MyPageItems;
