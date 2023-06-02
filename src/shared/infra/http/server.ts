import 'reflect-metadata';
import express, { json } from 'express';

import '../../container';
import { router } from './routes';

const app = express();
const port = 5000;

app.use(json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
