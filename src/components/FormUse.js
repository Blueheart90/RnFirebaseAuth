import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as Yup from 'yup';
import InputField from './InputField';
import {authentication} from '../utils/firebase/firebase-config';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
  terms: Yup.boolean().oneOf([false], 'Debes aceptar los terminos'),
});

const FormUse = () => {
  const [checkboxState, setCheckboxState] = useState(false);
  const [isSignedIn, setisSignedIn] = useState(false);

  const registerUser = values => {
    console.log(values);
    createUserWithEmailAndPassword(
      authentication,
      values.email,
      values.password,
    )
      .then(re => {
        console.log(re);
        setisSignedIn(true);
      })
      .catch(re => {
        console.log(re);
      });
  };
  return (
    <Formik
      initialValues={{firstName: '', email: '', password: '', terms: false}}
      validateOnMount={true}
      validationSchema={SignupSchema}
      onSubmit={values => registerUser(values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        isValid,
        errors,
        setFieldTouched,
        setFieldValue,
      }) => (
        <>
          <InputField name={'firstName'} label={'First Name83'} />
          <InputField name={'email'} label={'Email83'} />
          <InputField
            name={'password'}
            label={'Password*'}
            secureTextEntry={true}
          />

          <BouncyCheckbox
            iconStyle={{
              borderRadius: 0,
              borderColor: 'black',
              borderWidth: 0.5,
              height: 20,
              width: 20,
            }}
            isChecked={checkboxState}
            textStyle={{
              textDecorationLine: 'none',
            }}
            fillColor={'blue'}
            text="Terminos y condiciones"
            onPress={() => {
              setFieldTouched('terms', true);
              setCheckboxState(!checkboxState);
              setFieldValue('terms', checkboxState);
            }}
          />
          {errors.terms && touched.terms && (
            <Text style={{color: 'red'}}>{errors.terms}</Text>
          )}

          <Pressable onPress={handleSubmit}>
            <Text>Enviar</Text>
          </Pressable>
        </>
      )}
    </Formik>
  );
};

export default FormUse;

const styles = StyleSheet.create({
  field: {marginVertical: 12},
  labelForm: {
    fontSize: 17,
    marginBottom: 5,
  },
  inputForm: {borderColor: 'gray', borderWidth: 1, height: 50},
});
