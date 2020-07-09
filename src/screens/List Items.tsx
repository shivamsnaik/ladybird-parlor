import React, { FunctionComponent } from 'react';
import {Text, View} from 'react-native';
import { ParamListBase } from '@react-navigation/native';
import PageContainer from '../components/PageContainer';
import { DrawerNavigationProp } from '@react-navigation/drawer';

interface Props{
  navigation: DrawerNavigationProp<ParamListBase, 'List Items'>;
}

const ListItems: FunctionComponent<Props> = ({navigation}) => {
  return(
    <>
      <PageContainer showHeader={true} headerTitle='List Items' drawerNavigation={navigation}/>
    </>
  );
};

export default ListItems;