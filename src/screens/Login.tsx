import React, { FunctionComponent, useState, useEffect } from 'react';
import { AuthContext } from '../security/UserLogin';
import { loginUser } from '../api/AuthenticationApi';
import { Container, Header, Form, Item, Label, Input, Text, Button, Body, Title, Toast, Root } from 'native-base';

type Props = {};

const Login: FunctionComponent<Props> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {dispatch} = React.useContext(AuthContext);

  useEffect(() => {

  });

  return(
    <Root>
      <Container>
        <Header>
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
              style={{margin: 30, justifyContent: 'center'}}
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
                loginUser(email, password, dispatch)
                .catch((e) => {
                  console.log('LOGIN: CATCH RECEIVED');
                  Toast.show({
                    text: 'Wrong password!',
                    buttonText: 'Okay',
                    position: 'bottom',
                    type: 'danger',
                  });
                });
              }}
            >
              <Text>Login</Text>
            </Button>
          </Form>
        </Container>
      </Container>
    </Root>
  );
};

export default Login;