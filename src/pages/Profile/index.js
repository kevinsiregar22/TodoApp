import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Profile = ({navigation}) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={openDrawer}>
        <Text>Open</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
