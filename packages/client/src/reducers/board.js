import { produce } from 'immer';

export const initialState = {
  list: [],
};

const SET_BOARD_LIST = 'SET_BOARD_LIST';
const APPEND_BOARD = 'APPEND_BOARD';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const setBoardList = list => ({
  type: SET_BOARD_LIST,
  list
});

export const appendBoard = board => ({
  type: APPEND_BOARD,
  board
});

export const toggleFavorite = ({ id, boardId, favorite }) => ({
  type: TOGGLE_FAVORITE,
  id,
  boardId,
  favorite
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
    case TOGGLE_FAVORITE:
      return produce(state, draft => {
        const index = draft.list.findIndex(b => {
          if (action.id != null) {
            return b.id === action.id;
          } else if (action.boardId != null) {
            return b.boardId === action.boardId;
          }
        });

        if (index > -1) {
          draft.list[index].favorite = action.favorite;
        }
      });
    default:
      return state;
  }
};

export default reducer;
