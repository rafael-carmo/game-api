import express, { json } from 'express';

import { router } from './routes';
const app = express();
const port = 5000;

app.use(json());
app.use(router);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
