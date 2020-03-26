import { produce } from 'immer';

export const initialState = {
  windowCover: false,
};

const SHOW_WINDOW_COVER = 'SHOW_WINDOW_COVER';
const HIDE_WINDOW_COVER = 'HIDE_WINDOW_COVER';

export const showWindowCover = () => ({
  type: SHOW_WINDOW_COVER,
  windowCover: true
});

export const hideWindowCover = () => ({
  type: HIDE_WINDOW_COVER,
  windowCover: false
});

const reducer = produce((draftState, action) => {
  switch (action.type) {
    case SHOW_WINDOW_COVER:
    case HIDE_WINDOW_COVER:
      draftState.windowCover = action.windowCover;
  }
});

export default reducer;
