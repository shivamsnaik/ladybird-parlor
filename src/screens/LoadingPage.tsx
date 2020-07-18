import React, { FunctionComponent } from 'react';
import {Text} from 'react-native';
import { DIM_WHITE_COLOR, OXFORD_BLUE_COLOR } from '../constants/constants';
import ShrinkAnimationView from '../animations/ShrinkAnimationView';

type Props = {
};

const LoadingPage: FunctionComponent<Props> = () => {

  return(
    <ShrinkAnimationView>
      <Text style={{color: DIM_WHITE_COLOR, fontSize: 50}}>Page Loading</Text>
    </ShrinkAnimationView>
  );
};

export default LoadingPage;