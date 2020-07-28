import React, { FunctionComponent, useEffect, useContext, useState } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import PagePureContainer from '../components/PageContainer';
import { Text, Card, CardItem, View, Button } from 'native-base';
import FadeAnimationView from '../animations/FadeAnimationView';
import {
  MAIN_COLOR, SECONDARY_COLOR,
  TERTIARY_COLOR, TEXT_COLOR_INVERSE,
  SECONDARY_FONT_SIZE, TERTIARY_FONT_SIZE,
  TEXT_COLOR,
} from '../constants/constants';
import { StyleSheet, Dimensions, FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import { Carousel } from '../components/Carousel';
import { AuthContext } from '../security/UserLogin';
import UpdateProfile from './UpdateProfile';
import { SpecialOffers, Services, ServiceDetails } from '../constants/ListDataConstants';

interface Props{
  navigation: DrawerNavigationProp<ParamListBase, 'Home'>;
}

const SCREEN_WIDTH = Dimensions.get('screen').width;
const Home: FunctionComponent<Props> = ({navigation}) => {
  //#region Variable declarations
  const userContext = useContext(AuthContext);
  const [selectedServiceID, setSelectedServiceId] = useState(-1);
  const [serviceDetails, setServiceDetails] = useState([] as any[]);
  //#endregion

  //#region Functions
  // Changes list of service based on parent Service selection
  const serviceChangeHandler = (index: number, serviceIdentifier: any) => {
    setSelectedServiceId(index);
    let service: any[] = [];
    switch (serviceIdentifier){
      case 'waxing': service = ServiceDetails.waxing; break;
      case 'eyebrow': service = ServiceDetails.eyebrow; break;
      case 'facial': service = ServiceDetails.facial; break;
    }
    setServiceDetails(service);
  };
  //#endregion

  useEffect(() => {
    serviceChangeHandler(0, Services[0].service_identifier);
  }, [userContext]);

  return(
    <FadeAnimationView style={{flex: 1, backgroundColor: SECONDARY_COLOR}}>
      <PagePureContainer
        headerTitle='Home'
        drawerNavigation={navigation}
        style={{backgroundColor: TERTIARY_COLOR}}
      >
        <ScrollView contentContainerStyle={{margin: 0}}>
        {
          userContext.user.profile.displayName === null ?
            <UpdateProfile context={userContext}/>
          :
          <>
            <View style={{backgroundColor: MAIN_COLOR, padding: 10, marginBottom: 10}}>
              <Text style={{fontSize: 28, textAlign: 'center', fontWeight: 'bold'}}>
                {console.log(`HOME PAGE: ${JSON.stringify(userContext.user.profile)}`)}
                Hi <Text style={{color: SECONDARY_COLOR, fontSize: 28}}>
                  {userContext.user.profile.displayName.split(' ')[0]}</Text>
                ,
              </Text>
            </View>

            <View style={{paddingLeft: 10, paddingRight: 10}}>
              <Text style={[Style.headingText]}>
                Special Offers
              </Text>
              <Carousel
                snapToInterval={SCREEN_WIDTH - 45}
                centerContent
                showsHorizontalScrollIndicator={false}
              >
                {
                  SpecialOffers.map((content, index) => {
                    return (
                      <Card
                        key={index}
                        style={[Style.card, {backgroundColor: SECONDARY_COLOR}]}
                        accessibilityComponentType='button'
                        accessibilityHint='HELLOWORLD'
                      >
                        <CardItem
                          accessibilityComponentType='button'
                          style={[Style.cardItem, {
                            borderColor: MAIN_COLOR, borderWidth: 2.0, borderStyle: 'solid',
                            flexDirection: 'column', backgroundColor: 'transparent',
                          }]}
                        >
                          <Button
                            style={[Style.button, {height: Style.card.height}]}
                            onPress={() => console.log('button pressed', index)}
                          >
                            <Text style={[Style.text, {color: MAIN_COLOR}]}>
                              {content.name}
                            </Text>
                          </Button>
                        </CardItem>
                      </Card>
                    );
                  })
                }
              </Carousel>
              <>
                <Text style={[Style.headingText]}>
                  Services
                </Text>
                <Carousel
                  snapToInterval={SCREEN_WIDTH - 200}
                  centerContent
                  showsHorizontalScrollIndicator={false}
                >
                  {
                    Services.map((service, index) => {
                      return(
                        <Card
                          key={service._id}
                          style={[Style.card, {
                            backgroundColor:  MAIN_COLOR,
                            width: SCREEN_WIDTH - 250,
                            height: 60,
                          }]}
                          accessibilityComponentType='button'
                          accessibilityHint='HELLOWORLD'
                        >
                          <CardItem
                            accessibilityComponentType='button'
                            style={[Style.cardItem, {
                              flexDirection: 'column',
                              backgroundColor: service._id === selectedServiceID
                              ? SECONDARY_COLOR
                              : 'transparent',
                            }]}
                          >
                            <Button
                              style={[Style.button, {height: Style.card.height}]}
                              onPress={() => serviceChangeHandler(index, service.service_identifier)}
                            >
                              <Text
                                style={[Style.text, {
                                  color: service._id === selectedServiceID
                                  ? TERTIARY_COLOR
                                  : SECONDARY_COLOR,
                                  fontSize: TERTIARY_FONT_SIZE,
                                }]}
                              >
                                {service.name}
                              </Text>
                            </Button>
                          </CardItem>
                        </Card>
                      );
                    })
                  }
                </Carousel>

                <FlatList
                  contentContainerStyle={{alignItems: 'center', marginTop: 15}}
                  nestedScrollEnabled={true}
                  data={serviceDetails}
                  renderItem={({item, index}) => {
                    return(
                      <Card
                        key={index}
                        style={[Style.card, {
                          backgroundColor: MAIN_COLOR,
                          maxHeight: 80,
                          borderRadius: 20,
                        }]}
                        accessibilityComponentType='button'
                        accessibilityHint='HELLOWORLD'
                      >
                        <CardItem
                          accessibilityComponentType='button'
                          style={[Style.cardItem, {
                            flexDirection: 'column',
                            backgroundColor: 'transparent',
                          }]}
                        >
                          <Button
                            style={[Style.button, {
                              shadowColor: SECONDARY_COLOR,
                              justifyContent: 'space-between',
                              height: Style.card.height,
                            }]}
                            onPress={() => console.log('button pressed', item.service)}
                          >
                            <Text
                              style={[Style.text, {
                                fontSize: TERTIARY_FONT_SIZE,
                                color: TEXT_COLOR,
                                fontWeight: 'bold',
                              }]}
                            >
                              {item.service}
                            </Text>
                            <Text
                              style={[Style.text, {
                                fontSize: TERTIARY_FONT_SIZE,
                                color: SECONDARY_COLOR,
                                fontWeight: '700',
                              }]}
                            >
                              {item.price}₹
                            </Text>
                          </Button>
                        </CardItem>
                      </Card>
                    );
                  }}
                />
              </>
            </View>
          </>
        }
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
    fontWeight: '700',
  },

  headingText: {
    fontSize: SECONDARY_FONT_SIZE,
    fontWeight: '600',
    margin: 10,
  },
});

export default Home;