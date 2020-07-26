import database from '@react-native-firebase/database';

//#region Appointment page APIs
export const subscribeAppointmentData = (uid: string, callback: any) => {
  return database()
  .ref(`appointments/${uid}`)
  .orderByKey()
  .on('value', (snapshot: any) => {
    callback(snapshot);
  });
};

export const unsubscribeToAppointmentData = (uid: string, appointmentRef: any) => {
  database()
    .ref(`/appointments/${uid}`)
    .off('value', appointmentRef);
};
//#endregion
