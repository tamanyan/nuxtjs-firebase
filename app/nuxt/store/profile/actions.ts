/**
 * Copyright(c) 2018
 *
 * @summary index.ts
 * @author Taketo Yoshida
 */

// import axios from 'axios';
import { ActionTree, ActionContext } from 'vuex';
import { ProfileState, User } from './types';
import { RootState } from '../types';

export const actions: ActionTree<ProfileState, RootState> = {
  fetchData(context: ActionContext<ProfileState, RootState>): any {
    const payload: User = {
      firstName: 'Taketo',
      lastName: 'Yoshida',
      email: 'sample@test.com'
    };

    context.commit('profileLoaded', payload);

    // Make http request in order to get user info instead of mock
  }
};
