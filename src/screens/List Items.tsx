import React, { FunctionComponent } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { View } from 'react-native';
import PagePureContainer from '../components/PageContainer';
import { Card } from 'react-native-elements';
import { OXFORD_BLUE_COLOR } from '../constants/constants';

interface Props{
  navigation?: DrawerNavigationProp<ParamListBase, 'Home'>;
}

const ListItems: FunctionComponent<Props> = ({navigation}) => {
  return(
    <PagePureContainer
      style={{flex: 10, backgroundColor: OXFORD_BLUE_COLOR}}
      headerTitle='Lady Bird'
      drawerNavigation={navigation}
    >
      <View style={{flex: 1}}>
        <Card>

        </Card>
      </View>
    </PagePureContainer>
  );
};

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
 // more users here
]
export default ListItems;