import Router from 'next/router';

import fetch from './fetch';
import { resformat } from './helper';

export const getBoardList = () => {
  return fetch.get('/boards');
};

export const createBoard = ({
  title,
  backgroundColor
}) => {
  return fetch.post('/boards', { body: { title, backgroundColor } });
};
