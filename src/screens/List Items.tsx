import React, { FunctionComponent } from 'react';
import {Text, View} from 'react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';

interface Props{
  navigation: RouteProp<ParamListBase, 'List Items'>;
}

const ListItems: FunctionComponent<Props> = () => {
  return(
    <View>
      <Text>List items</Text>
    </View>
  );
};

export default ListItems;