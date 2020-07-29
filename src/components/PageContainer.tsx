import React, { FunctionComponent, ReactChild, useEffect } from 'react';
import { ViewStyle, StyleProp, StatusBar, StyleSheet } from 'react-native';
import { MAIN_COLOR, SECONDARY_COLOR, TEXT_COLOR, ICON_COLOR, ICON_COLOR_INVERSE, TITLE_FONT_SIZE, FontFamily } from '../constants/constants';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import { AuthContext } from '../security/UserLogin';
import { logoutUser } from '../api/AuthenticationApi';
import { Container, Header, Left, Button, Icon, Title, Body, Right, Text, View } from 'native-base';
type Props = {
  headerTitle: string;
  children?: ReactChild;
  drawerNavigation?: DrawerNavigationProp<ParamListBase>;
  style?: StyleProp<ViewStyle>;
};

const PageContainer: FunctionComponent<Props> = ({headerTitle='Header', children, style, drawerNavigation}) => {
  useEffect(() => {}, []);
  const {dispatch} = React.useContext(AuthContext);

  return(
    <Container style={[style]}>
      <Header androidStatusBarColor={MAIN_COLOR} style={{backgroundColor: MAIN_COLOR}}>
        <StatusBar barStyle='dark-content' backgroundColor={MAIN_COLOR}/>
        <Left>
          <Button style={{backgroundColor: SECONDARY_COLOR, borderRadius: 10}} transparent onPress={() => drawerNavigation?.toggleDrawer()}>
            <Icon name='menu' type='Entypo' style={{color: ICON_COLOR}}/>
          </Button>
        </Left>
        <Body>
          <Title style={[Style.text]}>{headerTitle}</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => {console.log('LOGOUT PRESSED'); logoutUser(dispatch); }}>
            <Text style={[Style.text, {fontSize: 15, marginRight: 2}]}>Logout</Text>
            <Icon name='chevron-circle-right' type='FontAwesome5' style={{fontSize: 20 , color: ICON_COLOR_INVERSE}}/>
          </Button>
        </Right>
      </Header>
      <View style={{flex: 1}}>
        {children}
      </View>
    </Container>
  );
};

const Style = StyleSheet.create({
  text: {
    color: TEXT_COLOR,
    fontSize: TITLE_FONT_SIZE,
    fontFamily: FontFamily,
    textTransform: 'capitalize',
  },
});

PageContainer.defaultProps = {
};

const PagePureContainer = React.memo(PageContainer);
export default PagePureContainer;