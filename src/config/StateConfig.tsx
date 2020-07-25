import AsyncStorage from '@react-native-community/async-storage';

export const Reducer = (state: any, action: any) => {
  switch (action.type){
    case 'LOGIN':
      return{
        ...state,
        isAuthenticated: true,
        profile: action.payload,
      };
    case 'LOGOUT':
      AsyncStorage.clear();
      return{
        ...state,
        isAuthenticated: false,
        profile: null,
      };
    case 'UPDATE_USER':
      console.log('UPDATE USER REDUCER');
      return{
        ...state,
        isAuthenticated: true,
        profile: action.payload,
      };
    default:
      return state;
  }
};