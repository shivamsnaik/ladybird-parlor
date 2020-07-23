import AsyncStorage from '@react-native-community/async-storage';

export const Reducer = (state: any, action: any) => {
  switch (action.type){
    case 'LOGIN':
      console.log('STATE CONFIG: ' + action.payload);
      AsyncStorage.setItem('user', action.payload);
      return {
        ...state,
        isAuthenticated: true,
        profile: JSON.parse(action.payload),
      };
    case 'LOGOUT':
      AsyncStorage.clear();
      return{
        ...state,
        isAuthenticated: false,
        profile: null,
      };
    case 'LOGGED_IN':
      return{
        ...state,
        isAuthenticated: true,
        profile: JSON.parse(action.payload),
      };
    default:
      return state;
  }
};