import { produce } from 'immer';
import reducer, {
  initialState,
  setBoardList,
  appendBoard,
  toggleFavorite,
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

  it('toggleFavorite action을 테스트합니다.', () => {
    const state = produce(initialState, draft => {
      draft.list.push({ id: 10, boardId: 'foo', favorite: false });
    });
    const actionWithId = toggleFavorite({ id: 10, favorite: true });
    const actionWithBoardId = toggleFavorite({ boardId: 'foo', favorite: true });

    const newStateWithId = reducer(state, actionWithId);
    const newStateWithBoardId = reducer(state, actionWithBoardId);

    expect(newStateWithId.list[0].favorite).toBe(true);
    expect(newStateWithBoardId.list[0].favorite).toBe(true);
  });
});
