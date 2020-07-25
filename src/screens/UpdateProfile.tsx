import React, { FunctionComponent, useState } from 'react';
import { Form, Text, Item, Label, Input, Button } from 'native-base';
import { SECONDARY_COLOR } from '../constants/constants';
import { IAuthContext } from '../security/UserLogin';
import { updateUserProfile } from '../api/AuthenticationApi';

type Props = {
  context: IAuthContext;
};

const UpdateProfile: FunctionComponent<Props> = ({context}) => {
  //#region States and variable declarations
  const [firstName, setFirstName] = useState('' as string);
  const [lastName, setLastName] = useState('' as string);
  //#endregion
  return(
          <Form style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Update Profile</Text>
              <Item floatingLabel bordered>
                <Label>First Name</Label>
                <Input
                  autoCompleteType='name'
                  autoCapitalize='words'
                  value={firstName}
                  onChangeText={(text) => {setFirstName(text); }}
                />
              </Item>
              <Item floatingLabel bordered>
                <Label>Last Name</Label>
                <Input
                  autoCompleteType='name'
                  autoCapitalize='words'
                  value={lastName}
                  onChangeText={(text) => setLastName(text)}
                />
              </Item>
              <Button
                style={{margin: 30, justifyContent: 'center', backgroundColor: SECONDARY_COLOR}}
                onPress={() => {
                  updateUserProfile(context.dispatch, `${firstName} ${lastName}`);
                }}
              >
                <Text>Update Profile</Text>
              </Button>
          </Form>
  );
};

export default UpdateProfile;