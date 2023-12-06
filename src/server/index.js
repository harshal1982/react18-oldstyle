import express from 'express';
import renderer from './helpers/renderer';

const app = express();
app.use(express.static('public'));
app.get('*', (req, res) => {
  res.send(renderer(req));
});
app.listen('8080', () => {
  console.log('Express server listening on port ', 8080);
});
