import fetch from './fetch';

const LOCAL_STORAGE_TOKEN = '$trelloToken';
const LOCAL_STORAGE_NAME = '$trelloUserName';

const loginWithStorage = (token, name) => {
  localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
  localStorage.setItem(LOCAL_STORAGE_NAME, name);
};

const logoutWithStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  localStorage.removeItem(LOCAL_STORAGE_NAME);
};

export const getToken = () => {
  return localStorage.getItem(LOCAL_STORAGE_TOKEN);
};

export const getUserName = () => {
  return localStorage.getItem(LOCAL_STORAGE_NAME);
};

export const checkLogin = () => {
  return getToken() != null;
};

export const login = ({ email, password }) => {
  return fetch.post('/auth/login', { body: { email, password } }).then(res => {
    if (res.success) {
      loginWithStorage(res.data.token, res.data.name);
    }

    return res;
  });
};

export const logout = () => {
  return fetch.post('/auth/logout').then(res => {
    if (res.success) {
      logoutWithStorage();
    }
    
    return res;
  });
};
