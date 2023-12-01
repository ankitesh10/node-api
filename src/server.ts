import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';
import { createUser, signin } from './handlers/user';

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

app.use('/api', protect, router);

app.use('/user', createUser);
app.post('/signin', signin);

export default app;
