import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setBoardList } from 'Reducers/board';
import Router from 'next/router';
import BoardList from 'Components/boards/BoardList';
import { getBoardList } from 'Api/boards';
import Layout from 'Components/MainLayout';

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
  const dispatch = useDispatch();

  const [firstLoadingEnd, setFirstLoadingEnd] = useState(false);
  const boards = useSelector(state => state.board.list);
  useEffect(() => {
    getBoardList().then(res => {
      setFirstLoadingEnd(true);
      if (res.success) {
        dispatch(setBoardList(res.data.list));
      } else {
        Router.push('/error');
      }
    });
  }, []);

  return (
    <Layout>
      <Container>
        {/* 보드가 로드되고 나서 페이지를 보여준다. 보드가 없는 상태도 보여줄 수 있어야 한다. */}
        {firstLoadingEnd && (
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
        )}
        <BoardsWrapper>
          {(firstLoadingEnd && boards.length > 0) && (
            <>
              <BoardList
                title="Starred Boards"
                cards={boards.filter(b => b.favorite)}
              />
              <BoardList
                title="Personal Boards"
                personal={true}
                cards={boards}
              />
            </>
          )}
        </BoardsWrapper>
      </Container>
    </Layout>
  );
}

Boards.getInitialProps = async ctx => {
  return {
    name: ctx.req.params && ctx.req.params.id
  };
};

export default Boards;
