import React, { FunctionComponent, useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MAIN_COLOR, TEXT_COLOR, SECONDARY_COLOR } from '../constants/constants';
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
    AsyncStorage.getItem('user')
    .then((value) => {
      console.log('ROOT NAVIGATOR: ' + value);
      if (value === null) { setLoadingParams({...loadingParams, isLoading: false}); }
      else {
        dispatch({type: 'LOGGED_IN', payload: value});
      }
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
              card: MAIN_COLOR,
              primary: SECONDARY_COLOR,
              text: TEXT_COLOR,
              border: SECONDARY_COLOR,
            },
            dark: true,
          }
        }
      >
        {
          loadingParams.isLoading ?
          <LoadingPage/>
          :
          user.isAuthenticated === false ?
            <Login/>
          :
          <Drawer.Navigator openByDefault={false}>
            <Drawer.Screen name='Home' component={BottomTab}/>
          </Drawer.Navigator>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const RootPureNavigator = React.memo(RootNavigator);
export default RootPureNavigator;