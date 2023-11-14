import {StyleSheet, Image, View, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Input, Link, Gap, Poppins, ButtonCus} from '../../components';
import {ILogo, Igoogle} from '../../assets';
import {Color} from '../../utils';
// import {useNavigation} from '@react-navigation/native';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigation = useNavigation();

  console.log('email', email);
  console.log('password', password);

  const OnLogin = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('userData');
      console.log('user userDataString login', userDataString);

      if (userDataString) {
        const userPerson = JSON.parse(userDataString);
        console.log('user Data login', userPerson);
        if (userPerson.email === email && userPerson.password === password) {
          Alert.alert('Berhasil', 'Login sukses!');
          await AsyncStorage.setItem('isLogged', 'true');

          navigation.navigate('Home');
        } else {
          Alert.alert('Kesalahan', 'Nama pengguna atau kata sandi salah');
        }
      } else {
        Alert.alert('Kesalahan', 'Pengguna tidak terdaftar');
      }
    } catch (error) {
      Alert.alert('Kesalahan', error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.containerImage}>
          <Image source={ILogo} style={styles.image} />
        </View>

        <Poppins size={18} type="Bold" textAlign="center">
          Sign in food delivery now
        </Poppins>

        <Gap height={40} />
        <Input
          placeholder={'Masukkan email anda'}
          label={'Email'}
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Gap height={20} />
        <Input
          placeholder={'Password'}
          label={'Password'}
          value={password}
          onChangeText={value => setPassword(value)}
          password
        />
        <Gap height={20} />
        <Link label={'Forgot password'} color={Color.RED} type={'Bold'} />
        <Gap height={20} />
        <ButtonCus title={'Log In'} onPress={OnLogin} />
        <Gap height={10} />
        <ButtonCus
          title={'Log In with google'}
          icon={Igoogle}
          bgColor={Color.WHITE}
          onPress={() => console.log('with google')}
        />
        <Gap height={40} />
        <View style={styles.haveAccount}>
          <Poppins type="Medium" color={Color.DARK}>
            Have an account ?
          </Poppins>
          <Link
            label={' Sign up here'}
            color={Color.RED}
            type={'Medium'}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Color.BLUESOFT,
    // backgroundColor: Color.ORANGE,
  },
  wrap: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  containerImage: {
    alignItems: 'center',
  },
  image: {
    height: 85,
    width: 90,
    marginTop: 20,
    marginBottom: 10,
    resizeMode: 'contain',
    // backgroundColor: Color.ORANGE,
  },
  poppin: {
    alignItems: 'center',
  },
  haveAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
