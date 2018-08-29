/**
 * Copyright(c) 2018
 *
 * @summary index.ts
 * @author Taketo Yoshida
 */

import { MutationTree } from 'vuex';
import { ProfileState, User } from './types';

export const mutations: MutationTree<ProfileState> = {
  profileLoaded(state, payload: User) {
    state.user = payload;
    state.error = false;
    state.isReady = true;
  },
  profileError(state) {
    state.error = true;
    state.isReady = false;
  }
};
