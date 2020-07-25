import React from 'react';

export interface IAuthContext{
  user: any;
  dispatch: ({type, payload}: {type: string, payload: any}) => void;
}

export const AuthContext = React.createContext({} as IAuthContext);
export const InitialUserState = {
  isAuthenticated: false,
  profile: null,
};