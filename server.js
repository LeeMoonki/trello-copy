const express = require('express');
const next = require('next');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const LOGIN_INFO = {
  id: 'shinbaek'
}

app.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => {
    return LOGIN_INFO.id
      ? res.redirect(`/${LOGIN_INFO.id}/boards`)
      : res.redirect('/home');
  });

  server.get('/:id/boards', (req, res) => {
    app.render(req, res, '/boards');
  });

  

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) {
      throw err;
    }

    console.log(`> Ready on http://localhost:${port}`);
  });
});