import React, { FunctionComponent, useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { OXFORD_BLUE_COLOR, HINT_OF_READ_COLOR } from '../constants/constants';
import BottomTab from './Tabs/BottomTab';
import Login from '../screens/Login';
import { Reducer } from '../config/StateConfig';
import { InitialUserState, AuthContext } from '../security/UserLogin';
import AsyncStorage from '@react-native-community/async-storage';
import LoadingPage from '../screens/LoadingPage';

const Drawer = createDrawerNavigator();
const RootNavigator: FunctionComponent = () => {
  const [user, dispatch] = React.useReducer(Reducer, InitialUserState);
  const [loadingParams, setLoadingParams] = useState({isLoading: true});

  useEffect(() => {
    if (user.isAuthenticated) {
      setLoadingParams({...loadingParams, isLoading: false});
      return;
    }

    // CHECK IF USER IS ALREADY LOGGED IN
    AsyncStorage.getItem('email')
    .then((value) => {
      if (value === null) { setLoadingParams({...loadingParams, isLoading: false}); }
      console.log('ROOT NAVIGATOR: ' + value);
      AsyncStorage.getItem('uid').then((uidValue) => {
        if (value !== null) dispatch({type: 'LOGGED_IN', payload: {email: value, uid: uidValue}});
      });
    })
    .catch((e) => {
      console.log('ROOT NAVIGATOR ERROR: ' + e);
      setLoadingParams({...loadingParams, isLoading: false});
    });
  }, [user.isAuthenticated, loadingParams.isLoading]);

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
        {
          loadingParams.isLoading ?
          <LoadingPage/>
          :
          <Drawer.Navigator>
          {
            (user.isAuthenticated === false) ?
              <Drawer.Screen name='Login' component={Login}/>
            :
              <Drawer.Screen name='Home' component={BottomTab}/>
          }
          </Drawer.Navigator>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const RootPureNavigator = React.memo(RootNavigator);
export default RootPureNavigator;