import React, { FunctionComponent, useRef, useEffect } from 'react';
import { StyleProp, ViewStyle, Easing } from 'react-native';
import { Animated } from 'react-native';

type Props = {
  animationParams?: Animated.TimingAnimationConfig;
  style?: StyleProp<ViewStyle>;
};

const SlideAnimationView: FunctionComponent<Props> = ({animationParams, style, children}) => {
  //#region States and variables
  const slideAnimationInitValue = useRef(new Animated.Value(-100)).current;
  //#endregion

  //#region Functions
  const startAnimation = () => {
    Animated.spring(slideAnimationInitValue,
      {
        ...animationParams,
        useNativeDriver: true,
        toValue: 0,
      },
    ).start();
  };
  //#endregion
  useEffect(() => {
    startAnimation();
  });

  return(
    <Animated.View style={[{transform: [{translateX: slideAnimationInitValue}]}, style]}>
      {children}
    </Animated.View>
  );
};

export default SlideAnimationView;