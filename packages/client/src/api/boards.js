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
