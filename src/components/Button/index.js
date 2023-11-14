import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import Poppins from '../Poppins';
import {Color} from '../../utils';

const ButtonCus = ({title, bgColor, icon, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, bgColor && {backgroundColor: bgColor}]}
      onPress={onPress}>
      {icon && <Image source={icon} style={styles.icon} />}
      <Poppins type="Bold" style={styles.text}>
        {title}
      </Poppins>
    </TouchableOpacity>
  );
};

export default ButtonCus;

const styles = StyleSheet.create({
  container: {
    height: 57,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: Color.ORANGE, //
  },
  text: {
    color: Color.DARK,
    marginLeft: 10, // Jarak antara icon dan teks jika ada icon
  },
  icon: {
    width: 24, // atau ukuran yang Anda inginkan
    height: 24, // atau ukuran yang Anda inginkan
    marginRight: 10, // untuk memberikan jarak antara ikon dan teks
  },
});
