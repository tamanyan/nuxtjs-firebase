/**
 * Copyright(c) 2018
 *
 * @summary index.test.ts
 * @author Taketo Yoshida
 */

import { resolve } from 'path';
const { Nuxt, Builder } = require('nuxt');

jest.setTimeout(60000);

let nuxt = undefined;

beforeAll(async () => {
  const config = require('../nuxt.config.js');
  config.dev = false;
  config.rootDir = resolve(__dirname, '..');
  config.ssr = true;

  nuxt = new Nuxt(config)

  await new Builder(nuxt).build()
});

describe('Rendering test', () => {
  // Example of testing

  test('Route / exits and render HTML without error', async () => {
    const context = {};
    const { error } = await nuxt.renderRoute('/', context);

    expect(error).toBe(null);
  });
});

// Close server and ask nuxt to stop listening to file changes
afterAll(() => {
  nuxt.close();
});
