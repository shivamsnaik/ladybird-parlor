import React, { FunctionComponent, ReactChild } from 'react';
import { View } from 'react-native';
import Header from './Header';
import { HINT_OF_READ_COLOR, OXFORD_BLUE_COLOR } from '../constants/constants';

type Props = {
  headerTitle: string;
  children?: ReactChild;
};

const PageContainer: FunctionComponent<Props> = ({headerTitle, children}) => {
  return(
    <>
    <Header
        title={headerTitle}
        style={{backgroundColor: HINT_OF_READ_COLOR, flex: 1}}
        textStyle={{color: OXFORD_BLUE_COLOR, fontSize: 20, fontWeight: 'bold'}}
    />
    <View style={{backgroundColor: OXFORD_BLUE_COLOR, flex: 15}}>
      {children}
    </View>
    </>
  );
};

export default PageContainer;