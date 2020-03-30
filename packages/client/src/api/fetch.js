import { API_DOMAIN } from 'Src/config'

const get = (url, options) => {
  return fetch(`${API_DOMAIN}${url}`, options)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      return Promise.reject({
        redirectPath: '/error',
        message: err.message,
        error: err
      });
    });
};

const post = (url, options) => {
  return fetch(`${API_DOMAIN}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
    body: JSON.stringify(options.body)
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {
      return Promise.reject({
        redirectPath: '/error',
        message: err.message,
        error: err
      });
    });
};

export default {
  get,
  post,
};
