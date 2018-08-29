/**
 * Copyright(c) 2018
 *
 * @summary index.ts
 * @author Taketo Yoshida
 */

import { ActionTree } from 'vuex';
import axios from 'axios';
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

    // commit('profileError');
    // axios({
    //   url: 'https://....'
    // }).then((response) => {
    //   const payload: User = response && response.data;
    //   commit('profileLoaded', payload);
    // }, (error) => {
    //   console.log(error);
    //   commit('profileError');
    // });
  }
};
