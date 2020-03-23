import { makeId } from 'Js/utils';

const list = [
  { id: 0, title: 'TodoBoard', boardId: 'si12F1AH', backgroundColor: '#0079bf', starred: true },
  { id: 1, title: 'Project1', boardId: 'B2ji98pu', backgroundColor: '#d29034', starred: false },
];

export default {
  get: () => {
    return list;
  },
  create: (title, backgroundColor) => {
    list.push({
      id: list.length,
      boardId: makeId(8),
      title,
      backgroundColor,
      starred: false
    });

    return true;
  },
};