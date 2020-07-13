import React, { FunctionComponent } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import PagePureContainer from '../components/PageContainer';
import { Card, ListItem } from 'react-native-elements';
import { OXFORD_BLUE_COLOR } from '../constants/constants';

interface Props{
  navigation: DrawerNavigationProp<ParamListBase, 'Home'>;
}

const ListItems: FunctionComponent<Props> = ({navigation}) => {
  return(
    <View style={{backgroundColor: OXFORD_BLUE_COLOR, flex: 1}}>
      <PagePureContainer showHeader={true} headerTitle='Lady Bird' drawerNavigation={navigation}>
        <>
          <Card containerStyle={{flex: 1, margin: 10, padding: 0, alignItems: 'center' }}>
            <Text>Helloworld</Text>
          </Card>
          <Card containerStyle={{flex: 1, margin: 10, padding: 0, justifyContent: 'center', alignContent: 'center'}} >
            {
              users.map((u, i) => {
                return (
                  <ListItem
                    contentContainerStyle={{alignItems: 'center'}}
                    key={i}
                    title={u.name}
                    style={{flex: 1, height: 200, justifyContent: 'center', marginBottom: 5, borderWidth: 0.5}}
                  />
                );
              })
            }
          </Card>
        </>
      </PagePureContainer>
      </View>
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