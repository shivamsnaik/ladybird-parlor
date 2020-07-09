import React, { FunctionComponent } from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
};

const Header: FunctionComponent<Props> = ({title, style, textStyle, ...prop}) => {
  return(
    <View style={[{alignItems: 'center', justifyContent: 'center'}, style]}>
      <Text style={textStyle}>
        {title}
      </Text>
    </View>
  );
};

export default Header;