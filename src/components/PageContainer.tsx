import React, { FunctionComponent, ReactChild, useEffect } from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { OXFORD_BLUE_COLOR, DIM_WHITE_COLOR } from '../constants/constants';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import { AuthContext } from '../security/UserLogin';
import { logoutUser } from '../api/AuthenticationApi';
import { Container, Header, Left, Button, Icon, Title, Body, Right, Text } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
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
      <Header androidStatusBarColor={OXFORD_BLUE_COLOR} style={{backgroundColor: OXFORD_BLUE_COLOR}}>
        <Left>
          <Button transparent onPress={() => drawerNavigation?.toggleDrawer()}>
            <Icon name='menu'/>
          </Button>
        </Left>
        <Body>
          <Title>{headerTitle}</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => {console.log('LOGOUT PRESSED'); logoutUser(dispatch); }}>
            <Text style={{color: DIM_WHITE_COLOR, textTransform: 'lowercase'}}>Logout</Text>
            <Icon name='arrow-forward-circle'/>
          </Button>
        </Right>
      </Header>
      <ScrollView>
        {children}
      </ScrollView>
    </Container>
  );
};

PageContainer.defaultProps = {
};

const PagePureContainer = React.memo(PageContainer);
export default PagePureContainer;