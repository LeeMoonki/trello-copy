import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from 'Components/MainLayout';

const headerHeight =  32;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  padding: 8px 8px 4px;
  &:after {
    display: block;
    content: "";
    clear: both;
  }
`;

const HeaderLeft = styled.div`
  float: left;
  display: flex;
`;
const BoardName = styled.div`
  padding: 0 12px;
  line-height: ${headerHeight}px;
  cursor: pointer;
`;

const HeaderRight = styled.div`
  float: right;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
`;

function Cards({ boardId, boardName }) {
  const [firstLoadingEnd, setFirstLoadingEnd] = useState(true);
  useEffect(() => {
    // GET card list
  }, []);


  return (
    <Layout>
      {firstLoadingEnd && (
        <Container>
          <Header>
            <HeaderLeft>
              <BoardName>
                <span>{ boardName }</span>
              </BoardName>
            </HeaderLeft>
            <HeaderRight></HeaderRight>
          </Header>
          <ContentWrapper>

          </ContentWrapper>
        </Container>
      )}
    </Layout>
  );
}

Cards.getInitialProps = ctx => {
  return {
    boardId: ctx.req.params.id,
    boardName: ctx.req.params.name,
  };
};

export default Cards;
