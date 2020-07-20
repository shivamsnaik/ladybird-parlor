import React, { FunctionComponent } from 'react';
import { ScrollView, ScrollViewProps, View, Platform, Dimensions } from 'react-native';

type Props= {
}

const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 100;

export const Carousel: FunctionComponent<Props | ScrollViewProps | View> = ({children, ...props}) => {
  return(
    <ScrollView
      horizontal
      pagingEnabled
      decelerationRate={0.8}
      snapToAlignment='center'
      contentContainerStyle={{
        paddingLeft: 10,
        paddingRight: 10,
      }}
      {...props}
    >
      {children}
    </ScrollView>
  );
};
