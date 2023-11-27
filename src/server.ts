import express from 'express';
import router from './router';

const app = express();

app.get('/', (req, res) => {
  console.log('hello from server');
  res.status(200);
  res.json({ message: 'hello' });
  res.end();
});

app.use('/api', router);

export default app;
