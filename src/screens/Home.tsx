import React, { FunctionComponent } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import PagePureContainer from '../components/PageContainer';
import { Text, Card, CardItem, Body, View } from 'native-base';
import FadeAnimationView from '../animations/FadeAnimationView';
import { MAIN_COLOR, SECONDARY_COLOR, TEXT_COLOR, TERTIARY_COLOR, CARD_COLOR_1, CARD_COLOR_2, CARD_COLOR_3, CARD_COLOR_4, CARD_COLOR_5, CARD_COLOR_6, TEXT_COLOR_INVERSE, MAIN_FONT_SIZE } from '../constants/constants';
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
      <PagePureContainer headerTitle='Home' drawerNavigation={navigation} style={{backgroundColor: TERTIARY_COLOR}}>
        <ScrollView contentContainerStyle={{margin: 10}}>
          <View>
            <Text style={{fontSize: 25}}>Hi, User</Text>
          </View>
          <Carousel snapToInterval={SCREEN_WIDTH - 45} centerContent showsHorizontalScrollIndicator={false}>
            <Card style={[{borderRadius: 20}, Style.card]}>
              <CardItem style={[Style.cardItem, {backgroundColor: CARD_COLOR_1}]}>
                <Body>
                  <Text style={[Style.text]}>
                    Eyebrows
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={[Style.card]}>
              <CardItem style={[Style.cardItem, {backgroundColor: CARD_COLOR_2}]}>
                <Body>
                  <Text style={[Style.text]}>
                    Waxing
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <Card style={[Style.card]}>
              <CardItem style={[Style.cardItem, {backgroundColor: CARD_COLOR_3}]}>
                <Body>
                  <Text style={[Style.text]}>
                    Facial
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <Card style={[Style.card]}>
              <CardItem style={[Style.cardItem, {backgroundColor: CARD_COLOR_4}]}>
                <Body>
                  <Text style={[Style.text]}>
                    Parlor 4
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <Card style={[Style.card]}>
              <CardItem style={[Style.cardItem, {backgroundColor: CARD_COLOR_5}]}>
                <Body style={{borderRadius: 10}}>
                  <Text style={[Style.text]}>
                    Parlor 5
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <Card style={[Style.card]}>
              <CardItem style={[Style.cardItem, {backgroundColor: CARD_COLOR_6}]}>
                <Body>
                  <Text style={[Style.text]}>
                    Parlor 6
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
    borderRadius: 5,
  },
  cardItem: {
    backgroundColor: MAIN_COLOR,
    borderRadius: 5,
  },
  headerText: {
    color: TEXT_COLOR,
  },
  text: {
    color: TEXT_COLOR_INVERSE,
    flex: 1,
    alignSelf: 'center',
    height: 200,
    fontSize: MAIN_FONT_SIZE + 2,
    textAlignVertical: 'center',
  },
});
export default Home;