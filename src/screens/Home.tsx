import React, { FunctionComponent } from 'react';
import {View, Button} from 'react-native';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Header from '../components/Header';

interface Props{
  navigation: DrawerNavigationProp<ParamListBase, 'Home'>;
}

const Home: FunctionComponent<Props> = ({navigation}) => {
  return(
    <>
      <Header title='' style={{backgroundColor: '#F8A610', height: 50}} textStyle={{color: 'white'}}/>
    </>
  );
};

export default Home;