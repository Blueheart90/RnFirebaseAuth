import {Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import signUpStyles from '../utils/styles/signUpStyles';
import colors from '../utils/colors';
import {useField} from 'formik';

const TermsAndConditions = ({...props}) => {
  const [field, meta, helpers] = useField(props);
  const [checkboxState, setCheckboxState] = useState(true);
  useEffect(() => {
    helpers.setValue(checkboxState);
  }, [checkboxState])
  return (
    <View>
      <BouncyCheckbox
        style={signUpStyles.checkbox}
        iconStyle={signUpStyles.iconCheckBox}
        fillColor={colors.PRIMARY_COLOR}
        isChecked={checkboxState}
        onPress={() => {
          setCheckboxState(!checkboxState);
          helpers.setTouched(true);
        }}
        textComponent={
          <Text>
            I agree to the
            <Text style={signUpStyles.textTerms}>Terms</Text> and
            <Text style={signUpStyles.textTerms}> Privacy Policy</Text>
          </Text>
        }
      />
      <BouncyCheckbox
        style={signUpStyles.checkbox}
        iconStyle={signUpStyles.iconCheckBox}
        fillColor={colors.PRIMARY_COLOR}
        textComponent={<Text>Subscribe for select produtc updates.</Text>}
      />
      {meta.error && meta.touched && (
        <Text style={{color: 'red'}}>{meta.error}</Text>
      )}
    </View>
  );
};

export default TermsAndConditions;
