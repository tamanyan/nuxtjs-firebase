/**
 * Copyright(c) 2018
 *
 * @summary ssr.ts
 * @author Taketo Yoshida
 */

import * as express from 'express';
const { Nuxt } = require('nuxt');

const app = express();
const nuxt = new Nuxt({
    dev: false,
    buildDir: 'nuxt',
    build: {
      publicPath: '/assets/'
    }
});

app.use(nuxt.render);

export = app;
