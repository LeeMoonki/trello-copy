import { produce } from 'immer';

export const initialState = {
  list: [],
};

const SET_BOARD_LIST = 'SET_BOARD_LIST';
const APPEND_BOARD = 'APPEND_BOARD';

export const setBoardList = list => ({
  type: SET_BOARD_LIST,
  list
});

export const appendBoard = board => ({
  type: APPEND_BOARD,
  board
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD_LIST:
      return produce(state, draft => {
        return {
          ...draft,
          list: action.list.slice()
        };
      });
    case APPEND_BOARD:
      return produce(state, draft => {
        draft.list.push(action.board);
      });
    default:
      return state;
  }
};

export default reducer;
