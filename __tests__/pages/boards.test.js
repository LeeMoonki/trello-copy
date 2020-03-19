import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { getBoardList } from 'Api/boards';
import BoardPage from '../../pages/boards';

const mockStore = configureStore([]);

jest.mock('Api/boards', () => ({
  getBoardList: jest.fn(() => {
    return new Promise(resolve => {
      resolve({
        success: true,
        data: [
          { id: 0, title: 'TodoBoard', boardId: 'si12F1AH', backgroundColor: '#0079bf', starred: true },
        ],
      });
    });
  }),
}));

describe('보드리스트 페이지', () => {
  it('아무 것도 없다가 보드를 가져오면 리스트를 보여준다.', async () => {
    let store = mockStore({
      app: {
        windowCover: false,
      },
    });
    let wrapper;

    await act(async () => {
      wrapper = await mount(
        <Provider store={store}>
          <BoardPage />
        </Provider>
      );
    });

    expect(getBoardList).toHaveBeenCalledTimes(1);
    expect(wrapper.find('BoardList').length).toBe(0);

    wrapper.update();

    expect(wrapper.find('BoardList').length).toBeGreaterThan(0);
  });
});