import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Hardcode for API Mocking
app.get('/things', (req, res) => {
  res.json([
    {"id": 1, "name": "this thing", "alias": "First things", "origin": "Must be somewhere"},
    {"id": 2, "name": "that thing", "alias": "Also a thing", "origin": "probably from somewhere"},
    {"id": 3, "name": "there is a thing", "alias": "Another thing?", "origin": "Does this even 'matter'"},
  ]);
});

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  open('http://localhost:' + port);
});
