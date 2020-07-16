import React from 'react';
import { InitialState } from '@react-navigation/native';

interface IAuthContext{
  user: InitialState;
  dispatch: ({type, payload}: {type: string, payload: any}) => void;
}

export const AuthContext = React.createContext({} as IAuthContext);
export const InitialUserState = {
  isAuthenticated: false,
  email: null,
  uid: null,
};