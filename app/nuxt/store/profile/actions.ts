/**
 * Copyright(c) 2018
 *
 * @summary index.ts
 * @author Taketo Yoshida
 */

// import axios from 'axios';
import { ActionTree } from 'vuex';
import { ProfileState, User } from './types';
import { RootState } from '../types';

export const actions: ActionTree<ProfileState, RootState> = {
  fetchData({ commit }): any {
    const payload: User = {
      firstName: "Taketo",
      lastName: "Yoshida",
      email: "sample@test.com",
    };

    commit('profileLoaded', payload);

    // Make http request in order to get user info instead of mock
  }
};
