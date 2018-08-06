import express from 'express';
import path from 'path';

const app = express();
let count = 0;
let server;

app.use(express.static(path.join(__dirname, '../../public')));

app.post('/post', function (req, res) {
  count += 1;
  res.send('recieved post');
});

export async function listen() {
  let resolver;
  const done = new Promise((resolve) => {
    resolver = resolve;
  });

  server = app.listen(8081, resolver);
  return done;
}

export function close() {
  let resolver;
  const done = new Promise((resolve) => {
    resolver = resolve;
  });

  server.close(resolver);
  return done;
}

export function getCount() {
  return count;
}

export function reset() {
  count = 0;
}