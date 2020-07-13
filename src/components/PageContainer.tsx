import React, { FunctionComponent, ReactChild, useEffect } from 'react';
import {View, SafeAreaView, StyleProp, ViewStyle, ViewProps} from 'react-native';
import Header from './Header';
import { HINT_OF_READ_COLOR, OXFORD_BLUE_COLOR } from '../constants/constants';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {
  showHeader?: boolean;
  headerTitle?: string;
  children?: ReactChild;
  drawerNavigation?: DrawerNavigationProp<ParamListBase>;
  style?: ViewStyle;
};

const PageContainer: FunctionComponent<Props> = ({showHeader, headerTitle='Default Title', children, drawerNavigation, ...prop}) => {
  useEffect(() => {}, []);

  return(
    <SafeAreaView style={[{marginBottom: 0}, prop.style]}>
      {showHeader &&
        <View style={[{minHeight: 50, flexDirection: 'row', justifyContent: 'space-between'}]}>
          <View style={{flex: 1, justifyContent: 'center', backgroundColor: OXFORD_BLUE_COLOR}}>
            <Icon
              name='ellipsis-horizontal-outline'
              type='ionicon'
              size={35}
              color='white'
              onPress={() => drawerNavigation?.openDrawer()}
            />
          </View>
          <Header
            title={headerTitle}
            style={{backgroundColor: OXFORD_BLUE_COLOR, flex: 5, alignItems: 'flex-start'}}
            textStyle={{color: HINT_OF_READ_COLOR, fontSize: 20, fontWeight: 'bold'}}
          />
        </View>
      }
        <ScrollView>
          <View style={{backgroundColor: OXFORD_BLUE_COLOR}}>
            <>
              {children}
            </>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
};

PageContainer.defaultProps = {
};

const PagePureContainer = React.memo(PageContainer);
export default PagePureContainer;