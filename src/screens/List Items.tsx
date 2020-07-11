import React, { FunctionComponent } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import PagePureContainer from '../components/PageContainer';

interface Props{
  navigation: DrawerNavigationProp<ParamListBase, 'List Items'>;
}

const ListItems: FunctionComponent<Props> = ({navigation}) => {
  return(
    <>
      <PagePureContainer showHeader={true} headerTitle='List Items' drawerNavigation={navigation}/>
    </>
  );
};

export default ListItems;