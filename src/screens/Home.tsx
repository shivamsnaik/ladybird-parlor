import React, { FunctionComponent } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Text } from 'react-native';
import PagePureContainer from '../components/PageContainer';
import { Card, ListItem } from 'react-native-elements';

interface Props{
  navigation: DrawerNavigationProp<ParamListBase, 'Home'>;
}

const Home: FunctionComponent<Props> = ({navigation}) => {
  return(
    <>
      <PagePureContainer showHeader={true} headerTitle='Lady Bird' drawerNavigation={navigation}>
      <Card containerStyle={{margin: 0, padding: 0, justifyContent: 'center', alignContent: 'center'}} >
        {
          users.map((u, i) => {
            return (
              <ListItem
                key={i}
                title={u.name}
                style={{flex: 1, height: 200, justifyContent: 'center', marginBottom: 5, borderWidth: 0.5}}
              />
            );
          })
        }
      </Card>
      </PagePureContainer>
    </>
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
export default Home;