import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

//#region USER session APIs

//#region Email login APIs
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
//#endregion

//#region Phone Login APIs
export const loginWithPhoneNumber = async (password: string, callback: Function, resendMessage: boolean = false) => {
  try {
    const confirmation = await auth().signInWithPhoneNumber(password, resendMessage);
    return confirmation;
  }catch (e) {
    console.log('loginWithPhoneNumber: ', e);
    callback(e);
  }
};

export const confirmPhoneNumberAuthCode =
async (authObject: FirebaseAuthTypes.ConfirmationResult , authCode: string, dispatch: any, callback: Function) => {
  try {
    const success = await authObject.confirm(authCode);
    dispatch({type: 'LOGIN', payload: success?.user});
  }catch (e) {
    console.log('confirmPhoneNumberAuthCode: ', e);
    callback(e);
  }
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
//#endregion

//#region User Profile APIs
export const updateUserProfile = (dispatch: any, name: string) => {
  const update = {displayName: name};
  auth()
  .currentUser
  ?.updateProfile(update)
  .then(() => {
    console.log('AUTH API: Updated profile successfully');
    dispatch({type: 'UPDATE_USER', payload: auth().currentUser});
  });
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