import React, { FunctionComponent } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import PagePureContainer from '../components/PageContainer';
import { Text, Card, CardItem, Body, View } from 'native-base';
import FadeAnimationView from '../animations/FadeAnimationView';
import { MAIN_COLOR, SECONDARY_COLOR, TEXT_COLOR } from '../constants/constants';
import { StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native';
import { Carousel } from '../components/Carousel';
interface Props{
  navigation: DrawerNavigationProp<ParamListBase, 'Home'>;
}

const SCREEN_WIDTH = Dimensions.get('screen').width;
const Home: FunctionComponent<Props> = ({navigation}) => {
  return(
    <FadeAnimationView style={{flex: 1, backgroundColor: SECONDARY_COLOR}}>
      <PagePureContainer headerTitle='Home' drawerNavigation={navigation} style={{backgroundColor: SECONDARY_COLOR}}>
        <ScrollView contentContainerStyle={{margin: 10}}>
          <View>
            <Text style={{fontSize: 25}}>Hi, User</Text>
          </View>
          <Carousel snapToInterval={SCREEN_WIDTH - 45}>
            <Card style={[Style.card]}>
              <CardItem style={[Style.cardItem]}>
                <Body>
                  <Text style={[Style.text]}>
                    Helloworld
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={[Style.card]}>
              <CardItem style={[Style.cardItem]}>
                <Body>
                  <Text style={[Style.text]}>
                    Helloworld
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <Card style={[Style.card]}>
              <CardItem style={[Style.cardItem]}>
                <Body>
                  <Text style={[Style.text]}>
                    Helloworld
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <Card style={[Style.card]}>
              <CardItem style={[Style.cardItem]}>
                <Body>
                  <Text style={[Style.text]}>
                    Helloworld
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <Card style={[Style.card]}>
              <CardItem style={[Style.cardItem]}>
                <Body>
                  <Text style={[Style.text]}>
                    Helloworld
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <Card style={[Style.card]}>
              <CardItem style={[Style.cardItem]}>
                <Body>
                  <Text style={[]}>
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
    backgroundColor: MAIN_COLOR,
  },
  headerText: {
    color: TEXT_COLOR,
  },
  text: {
    color: TEXT_COLOR,
    flex: 1,
    alignSelf: 'center',
    height: 200,
    textAlignVertical: 'center',
  },
});
export default Home;