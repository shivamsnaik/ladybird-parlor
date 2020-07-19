import React, { FunctionComponent } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import PagePureContainer from '../components/PageContainer';
import { Text, Card, CardItem, Body } from 'native-base';
import FadeAnimationView from '../animations/FadeAnimationView';
import { OXFORD_BLUE_COLOR } from '../constants/constants';
interface Props{
  navigation: DrawerNavigationProp<ParamListBase, 'Home'>;
}

const Home: FunctionComponent<Props> = ({navigation}) => {
  return(
    <PagePureContainer headerTitle='Home' drawerNavigation={navigation}>
      <FadeAnimationView
        style={[{backgroundColor: OXFORD_BLUE_COLOR, paddingBottom: 20, flex: 1}]}
      >
        <Card style={{backgroundColor: 'black'}}>
          <CardItem>
            <Body>
              <Text style={{flex: 1, alignSelf: 'center', height: 200, textAlignVertical: 'center'}}>
                Helloworld
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={{backgroundColor: 'black'}}>
          <CardItem>
            <Body>
              <Text style={{flex: 1, alignSelf: 'center', height: 200, textAlignVertical: 'center'}}>
                Helloworld
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={{backgroundColor: 'black'}}>
          <CardItem>
            <Body>
              <Text style={{flex: 1, alignSelf: 'center', height: 200, textAlignVertical: 'center'}}>
                Helloworld
              </Text>
            </Body>
          </CardItem>
        </Card>
      </FadeAnimationView>
    </PagePureContainer>
  );
};

export default Home;