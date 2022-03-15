import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {useField} from 'formik';

const InputField = ({label, ...props}) => {
  const [field, meta, helpers] = useField(props);
  return (
    <View style={styles.field}>
      <Text style={styles.labelForm}>{label}</Text>
      <TextInput
        {...props}
        value={field.value}
        onBlur={() => helpers.setTouched(!meta.touched)}
        onChangeText={helpers.setValue}
        style={styles.inputForm}
      />
      {meta.error && meta.touched && (
        <Text style={{color: 'red'}}>{meta.error}</Text>
      )}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  field: {marginVertical: 12},
  labelForm: {
    fontSize: 17,
    marginBottom: 5,
  },
  inputForm: {borderColor: 'gray', borderWidth: 1, height: 50},
});
