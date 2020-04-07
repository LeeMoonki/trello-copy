 const { makeId } = require('../js/utils');

const list = [
  { id: 0, title: 'TodoBoard', boardId: 'si12F1AH', backgroundColor: '#0079bf', favorite: true },
  { id: 1, title: 'Project1', boardId: 'B2ji98pu', backgroundColor: '#d29034', favorite: false },
];

module.exports = {
  get: () => {
    return list;
  },
  create: (title, backgroundColor) => {
    list.push({
      id: list.length,
      boardId: makeId(8),
      title,
      backgroundColor,
      favorite: false
    });

    return list[list.length - 1];
  },
  updateFavorite: (id, favorite) => {
    const index = list.findIndex(b => b.boardId === id || b.id == id);

    if (index > -1) {
      list[index].favorite = favorite != 0;

      return true;
    }

    return false;
  },
};
