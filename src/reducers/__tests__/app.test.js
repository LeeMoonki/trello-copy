import reducer, {
  initialState,
  showWindowCover,
  hideWindowCover,
}
from '../app';

describe('app reducer를 테스트합니다.', () => {
  let initialStateForTest;

  beforeEach(() => {
    initialStateForTest = initialState;
  });

  it('showWindowCover action을 테스트합니다.', () => {
    const action = showWindowCover();

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      windowCover: true
    });
  });

  it('hideWindowCover action을 테스트합니다.', () => {
    const hideAction = hideWindowCover();
    const showAction = showWindowCover();

    const oldState = reducer(initialState, showAction);
    const newState = reducer(oldState, hideAction);

    expect(newState).toEqual({
      ...initialState,
      windowCover: false
    });
  });
});
