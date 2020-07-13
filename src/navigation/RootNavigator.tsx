import React, { FunctionComponent, useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { OXFORD_BLUE_COLOR, HINT_OF_READ_COLOR } from '../constants/constants';
import HomeScreen from './Tabs/HomeScreen';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import Login from '../screens/Login';

const Drawer = createDrawerNavigator();

const RootNavigator: FunctionComponent = () => {
  const [init, setInit] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const loginUser = () => {
    auth()
    .signInWithEmailAndPassword('shivamsnaik@gmail.com', 'sasushsoo')
    .then((response) => {
      console.log(`User ${response.user.email} logged in`);
    })
    .catch((error) => {
      // if (error.code === 'auth/operation-not-allowed') {
      console.log(error.code);
      setUser(null);
      // }
    });
  };

  const logoutUser = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User logged out');
      });
  };

  const onAuthStateChanged = (newUser: any) => {
    setUser(newUser);
    if (init) setInit(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    if (user !== null)
      logoutUser();

    return subscriber; // unsubscribe on unmount
  }, [user]);
  return (
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
          user !== null ?
            <Drawer.Screen name='Home' component={HomeScreen}/>
          :
            <Drawer.Screen name='Login' component={Login}/>
        }
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const RootPureNavigator = React.memo(RootNavigator);
export default RootPureNavigator;