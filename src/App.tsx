import 'react-native-gesture-handler';
import React, { FunctionComponent } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import ListItems from './screens/List Items';
import { StatusBar } from 'react-native';
import { ORANGE } from './constants/constants';

type AppProps = {}

export const App: FunctionComponent<AppProps> = () => {
  return(
    <>
      <StatusBar barStyle ='dark-content' backgroundColor={ORANGE}/>
      <Drawer />
    </>
  );
};

const DrawerNavigator = createDrawerNavigator();
const Drawer = () => {
  return(
    <NavigationContainer >
      <DrawerNavigator.Navigator
        screenOptions={{
        }}
      >
        <DrawerNavigator.Screen name='Home' component={Home}/>
        <DrawerNavigator.Screen name='List Items' component={ListItems}/>
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App
;