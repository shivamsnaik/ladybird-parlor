export const Reducer = (state: any, action: any) => {
  switch (action.type){
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case 'LOGOUT':
      return{
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};