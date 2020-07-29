import React, { FunctionComponent, useState, useEffect } from 'react';
import { AuthContext } from '../security/UserLogin';
import { loginWithPhoneNumber, confirmPhoneNumberAuthCode } from '../api/AuthenticationApi';
import { Container, Header, Form, Item, Label, Input, Text, Button, Body, Title, Toast, Root } from 'native-base';
import { SECONDARY_COLOR, FontFamily } from '../constants/constants';
import FadeAnimationView from '../animations/FadeAnimationView';
import LoadingPage from './LoadingPage';
import { Overlay } from 'react-native-elements';
import { auth } from '../config/FirebaseConfig';
import { StyleSheet } from 'react-native';
type Props = {};

const Login: FunctionComponent<Props> = () => {
  //#region states and variable declarations
  const [phoneNumber, setPhoneNumber] = useState('');
  const [authCode, setAuthCode] = useState('');
  const {dispatch} = React.useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [loginState, setLoginState] = useState('request');
  const [confirmationResult, setConfirmationResult] = useState(null as any);
  //#endregion

  useEffect(() => {
    auth().onAuthStateChanged((userObject) => {
      if (userObject !== null) {
        console.log(`LOGIN: AUTH CHANGE: ${JSON.stringify(userObject)}`);
        dispatch({type: 'LOGIN', payload: userObject});
      }
    });
  }, [auth().currentUser]);

  //#region Component functions
  const handleUnsuccessfulLogin = (error: any) => {
    setLoading(false);
    let errorMessage = 'Some error occured. Try again Later';
    switch (error.code){
      case 'auth/session-expired': errorMessage = 'Session expired. Request for code again.'; break;
      case 'auth/too-many-requests': errorMessage = 'Login limit exceeded. Kindly try after some time'; break;
    }
    setConfirmationResult(null);
    setLoginState('request');

    console.log('LOGIN: CATCH RECEIVED');
    Toast.show({
      text: errorMessage,
      textStyle: Style.text,
      buttonText: 'Okay',
      position: 'bottom',
      type: 'danger',
    });
  };

  const validatePhoneNumber = (number: string) => {
    let validity = true;
    if (number.length < 10) {
      Toast.show({
        text: 'Please enter a valid mobile number',
        textStyle: Style.text,
        buttonText: 'Okay',
        position: 'bottom',
        type: 'danger',
      });

      validity = false;
    }
    return validity;
  };
  //#endregion

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
            <Header style={{backgroundColor: SECONDARY_COLOR}} androidStatusBarColor={SECONDARY_COLOR}>
              <Body style={{flex: 1, alignItems: 'center'}}>
                <Title style={Style.text}>Login</Title>
              </Body>
            </Header>
            <Container style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Form style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={Style.text}>Login</Text>
                <Item floatingLabel bordered>
                  <Label style={Style.text}>Mobile Number</Label>
                  <Input
                    autoCompleteType='tel'
                    autoCapitalize='none'
                    keyboardType='number-pad'
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    maxLength={10}
                    disabled={loginState === 'request' ? false : true}
                  />
                </Item>
                { loginState === 'confirm' &&
                  <Item floatingLabel bordered>
                    <Label style={Style.text}>Login Code</Label>
                    <Input
                      autoCompleteType='off'
                      autoCapitalize='none'
                      secureTextEntry={true}
                      value={authCode}
                      maxLength={6}
                      onChangeText={(text) => setAuthCode(text)}
                    />
                  </Item>
                }
                <Button
                  style={{margin: 30, justifyContent: 'center', backgroundColor: SECONDARY_COLOR}}
                  onPress={() => {
                    setLoading(true);
                    if (loginState === 'request') {
                      console.log(phoneNumber);
                      if (validatePhoneNumber(phoneNumber)) {
                        loginWithPhoneNumber('+91' + phoneNumber, handleUnsuccessfulLogin)
                        .then((confirmation) => {
                          console.log(`LOGIN PAGE: CONFIRMATION RECEVIED`);
                          setLoginState('confirm');
                          setConfirmationResult(confirmation);
                        })
                        .catch(e => {
                          console.log('loginWithPhoneNumber: ', e);
                        });
                        setLoading(false);
                      }
                    }else {
                      try {
                        console.log(authCode);
                        confirmPhoneNumberAuthCode(confirmationResult, authCode, dispatch, handleUnsuccessfulLogin);
                      }catch (e) {
                        console.log('confirmPhoneNumberAuthCode: ', e);
                      }
                    }
                  }}
                >
                  <Text style={Style.text}>{loginState === 'request' ? 'Request Code' : 'Confirm Code'}</Text>
                </Button>
              </Form>
            </Container>
          </Container>
        </Root>
      </FadeAnimationView>
    </>
  );
};

const Style = StyleSheet.create({
  text: {
    fontFamily: FontFamily,
  },
});
export default Login;