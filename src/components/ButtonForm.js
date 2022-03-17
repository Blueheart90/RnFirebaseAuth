import {Text, Pressable, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import signUpStyles from '../utils/styles/signUpStyles';

const ButtonForm = ({content, icon, disabled = false, ...props}) => {
  return (
    <Pressable 
      {...props} 
      disabled={disabled} 
      style={signUpStyles.buttonContainer}>
      {({pressed}) => (      
        <View style={[
          disabled
            ? signUpStyles.disableButton
            : pressed
            ? signUpStyles.pressedButton
            : signUpStyles.unPressedButton,
          signUpStyles.button
          ]}>
          {icon && <Icon style={signUpStyles.iconButton} name={icon} size={20} />}
          <Text style={signUpStyles.buttonText}>{content}</Text>
        </View>
      )}

    </Pressable>
  );
};

export default ButtonForm;
