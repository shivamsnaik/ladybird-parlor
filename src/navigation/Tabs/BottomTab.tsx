import React, { FunctionComponent } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { DIM_WHITE_COLOR, TEXT_COLOR, SECONDARY_COLOR, MAIN_COLOR, FontFamily, PRIMARY_BORDER_RADIUS } from '../../constants/constants';
import Home from '../../screens/Home';
import Appointments from '../../screens/Appointments';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

type Props = {
  navigation: NavigationProp<ParamListBase>;
  user: FirebaseAuthTypes.User;
};

const Tab = createBottomTabNavigator();
const BottomTab: FunctionComponent<Props> = () => {
  return(
    <Tab.Navigator
      backBehavior='initialRoute'
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'menu';
          if (route.name === 'Home') {
            iconName = focused
            ? 'home'
            : 'home';
          }else if (route.name === 'Appointments') {
            iconName = focused
            ? 'person-pin'
            : 'person-pin';
          }else if (route.name === 'Rates') {
            iconName = focused
            ? 'info'
            : 'info-outline';
          }

          return (
              <Icon name={iconName} size={size} solid={true} color={color}/>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: MAIN_COLOR,
        inactiveTintColor: SECONDARY_COLOR,
        labelPosition: 'beside-icon',
        labelStyle: {fontFamily: FontFamily},
        tabStyle: {borderTopLeftRadius: 5, borderTopRightRadius: 5},
        activeBackgroundColor: SECONDARY_COLOR,
        style: {borderTopColor: DIM_WHITE_COLOR, borderTopWidth: 0},
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Appointments' component={Appointments}/>
      <Tab.Screen name='Rates' component={Home}/>
    </Tab.Navigator>
  );
};

export default BottomTab;