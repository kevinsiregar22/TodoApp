import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Setting = ({navigation}) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View>
      <Text>Setting</Text>
      <TouchableOpacity onPress={openDrawer}>
        <Text>Open Testing</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
