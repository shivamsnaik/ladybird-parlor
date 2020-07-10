import React, { FunctionComponent } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { OXFORD_BLUE_COLOR, HINT_OF_READ_COLOR } from '../constants/constants';
import HomeScreen from './Tabs/HomeScreen';

const Drawer = createDrawerNavigator();
const RootNavigator: FunctionComponent = () => (
  <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white',
          card: OXFORD_BLUE_COLOR,
          primary: HINT_OF_READ_COLOR,
          text: HINT_OF_READ_COLOR,
        },
      }
    }
  >
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={HomeScreen}/>
    </Drawer.Navigator>
  </NavigationContainer>
);

export default RootNavigator;