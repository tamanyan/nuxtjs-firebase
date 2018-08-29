/**
 * Copyright(c) 2018
 *
 * @summary index.ts
 * @author Taketo Yoshida
 */

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface ProfileState {
  user: User;
  isReady: boolean;
  error: boolean;
}
