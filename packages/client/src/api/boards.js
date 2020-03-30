import Router from 'next/router';

import fetch from './fetch';
import { resformat } from './helper';

export const getBoardList = () => {
  return fetch.get('/boards')
    .then(res => {
      return resformat(true, res.list);
    })
    .catch(errObject => {
      Router.push(errObject.redirectPath);
      return resformat(false);
    });
};

export const createBoard = ({
  title,
  backgroundColor
}) => {
  return fetch.post('/boards', { body: { title, backgroundColor } })
    .then(res => {
      return resformat(true, res);
    })
    .catch(errObject => {
      Router.push(errObject.redirectPath);
      return resformat(false);
    });
};
