/**
 * Copyright(c) 2018
 *
 * @summary index.ts
 * @author Taketo Yoshida
 */

import * as functions from 'firebase-functions';

export const ssr = functions.https.onRequest(require('./ssr'));
