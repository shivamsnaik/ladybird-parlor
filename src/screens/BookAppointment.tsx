import React, { FunctionComponent, useEffect, useState } from 'react';
import { View, Text } from 'native-base';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase, RouteProp } from '@react-navigation/native';

type Props = {
  serviceName: string;
  seviceCost: number;
  navigation: DrawerNavigationProp<ParamListBase, 'Home'>;
  route: any;
};

const BookAppointment: FunctionComponent<Props> = ({navigation, route, ...props}) => {

  //#region States and declarations
  const [serviceDetails, setServiceDetails] = useState(route.params);
  //#endregion

  useEffect(() => {
  });
  return(
    <>
      {console.log(serviceDetails)}
      <View>
        <Text>
          {serviceDetails.name}
        </Text>
        <Text>
          {serviceDetails.price}
        </Text>
      </View>
    </>
  );
};

export default BookAppointment;