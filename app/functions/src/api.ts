/**
 * Copyright(c) 2018
 *
 * @summary app.ts
 * @author Taketo Yoshida
 */

import * as express from 'express';

const app: express.Application = express();

app.get('/api/user', async (req: express.Request, res: express.Response, next: (obj?: any) => void) => {
  res.status(200).json({
    userId: '1',
    name: 'tamanyan'
  })
})

export = app;
