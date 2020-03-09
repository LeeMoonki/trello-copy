import Head from 'next/head';
import styled from 'styled-components';
import BoardList from '../components/boards/BoardList';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;
// 네비게이션
const SideNavigation = styled.div`
  position: sticky;
  top: 0px;
`;
const Nav = styled.nav`
  margin-top: 40px;
  padding: 0 16px;
  width: 240px;

  & a {
    display: flex;
    overflow: hidden;
    padding: 6px 8px 6px 0;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
  }
  & a.nav__link {
    color: #172b4d;
    background-color: initial;
  }
  & a.nav__link--selected {
    color: #0079bf;
    background-color: #e4f0f6;
  }
`;
const ConstantNav = styled.ul`
  & li {
    margin-bottom: 4px;
  }
`;
const TeamNavWrapper = styled.div`

`;
// // 네비게이션
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
        <SideNavigation>
          <Nav>
            <ConstantNav>
              <li>
                <a className="nav__link--selected">
                  <span></span>
                  <span>Boards</span>
                </a>
              </li>
              <li>
                <a className="nav__link">
                  <span></span>
                  <span>Templates</span>
                </a>
              </li>
              <li>
                <a className="nav__link">
                  <span></span>
                  <span>Home</span>
                </a>
              </li>
            </ConstantNav>
            <TeamNavWrapper></TeamNavWrapper>
          </Nav>
        </SideNavigation>
        <BoardsWrapper>
          <BoardList
            title="Starred Boards"
            cards={[
              { title: 'TodoBoard', backgroundColor: '#0079bf', starred: true },
              { title: 'Project1', backgroundColor: '#d29034', starred: true },
            ]}
          />
          <BoardList
            title="Personal Boards"
            cards={[
              { title: 'TodoBoard', backgroundColor: '#0079bf', starred: false },
              { title: 'Project1', backgroundColor: '#d29034', starred: false },
            ]}
          />
        </BoardsWrapper>
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
