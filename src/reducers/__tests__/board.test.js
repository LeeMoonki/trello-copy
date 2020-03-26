import 
  reducer,
  {
    initialState,
    setBoardList,
    appendBoard
  }
from '../board';

describe('board reducer를 테스트합니다.', () => {
  let initialStateForTest;

  beforeEach(() => {
    initialStateForTest = initialState;
  });

  it('setBoardList action을 테스트합니다.', () => {
    const newList = [{ id: 10 }];
    const action = setBoardList(newList);

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ list: [{ id: 10 }] });
  });

  it('appendBoard action을 테스트합니다.', () => {
    const newBoard = { id: 20 };
    const action = appendBoard(newBoard);

    const oldState = reducer(initialState, {});
    const newState = reducer(oldState, action);

    expect(oldState).toEqual(initialState)
    expect(newState).toEqual({ list: [{ id: 20 }] });
  });
});
