import React, { FunctionComponent } from 'react';
import RootPureNavigator from './navigation/RootNavigator';

type AppProps = {};

export const App: FunctionComponent<AppProps> = () => {
  return(
    <>
      <RootPureNavigator/>
    </>
  );
};

export default App;