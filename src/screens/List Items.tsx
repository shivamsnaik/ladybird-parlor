import React, { FunctionComponent } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { View, Text, Card, CardItem, Body } from 'native-base';
import PagePureContainer from '../components/PageContainer';
import { OXFORD_BLUE_COLOR, DIM_WHITE_COLOR } from '../constants/constants';
import FadeAnimationView from '../animations/FadeAnimationView';
import Animated from 'react-native-reanimated';
import {StyleSheet} from 'react-native';

interface Props{
  navigation?: DrawerNavigationProp<ParamListBase, 'Home'>;
}

const ListItems: FunctionComponent<Props> = ({navigation}) => {
  return(
    <PagePureContainer headerTitle='Home' drawerNavigation={navigation} style={{flex: 1, backgroundColor: OXFORD_BLUE_COLOR}}>
      <FadeAnimationView
        style={[{paddingBottom: 20, flex: 1, padding: 10}]}
      >
        <View>
          <Text style={[Style.text, {fontSize: 25}]}>Hi, User</Text>
        </View>
        <Animated.ScrollView
          scrollEventThrottle={1}
          persistentScrollbar
          horizontal
          
          nestedScrollEnabled={true}
          // pagingEnabled
          overScrollMode='always'
          scrollEnabled={true}
          scrollToOverflowEnabled
          showsHorizontalScrollIndicator={true}
          // onScrollBeginDrag={()=> console.log('SCROLL EVENT')}
          // onMomentumScrollBegin={()=> console.log('SCROLL EVENT MOMENTUM')}
          // onScroll={Animated.event(
          //   [
          //     {
          //       nativeEvent: {
          //         contentOffset: {x: scrollValue}}}],
          //   {
          //     useNativeDriver: true, listener: (event: NativeSyntheticEvent<ScrollView>) => {
          //       scrollValue.setOffset(10);
          //     },
          //   },
          // )}
        >
          <Card style={[Style.card]}>
            <CardItem>
              <Body>
                <Text style={{flex: 1, alignSelf: 'center', height: 200, textAlignVertical: 'center'}}>
                  Helloworld
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={[Style.card]}>
            <CardItem>
              <Body>
                <Text style={{flex: 1, alignSelf: 'center', height: 200, textAlignVertical: 'center'}}>
                  Helloworld
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={[Style.card]}>
            <CardItem>
              <Body>
                <Text style={{flex: 1, alignSelf: 'center', height: 200, textAlignVertical: 'center'}}>
                  Helloworld
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Animated.ScrollView>
      </FadeAnimationView>
    </PagePureContainer>
  );
};

const Style = StyleSheet.create({
  card: {
    backgroundColor: 'black',
    minWidth: '50%',
  },
  text: {
    color: DIM_WHITE_COLOR,
  },
});

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
export default ListItems;