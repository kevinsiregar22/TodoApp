import React from 'react';
import {Text} from 'react-native';

const Poppins = ({
  type = 'Regular',
  children,
  color,
  size,
  textAlign,
  style, // Mengambil properti style
  ...props
}) => {
  const combinedStyle = {
    fontFamily: `Poppins-${type}`,
    color: color,
    fontSize: size,
    textAlign: textAlign,
    ...style, // Menggabungkan dengan gaya yang diteruskan (jika ada properti yang sama, gaya ini akan menimpa yang lain)
  };

  return (
    <Text style={combinedStyle} {...props}>
      {children}
    </Text>
  );
};

export default Poppins;
