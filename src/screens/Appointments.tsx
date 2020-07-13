import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import PagePureContainer from '../components/PageContainer';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { OXFORD_BLUE_COLOR, RED_COLOR, DIM_WHITE_COLOR } from '../constants/constants';
import { Card } from 'react-native-elements';

type Props = {
  navigation: DrawerNavigationProp<ParamListBase, 'Appointments'>;
};

const Appointments: FunctionComponent<Props> = ({navigation, ...rest}) => {
  return(
      <PagePureContainer style={{flex: 10, backgroundColor: OXFORD_BLUE_COLOR}} showHeader={true} headerTitle='Lady Bird' drawerNavigation={navigation}>
          <View style={{flex: 1}}>
            <Card>
              
            </Card>
          </View>
      </PagePureContainer>
  );
};


export default Appointments;