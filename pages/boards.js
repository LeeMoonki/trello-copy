import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;
const SideNavigation = styled.div`
  position: sticky;
  top: 0px;
  width: 280px;
`;
const BoardsWrapper = styled.div`
  margin: 40px 16px 0;
  width: 100%;
  min-width: 288px;
  max-width: 825px;
`;

function Boards({ name }) {
  return (
    <>
      <Head>
        <title>boards</title>
      </Head>
      <Container>
        <SideNavigation></SideNavigation>
        <BoardsWrapper></BoardsWrapper>
      </Container>
    </>
  );
}

Boards.getInitialProps = async ctx => {
  return {
    name: ctx.req.params && ctx.req.params.id
  };
};

export default Boards;
