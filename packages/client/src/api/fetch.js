import { API_DOMAIN } from 'Src/config'
import { getToken } from 'Api/auth';

const get = (url, options) => {
  const token = getToken();
  const authorization = token ? { 'Authorization' : token } : {};
  const headers = {
    ...(options && options.headers),
    ...authorization
  };

  return fetch(`${API_DOMAIN}${url}`, {
    method: 'GET',
    ...(options || {}),
    headers
  })
    .then(res => {
      return res.json();
    })
};

const apiWithBody = method => (url, options) => {
  const token = getToken();
  const authorization = token ? { 'Authorization' : token } : {};
  const headers = {
    'Content-Type': 'application/json',
    ...(options && options.headers),
    ...authorization
  };

  return fetch(`${API_DOMAIN}${url}`, {
    method: method,
    ...(options || {}),
    headers,
    body: JSON.stringify((options && options.body) || {})
  })
    .then(res => {
      return res.json();
    })
};

const post = apiWithBody('POST');

const put = apiWithBody('PUT')

export default {
  get,
  post,
  put
};
