import {Text, View} from 'react-native';
import React from 'react';
import signUpStyles from '../utils/styles/signUpStyles';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
  return (
    <View style={signUpStyles.screen}>
      <Text style={signUpStyles.titleForm}>SignUp</Text>
      <SignUpForm />
    </View>
  );
};

export default SignUp;
