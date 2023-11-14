import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Color} from '../../utils';
import {Poppins} from '../../components';

const Home = ({navigation}) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const getData = async () => {
    try {
      const dataPerson = await AsyncStorage.getItem('userData');
      console.log('data luar', dataPerson);
      if (dataPerson) {
        const dataParse = JSON.parse(dataPerson);
        setDatas(dataParse);
        console.log('data parse dalam', dataParse);
      }
    } catch (error) {
      console.log('err', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.setItem('isLogged', 'false'); // Set status login ke false
      // await AsyncStorage.removeItem('userData'); // Set status login ke false
      navigation.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      });
    } catch (error) {
      console.error('Terjadi kesalahan saat logout:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Poppins size={30}>Home</Poppins>
      <Poppins size={30}>{datas.email}</Poppins>
      <Poppins size={30}>{datas.fullname}</Poppins>
      <Poppins size={30}>{datas.nohp}</Poppins>
      <TouchableOpacity onPress={logout}>
        <Poppins size={40} type="Bold">
          LogOut
        </Poppins>
      </TouchableOpacity>
      <TouchableOpacity onPress={openDrawer}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BLUESOFT,
    // backgroundColor: Color.ORANGE,
  },
});
