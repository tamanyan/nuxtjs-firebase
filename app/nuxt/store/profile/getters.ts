/**
 * Copyright(c) 2018
 *
 * @summary index.ts
 * @author Taketo Yoshida
 */

import { GetterTree } from 'vuex';
import { ProfileState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<ProfileState, RootState> = {
  fullName(state: ProfileState): string {
    const { user } = state;

    return `${user.firstName} ${user.lastName}`;
  }
};
