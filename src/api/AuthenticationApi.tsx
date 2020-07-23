import auth from '@react-native-firebase/auth';

//#region USER session APIs
export const loginUser: any = async (email: string, pwd: string, dispatch: any, callback?: any) => {
  auth()
  .signInWithEmailAndPassword(email, pwd)
  .then((response) => {
    console.log(`AUTH API: User ${response.user.email} logged in`);
    createUserJSONObject(response.user)
    .then((userJSON) => {
      dispatch({type: 'LOGIN', payload: userJSON});
    });
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

export const updateUserProfile = () => {
  const update = {displayName: 'Shivam Naik'};
  auth()
  .currentUser
  ?.updateProfile(update)
  .then(() => {
    console.log('AUTH API: Updated profile successfully');
  });
};
//#endregion

//#region Appointment page APIs
export const addAppointment = (uid: any, date: string) => {

};

//#endregion

//#region Helping functions for Authentication APIS
export const createUserJSONObject = async (user: any) => {
  const userJSON = {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    emailVerified: user.emailVerified,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
  };

  return JSON.stringify(userJSON);
};
//#endregion