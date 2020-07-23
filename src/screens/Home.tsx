import React, { FunctionComponent, useEffect, useContext } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import PagePureContainer from '../components/PageContainer';
import { Text, Card, CardItem, View, Button } from 'native-base';
import FadeAnimationView from '../animations/FadeAnimationView';
import { MAIN_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, CARD_COLOR_1, CARD_COLOR_2, CARD_COLOR_3, CARD_COLOR_4, CARD_COLOR_5, CARD_COLOR_6, TEXT_COLOR_INVERSE, SECONDARY_FONT_SIZE } from '../constants/constants';
import { StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native';
import { Carousel } from '../components/Carousel';
import { AuthContext } from '../security/UserLogin';
interface Props{
  navigation: DrawerNavigationProp<ParamListBase, 'Home'>;
}

const SCREEN_WIDTH = Dimensions.get('screen').width;
const Home: FunctionComponent<Props> = ({navigation}) => {
  const userContext = useContext(AuthContext);
  useEffect(() => {
  }, [userContext.user.profile]);

  return(
    <FadeAnimationView style={{flex: 1, backgroundColor: SECONDARY_COLOR}}>
      <PagePureContainer headerTitle='Home' drawerNavigation={navigation} style={{backgroundColor: TERTIARY_COLOR}}>
        <ScrollView contentContainerStyle={{margin: 10}}>
          <View style={{backgroundColor: MAIN_COLOR, padding: 10, borderRadius: 10, marginBottom: 10}}>
            <Text style={{fontSize: 25, textAlign: 'justify'}}>Hello {userContext.user.profile.displayName.split(' ')[0]}, Whats up?</Text>
          </View>
          <Carousel snapToInterval={SCREEN_WIDTH - 45} centerContent showsHorizontalScrollIndicator={false}>
            {
              CarouselContents.map((content, index) => {
                return (
                  <Card
                    key={index}
                    style={[Style.card, {backgroundColor:  content.cardColor}]}
                    accessibilityComponentType='button'
                    accessibilityHint='HELLOWORLD'
                  >
                    <CardItem accessibilityComponentType='button' style={[Style.cardItem, {flexDirection: 'column', backgroundColor: 'transparent'}]}>
                      <Button style={[Style.button, {height: Style.card.height}]} onPress={() => console.log('button pressed', index)}>
                        <Text style={[Style.text]}>
                          {content.name}
                        </Text>
                      </Button>
                    </CardItem>
                  </Card>
                );
              })
            }
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
    height: 200,
  },
  cardItem: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
    borderRadius: 5,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  button: {
    flex: 10,
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
    elevation: 0,
  },
  text: {
    textAlign: 'center',
    color: TEXT_COLOR_INVERSE,
    flex: 1,
    fontSize: SECONDARY_FONT_SIZE,
    textTransform: 'capitalize',
  },
});

const CarouselContents = [
  {name: 'Eyebrow', cardColor: CARD_COLOR_1},
  {name: 'Waxing', cardColor: CARD_COLOR_2},
  {name: 'Facial', cardColor: CARD_COLOR_3},
  {name: 'Parlor Item 4', cardColor: CARD_COLOR_4},
  {name: 'Parlor Item 5', cardColor: CARD_COLOR_5},
  {name: 'Parlor Item 6', cardColor: CARD_COLOR_6},
];
export default Home;