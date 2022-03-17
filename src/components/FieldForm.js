import {Text, View, TextInput} from 'react-native';
import React from 'react';
import signUpStyles from '../utils/styles/signUpStyles';
import {useField} from 'formik';
const FieldForm = ({label, ...props}) => {
  const [field, meta, helpers] = useField(props);
  return (
    <View style={signUpStyles.field}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={signUpStyles.labelForm}>{label}</Text>
        {meta.error && meta.touched && (
          <Text style={{color: 'red', marginLeft: 5}}>{meta.error}</Text>
        )}
      </View>
      <TextInput
        {...props}
        value={field.value}
        onBlur={() => helpers.setTouched(!meta.touched)}
        onChangeText={helpers.setValue}
        style={signUpStyles.inputForm}
      />
      {label == 'Password*' && (
        <Text style={{fontSize: 14}}>
          Use 8 or more characters with a mix letters, numbers and symbols.
        </Text>
      )}
    </View>
  );
};

export default FieldForm;
