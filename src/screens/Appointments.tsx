import React, { FunctionComponent, useEffect, useContext, useState } from 'react';
import { ScrollView } from 'react-native';
import PagePureContainer from '../components/PageContainer';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { TERTIARY_COLOR } from '../constants/constants';
import { Text, View } from 'native-base';
import { subscribeAppointmentData, unsubscribeToAppointmentData } from '../api/AppointmentsApi';
import { AuthContext } from '../security/UserLogin';
type Props = {
  navigation: DrawerNavigationProp<ParamListBase, 'Appointments'>;
};

const Appointments: FunctionComponent<Props> = ({navigation}) => {
  //#region Variable declarations
  const userContext = useContext(AuthContext);
  const [appointmentData, setAppoinmentData] = useState([] as any[]);
  //#endregion

  //#region Component functions
  const stateChangeEventHandler = (snapshot: any) => {
    setAppoinmentData(snapshot.val());
    console.log('APPOINTMENTS: ', appointmentData);
  };
  //#endregion

  useEffect(() => {
    const reference = subscribeAppointmentData(userContext.user.profile.uid, stateChangeEventHandler);

    return () => {
      unsubscribeToAppointmentData(userContext.user.profile.uid, reference);
    };
  }, []);

  return(
    <PagePureContainer headerTitle='Appointments' drawerNavigation={navigation} style={{backgroundColor: TERTIARY_COLOR}}>
      <ScrollView contentContainerStyle={{margin: 10}}>
        {
          appointmentData !== null ?
          appointmentData.map((value, index) => {
            return (
              <View key={index} style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{value.service}</Text>
                <Text>{(new Date(parseInt(value.timestamp) * 1000)).toLocaleString()}</Text>
              </View>
            );
          })
          :
          <View>
            <Text>No appointments for now.</Text>
          </View>
        }
      </ScrollView>
    </PagePureContainer>
  );
};
export default Appointments;