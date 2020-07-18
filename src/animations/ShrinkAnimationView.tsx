import React from 'react';
import { useRef, FunctionComponent, useEffect } from 'react';
import {Easing, Animated, StyleProp, ViewStyle } from 'react-native';
import { OXFORD_BLUE_COLOR } from '../constants/constants';

type Props = {
  style?: StyleProp<ViewStyle>;
};

const ShrinkAnimationView: FunctionComponent<Props> = ({style, children}) => {
  const shrinkAnimationInitValue = useRef(new Animated.Value(1)).current;
  const shrinkAnimationScale = {scale: shrinkAnimationInitValue.interpolate
    ({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.25, 2.5],
    }),
  };

  useEffect(() => {
    startAnimation();
  }, [shrinkAnimationInitValue]);

  const startAnimation = () => {
    Animated.timing(shrinkAnimationInitValue,
      {
        toValue: 0,
        easing: Easing.linear,
        duration: 100,
        useNativeDriver: true,
      },
    ).start();
  };
  return(
    <Animated.View
      style={[
        {flex: 1, backgroundColor: OXFORD_BLUE_COLOR, alignItems: 'center', justifyContent: 'center', transform: [shrinkAnimationScale]},
        style,
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default ShrinkAnimationView;