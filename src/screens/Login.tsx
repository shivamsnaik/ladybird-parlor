import React, { FunctionComponent, useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../security/UserLogin';

type Props = {};

const Login: FunctionComponent<Props> = () => {
  const [email, setEmail] = useState('');
  const {dispatch} = React.useContext(AuthContext);
  const [password, setPassword] = useState('');

  const loginUser = (username: string, pwd: string) => {
    auth()
    .signInWithEmailAndPassword(username, pwd)
    .then((response) => {
      console.log(`User ${response.user.email} logged in`);
      dispatch({type: 'LOGIN', payload: response.user});
    })
    .catch((error) => {
      console.log(error.code);
      // setUser(null);
    });
  };

  const logoutUser = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User logged out');
      });
  };

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
        onPress={() => loginUser(email, password)}
      />
    </View>
  );
};

export default Login;