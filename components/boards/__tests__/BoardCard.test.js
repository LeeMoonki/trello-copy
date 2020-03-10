import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import BoardCard from '../BoardCard';

describe('<BoardCard />', () => {
  let wrapper;

  it('단위 테스트를 시험해봅니다.', () => {
    const title = 'foo';

    wrapper = shallow(
      <BoardCard
        title={title}
        boardId={'bar'}
        backgroundColor={'#dedede'}
        starred={true}
      />
    );

    expect(wrapper.find('.card-details__title').text()).toBe(title);
  });
});

