import auth from '@react-native-firebase/auth';

export const loginUser: any = async (email: string, pwd: string, dispatch: any, callback?: any) => {
  auth()
  .signInWithEmailAndPassword(email, pwd)
  .then((response) => {
    console.log(`AUTH API: User ${response.user.email} logged in`);
    dispatch({type: 'LOGIN', payload: {email: response.user.email, uid: response.user.uid}});
  })
  .catch((error) => {
    console.log('AUTH API ERROR: ' + error.code);
    callback(error);
  });
};

export const logoutUser = (dispatch: any) => {
  auth()
    .signOut()
    .then(() => {
      console.log('AUTH API: User logged out');
      dispatch({type: 'LOGOUT', payload: null});
    })
    .catch(error => {
      console.log('AUTH API: ' + error);
    });
};