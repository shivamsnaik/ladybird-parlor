import React, { FunctionComponent, useState, useEffect } from 'react';
import { AuthContext } from '../security/UserLogin';
import { loginUser } from '../api/AuthenticationApi';
import { Container, Header, Form, Item, Label, Input, Text, Button, Body, Title, Toast, Root } from 'native-base';
import { OXFORD_BLUE_COLOR } from '../constants/constants';
import FadeAnimationView from '../animations/FadeAnimationView';
import LoadingPage from './LoadingPage';
import { Overlay } from 'react-native-elements';
type Props = {};

const Login: FunctionComponent<Props> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {dispatch} = React.useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {

  });

  const handleUnsuccessfulLogin = (error: any) => {
    setLoading(false);
    let errorMessage = 'Some error occured. Try again Later';
    switch (error.code){
      case 'auth/invalid-email': errorMessage = 'Invalid Email address entered'; break;
      case 'auth/user-disabled': errorMessage = 'The entered email has been disabled. Contact Admin'; break;
      case 'auth/user-not-found': errorMessage = 'User is not found in the server'; break;
      case 'auth/wrong-password': errorMessage = 'You entered a wrong password'; break;
    }
    console.log('LOGIN: CATCH RECEIVED');
    Toast.show({
      text: errorMessage,
      buttonText: 'Okay',
      position: 'bottom',
      type: 'danger',
    });
  };

  return(
    <>
      {
      loading &&
      <Overlay isVisible={loading} fullScreen>
        <LoadingPage />
      </Overlay>
      }
      <FadeAnimationView animationParams={{duration: 100, toValue: 1, useNativeDriver: true}} style={{zIndex: 1, flex: 1}}>
        <Root>
          <Container>
            <Header androidStatusBarColor={OXFORD_BLUE_COLOR} style={{backgroundColor: OXFORD_BLUE_COLOR}}>
              <Body style={{flex: 1, alignItems: 'center'}}>
                <Title>Login</Title>
              </Body>
            </Header>
            <Container style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Form style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Login</Text>
                <Item floatingLabel bordered>
                  <Label>Username</Label>
                  <Input
                    autoCompleteType='email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    onChangeText={(text) => setEmail(text)}
                  />
                </Item>
                <Item floatingLabel bordered >
                  <Label>Password</Label>
                  <Input
                    autoCompleteType='password'
                    autoCapitalize='none'
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                  />
                </Item>
                <Button
                  style={{margin: 30, justifyContent: 'center', backgroundColor: OXFORD_BLUE_COLOR}}
                  onPress={() => {
                    console.log(email + password);
                    if (email.length === 0 || password.length === 0) {
                      Toast.show({
                        text: 'Please enter a valid email and password',
                        buttonText: 'Okay',
                        position: 'bottom',
                        type: 'danger',
                      });
                      return;
                    }
                    setLoading(true);
                    loginUser(email, password, dispatch, handleUnsuccessfulLogin);
                  }}
                >
                  <Text>Login</Text>
                </Button>
              </Form>
            </Container>
          </Container>
        </Root>
      </FadeAnimationView>
    </>
  );
};

export default Login;