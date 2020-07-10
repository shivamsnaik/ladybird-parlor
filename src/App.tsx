import 'react-native-gesture-handler';
import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { OXFORD_BLUE_COLOR } from './constants/constants';
import RootNavigator from './navigation/RootNavigator';

type AppProps = {};

export const App: FunctionComponent<AppProps> = () => {
  return(
    <>
      <StatusBar barStyle ='light-content' backgroundColor={OXFORD_BLUE_COLOR}/>
      <RootNavigator/>
    </>
  );
};

export default App;