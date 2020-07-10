import React, { FunctionComponent } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { HINT_OF_READ_COLOR, RED_COLOR, DIM_WHITE_COLOR } from '../../constants/constants';
import Home from '../../screens/Home';
import ListItems from '../../screens/List Items';

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const Tab = createBottomTabNavigator();
const HomeScreen: FunctionComponent<Props> = () => {
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

          return <Icon name={iconName} size={size} solid={true} color={color}/>;
        },
      })}
      tabBarOptions={{
        activeTintColor: RED_COLOR,
        inactiveTintColor: HINT_OF_READ_COLOR,
        activeBackgroundColor: DIM_WHITE_COLOR,
      }}
    >
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Appointments' component={ListItems}/>
      <Tab.Screen name='Rates' component={Home}/>
    </Tab.Navigator>
  );
};

export default HomeScreen;