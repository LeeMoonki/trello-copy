import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import BoardPage from '../../pages/boards';

// jest.mock('Api/boards', () => ({
//   getBoardList: jest.fn(() => {
//     return new Promise(resolve => {
//       resolve({
//         success: true,
//         data: [
//           { id: 0, title: 'TodoBoard', boardId: 'si12F1AH', backgroundColor: '#0079bf', starred: true },
//         ],
//       });
//     })
//   }),
// }));

describe('보드리스트 페이지', () => {
  it('아무 것도 없다가 보드를 가져오면 리스트를 보여준다.', () => {
    act(() => {
      let wrapper = mount(<BoardPage />);
    });
  });
});