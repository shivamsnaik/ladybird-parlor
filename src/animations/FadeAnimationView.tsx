import React, { FunctionComponent, useRef, useEffect } from 'react';
import { StyleProp, ViewStyle, Easing } from 'react-native';
import { Animated } from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>,
};

const FadeAnimationView: FunctionComponent<Props> = ({style, children}) => {
  const fadeAnimationInitValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    startAnimation();
  });

  const startAnimation = () => {
    Animated.timing(fadeAnimationInitValue,
      {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
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