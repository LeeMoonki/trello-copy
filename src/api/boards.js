import { resformat } from './helper';
import db from '../db/boards';

export const getBoardList = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(resformat(true, db.get()));
    }, 100);
  });
};

export const createBoard = ({
  title,
  backgroundColor
}) => {
  return new Promise(resolve => {
    // setTimeout(() => {
    //   if (!title || !backgroundColor) {
    //     resolve(resformat(
    //       false, {
    //        message: `The value ${!title ? '"title"' : '"background"'} is required.`
    //       })
    //     );
    //   } else {
        
    //   }
    // }, 100);

    const result = db.create(title, backgroundColor);

    resolve(resformat(!!result, result));
  });
};