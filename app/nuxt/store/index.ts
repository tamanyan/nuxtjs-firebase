/**
 * Copyright(c) 2018
 *
 * @summary index.ts
 * @author Taketo Yoshida
 */

import { Store, StoreOptions } from 'vuex';
import { RootState } from './types';
import { profile } from './profile';

const storeOptions: StoreOptions<RootState> = {
  state: {
    version: '1.0.0' // a simple property
  },
  actions: {
    // nuxtServerInit({ commit }, { app }) {
    // }
  },
  modules: {
    profile
  }
};

export default () => new Store<RootState>(storeOptions);
