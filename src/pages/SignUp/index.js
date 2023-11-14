import {View, SafeAreaView, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import {ButtonCus, Input, Gap, Poppins, Link} from '../../components';
import {Color} from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  nameRegex,
  phoneRegex,
  emailRegex,
  passwordRegex,
} from '../../config/regexConfig';

const SignUp = ({navigation}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullname: '',
    nohp: '',
    confPassword: '',
  });

  const handleOnChange = (inputName, text) => {
    // Menggunakan nama input untuk mengidentifikasi input yang sedang berubah
    setFormData(prevInputValues => ({
      ...prevInputValues,
      [inputName]: text,
    }));
  };

  const onRegister = async () => {
    if (
      !formData.fullname ||
      !formData.email ||
      !formData.nohp ||
      !formData.password ||
      !formData.confPassword
    ) {
      // Jika ada satu atau lebih bidang yang tidak diisi, tampilkan pesan kesalahan
      Alert.alert('Kesalahan', 'Semua bidang harus diisi.');
    } else if (formData.password !== formData.confPassword) {
      // Jika password tidak sesuai dengan confPassword, tampilkan pesan kesalahan
      Alert.alert(
        'Kesalahan',
        'Kata sandi tidak sesuai dengan konfirmasi kata sandi.',
      );
    } else if (!nameRegex.test(formData.fullname)) {
      Alert.alert(
        'Kesalahan',
        'Nama lengkap harus berisi huruf dan spasi saja.',
      );
    } else if (!phoneRegex.test(formData.nohp)) {
      Alert.alert('Kesalahan', 'Nomor handphone hanya boleh berisi angka.');
    } else if (!emailRegex.test(formData.email)) {
      Alert.alert('Kesalahan', 'Alamat email tidak valid.');
    } else if (!passwordRegex.test(formData.password)) {
      Alert.alert(
        'Kesalahan',
        'Kata sandi harus memenuhi kebijakan keamanan tertentu.',
      );
    } else {
      try {
        // Jika password dan confPassword sesuai, simpan data ke AsyncStorage
        await AsyncStorage.setItem('userData', JSON.stringify(formData));

        navigation.navigate('SignIn');
        Alert.alert('Berhasil', 'Registrasi sukses!');
      } catch (error) {
        Alert.alert('Kesalahan', error.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <Input
          placeholder={'Masukkan Nama Lengkap'}
          label={'Nama Lengkap'}
          value={formData.fullname}
          onChangeText={value => handleOnChange('fullname', value)}
        />
        <Gap height={20} />
        <Input
          placeholder={'Masukkan No Hp'}
          label={'No Handphone'}
          value={formData.nohp}
          onChangeText={value => handleOnChange('nohp', value)}
        />
        <Gap height={20} />
        <Input
          placeholder={'Masukkan email anda'}
          label={'Email'}
          value={formData.email}
          onChangeText={value => handleOnChange('email', value)}
        />
        <Gap height={20} />
        <Input
          placeholder={'Password'}
          label={'password'}
          value={formData.password}
          onChangeText={value => handleOnChange('password', value)}
        />
        <Gap height={20} />
        <Input
          placeholder={'Konfirmasi Password'}
          label={'Konfirmasi Password'}
          value={formData.confPassword}
          onChangeText={value => handleOnChange('confPassword', value)}
        />
        <Gap height={20} />
        <ButtonCus title={'Create an account'} onPress={onRegister} />
        <Gap height={20} />
        <View style={styles.haveAccount}>
          <Poppins type="Medium" color={Color.DARK}>
            Heven’t an account ?
          </Poppins>
          <Link
            label={' Sign up here!'}
            color={Color.RED}
            type={'Medium'}
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

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
