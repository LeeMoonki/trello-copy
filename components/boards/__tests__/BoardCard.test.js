import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import BoardCard from '../BoardCard';

describe('<BoardCard />', () => {
  let wrapper;

  it('empty 속성값에 따라 보드 카드의 종류가 달라져야한다.', () => {
    const props = {
      title: 'foo',
      boardId: 'bar',
      backgroundColor: '#dedede',
      starred: true
    }

    const wrapper = shallow(<BoardCard {...props} />);
    const wrapperEmpty = shallow(<BoardCard {...props} empty={true} />);

    expect(wrapper.find('.card-details__title').text()).toBe(props.title);
    expect(wrapperEmpty.find('.card-details--empty').length).toBe(1);
  });
});

