import React, { FunctionComponent, ReactChild } from 'react';
import {View} from 'react-native';
import Header from './Header';
import { HINT_OF_READ_COLOR, OXFORD_BLUE_COLOR } from '../constants/constants';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

type Props = {
  showHeader?: boolean;
  headerTitle?: string;
  children?: ReactChild;
  drawerNavigation?: DrawerNavigationProp<ParamListBase>
};

const PageContainer: FunctionComponent<Props> = ({showHeader, headerTitle='Default Title', children, drawerNavigation, ...prop}) => {
  return(
    <>
      {showHeader &&
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flex: 1, backgroundColor: HINT_OF_READ_COLOR, justifyContent: 'center'}}>
            <Icon
              name='ellipsis-horizontal-outline'
              type='ionicon'
              size={35}
              color='black'
              onPress={() => drawerNavigation?.openDrawer()}
            />
          </View>
          <Header
            title={headerTitle}
            style={{backgroundColor: HINT_OF_READ_COLOR, flex: 5, alignItems: 'flex-start'}}
            textStyle={{color: OXFORD_BLUE_COLOR, fontSize: 20, fontWeight: 'bold'}}
          />
        </View>
      }
      <View style={{backgroundColor: OXFORD_BLUE_COLOR, flex: 15}}>
        {children}
      </View>
    </>
  );
};

PageContainer.defaultProps = {
};

export default PageContainer;