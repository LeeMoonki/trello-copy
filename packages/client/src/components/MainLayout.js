import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import CreateBoardPopup from 'Components/popup/CreateBoardPopup';
import ProfilePopup from 'Components/popup/ProfilePopup';

const Header = styled.div`
  display: flex;
  position: relative;
  padding: 4px;
  height: 32px;
  background-color: ${props => props.theme.colors.primary};
`;
const Content = styled.main`
  overflow-y: auto;
  height: calc(100vh - 40px);
`;
const HeaderElementsWrapper = styled.div`
  & > .header__button, & > .header__a {
    margin-right: 4px;
    height: 32px;
    line-height: 32px;
    font-weight: bold;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
    z-index: 10;
  }
`;
const Left = styled(HeaderElementsWrapper)`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
`;
const Right = styled(HeaderElementsWrapper)`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  & > a {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
`;
const A = styled.a`
  padding: 0px 8px;
`;
const Button = styled.button`
  & > span {
    padding: 0px 8px;
  }
`;
const ProfileImg = styled.button`
  display: block;
  width: 32px;
  height: 32px;
  z-index: 10;

  & > div {
    width: 32px;
    height: 32px;
    line-height: 32px;
    border-radius: 100%;
    background-image: url(/default-profile.png);
    background-size: cover;
  }
`;

function MainLayout({ mainStyle, children }) {
  const router = useRouter();

  const onClickHome = e => {
    e.preventDefault();
    
    router.push('/');
  }

  // popups
  const [showCreate, setShowCreate] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // common
  const hidePopups = except => {
    except !== 'create' && showCreate && setShowCreate(false);
    except !== 'profile' && showProfile && setShowProfile(false);
  };

  // create
  const onClickCreate = e => {
    e.stopPropagation();
    hidePopups('create');
    setShowCreate(!showCreate);
  };
  const onClickCloseCreate = () => {
    setShowCreate(false);
  };

  // profile
  const onClickProfile = e => {
    e.stopPropagation();
    hidePopups('profile');
    setShowProfile(!showProfile);
  };
  const onClickCloseProfile = () => {
    setShowProfile(false);
  };
  // // popups

  // Header와 Content에 event bubbling을 둬서 팝업을 닫는 로직을 걸어둔다.
  const onClickLayoutHeader = () => {
    hidePopups();
  };
  const onClickLayoutContent = () => {
    hidePopups();
  };

  return (
    <>
      <Header id="header" onClick={onClickLayoutHeader}>
        <Left>
          <A  className="header__a" href="/" onClick={onClickHome}>
            <span>Home</span>
          </A>
          <Button className="header__button">
            <span>Boards</span>
          </Button>
        </Left>
        <Logo>
          <a href="/" onClick={onClickHome}>Trello Copy</a>
        </Logo>
        <Right>
          <Button className="header__button" onClick={onClickCreate}>
            <span>Create</span>
          </Button>
          <Button className="header__button">
            <span>Info</span>
          </Button>
          <Button className="header__button">
            <span>Notification</span>
          </Button>
          <ProfileImg onClick={onClickProfile}>
            <div></div>
          </ProfileImg>
        </Right>
      </Header>
      <Content style={mainStyle} onClick={onClickLayoutContent}>
        { children }
      </Content>
      <CreateBoardPopup
        show={showCreate}
        onClickClose={onClickCloseCreate}
      />
      <ProfilePopup
        show={showProfile}
        onClickClose={onClickCloseProfile}
      />
    </>
  );
}

export default MainLayout;
