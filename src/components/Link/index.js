import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Poppins from '../Poppins';

const Link = ({label, color, type, align, onPress}) => {
  return (
    <View style={{alignItems: align}}>
      <TouchableOpacity onPress={onPress}>
        <Poppins type={type} color={color}>
          {label}
        </Poppins>
      </TouchableOpacity>
    </View>
  );
};

export default Link;
