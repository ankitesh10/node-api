import app from './server';
import * as dotenv from 'dotenv';

dotenv.config();

app.listen(3001, () => {
  console.log('hello from localhost:3001');
});
