/**
 * Copyright(c) 2018
 *
 * @summary index.test.ts
 * @author Taketo Yoshida
 */

import { resolve } from 'path';
const { Nuxt, Builder } = require('nuxt');

jest.setTimeout(30000);

let nuxt = undefined;

beforeAll(async () => {
  const config = {
    dev: false,
    buildDir: resolve(__dirname, '../.nuxt')
  };
  nuxt = new Nuxt(config);
  await nuxt.listen(4000, 'localhost');
});

describe('Rendering test', () => {
  // Example of testing only generated html
  test('Route / exits and render HTML', async () => {
    const context = {};
    const { html } = nuxt.renderRoute('/', context);
    console.log(html);
    expect(html).toBe('');
  });
});

// Close server and ask nuxt to stop listening to file changes
afterAll(() => {
  nuxt.close();
});
