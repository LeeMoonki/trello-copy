import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Layout from 'Components/MainLayout';
import CardList from 'Components/cards/CardList';

const headerHeight =  32;
const boardNamePadding = 12;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.background};
`;

const Header = styled.div`
  padding: 0px 8px 4px;
  &:after {
    display: block;
    content: "";
    clear: both;
  }
`;

const HeaderButton = styled.button`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const Divider = styled.div`
  margin-left: 4px;
  margin-right: 8px;
  width: 1px;
  height: 16px;
  background-color: hsla(0, 0%, 100%, .24);
`;

// header left
const HeaderLeft = styled.div`
  float: left;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 8px 0;
`;
const BoardName = styled.div`
  margin-right: 4px;
  padding: 0 ${boardNamePadding}px;
  line-height: ${headerHeight}px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;

  &.changing {
    padding: 0;
  }
  &.changing > span {
    position: absolute;
    left: -1000px;
    top: -1000px;
  }
  &.changing > input {
    display: block;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  & > span {
    display: block;
  }
  & > input {
    display: none;
    box-sizing: content-box;
    margin: 0;
    padding: 0 ${boardNamePadding}px;
    height: ${headerHeight}px;
    font-size: 14px;
    border: 0;
    background-color: #fff;
    box-shadow: none;
  }
`;

// header right
const HeaderRight = styled.div`
  float: right;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 8px 0;
`;

// content
const ContentWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  flex-grow: 1;
  margin-bottom: 8px;
  padding-bottom: 8px;
  white-space: nowrap;
`;

function Cards(props) {
  const [firstLoadingEnd, setFirstLoadingEnd] = useState(true);
  useEffect(() => {
    // GET card list
  }, []);

  const refBoardName = useRef(null);
  const refBoardNameIpt = useRef(null);
  const [changingBoardName, setChangingBoardName] = useState(false);
  const [boardName, setBoardName] = useState(props.boardName);
  const onClickBoardName = () => {
    if (!changingBoardName) {
      setChangingBoardName(true);
    }
  };
  const onBlurBoardName = () => {
    setChangingBoardName(false);
  };
  useEffect(() => {
    if (changingBoardName) {
      const input = refBoardNameIpt.current;

      input.focus();
      input.value = boardName
    }
  }, [changingBoardName]);

  return (
    <Layout mainStyle={{ overflowY: 'hidden' }}>
      {firstLoadingEnd && (
        <Container>
          <Header>
            <HeaderLeft>
              <BoardName onClick={onClickBoardName} className={changingBoardName ? 'changing' : null}>
                <input
                  ref={refBoardNameIpt}
                  style={{ width: refBoardName.current && `${parseFloat(getComputedStyle(refBoardName.current).width)}px` }}
                  onBlur={onBlurBoardName}
                  onChange={e => setBoardName(e.target.value)}
                />
                <span ref={refBoardName}>{ boardName }</span>
              </BoardName>
              <HeaderButton className="styled-button">즐겨찾기 등록</HeaderButton>
              <Divider />
              <HeaderButton className="styled-button">Personal</HeaderButton>
              <Divider />
              <HeaderButton className="styled-button">Private</HeaderButton>
              <Divider />
              <HeaderButton className="styled-button">Invite</HeaderButton>
            </HeaderLeft>
            <HeaderRight>
              <HeaderButton className="styled-button">Watching</HeaderButton>
              <HeaderButton className="styled-button">Butler</HeaderButton>
              <HeaderButton className="styled-button">Show Menu</HeaderButton>
            </HeaderRight>
          </Header>
          <ContentWrapper>
            <CardList name="Todo"></CardList>
            <CardList name="weekly"></CardList>
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
