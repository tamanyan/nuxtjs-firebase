/**
 * Copyright(c) 2018
 *
 * @summary index.ts
 * @author Taketo Yoshida
 */

import * as functions from 'firebase-functions';

export const ssrapp = functions.https.onRequest(require('./ssr'));

export const api = functions.https.onRequest(require('./api'));
