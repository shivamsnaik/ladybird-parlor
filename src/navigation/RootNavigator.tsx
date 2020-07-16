import React, { FunctionComponent, useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { OXFORD_BLUE_COLOR, HINT_OF_READ_COLOR } from '../constants/constants';
import BottomTab from './Tabs/BottomTab';
import Login from '../screens/Login';
import { Reducer } from '../config/StateConfig';
import { InitialUserState, AuthContext } from '../security/UserLogin';
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();
const RootNavigator: FunctionComponent = () => {
  // REQUIRED IN FUTURE FOR SPLASH SCREEN
  // const [init, setInit] = useState(true);
  const [user, dispatch] = React.useReducer(Reducer, InitialUserState);
  // const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // const uniqueId = AsyncStorage.getItem('uid');
    AsyncStorage.getItem('email').then((value) => {
      console.log('ROOT NAVIGATOR: ' + value);
      AsyncStorage.getItem('uid').then((uidValue) => {
        if (value !== null) dispatch({type: 'LOGGED_IN', payload: {email: value, uid: uidValue}});
      });
    });
  }, [user.isAuthenticated]);
  return (
    <AuthContext.Provider
      value={{user, dispatch}}
    >
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
          {
            user.isAuthenticated === false ?
              <Drawer.Screen name='Login' component={Login}/>
            :
              <Drawer.Screen name='Home' component={BottomTab}/>
          }
        </Drawer.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const RootPureNavigator = React.memo(RootNavigator);
export default RootPureNavigator;