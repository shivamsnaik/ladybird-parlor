import React, { FunctionComponent } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import PagePureContainer from '../components/PageContainer';
import { Text, Card, CardItem, Body } from 'native-base';
interface Props{
  navigation: DrawerNavigationProp<ParamListBase, 'Home'>;
}

const Home: FunctionComponent<Props> = ({navigation}) => {
  return(
    <PagePureContainer headerTitle='Home' drawerNavigation={navigation}>
      <>
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
      </>
    </PagePureContainer>
  );
};

export default Home;