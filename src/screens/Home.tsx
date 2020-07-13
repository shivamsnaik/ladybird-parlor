import React, { FunctionComponent } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import PagePureContainer from '../components/PageContainer';
import { OXFORD_BLUE_COLOR } from '../constants/constants';

interface Props{
  navigation: DrawerNavigationProp<ParamListBase, 'Home'>;
}

// auth()
//   .signInWithEmailAndPassword('shivamsnaik@gmail.com', 'sasushso')
//   .then(() => {
//     console.log('User logged in anonymously');
//   })
//   .catch((error) => {
//     if (error.code === 'auth/operation-not-allowed') {
//       console.log('Enable anonym sign in in firebase');
//     }
//   });
const Home: FunctionComponent<Props> = ({navigation}) => {
  // SET INITIALIZING STATE
  return(
    <View style={{backgroundColor: OXFORD_BLUE_COLOR, paddingBottom: 20, flex: 1}}>
      <PagePureContainer showHeader={true} headerTitle='Lady Bird' drawerNavigation={navigation}>
      {
            <Text>Not logged in yet</Text>
      }
      </PagePureContainer>
    </View>
  );
};

export default Home;