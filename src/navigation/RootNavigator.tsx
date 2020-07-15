import React, { FunctionComponent, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { OXFORD_BLUE_COLOR, HINT_OF_READ_COLOR } from '../constants/constants';
import BottomTab from './Tabs/BottomTab';
import Login from '../screens/Login';
import { Reducer } from '../config/StateConfig';
import { InitialUserState, AuthContext } from '../security/UserLogin';


const Drawer = createDrawerNavigator();

const RootNavigator: FunctionComponent = () => {
  // REQUIRED IN FUTURE FOR SPLASH SCREEN
  // const [init, setInit] = useState(true);
  // const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [user, dispatch] = React.useReducer(Reducer, InitialUserState);

  useEffect(() => {

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