import db from '../db/boards';

export const getBoardList = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        data: db.list,
      });
    }, 100);
  });
};