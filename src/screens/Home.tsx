import React, { FunctionComponent } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import PagePureContainer from '../components/PageContainer';
import { Text, Card, CardItem, Body, View } from 'native-base';
import FadeAnimationView from '../animations/FadeAnimationView';
import { OXFORD_BLUE_COLOR, DIM_WHITE_COLOR } from '../constants/constants';
import { StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native';
import { Carousel } from '../components/Carousel';
interface Props{
  navigation: DrawerNavigationProp<ParamListBase, 'Home'>;
}

const SCREEN_WIDTH = Dimensions.get('screen').width;
const Home: FunctionComponent<Props> = ({navigation}) => {
  return(
    <FadeAnimationView style={{flex: 1, backgroundColor: OXFORD_BLUE_COLOR}}>
      <PagePureContainer headerTitle='Home' drawerNavigation={navigation}>
        <ScrollView contentContainerStyle={{margin: 10}}>
          <View>
            <Text style={{fontSize: 25}}>Hi, User</Text>
          </View>
          <Carousel snapToInterval={SCREEN_WIDTH - 45}>
            <Card style={[Style.card]}>
              <CardItem style={[Style.cardItem]}>
                <Body>
                  <Text style={{flex: 1, alignSelf: 'center', height: 200, textAlignVertical: 'center'}}>
                    Helloworld
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={[Style.card]}>
              <CardItem style={[Style.cardItem]}>
                <Body>
                  <Text style={{flex: 1, alignSelf: 'center', height: 200, textAlignVertical: 'center'}}>
                    Helloworld
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <Card style={[Style.card]}>
              <CardItem style={[Style.cardItem]}>
                <Body>
                  <Text style={{flex : 1, alignSelf: 'center', height: 200, textAlignVertical: 'center'}}>
                    Helloworld
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <Card style={[Style.card]}>
              <CardItem style={[Style.cardItem]}>
                <Body>
                  <Text style={{flex: 1, alignSelf: 'center', height: 200, textAlignVertical: 'center'}}>
                    Helloworld
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <Card style={[Style.card]}>
              <CardItem style={[Style.cardItem]}>
                <Body>
                  <Text style={{flex: 1, alignSelf: 'center', height: 200, textAlignVertical: 'center'}}>
                    Helloworld
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <Card style={[Style.card]}>
              <CardItem style={[Style.cardItem]}>
                <Body>
                  <Text style={{flex: 1, alignSelf: 'center', height: 200, textAlignVertical: 'center'}}>
                    Helloworld
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Carousel>
        </ScrollView>
      </PagePureContainer>
    </FadeAnimationView>
  );
};

const Style = StyleSheet.create({
  card: {
    width: SCREEN_WIDTH - 50,
  },
  cardItem: {
    backgroundColor: OXFORD_BLUE_COLOR,
  },
  text: {
    color: DIM_WHITE_COLOR,
  },
});
export default Home;