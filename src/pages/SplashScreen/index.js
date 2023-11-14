import {StyleSheet, View, Image, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import {Color} from '../../utils';
import {ILogo, IsplashTodos} from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import {Poppins} from '../../components';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          const userPerson = JSON.parse(userData); // Parse JSON
          console.log('Data pengguna login', userPerson);
          //  melakukan navigasi ke layar Home karena pengguna sudah login
          navigation.navigate('Home');
        } else {
          navigation.navigate('SignIn');
          console.log('tidak ada res');
        }
      } catch (error) {
        console.log('err', error);
      }
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground source={IsplashTodos} style={styles.container}>
      {/* <Image source={ILogo} />
      <Poppins type="Bold" color={Color.DARK} size={24}>
        Food Delivery
      </Poppins> */}
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
