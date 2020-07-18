import React, { FunctionComponent } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Text } from 'react-native';
import PagePureContainer from '../components/PageContainer';
import { OXFORD_BLUE_COLOR } from '../constants/constants';
import FadeAnimationView from '../animations/FadeAnimationView';

interface Props{
  navigation: DrawerNavigationProp<ParamListBase, 'Home'>;
}

const Home: FunctionComponent<Props> = ({navigation}) => {
  return(
    <FadeAnimationView style={{backgroundColor: OXFORD_BLUE_COLOR, paddingBottom: 20, flex: 1}}>
      <PagePureContainer showHeader={true} headerTitle='Lady Bird' drawerNavigation={navigation}>
        <Text>Not logged in yet</Text>
      </PagePureContainer>
    </FadeAnimationView>
  );
};

export default Home;