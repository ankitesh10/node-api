import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// custom  middleware
// app.use((req, res, next) => {
//   req.shhhhhh = 'hello';
//   next();
// });

app.get('/', (req, res) => {
  console.log('hello from server');
  res.status(200);
  res.json({ message: 'hello' });
  res.end();
});

app.use('/api', router);

export default app;
