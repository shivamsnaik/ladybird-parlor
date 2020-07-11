import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { OXFORD_BLUE_COLOR } from './constants/constants';
import RootPureNavigator from './navigation/RootNavigator';

type AppProps = {};

export const App: FunctionComponent<AppProps> = () => {
  return(
    <>
      <StatusBar barStyle ='light-content' backgroundColor={OXFORD_BLUE_COLOR}/>
      <RootPureNavigator/>
    </>
  );
};

export default App;