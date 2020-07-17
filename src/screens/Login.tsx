import React, { FunctionComponent, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { AuthContext } from '../security/UserLogin';
import { loginUser } from '../api/AuthenticationApi';

type Props = {};

const Login: FunctionComponent<Props> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {dispatch} = React.useContext(AuthContext);

  useEffect(() => {
  });

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login</Text>
      <Input
        placeholder='Enter e-mail'
        value={email}
        onChangeText={(e) => setEmail(e)}
      />
      <Input
        placeholder='Password'
        value={password}
        secureTextEntry={true}
        onChangeText={(e) => setPassword(e)}
      />

      <Button
        title='Login'
        type='outline'
        loading={false}
        onPress={() => loginUser(email, password, dispatch)}
      />
    </View>
  );
};

export default Login;