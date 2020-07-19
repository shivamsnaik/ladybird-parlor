import React, { FunctionComponent, useRef, useEffect } from 'react';
import {Animated, Easing, StatusBar, StyleProp, ViewStyle} from 'react-native';
import { DIM_WHITE_COLOR, BLUE_COLOR } from '../constants/constants';
import ShrinkAnimationView from '../animations/ShrinkAnimationView';
import { View } from 'native-base';

type Props = {
  style?: StyleProp<ViewStyle>;
};

const LoadingPage: FunctionComponent<Props> = ({style}) => {

  const spinAnimValue = useRef(new Animated.Value(0)).current;
  const spin = spinAnimValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // const spinReverse = spinAnimValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['360deg', '0deg'],
  // });

  useEffect(() => {
    Animated.loop(Animated.timing(
      spinAnimValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      },
    )).start();
  });
  return(
    <ShrinkAnimationView style={[{backgroundColor: DIM_WHITE_COLOR}, style]}>
      <StatusBar backgroundColor={DIM_WHITE_COLOR}/>
      <View style={{backgroundColor: DIM_WHITE_COLOR, flexDirection: 'row', minWidth: 100, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.Image
          style={{ tintColor: BLUE_COLOR , overlayColor: 'transparent', height: 150, width: 150, transform: [{rotate: spin}] }}
          source={require('../assets/icons/fidget.png')}
        />
      </View>
    </ShrinkAnimationView>
  );
};

export default LoadingPage;