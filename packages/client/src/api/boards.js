import { API_DOMAIN } from 'Src/config'
import fetch from './fetch';
import { resformat } from './helper';

export const getBoardList = () => {
  return fetch.get(`${API_DOMAIN}/boards`).then(res => {
    return resformat(true, res.list);
  });
};

export const createBoard = ({
  title,
  backgroundColor
}) => {
  return fetch.post(`${API_DOMAIN}/boards`, { body: { title, backgroundColor } }).then(res => {
    return resformat(true, res);
  });
};
