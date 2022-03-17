'use strict';
import {StyleSheet} from 'react-native';
import colors from '../colors';

module.exports = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
  },
  form: {},
  field: {
    marginVertical: 8,
  },
  labelForm: {
    fontSize: 17,
    marginBottom: 5,
  },
  inputForm: {
    borderColor: colors.GRAY,
    borderWidth: 1,
    height: 40,
  },
  titleForm: {
    color: colors.PRIMARY_COLOR,
    fontSize: 25,
    marginVertical: 20,
    fontFamily: 'Barlow-SemiBold',
  },
  textTerms: {
    textDecorationLine: 'underline',
  },
  checkbox: {
    marginVertical: 5,
  },
  iconCheckBox: {
    borderRadius: 0,
    borderColor: 'black',
    borderWidth: 0.5,
    height: 20,
    width: 20,
    marginRight: 15,
  },
  buttonContainer: {
    margin: 10,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  disableButton: {
    backgroundColor: colors.GRAY
  },
  pressedButton: {
    backgroundColor: colors.PRIMARY_COLOR_DARK
  },
  unPressedButton: {
    backgroundColor: colors.PRIMARY_COLOR
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Barlow-SemiBold',
  },
  iconButton: {
    marginRight: 10,
    color: 'white',
  },
  textLogin: {
    alignSelf: 'center',
    marginTop: 15,
  },
});
