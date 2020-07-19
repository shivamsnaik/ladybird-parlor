import React, { FunctionComponent, useRef, useEffect } from 'react';
import { StyleProp, ViewStyle, Easing } from 'react-native';
import { Animated } from 'react-native';

type Props = {
  animationParams?: Animated.TimingAnimationConfig;
  style?: StyleProp<ViewStyle>,
};

const FadeAnimationView: FunctionComponent<Props> = ({animationParams, style, children}) => {
  const fadeAnimationInitValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    startAnimation();
  });

  const startAnimation = () => {
    Animated.timing(fadeAnimationInitValue,
      {
        duration: 200,
        easing: Easing.ease,
        ...animationParams,
        useNativeDriver: true,
        toValue: 1,
      },
    ).start();
  };
  return(
    <Animated.View style={[{opacity: fadeAnimationInitValue}, style]}>
      {children}
    </Animated.View>
  );
};

export default FadeAnimationView;