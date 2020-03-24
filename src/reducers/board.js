const initialState = {
  list: [],
};

export const SET_BOARD_LIST = 'SET_BOARD_LIST';
export const APPEND_BOARD = 'APPEND_BOARD';

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
      return {
        ...state,
        list: action.list
      };
    case APPEND_BOARD:
      return {
        ...state,
        list: [...state.list, action.board],
      };
    default:
      return state;
  }
};

export default reducer;
