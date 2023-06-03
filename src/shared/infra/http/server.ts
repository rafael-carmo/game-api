import 'reflect-metadata';
import { CelebrateError } from 'celebrate';
import express, { Request, NextFunction, Response, json } from 'express';

import '../../container';
import { router } from './routes';

const app = express();
const port = 5000;

app.use(json());
app.use(router);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CelebrateError) {
    return res.status(400).json({
      message: err.details.get('body')?.message
      // message: err.message
    });
  }

  return res.status(500).json({
    status: 'Error',
    message: `Internal server error: ${err.message}`
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
