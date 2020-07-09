import React, { FunctionComponent } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Text } from 'react-native';
import PageContainer from '../components/PageContainer';

interface Props{
  navigation: DrawerNavigationProp<ParamListBase, 'Home'>;
}

const Home: FunctionComponent<Props> = ({navigation}) => {
  return(
    <>
      <PageContainer headerTitle='Welcome to Ladybird Parlor'>
        <Text>Helloworld</Text>
      </PageContainer>
    </>
  );
};

export default Home;