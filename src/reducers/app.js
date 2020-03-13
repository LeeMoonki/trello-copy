const initialState = {
  windowCover: true,
};

export const SHOW_WINDOW_COVER = 'SHOW_WINDOW_COVER';
export const HIDE_WINDOW_COVER = 'HIDE_WINDOW_COVER';

export const showWindowCover = () => ({
  type: SHOW_WINDOW_COVER,
  windowCover: true
});

export const hideWindowCover = () => ({
  type: HIDE_WINDOW_COVER,
  windowCover: false
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_WINDOW_COVER:
      return {
        ...state,
        windowCover: action.windowCover
      };
    case HIDE_WINDOW_COVER:
      return {
        ...state,
        windowCover: action.windowCover
      };
    default:
      return state;
  }
};

export default reducer;
