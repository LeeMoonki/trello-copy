import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { initialState as boardState } from 'Reducers/board';
import { initialState as appState } from 'Reducers/app';
import { getBoardList } from 'Api/boards';
import BoardPage from '../../pages/boards';
import Theme from 'Style/theme';

const mockStore = configureStore([]); // [] : no middlewares

jest.mock('Api/boards', () => ({
  getBoardList: jest.fn(() => {
    return new Promise(resolve => {
      resolve({
        success: true,
        data: {}
      });
    });
  }),
}));

// ref
// https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options
// https://jestjs.io/docs/en/bypassing-module-mocks
const mockDispatch = jest.fn();
const mockInitialState = {
  app: appState,
  board: boardState
};
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(f => f(mockInitialState))
}));
const { Provider } = jest.requireActual('react-redux');

describe('보드리스트 페이지', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('페이지가 열리면 getBoardList와 dispatch가 실행됩니다.', async () => {
    let store = mockStore(mockInitialState);
    let wrapper;

    await act(async () => {
      wrapper = await mount(
        <Provider store={store}>
          <Theme>
            <BoardPage />
          </Theme>
        </Provider>
      );
    });

    expect(getBoardList).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(wrapper.find('a.nav__link').length).toBe(0);

    wrapper.update();

    expect(wrapper.find('a.nav__link').length).toBeGreaterThan(0);
  });
});