import React, { FunctionComponent, useEffect, useContext, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PagePureContainer from '../components/PageContainer';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { TERTIARY_COLOR, SECONDARY_COLOR, MAIN_COLOR, MAIN_FONT_SIZE } from '../constants/constants';
import { Text, View, List, ListItem } from 'native-base';
import { subscribeAppointmentData, unsubscribeToAppointmentData } from '../api/AppointmentsApi';
import { AuthContext } from '../security/UserLogin';
import { Overlay } from 'react-native-elements';
import LoadingPage from './LoadingPage';
type Props = {
  navigation: DrawerNavigationProp<ParamListBase, 'Appointments'>;
};

const Appointments: FunctionComponent<Props> = ({navigation}) => {
  //#region States and Variable declarations
  const userContext = useContext(AuthContext);
  const [appointmentData, setAppoinmentData] = useState([] as any[]);
  const [loading, setLoading] = useState(true as boolean);
  //#endregion

  //#region Component functions
  const stateChangeEventHandler = (snapshot: any) => {
    if (loading)
      setLoading(false);
    setAppoinmentData(snapshot.val());
    console.log('APPOINTMENTS UPDATES: ', snapshot.val());
  };
  //#endregion

  useEffect(() => {
    const reference = subscribeAppointmentData(userContext.user.profile.uid, stateChangeEventHandler);

    return () => {
      unsubscribeToAppointmentData(userContext.user.profile.uid, reference);
    };
  }, []);

  return(
    <>
    {
      loading &&
      <Overlay isVisible={loading} fullScreen>
        <LoadingPage />
      </Overlay>
      }
      <PagePureContainer headerTitle='Appointments' drawerNavigation={navigation} style={{backgroundColor: TERTIARY_COLOR}}>
        <ScrollView contentContainerStyle={{}}>
          {
            appointmentData !== null ?
              <List style={{flex: 1}}>
                {
                  Object.keys(appointmentData).map((value: any, index: any) => {
                    return (
                      <ListItem
                        key={index}
                        style={Style.listItemStyle}
                      >
                        <Text style={[Style.titleStyle, {}]}>{appointmentData[value].service}</Text>
                        <Text style={[Style.dateStyle]}>
                          {(new Date(parseInt(value) * 1000)).toLocaleString()}
                        </Text>
                      </ListItem>
                    );
                  })
                }
              </List>
            :
            <View>
              <Text>No appointments for now.</Text>
            </View>
          }
        </ScrollView>
      </PagePureContainer>
    </>
  );
};

const Style = StyleSheet.create({
  listItemStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: SECONDARY_COLOR,
    margin: 10,
    padding: 10,
    height: 100,
    borderRadius: 25,
  },
  titleStyle: {
    color: MAIN_COLOR,
    fontSize: MAIN_FONT_SIZE,
    textTransform: 'capitalize',
  },
  dateStyle: {
    color: MAIN_COLOR,
  },
});
export default Appointments;