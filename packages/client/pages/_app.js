import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import reducer from 'Reducers/index';
import { hideWindowCover } from 'Reducers/app';
import { appendBoard } from 'Reducers/board';
import 'Style/reset.css';
import Theme from 'Style/theme';
import styled from 'styled-components';
import { createBoard } from 'Api/boards';

import CreateBoardWindow from 'Components/CreateBoardWindow';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

const WindowCover = styled.div`
  overflow: auto;
  position: fixed;
  left: 0;
  top: 0;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .75);
  z-index: 50;

  &.window-cover--show {
    display: flex;
  }
  & > .window-cover__inner {
    margin-top: 24px;
    padding: 24px;
    width: auto;
  }
`;

function WindowCoverComp() {
  const dispatch = useDispatch();
  const windowCover = useSelector(state => state.app.windowCover);

  function onClickWindowCover(e) {
    dispatch(hideWindowCover());
  }

  function onClickCreateBoard({ title, backgroundColor }) {
    createBoard({ title, backgroundColor }).then(res => {
      if (res.success) {
        dispatch(appendBoard(res.data));
        dispatch(hideWindowCover());
      } else {
        console.warn('Fail to create board', res);
      }
    });
  }

  return (
    <WindowCover
      className={windowCover && 'window-cover--show'}
      onClick={onClickWindowCover}
    >
      <div className="window-cover__inner" onClick={e => e.stopPropagation()}>
        {windowCover && (
          <CreateBoardWindow
            onClickCreateBoard={onClickCreateBoard}
            onClickClose={onClickWindowCover}
          />
        )}
      </div>
    </WindowCover>
  );
}

function MyApp({ Component, pageProps, store }) {
  return (
    <>
      <Head>
        <title>trello-copy</title>
      </Head>
      <Provider store={store}>
        <Theme>
          <Container id="trello-container">
            <Component {...pageProps} />
            <WindowCoverComp></WindowCoverComp>
          </Container>
        </Theme>
      </Provider>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
};

export default withRedux(makeStore)(MyApp);
