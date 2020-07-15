import React from 'react';
import { InitialState } from '@react-navigation/native';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

interface IAuthContext{
  user: InitialState;
  dispatch: ({type, payload}: {type: string, payload: FirebaseAuthTypes.User}) => void;
}

export const AuthContext = React.createContext({} as IAuthContext);
export const InitialUserState = {
  isAuthenticated: false,
  user: null,
};