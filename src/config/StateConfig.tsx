import AsyncStorage from '@react-native-community/async-storage';

export const Reducer = (state: any, action: any) => {
  switch (action.type){
    case 'LOGIN':
      console.log('STATE CONFIG: ' + action.payload);
      AsyncStorage.setItem('email', action.payload.email);
      AsyncStorage.setItem('uid', action.payload.uid);

      return {
        ...state,
        isAuthenticated: true,
        email: action.payload.email,
        uid: action.payload.uid,
      };
    case 'LOGOUT':
      AsyncStorage.clear();
      return{
        ...state,
        isAuthenticated: false,
        email: null,
        uid: null,
      };
    case 'LOGGED_IN':
      return{
        ...state,
        isAuthenticated: true,
        email: action.payload.email,
        uid: action.payload.uid,
      };
    default:
      return state;
  }
};