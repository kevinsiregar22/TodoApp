import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../../utils';
import Poppins from '../Poppins';

const Input = ({
  label,
  style,
  value,
  onChangeText,
  onFocus,
  password,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const onFocusForm = () => {
    setIsFocus(true);
  };

  const onBlurForm = () => {
    setIsFocus(false);
  };

  const onShowPass = () => {
    // setShowPass(showPass);
  };

  return (
    <View style={styles.container}>
      <Poppins type="Bold" style={styles.label}>
        {label}
      </Poppins>
      <View
        style={[
          styles.inputContainer,
          {borderColor: isFocus ? Color.ORANGE : Color.DARK},
        ]}>
        <TextInput
          style={[styles.input]}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocusForm}
          onBlur={onBlurForm}
          {...props}
          placeholderTextColor={Color.DARK}
          secureTextEntry={showPass}
        />

        {password && (
          <TouchableOpacity style={styles.show} onPress={onShowPass}>
            <Poppins type="Regular" size={14} style={styles.show}>
              Show
            </Poppins>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 7,
  },
  inputContainer: {
    height: 57,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderColor: Color.ORANGE,
    flexDirection: 'row',
  },
  input: {
    color: Color.DARK,
    flex: 1,
  },
  show: {
    color: Color.DARK,
  },
});

export default Input;
