const { makeId } = require('../js/utils');

const list = [
  { id: makeId(10), email: 'test@trellocopy.com', password: 'test1234', name: 'trelloUser' },
];

module.exports = {
  get: email => {
    return list.find(u => u.email === email);
  },
  chkpwd: (id, password) => {
    const user = list.find(u => u.id == id);
    return user && user.password === password;
  },
};