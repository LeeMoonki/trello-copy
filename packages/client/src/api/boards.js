import fetch from './fetch';

export const getBoardList = () => {
  return fetch.get('/boards');
};

export const createBoard = ({
  title,
  backgroundColor
}) => {
  return fetch.post('/boards', { body: { title, backgroundColor } });
};

export const updateFavorite = ({
  id,
  favorite
}) => {
  return fetch.put(`/boards/${id}`, { body: { favorite } });
};
