import React from 'react';
import { mount } from 'enzyme';

import BoardCard from '../BoardCard';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

jest.mock('Reducers/app', () => ({
  showWindowCover: jest.fn()
}));

describe('<BoardCard />', () => {
  let wrapper;
  let wrapperEmpty;
  const favoriteProps = {
    title: 'foo',
    boardId: 'bar',
    backgroundColor: '#dedede',
    favorite: true
  }

  beforeEach(() => {
    wrapper = mount(<BoardCard {...favoriteProps} />);
    wrapperEmpty = mount(<BoardCard {...favoriteProps} empty={true} />);
  });

  it('empty 속성값에 따라 보드 카드의 종류가 달라져야한다.', async () => {
    expect(wrapper.find('.card-details__title').text()).toBe(favoriteProps.title);
    expect(wrapperEmpty.find('.card-details--empty').length).toBe(1);
  });

  describe('empty 속성 값이 true면', () => {
    it('보드를 클릭할 때 dispatch가 호출되어야 한다.', () => {
      wrapperEmpty.find('a').props().onClick({
        preventDefault: () => {}
      });
      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
  });
});

